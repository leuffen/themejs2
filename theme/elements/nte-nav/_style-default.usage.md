---
description: Horizontale und vertikale Seitennavigation
---

# Horizontale und vertikale Seitennavigation

`nav-horizontal` und `nav-vertical` sind die bestehenden dokumentierten
Ausrichtungsoptionen. `default-compact` reduziert die Größe; `default-dark`
wählt helle Farbrollen auf einer primären Hintergrundfläche. Für mobile
Menüs verschiebt `tj-element-relocator` dieselben Einträge in eine zweite
vertikale Navigation. Die Variant entscheidet nicht über die Ausrichtung.

```html
<nte-nav class="nav-horizontal default-compact" aria-label="Hauptnavigation">
  <nte-nav-item href="/">Start</nte-nav-item>
  <nte-nav-item href="/kontakt.html">Kontakt</nte-nav-item>
</nte-nav>
```
