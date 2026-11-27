---
description: Richtet die Tagesbezeichnungen einer Öffnungszeiten-Tabelle aus und trennt die Zeitangaben mit Linien.
---

# Öffnungszeiten

Der Style `style-open-hours` gehört zu einem `table`-Element.
Weise ihn der Markdown-Tabelle über eine Kramdown-Attributliste zu.
Der optionale Modifier `open-hours-dark` aktiviert das dunkle Farbschema.

## Markdown

```markdown
| Wochentag | Sprechzeit |
| --- | --- |
| Montag | 09:00–17:00 Uhr |
| Dienstag | 09:00–15:00 Uhr |
{: .style-open-hours .open-hours-dark }
```

## HTML mit Zeilenüberschrift

Mit `th scope="row"` kann der Wochentag als Zeilenüberschrift
ausgezeichnet werden. Der Style richtet diese Überschrift am Zeilenanfang aus.

```html
<table class="style-open-hours">
  <tbody>
    <tr>
      <th scope="row">Montag</th>
      <td>09:00–17:00 Uhr</td>
    </tr>
  </tbody>
</table>
```

[Zugehöriger SCSS-Style](_style-demonstration.scss)
