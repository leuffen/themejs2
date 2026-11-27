<?php

declare(strict_types=1);

namespace Leuffen\ThemeJS2\Development;

use InvalidArgumentException;
use RuntimeException;

/** Hält den unveränderten Auftrag und die vom CLI gesetzte Infrastruktur getrennt. */
final class Job
{
    /** Die Seitenzuordnung wird erst nach der Projektanalyse gesetzt. */
    public array $pages = [];
    public array $protectedPaths = [];

    /** Der Dateipfad verankert relative Referenzen neben dem Auftrag. */
    private function __construct(
        public readonly string $file,
        public readonly string $instructions,
        public readonly string $preview,
        public readonly string $browser,
        public readonly string $model,
        public readonly int $iterations,
    ) {
    }

    /** Liest freien Markdown-Text, ohne Laufzeitwerte aus der Datei zu übernehmen. */
    public static function fromFile(string $file, string $preview, string $browser, string $model, int $iterations): self
    {
        $path = realpath($file);
        if ($path === false || !is_file($path) || !is_readable($path) || ($content = file_get_contents($path)) === false) {
            throw new RuntimeException('Cannot read job: ' . $file);
        }
        if (trim($content) === '') {
            throw new InvalidArgumentException('Job requires a non-empty work instruction: ' . $file);
        }
        return new self($path, trim($content), $preview, $browser, $model, $iterations);
    }

    /** Validiert die ermittelten Seiten und schützt Auftrag und Designvorlagen vor Änderungen. */
    public function setPages(array $pages, string $root): void
    {
        if (!array_is_list($pages) || $pages === []) {
            throw new InvalidArgumentException('Project discovery must identify at least one target page.');
        }
        $protected = [$this->file];
        $resolved = [];
        foreach ($pages as $page) {
            $name = $page['name'] ?? '';
            $target = $page['target'] ?? '';
            $reference = $page['reference'] ?? null;
            $designs = $page['designs'] ?? [];
            if (!is_string($name) || !preg_match('/^[a-zA-Z0-9_-]+$/D', $name) || isset($resolved[$name])
                || !is_string($target) || !str_starts_with($target, '/') || str_starts_with($target, '//')
                || preg_match('/[\x00-\x20\x7f\\\\]/', $target) || !is_array($designs) || !array_is_list($designs)
                || ($reference !== null && ($designs !== [] || !is_string($reference) || !str_contains($this->instructions, $reference)
                    || filter_var($reference, FILTER_VALIDATE_URL) === false
                    || !in_array(parse_url($reference, PHP_URL_SCHEME), ['http', 'https'], true)
                    || parse_url($reference, PHP_URL_USER) !== null || parse_url($reference, PHP_URL_PASS) !== null))) {
                throw new InvalidArgumentException('Invalid page mapping from project discovery.');
            }
            foreach ($designs as &$design) {
                $file = $design['file'] ?? null;
                $path = is_string($file) && $file !== '' && str_contains($this->instructions, $file) ? realpath(str_starts_with($file, '/') ? $file : dirname($this->file) . '/' . $file) : false;
                if ($path === false || !is_file($path) || !is_readable($path)) {
                    throw new RuntimeException('Cannot read design: ' . ($file ?? '(missing path)'));
                }
                $mime = mime_content_type($path);
                if (!is_string($mime) || (!str_starts_with($mime, 'image/') && $mime !== 'application/pdf')) {
                    throw new InvalidArgumentException('Expected an image or PDF design: ' . $file);
                }
                $design['file'] = $path;
                $protected[] = $path;
            }
            unset($design);
            $resolved[$name] = compact('name', 'target', 'reference', 'designs');
        }

        // Nur Pfade innerhalb des Projekts müssen in dessen Schreibschutz stehen.
        $prefix = rtrim($root, '/') . '/';
        foreach ($protected as $source) {
            if (str_starts_with($source, $prefix)) {
                $this->protectedPaths[] = substr($source, strlen($prefix));
            }
        }
        $this->pages = array_values($resolved);
    }
}
