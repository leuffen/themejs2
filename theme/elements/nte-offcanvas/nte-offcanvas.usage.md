---
description: Gemeinsamer Sass-Entry für nte-offcanvas.
---

Wird von `theme/index.scss` geladen. Consumer verwenden ausschließlich
`@use "@leuffen/themejs2" as themejs;` und `themejs.theme()`.

- [style-default](_style-default.usage.md)

## Beispiel

Das Beispiel gehört in den HTML-Frame und setzt die registrierten
Offcanvas- und Nav-Komponenten sowie das vorhandene `tj-responsive` voraus.
Der Auslöser öffnet das Menü über die öffentliche `open()`- oder `toggle()`-API.

```html
<nte-offcanvas id="navigation" class="-lg:default-full-width" aria-label="Navigation">
  <nte-nav class="nav-vertical" aria-label="Seiten">
    <nte-nav-item href="/">Start</nte-nav-item>
  </nte-nav>
</nte-offcanvas>
```
