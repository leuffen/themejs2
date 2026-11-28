---
description: Stellt Erfahrungsberichte mit Portrait und Quelle als Raster oder versetzte Folge dar.
---

# Erfahrungsberichte

`style-testimonial` verwendet dieselbe Card-Komposition für Portrait, Zitat
und Quellenangabe. `--cols` steuert die Breite. `testimonial-list` ergänzt eine
versetzte vertikale Folge; dafür Karten breiter als eine halbe Reihe wählen,
etwa `--cols: 7`. `testimonial-dark` schaltet die äußere Bühne auf die sekundäre
Fläche. Beide Modifier bleiben unabhängig von der visuellen Variant.

`with-horizontal-flow` aktiviert den nativen mobilen Nextrap-Scroller.
`--visible-cols-mobile` und `--horizontal-flow-gap` konfigurieren ihn. Ohne
diesen Modifier verwendet die Komponente ihren regulären Mobile-Stack.

## Markdown mit Content Pane

```markdown
## Stimmen aus der Zusammenarbeit
{: layout="ntl-card-row.style-testimonial.testimonial-dark.with-horizontal-flow" section-style="--cols: 4; --visible-cols-mobile: 1.15;" }

### Anna

![Portrait von Anna](/assets/anna.jpg)

> Die Beratung hat uns einen klaren nächsten Schritt gegeben.

Anna, Projektleitung

### Ben

![Portrait von Ben](/assets/ben.jpg)

> Wir konnten die Ergebnisse direkt in unserer Arbeit nutzen.

Ben, Teamkoordination
```

### Versetzte Folge

```markdown
## Erfahrungen
{: layout="ntl-card-row.style-testimonial.testimonial-list" section-style="--cols: 7;" }

### Beratung
> Unsere Fragen wurden verständlich beantwortet.

Anna, Projektleitung

### Umsetzung
> Wir wussten jederzeit, wie es weitergeht.

Ben, Teamkoordination
```
