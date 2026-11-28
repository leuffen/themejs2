---
description: Gemeinsamer Sass-Entry für id_header.
---

Wird von `theme/index.scss` geladen. Consumer verwenden ausschließlich
`@use "@leuffen/themejs2" as themejs;` und `themejs.theme()`.

- [style-default](_style-default.usage.md)

## Beispiel

Das Beispiel gehört direkt in den editierbaren HTML-Frame.
Die gemeinsame Theme-Basis muss geladen sein; der feste Bereich wird
über `id="header"` und `style-default` angesprochen.

```html
<header id="header" class="style-default container py-4">
  <h1>Unsere Praxis</h1>
  <p>Persönlich für Sie da.</p>
</header>
```
