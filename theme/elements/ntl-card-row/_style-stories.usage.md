---
description: Zeigt Bildgeschichten mit optionaler horizontaler Leitkarte und zugehöriger Aktion.
---

# Bildgeschichten

`style-stories` verbindet Bild, Titel, Text und Aktion zu einer Story-Card.
Die Child-Klasse `is-featured` aktiviert am Desktop eine Bild/Text-Komposition
innerhalb dieser Card. Sie ändert keine Spaltenbreite; dafür steht `--cols`
am jeweiligen Unterabschnitt. Mobil bleibt Bild über Text erhalten.

`is-featured` ist die bestehende dokumentierte Child-Klasse; sie wird über
`section-class` an die erzeugte Card übertragen. Die übrigen Cards verwenden
denselben Inhaltsvertrag ohne den Modifier.

## Markdown mit Content Pane

```markdown
## Einblicke in unsere Arbeit
{: layout="ntl-card-row.style-stories" section-style="--cols: 6;" }

### Ein gemeinsamer Anfang
{: section-class="is-featured" section-style="--cols: 12;" }

![Projektarbeit](/assets/projekt.jpg)

So ist aus einer Idee ein gemeinsames Projekt entstanden.

[Die Geschichte lesen](/einblicke/projekt.html)
{: slot="footer" }

### Ein weiterer Schritt

![Fortschritt](/assets/fortschritt.jpg)

Was wir daraus gelernt haben.

[Weiterlesen](/einblicke/fortschritt.html)
{: slot="footer" }
```
