# Includes und Website-Rahmen

`docs/_includes/` und `_root/docs/_includes/` verwenden die aktuelle Struktur von Osman2.
Die alten Verzeichnisse `el/`, `do/` und `part/` entfallen.
`docs/_includes/_styles/` bleibt ausschließlich für die GitHub-Pages-Demo erhalten.

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
| `_styles/<variante>/navbar.html`, `_styles/<variante>/footer.html` | Austauschbare Rahmen nur in `docs/` |

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

## 2. Demo-Varianten und feste Kundenlayouts

Nur die GitHub-Pages-Demo unter `docs/` wählt Navbar und Footer über Frontmatter:

```yaml
layout: website
use_navbar: osman
use_footer: mueller
```

Die Dateien liegen unter `docs/_includes/_styles/osman/navbar.html` und
`docs/_includes/_styles/mueller/footer.html`. Ohne Auswahl gilt jeweils `default`.
`use_navbar: false`, `use_footer: false` und `skip-navbar: true` werden ausschließlich
in den Demo-Layouts ausgewertet; `layout: blanco` ist dort rahmenlos.
Verfügbar sind die Navbar-Varianten `default`, `osman`, `unify` sowie die
Footer-Varianten `default`, `osman`, `mueller`, `raven`, `unify`.

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
Kategorie-Seiten verwenden `layout: index`, das die Unterseiten als Karten ausgibt.
Eltern mit Unterpunkten öffnen das Untermenü; die Kategorie selbst wird dabei nicht als Link ausgegeben.
Nur die Theme-Demo setzt `navigation_root: pages`, weil ihre Kategorien unter `docs/pages/` liegen.

## 4. Layout-Kette und Vorlage

Die gemeinsame Kette lautet `10_blanc` → `20_body` → `50_navbar` → `60_footer` → `70_main`.
Die bisherige Stufe `30_script` ist in `20_body` integriert.
`index`, `legal/legal`, `default` und `website` ergänzen die übernommenen Osman2-Layouts;
vorhandene Artikel- und Collection-Layouts bleiben nutzbar.
Die Rahmenvarianten liegen ausschließlich unter `docs/_includes/_styles/`;
`_layouts/alternatives/` und zusätzliche Rahmenfragmente entfallen in beiden Umgebungen.
`_root` enthält dieselben fachlichen Includes, Logos und Beispieldaten.
Der gewählte Website-Rahmen ist dort fest in die beiden Layout-Dateien integriert.
Unter `_root/docs/_src/style.scss` wird nur das gewählte Osman-Theme geladen.
