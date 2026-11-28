---
description: Stellt Kontakt, Navigation und ergänzende Informationen als Footer-Kartengruppe dar.
---

# Footer-Karten

`style-footer` komponiert mehrere Footer-Inhalte auf einer gemeinsamen
sekundären Fläche. Desktop-Cards erhalten Trennlinien; mobil werden sie mit
Abstand gestapelt. `--cols` steuert die Desktop-Breite. Die Farbrollen kommen
aus der aktiven Variant; eigene Modifier werden nicht benötigt.

## Markdown mit Content Pane

```markdown
## Weitere Informationen
{: layout="ntl-card-row.style-footer" section-style="--cols: 4;" }

### Kontakt

[Kontaktseite](/kontakt.html)

### Angebote

[Leistungen](/leistungen.html)

### Rechtliches

[Impressum](/impressum.html)
```
