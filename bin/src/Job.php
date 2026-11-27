<?php

declare(strict_types=1);

namespace Leuffen\ThemeJS2\Development;

use InvalidArgumentException;
use RuntimeException;

/**
 * Verbindet einen Markdown-Arbeitsauftrag mit explizit zugeordneten Seiten.
 */
final readonly class Job
{
    /** @param list<array{name: string, target: string, reference: ?string, designs: list<array{file: string, width: ?int, height: ?int}>}> $pages */
    private function __construct(
        public string $instructions,
        public string $theme,
        public array $pages,
        public string $preview,
        public string $browser,
        public string $model,
        public int $iterations,
        public ?int $maxTokens,
        public array $protectedPaths,
    ) {
    }

    /**
     * Lädt YAML-Frontmatter und Markdown-Auftrag. Referenzdateien werden relativ
     * zur Auftragsdatei aufgelöst, Zielseiten relativ zum Preview-Origin.
     * @param string $file Auftragsdatei.
     * @param string $root Projektwurzel für den Schreibschutz.
     * @param int|null $iterations Optionales CLI-Limit.
     * @throws InvalidArgumentException Bei ungültiger Konfiguration.
     * @throws RuntimeException Bei nicht lesbaren Dateien.
     * @example $job = Job::fromFile('auftrag.md', '/opt');
     * @see ThemeDevelopment
     */
    public static function fromFile(string $file, string $root, ?int $iterations = null): self
    {
        $path = realpath($file);
        if ($path === false || !is_file($path) || !is_readable($path)) {
            throw new RuntimeException('Cannot read job: ' . $file);
        }
        $content = file_get_contents($path);
        if ($content === false || !preg_match('/\A---\r?\n(.*?)\r?\n---\r?\n(.*)\z/s', $content, $parts)) {
            throw new InvalidArgumentException('Job requires YAML frontmatter followed by Markdown: ' . $file);
        }

        // Konfiguration validieren, bevor Netzwerk- oder AI-Aufrufe stattfinden.
        $config = yaml_parse($parts[1]);
        if (!is_array($config) || !is_string($config['theme'] ?? null) || trim($config['theme']) === ''
            || trim($parts[2]) === '' || !is_array($config['pages'] ?? null)
            || !array_is_list($config['pages']) || $config['pages'] === []) {
            throw new InvalidArgumentException('Job requires theme, pages and a non-empty work instruction.');
        }
        $preview = rtrim($config['preview'] ?? 'http://main:4000', '/');
        self::validateHttpUrl($preview);
        $browser = $config['browser'] ?? 'ws://chromium:3000';
        if (!is_string($browser) || !in_array(parse_url($browser, PHP_URL_SCHEME), ['ws', 'wss'], true)
            || !parse_url($browser, PHP_URL_HOST)) {
            throw new InvalidArgumentException('browser must be a WebSocket endpoint.');
        }
        $iterations ??= $config['iterations'] ?? 10;
        $maxTokens = $config['max_tokens'] ?? null;
        if (!is_int($iterations) || $iterations < 1 || $iterations > 100
            || ($maxTokens !== null && (!is_int($maxTokens) || $maxTokens < 1))) {
            throw new InvalidArgumentException('iterations must be 1–100; max_tokens must be positive.');
        }
        $model = $config['model'] ?? 'gpt-5.4';
        if (!is_string($model) || trim($model) === '') {
            throw new InvalidArgumentException('model must be a non-empty model name.');
        }

        // Jede Zielseite besitzt genau eine URL- oder eine Dateireferenz.
        $pages = [];
        $names = [];
        $protected = [$path];
        foreach ($config['pages'] as $page) {
            $name = $page['name'] ?? '';
            $target = $page['target'] ?? '';
            $reference = $page['reference'] ?? null;
            $designs = $page['designs'] ?? [];
            if (!is_string($name) || !preg_match('/^[a-zA-Z0-9_-]+$/D', $name) || isset($names[$name])
                || !is_string($target) || !str_starts_with($target, '/') || str_starts_with($target, '//')
                || preg_match('/[\x00-\x20\x7f\\\\]/', $target)
                || !is_array($designs) || !array_is_list($designs)
                || (($reference === null) === ($designs === []))) {
                throw new InvalidArgumentException('Each page needs a unique name, a relative target and either reference or designs.');
            }
            $names[$name] = true;
            if ($reference !== null) {
                self::validateHttpUrl($reference);
            }
            $resolved = [];
            foreach ($designs as $design) {
                $designFile = $design['file'] ?? null;
                if (!is_string($designFile) || $designFile === '') {
                    throw new InvalidArgumentException('Design for ' . $name . ' requires file.');
                }
                $designPath = realpath(str_starts_with($designFile, '/') ? $designFile : dirname($path) . '/' . $designFile);
                if ($designPath === false || !is_file($designPath) || !is_readable($designPath)) {
                    throw new RuntimeException('Cannot read design: ' . $designFile);
                }
                $width = $design['width'] ?? null;
                $height = $design['height'] ?? null;
                if (($width !== null && (!is_int($width) || $width < 1))
                    || ($height !== null && (!is_int($height) || $height < 1))) {
                    throw new InvalidArgumentException('Design viewport dimensions must be positive integers.');
                }
                $resolved[] = ['file' => $designPath, 'width' => $width, 'height' => $height];
                $protected[] = $designPath;
            }
            $pages[] = ['name' => $name, 'target' => $target, 'reference' => $reference, 'designs' => $resolved];
        }

        // Die Referenzen und der Auftrag selbst dürfen nicht umgeschrieben werden.
        $prefix = rtrim($root, '/') . '/';
        $protectedPaths = [];
        foreach ($protected as $source) {
            if (str_starts_with($source, $prefix)) {
                $protectedPaths[] = substr($source, strlen($prefix));
            }
        }

        return new self(trim($parts[2]), $config['theme'], $pages, $preview, $browser, $model, $iterations, $maxTokens, $protectedPaths);
    }

    /** Akzeptiert nur ausdrücklich konfigurierte HTTP(S)-Seiten ohne Zugangsdaten. */
    private static function validateHttpUrl(mixed $url): void
    {
        if (!is_string($url) || filter_var($url, FILTER_VALIDATE_URL) === false
            || !in_array(parse_url($url, PHP_URL_SCHEME), ['http', 'https'], true)
            || parse_url($url, PHP_URL_USER) !== null || parse_url($url, PHP_URL_PASS) !== null) {
            throw new InvalidArgumentException('Expected an HTTP(S) URL without credentials.');
        }
    }
}
