---
description: Sass-Entry für Meldungsdarstellungen.
---

Die gemeinsame Theme-Basis lädt [style-banner](_style-banner.usage.md).

## Beispiel

Voraussetzung sind `@leuffen/announcements`, der vorhandene
`text-block`-Pre-Parser und `window.openhours` aus dem Website-Head.
Der Shortcut wird in einen vorhandenen Content-Bereich eingefügt;
`no-announcements` wird von der Library gesetzt.

```markdown
#[leuffen-announcements.style-banner > Momentan keine Meldungen.]
```
