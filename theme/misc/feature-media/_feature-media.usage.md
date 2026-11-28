---
description: Verbindet ein Hauptfoto und ein optionales Mockup mit einem dekorativen Punktraster.
---

# Foto mit optionalem Mockup

`feature-media` wird auf den Absatz mit einem oder mehreren Bildern gesetzt.
Das erste Bild bildet die Grundfläche, folgende Bilder liegen als Mockup
darüber. `dots-end` spiegelt den Bildakzent; `dots-success`,
`dots-warning` und `dots-neutral` wählen vorhandene Farbrollen.

```markdown
## Unsere Lösung
{: layout="ntl-2col.style-feature" }

Wir verbinden persönliche Beratung und digitale Werkzeuge.

![Beratung](/assets/beratung.webp)
![Anwendung](/assets/anwendung.webp)
{: .feature-media .xl:desktop slot="aside" }
```

`xl:desktop` aktiviert die große Darstellung über das bereits registrierte
TrunkJS Responsive. Mobil bleibt auch ein einzelnes Bild ohne künstlichen
Leerraum nutzbar. Bilder und Alternativtexte kommen ausschließlich aus dem
Content.
