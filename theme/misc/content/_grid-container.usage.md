---
description: Erhält ein vorhandenes frei belegbares Raster aus normalen Content-Pane-Sections.
---

# Bestehendes freies Raster

`grid-container` bleibt für bereits angelegte Kompositionen verfügbar.
Neue gleichartige Kartengruppen verwenden bevorzugt `ntl-card-grid`.
Die vorhandenen lokalen Variablen `--rows`, `--cols` und `--gap`
bestimmen das Raster; `--row`, `--col`, `--row-span` und `--col-span`
positionieren seine Kinder.

```markdown
## Übersicht
{: layout="ntl-2col" }

---
{: layout=".grid-container" section-style="--cols: 2" }

#### Beratung
{: section-style="--col: 1" }

Informationen zur Beratung.

#### Kontakt
{: section-style="--col: 2" }

Informationen zur Kontaktaufnahme.
```

Das Pattern liegt unter Misc, weil sein vorhandener Autorenvertrag ein frei
belegtes Raster statt einer NTL-Kartengruppe beschreibt.
