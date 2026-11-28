---
description: Titelspalte mit zusammenhängendem Einleitungstext und Bild daneben.
---

# Einleitung einer Unterseite

## Markdown

```markdown
## Unser Angebot
{: layout="ntl-2col.style-subpage-lead" section-style="--cols: 6;" }

Die wichtigsten Informationen zum Einstieg.
{: .aside .lead-serif }

![Einblick](./einblick.jpg)
```

## Verwendung

Die Überschrift bleibt in `main`; der direkte Absatz mit
`aside lead-serif` und das automatische Aside-Bild bilden zusammen
die Einleitungsspalte. Die Komposition eignet sich für Leistungsseiten
und redaktionelle Themeneinstiege. Das Bild steht unter dem
Einleitungstext, mobil werden beide Spalten gestapelt.

Keine eigenen Modifier. `reverse-desktop` ist eine dokumentierte
Nextrap-Ausnahme für eine gespiegelte Desktop-Anordnung.

[Zugehöriger Style](_style-subpage-lead.scss)
