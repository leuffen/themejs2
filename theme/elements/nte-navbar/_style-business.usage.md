---
description: Kompakte Navigation mit eigener Aktionsgruppe
---

# Kompakte Navigation mit eigener Aktionsgruppe

`style-business` ordnet Wortmarke, Navigation und eine separate
Aktionsgruppe an. Die Children `brand-wordmark`, `brand-mark` und
`navbar-actions` gehören zu dieser Komposition. Die Navigation kann
`default-compact` verwenden; responsive Sichtbarkeit bleibt im Markup.

```html
<nte-navbar class="style-business with-shadow-on-scroll">
  <nte-navbar-line>
    <a slot="start" class="brand-logo brand-wordmark" href="/">Marke</a>
    <nte-nav slot="end" class="nav-horizontal default-compact" aria-label="Seiten">
      <nte-nav-item href="/">Start</nte-nav-item>
    </nte-nav>
    <div slot="end" class="navbar-actions"><a class="btn btn-secondary" href="/kontakt.html">Kontakt</a></div>
  </nte-navbar-line>
</nte-navbar>
```
