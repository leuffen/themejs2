<?php

declare(strict_types=1);

namespace Leuffen\ThemeJS2\Development;

use HeadlessChromium\Communication\Connection;
use HeadlessChromium\Communication\Message;
use HeadlessChromium\Communication\Session;
use RuntimeException;

/**
 * Verwendet den vorhandenen Browserless-Chromium über eine eigene CDP-Session.
 */
final class BrowserSession
{
    // CSS-Pixel, DPR 1; Mobilgrößen verwenden zusätzlich Touch-Emulation.
    public const VIEWPORTS = [
        '1440x900' => [1440, 900, false],
        '1280x800' => [1280, 800, false],
        '1024x768' => [1024, 768, true],
        '768x1024' => [768, 1024, true],
        '667x375' => [667, 375, true],
        '393x852' => [393, 852, true],
    ];

    private const STYLE_PROPERTIES = [
        'display', 'position', 'width', 'max-width', 'height', 'min-height',
        'margin', 'padding', 'gap', 'grid-template-columns', 'flex-direction',
        'justify-content', 'align-items', 'font-family', 'font-size', 'font-weight',
        'line-height', 'letter-spacing', 'text-align', 'color', 'background-color',
        'background-image', 'border', 'border-radius', 'box-shadow', 'object-fit',
        'aspect-ratio', 'overflow',
    ];

    private ?Connection $connection = null;
    private ?Session $page = null;
    private ?string $contextId = null;
    private array $console = [];
    private array $stylesheets = [];
    private array $statuses = [];

    /** Die Verbindung wird erst beim ersten Browserzugriff aufgebaut. */
    public function __construct(private readonly string $endpoint)
    {
    }

    /** Lädt eine konfigurierte Seite frisch und wartet auf ihr vollständiges Layout. */
    public function open(string $url, string $viewport): array
    {
        if (!isset(self::VIEWPORTS[$viewport])) {
            throw new RuntimeException('Unknown viewport: ' . $viewport);
        }
        $this->connect();
        [$width, $height, $mobile] = self::VIEWPORTS[$viewport];
        $this->console = $this->stylesheets = $this->statuses = [];
        $this->command('Emulation.setDeviceMetricsOverride', [
            'width' => $width,
            'height' => $height,
            'deviceScaleFactor' => 1,
            'mobile' => $mobile,
        ]);
        $this->command('Emulation.setTouchEmulationEnabled', ['enabled' => $mobile]);
        $navigation = $this->command('Page.navigate', ['url' => $url]);
        if (isset($navigation['errorText'])) {
            throw new RuntimeException('Navigation failed: ' . $url . ': ' . $navigation['errorText']);
        }

        // Die Loader-ID verhindert, dass der vorige Seiteninhalt ausgewertet wird.
        $deadline = microtime(true) + 30;
        do {
            $frame = $this->command('Page.getFrameTree')['frameTree']['frame'];
            if (!isset($navigation['loaderId']) || $frame['loaderId'] === $navigation['loaderId']) {
                $status = $this->statuses[$frame['loaderId']] ?? null;
                if ($status !== null && $status >= 400) {
                    throw new RuntimeException('HTTP ' . $status . ': ' . $url);
                }
                if ($this->evaluate('document.readyState === "complete"') === true) {
                    break;
                }
            }
            usleep(150000);
        } while (microtime(true) < $deadline);
        if (microtime(true) >= $deadline) {
            throw new RuntimeException('Page load timed out: ' . $url);
        }

        // Lazy Loading bis zum Seitenende auslösen, anschließend oben aufnehmen.
        return $this->evaluate(<<<'JS'
(async () => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const height = () => document.scrollingElement.scrollHeight;
    const step = Math.max(200, Math.floor(innerHeight * 0.8));
    let reached = false;
    for (let n = 0; n < 300; n++) {
        scrollTo({top: Math.min(n * step, height()), behavior: 'instant'});
        await sleep(70);
        if (scrollY + innerHeight >= height() - 2) {
            await sleep(350);
            if (scrollY + innerHeight >= height() - 2) {
                reached = true;
                break;
            }
        }
    }
    if (!reached) throw Error('Page did not reach a stable end while scrolling');
    await Promise.race([
        Promise.allSettled([...document.images].map(img => img.decode())),
        sleep(6000)
    ]);
    if (document.fonts) {
        await Promise.race([document.fonts.ready, sleep(6000)]);
        if (document.fonts.status !== 'loaded') throw Error('Fonts did not finish loading');
    }
    scrollTo({top: 0, behavior: 'instant'});
    await sleep(250);
    return {
        url: location.href, width: innerWidth, height: innerHeight,
        dpr: devicePixelRatio, documentHeight: height(),
        failedImages: [...document.images].filter(img => img.complete && !img.naturalWidth).length
    };
})()
JS);
    }

    /** Nimmt die ganze Seite ohne Vergrößerung oder Viewport-Änderung auf. */
    public function screenshot(): string
    {
        $size = $this->command('Page.getLayoutMetrics')['cssContentSize'];
        $width = (int) ceil($size['width']);
        $height = (int) ceil($size['height']);
        if ($width < 1 || $height < 1 || $width > 10000 || $height > 50000 || $width * $height > 80000000) {
            throw new RuntimeException('Full-page screenshot exceeds safe browser dimensions: ' . $width . 'x' . $height);
        }
        $result = $this->command('Page.captureScreenshot', [
            'format' => 'png',
            'fromSurface' => true,
            'captureBeyondViewport' => true,
            'clip' => ['x' => 0, 'y' => 0, 'width' => $width, 'height' => $height, 'scale' => 1],
        ]);
        $bytes = base64_decode($result['data'], true);
        if ($bytes === false || strlen($bytes) > 10000000) {
            throw new RuntimeException('Screenshot is invalid or exceeds 10 MB.');
        }

        return $bytes;
    }

    /** Erfasst repräsentative sichtbare Blöcke und die zugehörigen CSS-Kaskaden. */
    public function referenceStyles(): array
    {
        $properties = json_encode(self::STYLE_PROPERTIES, JSON_THROW_ON_ERROR);
        $groups = [
            'body', 'header', 'nav', 'main', 'section, article, [class*="section"], [class*="hero"]',
            '[class*="container"], [class*="grid"]', 'h1', 'h2, h3', 'p',
            'button, [role="button"], a[class*="btn"]', '[class*="card"]', 'img', 'footer',
        ];
        $selectors = json_encode($groups, JSON_THROW_ON_ERROR);

        // Gleichartige Stile werden pro Viewport nur einmal mit ihren Ankern erfasst.
        $expression = '(() => { const properties = ' . $properties . '; const groups = ' . $selectors . ';' . <<<'JS'
            const entries = [];
            const seen = new Set();
            const signature = new Map();
            for (const selector of groups) {
                let count = 0;
                for (const el of document.querySelectorAll(selector)) {
                    if (seen.has(el)) continue;
                    const rect = el.getBoundingClientRect();
                    if (!rect.width || !rect.height) continue;
                    seen.add(el);
                    const s = getComputedStyle(el);
                    const style = Object.fromEntries(properties.map(p => [p, s.getPropertyValue(p)]));
                    const key = JSON.stringify(style);
                    const anchor = {
                        tag: el.localName, id: el.id, classes: [...el.classList].slice(0, 8),
                        rect: {x: Math.round(rect.x), y: Math.round(rect.y), width: Math.round(rect.width), height: Math.round(rect.height)}
                    };
                    if (signature.has(key)) {
                        const entry = signature.get(key);
                        if (entry.anchors.length < 4) entry.anchors.push(anchor);
                    } else {
                        const entry = {selector, anchors: [anchor], style};
                        signature.set(key, entry);
                        entries.push(entry);
                    }
                    if (++count >= 3 || entries.length >= 28) break;
                }
                if (entries.length >= 28) break;
            }
            return entries;
        })()
JS;
        $computed = $this->evaluate($expression);
        $rules = [];
        foreach (['body', 'header', 'nav', 'section', 'h1', 'h2', 'button', '[class*="card"]', 'footer'] as $selector) {
            $result = $this->inspect($selector, 1, true);
            if ($result !== []) {
                $rules[$selector] = $result[0];
            }
        }

        return ['computedBlocks' => $computed, 'representativeRules' => $rules];
    }

    /** Ermittelt Computed Styles, CSS-Selektoren, Quelldateien und Box Model. */
    public function inspect(string $selector, int $limit = 3, bool $compact = false): array
    {
        $root = $this->command('DOM.getDocument', ['depth' => 0])['root']['nodeId'];
        $ids = $this->command('DOM.querySelectorAll', ['nodeId' => $root, 'selector' => $selector])['nodeIds'];
        $result = [];
        foreach (array_slice($ids, 0, $limit) as $nodeId) {
            $computed = $this->command('CSS.getComputedStyleForNode', ['nodeId' => $nodeId])['computedStyle'];
            $matched = $this->command('CSS.getMatchedStylesForNode', ['nodeId' => $nodeId]);
            $rules = [];
            foreach ($matched['matchedCSSRules'] ?? [] as $match) {
                $rule = $match['rule'];
                $declarations = [];
                foreach ($rule['style']['cssProperties'] ?? [] as $property) {
                    if (($property['disabled'] ?? false) || ($property['parsedOk'] ?? true) === false) {
                        continue;
                    }
                    if (!$compact || in_array($property['name'], self::STYLE_PROPERTIES, true)
                        || str_starts_with($property['name'], '--')) {
                        $declarations[$property['name']] = $property['value'];
                    }
                }
                if ($declarations === []) {
                    continue;
                }
                $rules[] = [
                    'selector' => $rule['selectorList']['text'] ?? '',
                    'origin' => $rule['origin'] ?? null,
                    'source' => $this->stylesheets[$rule['styleSheetId'] ?? ''] ?? null,
                    'range' => $rule['style']['range'] ?? null,
                    'declarations' => $declarations,
                ];
            }
            try {
                $box = $this->command('DOM.getBoxModel', ['nodeId' => $nodeId])['model'];
            } catch (RuntimeException) {
                $box = null;
            }
            $result[] = [
                'nodeId' => $nodeId,
                'computed' => $compact ? [] : array_column($computed, 'value', 'name'),
                'matchedRules' => array_slice($rules, -($compact ? 6 : 30)),
                'inlineStyle' => $compact ? null : ($matched['inlineStyle']['cssProperties'] ?? []),
                'boxModel' => $box,
            ];
        }

        return $result;
    }

    /** Browsermeldungen der letzten geöffneten Ansicht, begrenzt auf 60 Einträge. */
    public function console(): array
    {
        return $this->console;
    }

    /** Gibt nur den eigenen BrowserContext frei, niemals den gemeinsamen Chromium. */
    public function close(): void
    {
        try {
            if ($this->contextId !== null && $this->connection?->isConnected()) {
                $this->command('Target.disposeBrowserContext', ['browserContextId' => $this->contextId], true);
            }
        } finally {
            $this->connection?->disconnect();
            $this->connection = null;
            $this->page = null;
            $this->contextId = null;
        }
    }

    /** Baut die CDP-Verbindung lazy auf und aktiviert die Inspektions-Domains. */
    private function connect(): void
    {
        if ($this->page !== null && $this->connection?->isConnected()) {
            return;
        }
        $this->connection = new Connection($this->endpoint, sendSyncDefaultTimeout: 60000);
        if (!$this->connection->connect() || !$this->connection->isConnected()) {
            throw new RuntimeException('Browserless connection failed.');
        }
        $this->contextId = $this->command('Target.createBrowserContext', ['disposeOnDetach' => true], true)['browserContextId'];
        $target = $this->command('Target.createTarget', [
            'url' => 'about:blank',
            'browserContextId' => $this->contextId,
        ], true)['targetId'];
        $this->page = $this->connection->createSession($target);

        // Ereignisse vor Navigation registrieren, damit Stylesheet-Quellen und Fehler erhalten bleiben.
        $this->page->on('method:CSS.styleSheetAdded', function (array $event): void {
            $header = $event['header'];
            $this->stylesheets[$header['styleSheetId']] = array_intersect_key($header, array_flip([
                'sourceURL', 'sourceMapURL', 'startLine', 'startColumn', 'origin', 'isInline',
            ]));
        });
        $this->page->on('method:Network.responseReceived', function (array $event): void {
            if (($event['type'] ?? '') === 'Document') {
                $this->statuses[$event['loaderId']] = $event['response']['status'];
            }
            if (($event['response']['status'] ?? 0) >= 400) {
                $this->addConsole('network', 'HTTP ' . $event['response']['status'] . ' ' . $event['response']['url']);
            }
        });
        $this->page->on('method:Network.loadingFailed', function (array $event): void {
            $this->addConsole('network', $event['errorText'] ?? 'Network request failed');
        });
        $this->page->on('method:Runtime.consoleAPICalled', function (array $event): void {
            $text = array_map(static fn (array $arg): string => $arg['description'] ?? json_encode($arg['value'] ?? null, JSON_INVALID_UTF8_SUBSTITUTE), $event['args'] ?? []);
            $this->addConsole($event['type'], implode(' ', $text));
        });
        $this->page->on('method:Runtime.exceptionThrown', function (array $event): void {
            $detail = $event['exceptionDetails'];
            $this->addConsole('exception', $detail['exception']['description'] ?? $detail['text']);
        });
        $this->page->on('method:Log.entryAdded', function (array $event): void {
            $this->addConsole($event['entry']['level'], $event['entry']['text']);
        });
        foreach (['Page.enable', 'DOM.enable', 'CSS.enable', 'Runtime.enable', 'Network.enable', 'Log.enable'] as $method) {
            $this->command($method);
        }
        $this->command('Network.setCacheDisabled', ['cacheDisabled' => true]);
        $this->command('Network.setBypassServiceWorker', ['bypass' => true]);
    }

    /** Hält Konsolendaten klein und verhindert unbeschränktes Kontextwachstum. */
    private function addConsole(string $level, string $text): void
    {
        $this->console[] = ['level' => $level, 'text' => mb_strcut($text, 0, 1200)];
        if (count($this->console) > 60) {
            array_shift($this->console);
        }
    }

    /** Führt ausschließlich intern definierte, lesende JavaScript-Ausdrücke aus. */
    private function evaluate(string $expression): mixed
    {
        $result = $this->command('Runtime.evaluate', [
            'expression' => $expression, 'returnByValue' => true, 'awaitPromise' => true,
        ]);
        if (isset($result['exceptionDetails'])) {
            throw new RuntimeException('Browser evaluation failed: ' . ($result['exceptionDetails']['exception']['description'] ?? $result['exceptionDetails']['text']));
        }

        return $result['result']['value'] ?? null;
    }

    /** Verwendet denselben CDP-Transport wie der Page Builder. */
    private function command(string $method, array $params = [], bool $browser = false): array
    {
        $session = $browser ? $this->connection : $this->page;
        if ($session === null) {
            throw new RuntimeException('No active CDP session.');
        }
        $response = $session->sendMessageSync(new Message($method, $params), 60000);
        if (!$response->isSuccessful()) {
            throw new RuntimeException('CDP ' . $method . ': ' . $response->getErrorMessage());
        }

        return $response['result'] ?? [];
    }
}
