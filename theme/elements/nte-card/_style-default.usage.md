---
description: Stellt eine eigenständige Karte mit Bild, Header, Content und Footer dar.
---

# Eigenständige Karte

`nte-card` verwendet automatisch `style-default`. Direkte Bilder werden dem
`image`-Slot zugeordnet; explizite Slots sind ebenfalls möglich. Der Style
verwendet einen Wrapper-Abstand und einen unabhängigen Regions-Gap aus den
vorhandenen Nextrap-Tokens. Das Titelbild reicht bis an die Rahmenkanten.

Die vorhandenen Nextrap-Modifier `with-image-fullsize`,
`with-image-overlay`, `with-image-bleed`, `with-header-bleed`,
`with-content-bleed` und `with-footer-bleed` bleiben verfügbar.
Die Alias-Klassen `img-fullsize`, `img-overlay` und `with-region-bleed`
werden durch die Komponenten-API bereitgestellt. Bleed beachtet nur die
tatsächlich belegten Slots.

## Markdown mit Content Pane

```markdown
## Einblick
{: layout="nte-card" }

![Einblick in das Projekt](/assets/einblick.jpg)

Ein kurzer Überblick über das Ergebnis.

[Weiterlesen](/einblicke.html)
{: slot="footer" }
```

## Bild-Overlay

```markdown
## Projektgeschichte
{: layout="nte-card.with-image-overlay" }

![Projekt](/assets/projekt.jpg)

Ein kurzer Text auf dem Bild.

[Die Geschichte lesen](/einblicke/projekt.html)
{: slot="footer" }
```
