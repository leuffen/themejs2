---
description: Ergänzt einen Textabstand vor einem abschließenden Inhaltsblock.
---

# Inhaltsabschluss

`content-footer` ergänzt nur den optischen Abstand. Die vorhandene Klasse
`footer` oder das Attribut `slot="footer"` bestimmt weiterhin den Slot.

```markdown
## Beratung
{: layout="ntl-2col" }

Wir besprechen die nächsten Schritte.

[Termin vereinbaren](/kontakt)
{: .footer .content-footer }
```
