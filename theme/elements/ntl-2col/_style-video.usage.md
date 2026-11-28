---
description: Breite Medienbühne mit überlagerter Beschreibung und weiterführendem Link.
---

# Medium mit Handlungsfläche

## Markdown

```markdown
## Einblick in unsere Arbeit
{: layout="ntl-2col.style-video" .header }

#[figure.video-stage slot="bottom" > <img src="./einblick.jpg" alt="Einblick in unsere Arbeit"><figcaption><strong>So arbeiten wir</strong><p>Lernen Sie unseren Ablauf kennen.</p><a href="./video.html">Video ansehen</a></figcaption>]
```

## Verwendung

Die Überschrift liegt in `header`; die semantische Figure nutzt den
vollbreiten `bottom`-Slot. Der ContentPane-Shortcut steht auf einer
eigenen Zeile. Die verschachtelte Figure ist hier nötig, um Bild und
Caption als eine Medienbeschreibung zu verbinden.

Desktop legt die Caption über das Motiv, mobil folgt sie unter dem Bild.
Ohne Bild bleibt die Caption als eigenständige Handlungsfläche erhalten.
Der Style kann beispielsweise einen Erklärfilm oder einen bebilderten
Einblick verlinken; er lädt keinen externen Player. Keine eigenen Modifier.

[Zugehöriger Style](_style-video.scss)
