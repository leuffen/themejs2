---
description: Gemeinsamer Sass-Entry für ntl-columns.
---

Wird von `theme/index.scss` geladen. Consumer verwenden ausschließlich
`@use "@leuffen/themejs2" as themejs;` und `themejs.theme()`.

- [style-default](_style-default.usage.md)

## Beispiel

Voraussetzung sind die gemeinsame Theme-Basis, das registrierte
`ntl-columns` und Kramdown-Inhalte im vorhandenen `tj-content-pane`.
Die optionale Seitenspalte verwendet den dokumentierten Slot `end`.

```markdown
## Unsere Praxis
{: layout="ntl-columns" }

### Willkommen

Informationen zur Praxis.

### Kontakt
{: section-slot="end" }

Telefon und Sprechzeiten.
```
