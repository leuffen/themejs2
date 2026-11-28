---
description: Feature-Abschnitt mit Bildbühne, optionalen Mockups und Linkangebot.
---

# Feature mit Medien

## Markdown

```markdown
## Eine Lösung für den Alltag
{: layout="ntl-2col.style-feature.reverse-desktop" section-style="--cols: 5;" }

Erläutern Sie den Nutzen Ihres Angebots.

- [Funktionen](./funktionen.html)
- [Anwendung](./anwendung.html)
{: .feature-links }

![Anwendung im Alltag](./anwendung.jpg)
![Produktoberfläche](./oberflaeche.png)
{: .feature-media .dots-start .lg:desktop }
```

## Verwendung

Text und Links bleiben in `main`; der direkte Bildabsatz wird `aside`.
`feature-media` aktiviert das gemeinsam geladene Medienpattern für ein
Hauptbild mit optionalem Mockup. Eine normale Bilddatei benötigt dieses
Pattern nicht. Die Komposition passt etwa zu Softwarefunktionen oder
Dienstleistungsangeboten.

Die vorhandene Utility `surface-secondary` wählt eine dunkle Feature-Fläche.
`reverse`, `reverse-desktop`, `with-justify-*` und
`with-main-sticky-top` bleiben dokumentierte Bibliotheksausnahmen.
Auf mobilen und mittleren Ansichten steht das Medium vor dem Text.
Ein optionaler `h1`-Einstieg behandelt seine Bildbühne als Dekoration und
blendet sie mobil aus; zentrale inhaltliche Bilder in einem normalen
`h2`-Feature verwenden.

[Zugehöriger Style](_style-feature.scss)
