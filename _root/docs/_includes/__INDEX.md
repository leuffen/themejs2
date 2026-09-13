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
