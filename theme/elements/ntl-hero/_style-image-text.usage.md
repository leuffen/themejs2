---
description: Bild-Hero mit eigenem Textpanel
---

# Bild-Hero mit eigenem Textpanel

`style-image-text` stellt das Bild im Slot `bg` und den Text in `.box` dar.
Mobil steht das Panel nach dem Bild. `image-text-glass` verwendet eine
Glasfläche; `image-text-overlap` überlappt die Bildkante auch mobil.
`image-text-compact` verkürzt das überlappende Panel für Unterseitentitel.
Farben und Schriftfamilien kommen aus der seitenweiten Variant.

```markdown
---
{: layout="1;ntl-hero.style-image-text.image-text-overlap" }

![Helle Praxisräume](/assets/header-bg.svg)
{: slot="bg" }

## Für Ihre Gesundheit
{: layout=".box" }

Wir nehmen uns Zeit für Ihr Anliegen.

[Kontakt](/kontakt.html){: .btn .btn-primary }
```
