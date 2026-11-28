---
description: Gemeinsamer Sass-Entry für tj-content-pane.
---

Wird von `theme/index.scss` geladen. Consumer verwenden ausschließlich
`@use "@leuffen/themejs2" as themejs;` und `themejs.theme()`.

- [style-default](_style-default.usage.md)

## Beispiel

Die Website rendert das folgende Markdown mit Kramdown in ihr
vorhandenes `tj-content-pane`. Die gemeinsame Theme-Basis und die
verwendeten Layout-Komponenten müssen geladen sein; ein zweites Pane
ist für dieses Beispiel nicht erforderlich.

```markdown
## Willkommen
{: layout="ntl-2col" }

Einleitung.

## Leistungen
{: layout="ntl-card-row" }

### Beratung

Informationen.
```
