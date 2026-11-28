---
description: Einleitung und semantische Feature-Liste in einer gemeinsamen Fläche.
---

# Einleitung mit Nutzenraster

## Markdown

```markdown
## Ihre Vorteile
{: layout="ntl-2col.style-feature-grid" section-style="--cols: 5;" }

Die wichtigsten Eigenschaften auf einen Blick.

- **Übersichtlich** – alle Informationen an einem Ort.
- **Flexibel** – für unterschiedliche Arbeitsabläufe.
- **Direkt** – kurze Wege zur passenden Aktion.
{: .aside .feature-card-grid }
```

## Verwendung

Die Einleitung bleibt in `main`, die direkte Liste mit
`aside feature-card-grid` füllt den zweiten Bereich. Desktop zeigt
das Listenraster zweispaltig, mobile und mittlere Modi einspaltig.
Das funktioniert für Produktvorteile und Dienstleistungsschwerpunkte.

Eine optionale Illustration mit `feature-plane` ist rein dekorativ und
wird nur auf Desktop angezeigt. Keine eigenen Host-Modifier;
`reverse-desktop` bleibt eine dokumentierte Nextrap-Ausnahme.

[Zugehöriger Style](_style-feature-grid.scss)
