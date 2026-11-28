---
description: Gemeinsamer Sass-Entry für nte-accordion.
---

Wird von `theme/index.scss` geladen. Consumer verwenden ausschließlich
`@use "@leuffen/themejs2" as themejs;` und `themejs.theme()`.

- [style-default](_style-default.usage.md)
- [style-faq](_style-faq.usage.md)
- [style-process](_style-process.usage.md)

## Beispiel

Voraussetzung sind die gemeinsame Theme-Basis, das registrierte
`nte-accordion` und Kramdown-Inhalte im vorhandenen `tj-content-pane`.
Die Unterüberschriften bilden die einzelnen aufklappbaren Einträge.

```markdown
## Häufige Fragen
{: layout="nte-accordion[exclusive]" }

### Wie beginnt die Beratung?

Wir besprechen zunächst Ihre Fragen.

### Was folgt danach?

Sie erhalten die vereinbarten nächsten Schritte.
```
