---
description: Gemeinsamer Sass-Entry für nte-navbar.
---

Wird von `theme/index.scss` geladen. Consumer verwenden ausschließlich
`@use "@leuffen/themejs2" as themejs;` und `themejs.theme()`.

- [style-default](_style-default.usage.md)
- [style-business](_style-business.usage.md)

## Beispiel

Das Beispiel gehört in den editierbaren HTML-Frame. Die gemeinsame
Theme-Basis und die registrierten Navbar- und Nav-Komponenten stellen
Darstellung und Verhalten bereit; die Inhalte bleiben im Markup.

```html
<nte-navbar class="default-sticky default-border">
  <nte-navbar-line>
    <a class="brand-logo" slot="start" href="/">Praxis</a>
    <nte-nav slot="end" class="nav-horizontal" aria-label="Hauptnavigation">
      <nte-nav-item href="/kontakt.html">Kontakt</nte-nav-item>
    </nte-nav>
  </nte-navbar-line>
</nte-navbar>
```
