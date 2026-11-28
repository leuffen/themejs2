---
description: Ordnet Wochentage und Zeiträume als kompakte Öffnungszeiten-Tabelle an.
---

# Öffnungszeiten

Weise `style-open-hours` der Tabelle zu. Die erste Spalte enthält den Tag,
die letzte den Zeitraum. Mehrere Zeiten und Zeilenumbrüche bleiben möglich.

`open-hours-compact` entfernt den vertikalen Zellenabstand.
`open-hours-dividers` ergänzt Trennlinien zwischen den Tagen.
Beide Modifier lassen sich kombinieren und ändern keine Daten.

## Markdown

```markdown
## Sprechzeiten
{: layout="ntl-2col" }

| Wochentag | Sprechzeit |
| --- | --- |
| Montag | 09:00–13:00 · 14:00–17:00 |
| Dienstag | 09:00–13:00 |
{: .style-open-hours .open-hours-compact .open-hours-dividers }
```

## HTML mit Zeilenüberschrift

```html
<table class="style-open-hours">
  <tbody>
    <tr>
      <th scope="row">Montag</th>
      <td>09:00–13:00 Uhr</td>
    </tr>
  </tbody>
</table>
```
