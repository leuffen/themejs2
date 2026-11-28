---
description: Komponiert Leistungen oder Vorteile als flache Zellen mit Icons und Trennlinien.
---

# Leistungsliste

`style-feature-list` verwendet normale Card-Unterabschnitte für Icons,
Titel und Text. `--cols` bestimmt die Desktop-Breite. Die mobile Darstellung
ist eine lineare Liste. Es gibt keine feste Zahl von Einträgen.

Ein Icon kann als eigene Shortcut-Zeile mit `feature-icon` stehen. Dafür muss
`text-block` am `tj-content-pane` aktiviert sein. Bilder im `image`-Slot sind
eine Alternative. Eigene Modifier sind nicht erforderlich.

## Markdown mit Content Pane

```markdown
## Was wir anbieten
{: layout="ntl-card-row.style-feature-list" section-style="--cols: 3;" }

### Beratung

#[i class="bi bi-chat-dots feature-icon" aria-hidden="true"]

Wir beantworten Ihre Fragen.

### Begleitung

#[i class="bi bi-check-circle feature-icon" aria-hidden="true"]

Wir bleiben während der Umsetzung erreichbar.
```
