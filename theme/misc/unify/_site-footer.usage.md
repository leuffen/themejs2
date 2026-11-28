---
description: Erhält den vorhandenen mehrspaltigen Footer mit CTA, Linkgruppen und Meta-Zeile.
---

# Bestehender mehrspaltiger Footer

Dieses Pattern gehört ausschließlich zum editierbaren HTML-Frame.
Es erhält die bestehenden `unify-footer*`-Klassen des Layouts
`website-unify.html`. Die paletteunabhängige Komposition kann von einem
anderen Frame mit derselben Struktur verwendet werden.

```html
<footer id="footer" class="style-default unify-footer">
  <div class="unify-footer__container">
    <div class="unify-footer__cta xl:desktop">
      <p>Gemeinsam den nächsten Schritt gehen.</p>
      <a class="btn btn-primary" href="/kontakt">Kontakt</a>
    </div>
    <nav class="unify-footer__links xl:desktop" aria-label="Footer">
      <section class="unify-footer__column">
        <h2>Informationen</h2>
        <ul><li><a href="/kontakt">Kontakt</a></li></ul>
      </section>
    </nav>
    <div class="unify-footer__bottom">
      <div class="unify-footer__meta">Kontakt und rechtliche Hinweise</div>
    </div>
  </div>
</footer>
```

`xl:desktop` nutzt das registrierte TrunkJS Responsive.
Texte, Ziele und Linkgruppen bleiben im HTML beziehungsweise in den
vorhandenen Includes; der Style enthält keine Website-Daten.
