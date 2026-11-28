---
description: Gemeinsamer Sass-Entry für nte-slider.
---

Wird von `theme/index.scss` geladen. Consumer verwenden ausschließlich
`@use "@leuffen/themejs2" as themejs;` und `themejs.theme()`.

- [style-editorial](_style-editorial.usage.md)

## Beispiel

Voraussetzung sind die gemeinsame Theme-Basis, das registrierte
`nte-slider` und Kramdown-Inhalte im vorhandenen `tj-content-pane`.
Die Unterabschnitte werden zu Slides; das Beispiel wählt `style-editorial`.

```markdown
## Aktuelle Beiträge
{: layout="nte-slider.style-editorial" }

### Vorsorge

![Beispielmotiv](/assets/vorsorge.webp)

Wissenswertes zur Vorsorge.

### Beratung

Ihre Fragen im Mittelpunkt.
```
