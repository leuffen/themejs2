---
description: Richtet die Tagesbezeichnungen einer Öffnungszeiten-Tabelle aus und trennt die Zeitangaben mit Linien.
---

# Öffnungszeiten

Der Style `style-open-hours` gehört zu einem `table`-Element. Kennzeichne
den Wochentag in jeder Zeile mit `th scope="row"`. Der optionale Modifier
`open-hours-dark` aktiviert das dunkle Farbschema für diese Tabelle.

```html
<table class="style-open-hours open-hours-dark">
  <tbody>
    <tr>
      <th scope="row">Montag</th>
      <td>09:00–17:00 Uhr</td>
    </tr>
  </tbody>
</table>
```

[Zugehöriger SCSS-Style](_style-demonstration.scss)
