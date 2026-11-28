---
description: Gemeinsamer Rhythmus der Hauptabschnitte
---

# Gemeinsamer Rhythmus der Hauptabschnitte

Der Style gilt für ein Pane ohne Style-Klasse oder mit `style-default`.
Nur direkte Hauptabschnitte erhalten den Abstand `--nt-spacing-section`.
Verschachtelte Layouts verwenden ihre eigenen Gaps. Ein ausdrücklich
gewähltes `ribbon-overlap` übernimmt seinen Versatz selbst.

```markdown
## Willkommen
{: layout="ntl-2col" }

Einleitung.

## Leistungen
{: layout="ntl-card-row" }

### Beratung

Informationen.
```
