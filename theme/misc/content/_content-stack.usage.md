---
description: Stapelt Inhalte innerhalb eines vorhandenen Layout-Slots mit gleichmäßigem Abstand.
---

# Gestapelter Inhalt

`content-stack` ordnet normale Markdown-Inhalte innerhalb einer vorhandenen
Section untereinander an. Slot-Klassen wie `aside` bleiben separat.

```markdown
## Kontakt
{: layout="ntl-2col" }

### Unsere Anschrift
{: layout=".content-stack" section-slot="aside" }

Musterstraße 12

12345 Musterstadt
```
