---
description: Website-Navigation mit optionaler Hero-Überlagerung
---

# Website-Navigation mit optionaler Hero-Überlagerung

Der Default verwendet `nte-navbar-line`, Brand-Link und `nte-nav`.
`default-sticky`, `default-border`, `default-dark` und `default-overlay`
sind unabhängig wählbare Modifier. Overlay wirkt nur vor `main` mit einem
ersten `ntl-hero.style-image-text`. `--brand-height` muss dafür
zur Zeilenhöhe passen; responsiv über vorhandene `style-xl`-Attribute setzen.

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
