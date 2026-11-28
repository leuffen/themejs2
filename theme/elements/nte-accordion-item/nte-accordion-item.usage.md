---
description: Sass-Entry für eigenständige Accordion-Item-Styles.
---

Die gemeinsame Theme-Basis lädt [style-summary-end](_style-summary-end.usage.md).

## Beispiel

Voraussetzung sind die registrierten Accordion-Komponenten und
Kramdown-Inhalte im vorhandenen `tj-content-pane`. `section-class`
ordnet `style-summary-end` dem erzeugten Eintrag zu, nicht dem Accordion.

```markdown
## Weitere Informationen
{: layout="nte-accordion" }

### Details einblenden
{: section-class="style-summary-end" }

Informationen zum Autor und zur Veröffentlichung.
```
