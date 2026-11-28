---
description: Ordnet unterschiedliche Logos in einem intrinsisch umbrechenden Raster an.
---

# Logo-Raster

`icon-grid` nimmt normale Markdown-Bilder oder Bildabsätze auf und bricht
anhand der verfügbaren Breite selbständig um.

```markdown
## Unsere Partner
{: layout="ntl-2col" }

![Partner A](/assets/partner-a.svg)
![Partner B](/assets/partner-b.svg)
{: .icon-grid }
```

Die bestehenden lokalen Größenparameter `--icon-grid-cell-min` und
`--icon-grid-item-max-width` begrenzen Zelle und Logo; der Abstand folgt
`--nt-spacing-component`.
