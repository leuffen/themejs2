---
description: Gemeinsamer Sass-Entry für nte-consent-blocker.
---

Wird von `theme/index.scss` geladen. Consumer verwenden ausschließlich
`@use "@leuffen/themejs2" as themejs;` und `themejs.theme()`.

- [style-default](_style-default.usage.md)

## Beispiel

Das Beispiel setzt die registrierten Komponenten, den
`text-block`-Pre-Parser und das inerte Template `#google-maps-default`
im Website-Head voraus. Der Blocker wird direkt der Aside-Spalte
zugeordnet; das Template enthält den erst nach Zustimmung geladenen Embed.

```markdown
## Anfahrt
{: layout="ntl-2col" }

Unsere Anschrift und eine Beschreibung des Wegs.

#[nte-consent-blocker.aside style="--default-template-selector: #google-maps-default;"]
```
