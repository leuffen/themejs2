---
description: Ordnet zwei Formularfelder und einen Button mobil gestapelt und auf Desktop in einer Zeile an.
---

# Kompaktes Lead-Formular

`hero-form` gestaltet eine vorhandene Formularkomposition.
`xl:desktop` aktiviert die horizontale Darstellung über TrunkJS Responsive.
Der vorhandene `text-block`-Pre-Parser von Content Pane erzeugt die einzelnen
Controls aus jeweils einer Shortcut-Zeile.

```markdown
## Rückruf anfordern
{: layout="ntl-2col.style-form" }

### Ihre Kontaktdaten
{: layout=".hero-form" .xl:desktop }

#[nte-input type="text" name="name" label="Name"]
#[nte-input type="email" name="email" label="E-Mail"]
#[button type="submit" class="btn btn-primary" > Anfragen]
```

Validierung, Submit und Versand bleiben Aufgabe des umgebenden Formulars.
Das Pattern ergänzt ausschließlich die Anordnung der vorhandenen Controls.
