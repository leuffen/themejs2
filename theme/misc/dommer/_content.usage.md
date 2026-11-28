---
description: Erhält vorhandene Columns-Inhalte mit seitlichem Kontaktpanel.
---

# Vorhandene Columns-Inhalte

Dieses interne Pattern erhält den bestehenden Autorenvertrag der Dommer-
Beispiele. `dommer-intro` ergänzt die Einleitung, `dommer-services` die
Unterabschnitte und `dommer-contact-panel` den seitlichen Kontakt.
Es setzt eine bereits registrierte `ntl-columns`-Komponente voraus.

```markdown
## Unsere Leistungen
{: layout="ntl-columns.dommer-intro" section-style="--center-cols: 6; --end-cols: 3" }

Wir stellen Ihnen die verfügbaren Leistungen vor.

### Kontakt
{: layout=".dommer-contact-panel" section-slot="end" }

[Melden Sie sich bei uns](/kontakt).
```

Die Palette wird unabhängig mit `variant-dommer` gewählt. Das Pattern selbst
funktioniert auch mit anderen Variants und enthält keine eigenen Farbwerte.
Die ursprüngliche Bildbegrenzung ist am vorhandenen Modifier hinterlegt;
ein weiteres `--dommer-*`-Token wird dafür nicht benötigt.
