---
description: Formularfelder mit optionalem schwebendem Label
---

# Formularfelder mit optionalem schwebendem Label

Ohne Style-Klasse verwendet `nte-input` diese Baseline. Der Modifier
`hoverlabel` ist der erforderliche Library-Modifier für Label-Platzierung
und das öffentliche Floating-Label-Mixin; er bleibt bewusst unverändert.
Der vorhandene `text-block`-Pre-Parser rendert den Shortcut; `name`, `type`,
`label` und Validierung folgen dem Komponentenvertrag.

```markdown
## Kontakt
{: layout="ntl-2col.style-form" }

#[nte-input.hoverlabel type="email" name="email" label="E-Mail" required]
```
