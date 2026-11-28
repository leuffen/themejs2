---
description: Zeigt Zeiträume und berufliche Stationen mobil untereinander und optional nebeneinander.
---

# Zeitlicher Verlauf

`style-timeline` stellt die erste Zelle einer Zeile über ihre Beschreibung.
Das eignet sich für berufliche Stationen oder einen Projektverlauf.
Die Tabellenkopfzeile wird in dieser Darstellung ausgeblendet.

Der Modifier `timeline-horizontal` stellt dieselben Inhalte nebeneinander.
Mit `xl:timeline-horizontal` schaltet das bereits registrierte TrunkJS
Responsive den Modifier ab XL zu. Ohne Modifier bleibt die vertikale
Darstellung erhalten, etwa in einer schmalen Aside-Spalte.

## Markdown

```markdown
## Berufliche Stationen
{: layout="ntl-2col" }

| Zeitraum | Station |
| --- | --- |
| 2018–2022 | Fachliche Weiterbildung |
| Seit 2022 | Tätigkeit in eigener Praxis |
{: .style-timeline .xl:timeline-horizontal }
```

Die Klasse wird direkt der Tabelle zugewiesen; ein zusätzlicher Wrapper ist
nicht nötig.
