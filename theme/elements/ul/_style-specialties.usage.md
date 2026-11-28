---
description: Stellt kurze Schwerpunkte als Liste oder als durch Punkte getrennte Zeile dar.
---

# Schwerpunkte

`style-specialties` gehört auf eine normale `ul`-Liste.
Der Modifier `specialties-horizontal` ordnet die Einträge in einer
umbruchfähigen Zeile mit dekorativen Trennpunkten an. Über
`xl:specialties-horizontal` aktiviert das vorhandene TrunkJS Responsive
dieselbe Darstellung erst ab XL.

## Markdown

```markdown
## Unsere Schwerpunkte
{: layout="ntl-2col" }

- Beratung
- Diagnostik
- Begleitung
{: .style-specialties .xl:specialties-horizontal }
```

Die Liste eignet sich auch für kurze Produktmerkmale oder Fachgebiete.
Ohne Modifier bleibt sie untereinander angeordnet.
