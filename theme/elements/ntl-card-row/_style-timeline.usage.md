---
description: Verbindet Zeiträume, Meilensteine und Beschreibungen zu einer editierbaren Zeitachse.
---

# Zeitachse

`style-timeline` gestaltet normale Card-Unterabschnitte als Meilensteine.
Die Inhaltsklassen `timeline-period`, `timeline-value`, `timeline-title` und
`timeline-copy` weisen Zeitraum, Zeitwert, Titel und Beschreibung ihre Rollen
zu. Zeitwerte und Titel bleiben Absätze; dadurch erzeugt Content Pane keine
ungewollten weiteren Unterabschnitte.

`--cols` steuert die Desktop-Breite. `with-horizontal-flow` verwendet den
vorhandenen mobilen Scroller; `--visible-cols-mobile` bestimmt die sichtbare
Kartenzahl und `--horizontal-flow-gap` den Abstand. Ohne Modifier stapelt die
Komponente die Meilensteine mobil.

## Markdown mit Content Pane

```markdown
## Unsere Entwicklung
{: layout="ntl-card-row.style-timeline.with-horizontal-flow" section-style="--cols: 4; --visible-cols-mobile: 1.2; --horizontal-flow-gap: 0px;" }

### Gründung

Januar
{: .timeline-period }

2020
{: .timeline-value }

Der Anfang
{: .timeline-title }

Wir beginnen mit einem kleinen Team.
{: .timeline-copy }

### Ausbau

Juni
{: .timeline-period }

2024
{: .timeline-value }

Der nächste Schritt
{: .timeline-title }

Ein weiterer Standort kommt hinzu.
{: .timeline-copy }
```
