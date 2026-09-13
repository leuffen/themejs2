# Includes und Website-Rahmen

`docs/_includes/` und `_root/docs/_includes/` verwenden die aktuelle Struktur von Osman2.
Die alten Verzeichnisse `el/`, `do/`, `part/` und `_styles/` entfallen.

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
| `fragments/navbar.html`, `fragments/footer.html` | Standardrahmen |

## 1. Standardseite

Eine Seite benötigt nur `layout: website`; Navbar und Footer erscheinen automatisch.
Das ausführbare Beispiel liegt unter `docs/pages/includes.md` und ebenso in `_root/docs/pages/includes.md`.

```liquid
{% include components/contact/address.html %}
{% include components/site/opening-hours.html %}
```

Adressen liegen wie bei Osman2 unter `site.data.general.standorte.default`.
Die bisherige flache Standardadresse wird weiterhin unterstützt.
Leuffen-Logos liegen unter `assets/leuffen/` und werden aus beiden Umgebungen identisch eingebunden.

## 2. Header und Footer getrennt wählen

Diese Frontmatter ersetzt die Standardauswahl:

```yaml
layout: website
use_navbar: osman
use_footer: mueller
```

`use_navbar: false` und `use_footer: false` blenden den jeweiligen Bereich aus.
`skip-navbar: true` bleibt ebenfalls unterstützt; `layout: blanco` blendet beide Bereiche aus.
Eigene Varianten liegen unter `fragments/navbar.alt-mein-header.html` bzw.
`fragments/footer.alt-mein-footer.html` und werden mit `use_navbar: mein-header`
bzw. `use_footer: mein-footer` ausgewählt. Das Inhaltslayout muss dafür nicht geändert werden.
Die vorhandenen Varianten heißen für Navbar `default`, `osman`, `unify` und für Footer
`default`, `osman`, `mueller`, `raven`, `unify`.

## 3. Navigation und Kategorie-Seiten

Die Hauptnavigation verwendet wie Osman2 `ptags: [nav]` und die Verzeichnishierarchie:
`leistungen/index.md` ist die Kategorie, `leistungen/diagnostik.md` eine direkte Unterseite.
Beide tragen `ptags: [nav]`; `order` bestimmt die Reihenfolge, `nav_title` einen abweichenden Menütitel.
Kategorie-Seiten verwenden `layout: index`, das die Unterseiten als Karten ausgibt.
Eltern mit Unterpunkten öffnen das Untermenü; die Kategorie selbst wird dabei nicht als Link ausgegeben.
Nur die Theme-Demo setzt `navigation_root: pages`, weil ihre Kategorien unter `docs/pages/` liegen.

## 4. Layout-Kette und Vorlage

Die gemeinsame Kette lautet `10_blanc` → `20_body` → `50_navbar` → `60_footer` → `70_main`.
Die bisherige Stufe `30_script` ist in `20_body` integriert.
`index`, `legal/legal`, `default` und `website` ergänzen die übernommenen Osman2-Layouts;
vorhandene Artikel- und Collection-Layouts bleiben nutzbar.
Explizite Varianten liegen zusätzlich unter `_layouts/alternatives/`.
`_root` enthält dieselben Includes, Rahmenfragmente, Logos und Beispieldaten.
Unter `_root/docs/_src/style.scss` wird nur das gewählte Osman-Theme geladen.
