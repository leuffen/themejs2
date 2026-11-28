# Includes und Website-Rahmen

`docs/_includes/` und `_root/docs/_includes/` verwenden die aktuelle Struktur von Osman2.
Die alten Verzeichnisse `el/`, `do/` und `part/` entfallen.
Die GitHub-Pages-Demo verwendet feste Website-Layouts.

| Pfad relativ zu `_includes/` | Aufgabe |
| --- | --- |
| `components/contact/address.html` | Adresse, optional `standort`, `show_phone`, `show_fax`, `show_email` |
| `components/site/opening-hours.html` | Tabelle aus `site.data.openhours.table` oder `hours` |
| `components/navigation/main.html` | Hauptmenü aus Verzeichnishierarchie, `tag`, `root`, `max_depth` |
| `components/navigation/footer.html` | Listenpunkte für Footer, `tag` oder `items` |
| `components/navigation/footer-flat.html` | Flache Footer-Liste mit `ptag` |
| `components/navigation/section-cards.html` | Karten für direkte Unterseiten |
| `components/navigation/tree.html` | Erweiterte rekursive Baumdarstellung |
| `components/navigation/sitemap-table.html` | Sitemap-Tabelle |
| `components/navigation/language-list.html` | Sprachwahl |
| `components/navigation/tag-links.html` | Links mit einem bestimmten Tag |
| `components/posts/` | Vorhandene Blog-Vorschauen |
| `helpers/i18n/translate.html` | Text mit `key`, optional `lang` und `fallback` |
| `helpers/urls/pagebuilder.html` | URL zum Bearbeiten der aktuellen Seite |
| `helpers/urls/page.html` | Sprachabhängige Seiten-URL |
| `helpers/text/remove-line-breaks.html` | Textaufbereitung |
| `fragments/loader.html` | Seitenweiter Loader |

## 1. Standardseite

Eine Seite verwendet `layout: website-default`; Navbar, Page-Header und Footer
erscheinen standardmäßig. Die Werte `show_navbar`, `show_title` und `show_footer`
können je Seite auf `false` gesetzt werden.
Das ausführbare Beispiel liegt unter `docs/pages/includes.md` und ebenso in `_root/docs/pages/includes.md`.

```liquid
{% include components/contact/address.html %}
{% include components/site/opening-hours.html %}
```

Adressen liegen wie bei Osman2 unter `site.data.general.standorte.default`.
Die bisherige flache Standardadresse wird weiterhin unterstützt.
Leuffen-Logos liegen unter `assets/leuffen/` und werden aus beiden Umgebungen identisch eingebunden.

## 2. Demo-Varianten und feste Kundenlayouts

Wähle das passende Demo-Layout im Frontmatter der Endseite:

```yaml
layout: website-raven
```

Die vorhandenen Kombinationen stehen in [Layouts](docs/_layouts/__INDEX.md).
Das Theme-Profil kann unabhängig gewählt werden.

`_root/` ist die Vorlage für Kunden-Repositories. Dort steht genau eine Navbar direkt
in `docs/_layouts/50_navbar.html` und genau ein Footer direkt in
`docs/_layouts/60_footer.html`, aktuell aus der Osman-Variante übernommen.
Individuelle Änderungen erfolgen direkt in diesen beiden Dateien.
Es gibt dort keine Variantenauswahl, Ausblendschalter, Theme-Switcher-Abhängigkeit
oder alternativen Rahmenkopien. Das schlanke `blanco`-Layout verwendet direkt
`20_body` und benötigt deshalb ebenfalls keine Umschaltlogik.

## 3. Navigation und Kategorie-Seiten

Die Hauptnavigation verwendet wie Osman2 `ptags: [nav]` und die Verzeichnishierarchie:
`leistungen/index.md` ist die Kategorie, `leistungen/diagnostik.md` eine direkte Unterseite.
Beide tragen `ptags: [nav]`; `order` bestimmt die Reihenfolge, `nav_title` einen abweichenden Menütitel.
Kategorie-Seiten können `components/navigation/section-cards.html` direkt verwenden.
Eltern mit Unterpunkten öffnen das Untermenü; die Kategorie selbst wird dabei nicht als Link ausgegeben.
Die Demo-Websites liegen unter `docs/themes/<name>/`. Jede Seite setzt
`navigation_root: themes/<name>` und verwendet `ptags: [nav, footer-nav]`.
Die Demo-Startseite verlinkt alle veröffentlichten Beispiele mit ihrem Dateipfad.

## 4. Layout-Kette und Vorlage

Die Demo verwendet `10_blanc` → `20_body` → `blank` → `website-*`.
Die Kundenvorlage verwendet ihre feste Navbar- und Footer-Kette.
Die bisherige Stufe `30_script` ist in `20_body` integriert.
Vorhandene Artikel- und Collection-Layouts bauen auf `website-default` auf.
Die Website-Layouts enthalten ihr Frame-Markup direkt. Ein anderes Layout wird
über `layout` gewählt; Header- und Footer-Includes oder Dispatcher entfallen.
`_root` enthält dieselben fachlichen Includes, Logos und Beispieldaten.
Der gewählte Website-Rahmen ist dort fest in die beiden Layout-Dateien integriert.
Unter `_root/docs/_src/style.scss` wird nur das gewählte Osman-Theme geladen.
