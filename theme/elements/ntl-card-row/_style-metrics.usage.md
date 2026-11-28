---
description: Zeigt Kennzahlen mit hervorgehobenen Werten und optionaler dunkler Fläche.
---

# Kennzahlen

`style-metrics` zeigt die erste starke Angabe einer Card als Kennzahl.
Die Row-Überschrift bleibt für Hilfstechnologien vorhanden, ist aber visuell
ausgeblendet. Titel und Beschreibungen bleiben normaler Markdown-Content.

`metrics-dark` verwendet die sekundäre Fläche und ihre Kontrastrolle.
`--cols` steuert die Desktop-Breite; mobil werden die Werte zentriert gestapelt.

## Markdown mit Content Pane

```markdown
## Unsere Arbeit in Zahlen
{: layout="ntl-card-row.style-metrics.metrics-dark" section-style="--cols: 4;" }

### Standorte

**3**

in der Region

### Erfahrung

**20 Jahre**

in der persönlichen Betreuung

### Erreichbarkeit

**5 Tage**

pro Woche
```
