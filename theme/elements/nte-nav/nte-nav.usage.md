---
description: Gemeinsamer Sass-Entry für nte-nav.
---

Wird von `theme/index.scss` geladen. Consumer verwenden ausschließlich
`@use "@leuffen/themejs2" as themejs;` und `themejs.theme()`.

- [style-default](_style-default.usage.md)

## Beispiel

Das Beispiel gehört in den HTML-Frame und setzt die gemeinsame
Theme-Basis sowie die registrierten Nav-Komponenten voraus. Die Ausrichtung
wird an dieser Instanz gewählt; `style-default` ergänzt die Komponente.

```html
<nte-nav class="nav-horizontal default-compact" aria-label="Hauptnavigation">
  <nte-nav-item href="/">Start</nte-nav-item>
  <nte-nav-item href="/kontakt.html">Kontakt</nte-nav-item>
</nte-nav>
```
