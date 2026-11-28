---
description: Gemeinsame Zweispalten-Basis für Text, Bilder und ergänzende Inhalte.
---

# Bild und Text

## Markdown

```markdown
## Gut informiert
{: layout="ntl-2col.default-framed" section-style="--cols: 7;" }

Hier steht der Haupttext mit allen wichtigen Informationen.

![Unser Team](./team.jpg)

[Mehr erfahren](./team.html)
{: .footer }
```

## Verwendung

`ntl-2col` ergänzt `style-default` automatisch. Haupttext bleibt in
`main`; direkte Markdown-Bildabsätze werden dem `aside`-Slot zugeordnet.
`header` und `footer` liegen außerhalb, `top` und `bottom` innerhalb
des Wrappers. Einzelmedien nutzen die Nextrap-API `with-media-frame(false)`.
Die gemeinsame Basis erzwingt keine vertikale Zentrierung.

| Modifier | Wirkung |
| --- | --- |
| `default-open` | Entfernt Wrapper-Innenabstand und Textspaltentrenner. |
| `default-framed` | Ergänzt Rahmen und eine angehobene neutrale Fläche. |
| `default-featured` | Hebt dieselbe Komposition mit der hellen Primärfläche hervor. |
| `default-primary` | Färbt die Textspaltenfläche und aktiviert den Spaltentrenner. |
| `default-text-first` | Zeigt mobil den Text vor dem automatischen Aside-Bild. |

Wähle höchstens einen der Flächenmodifikatoren. Die Modifier ändern keine
Slot-Sichtbarkeit. `default-text-first` ist damit kombinierbar.
Spaltenbreite über `section-style="--cols: 7;"` setzen. Ohne bewusste
Ausrichtung bleiben die Spalten unzentriert; bei Bedarf beispielsweise
`with-justify-top` verwenden. Die Bibliotheksmodifier `reverse`,
`reverse-desktop`, `with-justify-*`, `with-main-sticky-top` und
`breakout-*` sind dokumentierte Ausnahmen vom Style-Präfix.

[Zugehöriger Style](_style-default.scss)
