---
description: Gemeinsamer Sass-Entry für id_footer.
---

Wird von `theme/index.scss` geladen. Consumer verwenden ausschließlich
`@use "@leuffen/themejs2" as themejs;` und `themejs.theme()`.

- [style-default](_style-default.usage.md)

## Beispiel

Das Beispiel gehört direkt in den editierbaren HTML-Frame.
Die gemeinsame Theme-Basis muss geladen sein; der feste Bereich wird
über `id="footer"` und `style-default` angesprochen.

```html
<footer id="footer" class="style-default">
  <div class="container py-3">
    <a href="/impressum.html">Impressum</a>
  </div>
</footer>
```
