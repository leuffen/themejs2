---
description: Ordnet Werkzeuge, Integrationen oder bildgestützte Angebote als Mediengalerie an.
---

# Mediengalerie

`style-tool-gallery` verwendet Bildkacheln mit dem Verhältnis 4:3 und einem
kompakten Titel/Text-Bereich. Die Bilder bleiben Autoreninhalt und gelangen
in den `image`-Slot. `--cols` legt die Desktop-Breite fest; die Komponente
stapelt die Karten auf schmalen Ansichten. Es sind keine eigenen Modifier
oder eine feste Anzahl von Einträgen erforderlich.

## Markdown mit Content Pane

```markdown
## Unsere Werkzeuge
{: layout="ntl-card-row.style-tool-gallery" section-style="--cols: 3;" }

### Planung

![Planungsansicht](/assets/planung.jpg)

Gemeinsam den Überblick behalten.

### Austausch

![Nachrichtenansicht](/assets/austausch.jpg)

Fragen direkt im Projekt klären.
```
