---
description: Gemeinsamer Sass-Entry für nte-input.
---

Wird von `theme/index.scss` geladen. Consumer verwenden ausschließlich
`@use "@leuffen/themejs2" as themejs;` und `themejs.theme()`.

- [style-default](_style-default.usage.md)

## Beispiel

Voraussetzung sind die registrierten Komponenten `nte-input` und
`ntl-2col` sowie der `text-block`-Pre-Parser im vorhandenen
`tj-content-pane`. Das Formularziel stellt die Website bereit.

```markdown
## Kontakt
{: layout="ntl-2col.style-form" }

#[nte-input.hoverlabel type="email" name="email" label="E-Mail" required]
```
