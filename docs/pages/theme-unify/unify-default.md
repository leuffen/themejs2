---
layout: website
body_class: theme-unify
title: Unify – Default Elements
description: "Absätze, Textauszeichnungen und Default-Elemente im Theme Unify."
use_navbar: unify
use_footer: unify
ptags:
  - business
  - subnav
pid: site
---

<!-- Vergleicht die Default-Elemente in einem einzigen NTL-Block ohne untergeordnete Überschriften. -->

## Default Elements
{: #typografie-defaults layout="ntl-2col" section-style="--cols: 12;" }

Dieser Abschnitt zeigt die Standarddarstellung des aktiven Themes mit Umlauten Ä Ö Ü, ß, Ziffern 0123456789 und Satzzeichen. Ein längerer Absatz macht Zeilenhöhe, Textumbruch und Abstände auch auf schmalen Bildschirmen vergleichbar.

Ein zweiter Absatz zeigt den Abstand zwischen zwei aufeinanderfolgenden Textblöcken.

Ein einleitender Absatz mit der Typografie-Klasse `.lead`.
{: .lead }

Normaler Text, **starke Betonung (strong)**, <b>Fettdruck (b)</b>, *Betonung (em)*, <small>Kleindruck (small)</small>, <mark>markierter Text (mark)</mark> und `Inline-Code` im selben Absatz.

[Beispiellink zum Beginn der Typografie-Section](#typografie-defaults) – auch mit Maus und Tastatur fokussieren.

Kleiner Text über die Klasse .small.
{: .small }

Gedämpfter Text über .muted.
{: .muted }

Gedämpfter Text über .text-muted.
{: .text-muted }

Sekundärer Fließtext über .text-body-secondary.
{: .text-body-secondary }

**Ungeordnete Liste**

<!-- Ohne Listenklassen bleibt sichtbar, welche Marker und Einzüge das Theme standardmäßig verwendet. -->

- Erster Eintrag ohne zusätzliche Klasse
- Ein längerer Eintrag, der auf schmalen Bildschirmen über mehrere Zeilen läuft und den Einzug der Folgezeilen sichtbar macht
- Eintrag mit Unterliste
    - Erster verschachtelter Eintrag
    - Zweiter verschachtelter Eintrag

**Geordnete Liste**

1. Erster Schritt ohne zusätzliche Klasse
2. Ein längerer zweiter Schritt zur Prüfung von Nummerierung, Textumbruch und Einzug auf mobilen Geräten
3. Schritt mit Unterliste
    1. Erster Teilschritt
    2. Zweiter Teilschritt

**Definitionsliste**

<!-- Native Definitions-Tags prüfen dl, dt und dd unabhängig von Markdown-Parser-Erweiterungen. -->

<dl>
  <dt>Typografie</dt>
  <dd>Darstellung und Rhythmus einzelner Textelemente.</dd>
  <dt>Theme</dt>
  <dd>Farben, Schriftwahl und weitere gemeinsame Gestaltungswerte.</dd>
</dl>

**Zitat und Code**

> Ein Zitat zeigt seinen eigenen Abstand, seine Schriftgröße und die Gestaltung des Zitatbereichs.
>
> Ein zweiter Absatz prüft den Rhythmus innerhalb des Zitats.

```javascript
// Kurzes Beispiel zur Darstellung eines mehrzeiligen Codeblocks.
const theme = 'aktives Theme';
const elements = ['p', 'strong', 'ul', 'ol', 'table'];
```

**Trennlinie**

Text vor der horizontalen Linie.

<hr>

Text nach der horizontalen Linie.

**Figure und Bildunterschrift**

<!-- Eine Figure kann auch ein Textbeispiel enthalten; so prüft sie die nativen Styles ohne externe Bildabhängigkeit. -->

<figure>
  <blockquote>Eine zusammengehörige Abbildung oder Textprobe mit eigener Beschriftung.</blockquote>
  <figcaption>Beschriftung über das native Element figcaption.</figcaption>
</figure>

Beschriftung über die Klasse .figure-caption.
{: .figure-caption }

**Native Basistabelle**

| Element | Beispiel | Anzahl |
| --- | --- | --- |
| Link | Verweis im Text | 1 |
| Absatz | Fließtext mit **Betonung** | 2 |
| Liste | Einträge mit Zeilenumbruch | 3 |

**Tabelle mit Basisklasse**

<!-- Nur die vorhandene Basisklasse aktivieren; Modifier wie striped oder bordered gehören nicht zu diesem Vergleich. -->

| Element | Beispiel | Anzahl |
| --- | --- | --- |
| Link | Verweis im Text | 1 |
| Absatz | Fließtext mit **Betonung** | 2 |
| Liste | Einträge mit Zeilenumbruch | 3 |
{: .table }
