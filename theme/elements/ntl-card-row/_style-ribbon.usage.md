---
description: Verbindet Kontakt- oder Servicekarten zu einem durchgehenden Informationsband.
---

# Informationsband

`style-ribbon` bildet eine zusammenhängende Fläche mit Trennlinien zwischen
den direkten Cards. Die Instanz setzt `--cols`; mobile Ansichten verwenden
den vorhandenen Komponenten-Stack. Die Row besitzt weiterhin ihre regulären
Header- und Footer-Slots.

`ribbon-dark` schaltet auf die sekundäre Fläche mit passender Kontrastrolle.
`ribbon-content-only` blendet nur den Header und Footer der Reihe aus.
`ribbon-overlap` legt das Band außerhalb des Mobile-Modus über den vorigen
Abschnitt; diesen Modifier nur mit dafür geeignetem vorigem Inhalt wählen.

## Markdown mit Content Pane

```markdown
## Direkt erreichbar
{: layout="ntl-card-row.style-ribbon.ribbon-dark" section-style="--cols: 6;" }

### Kontakt

Rufen Sie uns an.

[Telefon](/kontakt.html)
{: slot="footer" }

### Sprechzeiten

Montag bis Freitag nach Vereinbarung.

[Alle Zeiten](/sprechzeiten.html)
{: slot="footer" }
```

Für ein überlappendes Band lautet der Layout-Selector beispielsweise
`ntl-card-row.style-ribbon.ribbon-content-only.ribbon-overlap`.
Die Überlappung ist unabhängig von der seitenweiten Farb-Variant.
