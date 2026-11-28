---
description: Ordnet nummerierte Leistungsgruppen mit Titel, Beschreibung und optionalem Link an.
---

# Nummerierte Inhaltsgruppen

`focus-list` nimmt normale Content-Pane-Sections auf und nummeriert sie.
Ein Link in der Unterüberschrift macht die ganze Zeile klickbar.
`xl:desktop` stellt Titel und Beschreibung nebeneinander dar;
`aside` behält die kompakte Darstellung in einer schmalen Spalte.

```markdown
## Leistungen
{: layout="ntl-2col" }

---
{: layout=".focus-list" .xl:desktop }

#### [Beratung](/beratung)

Gemeinsam klären wir die nächsten Schritte.

#### [Begleitung](/begleitung)

Wir unterstützen Sie während der Umsetzung.
```

Das bestehende Light-DOM-Muster bleibt als editierbarer Section-Inhalt unter
Misc; es registriert keine eigene Web Component.
