---
description: Gemeinsamer Sass-Entry für ntl-hero.
---

Wird von `theme/index.scss` geladen. Consumer verwenden ausschließlich
`@use "@leuffen/themejs2" as themejs;` und `themejs.theme()`.

- [style-default](_style-default.usage.md)
- [style-image-text](_style-image-text.usage.md)
- [style-editorial](_style-editorial.usage.md)
- [style-campaign](_style-campaign.usage.md)

## Beispiel

Voraussetzung sind die gemeinsame Theme-Basis, das registrierte
`ntl-hero` und Kramdown-Inhalte im vorhandenen `tj-content-pane`.
Der Bildabsatz wird ausdrücklich dem Hintergrundslot `bg` zugeordnet.

```markdown
## Willkommen
{: layout="ntl-hero" }

Ein kurzer Einstieg.

![Blick in die Praxis](/assets/praxis.webp)
{: slot="bg" }
```
