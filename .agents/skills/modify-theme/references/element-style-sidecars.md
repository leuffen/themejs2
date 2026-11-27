# Element-Styles und Markdown-Sidecars

Diese Referenz gilt für jeden Style unter `theme/elements/`.

| Selektor | Unterverzeichnis |
| --- | --- |
| HTML-Tag oder Web Component | Tag-Name, etwa `header/`, `ntl-hero/` oder `nte-navbar/` |
| ID | `id_<id>/`, etwa `id_footer/` |
| CSS-Klasse | `class_<klasse>/`, etwa `class_hero__specialties/` |

Lege die Styles als `_style-<name>.scss` ab. Verwende
`_style-default.scss`, wenn der Default eigene Regeln benötigt. Die
Default-Auswahl von NTL und NTE richtet sich nach dem Komponentenvertrag.
Dokumentierte Modifier gehören in die Style-Datei, zu deren Funktion sie
gehören, etwa eine optionale Umkehr der Reihenfolge.

Prüfe vor der Aufnahme eines neuen Styles die vorhandenen Styles und
Modifier des Elements. Lege den Style an, wenn seine Funktion oder
Komposition damit nicht abgedeckt ist. Farbwerte gehören zur seitenweiten
Variant in `theme/variants/`.

Zu jeder SCSS-Style-Datei gehört direkt daneben ein Markdown-Sidecar mit
demselben Basisnamen. Im YAML-Front-Matter steht ausschließlich
`description`. Beschreibe darin knapp die Funktion des Styles für die
automatisch erzeugte Übersicht. Halte unter dem Front Matter die
Verwendung, Voraussetzungen und unterstützten Modifier fest. Gib
mindestens ein konkretes Beispiel an. Ein separates System liest die
Dateien aus. Die Sidecars gehören außerhalb der Demo-Ausgabe.

## Beispiel

Für `theme/elements/ntl-2col/_style-default.scss` heißt das Sidecar
`theme/elements/ntl-2col/_style-default.md`.

~~~~markdown
---
description: Ordnet Hauptinhalt und ergänzenden Inhalt in zwei Spalten an.
---

Der Hauptinhalt steht im Slot `main`, der ergänzende Inhalt in `aside`.

```html
<ntl-2col>
  <p slot="main">Öffnungszeiten</p>
  <p slot="aside">Anfahrt</p>
</ntl-2col>
```
~~~~
