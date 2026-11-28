---
description: Ordnet gleichwertige Bild- und Textkarten im responsiven Zwölfspaltenraster an.
---

# Kartenreihe

`ntl-card-row` verwendet automatisch `style-default`. Die Breite kommt aus
`--cols` im Bereich 1 bis 12; direkte Unterabschnitte werden zu `nte-card`.
Bilder belegen `image`, Kartenüberschriften `header` und Aktionen `footer`.
Der Style streckt die Karten und ihre optionalen Footer auf eine gemeinsame Höhe.

Modifier am Layout: `default-content-only` blendet ausschließlich den Header
und Footer der Reihe aus und entfernt Card-Rahmen; `default-separated` ergänzt
responsive Trenner. `default-featured` zeigt am Desktop alle Cards nach der
ersten als Bild-Overlay; ohne Bild greift der normale Card-Stack.
`with-horizontal-flow` aktiviert den vorhandenen mobilen Nextrap-Scroller.
`aside` am Card-Kind wählt eine sekundäre Fläche, ohne eine neue Komposition.

## Markdown mit Content Pane

```markdown
## Unsere Leistungen
{: layout="ntl-card-row.default-separated" section-style="--cols: 6;" }

### Beratung

![Beratung](/assets/beratung.jpg)

Wir klären gemeinsam die nächsten Schritte.

[Termin vereinbaren](/kontakt.html)
{: slot="footer" }

### Begleitung

Wir begleiten die Umsetzung.

[Mehr erfahren](/leistungen.html)
{: slot="footer" }
```

### Inhalt ohne Row-Titel

```markdown
## Beratungsangebote
{: layout="ntl-card-row.default-content-only" section-style="--cols: 6;" }

### Persönlich
Ein Gespräch vor Ort.

### Digital
Eine Beratung per Video.
```

### Leitkarte mit ergänzenden Bildern

```markdown
## Aus dem Magazin
{: layout="ntl-card-row.default-featured" section-style="--cols: 6;" }

### Schwerpunkt
![Schwerpunkt](/assets/schwerpunkt.jpg)
Eine ausführliche Einführung.

### Einblick
![Einblick](/assets/einblick.jpg)
Eine ergänzende Perspektive.
```
