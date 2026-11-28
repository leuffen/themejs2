---
description: Rahmt einen Hero auf großen Ansichten mit optionalen dekorativen Pfeilbildern.
---

# Dekorative Hero-Pfeile

Die Klassen `hero-arrows hero-arrows-start` beziehungsweise
`hero-arrows hero-arrows-end` positionieren dekorative Bilder. Sie benötigen
eine bereits positionierte Hero-Komposition. Ohne `desktop` bleiben sie
ausgeblendet; `xl:desktop` wird von TrunkJS Responsive gesteuert.

```markdown
## Digital zusammenarbeiten
{: layout="ntl-hero.style-campaign" }

![Pfeil](/assets/pfeil-links.svg)
{: .hero-arrows .hero-arrows-start .xl:desktop alt="" }

![Pfeil](/assets/pfeil-rechts.svg)
{: .hero-arrows .hero-arrows-end .xl:desktop alt="" }
```

Das Muster steuert nur optionale Dekoration. Inhaltsreihenfolge und
Hero-Struktur bleiben beim gewählten NTL-Style.
