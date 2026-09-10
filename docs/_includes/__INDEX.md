# Include-Index

| Datei | Funktion |
| --- | --- |
| `_styles/default/navbar.html` | Allgemeiner Demo-Header mit aktueller Navigations-API. |
| `_styles/default/footer.html` | Allgemeiner Demo-Footer. |
| `_styles/osman/navbar.html` | Osman-Header, auch in der Raven-Demo verwendet. |
| `_styles/osman/footer.html` | Aktueller Osman-Footer. |
| `_styles/mueller/footer.html` | Müller-Footer. |
| `_styles/raven/footer.html` | Raven-Footer. |
| `_styles/unify/navbar.html` | Unify-Header mit mobiler Navigation. |
| `_styles/unify/footer.html` | Unify-Footer. |
| `dist/README.md` | Hinweis/Dokumentation für generierte oder ausgelieferte Include-Artefakte. |
| `do/link.html` | Hilfs-Include zur Link-Erzeugung bzw. Link-Normalisierung. |
| `do/remove-line-breaks.html` | Entfernt Zeilenumbrüche aus übergebenem Inhalt. |
| `do/trans.html` | Kleine Transformations-/Übersetzungshilfe für Include-Inhalte. |
| `el/address.html` | Rendert Adressdaten. |
| `el/lang-chooser-list.html` | Rendert eine Sprachwahl als Liste. |
| `el/navbar.html` | Allgemeiner Navbar-Baustein. |
| `el/navtree.html` | Rendert die hierarchische Navigationsstruktur. |
| `el/openhours.html` | Rendert Öffnungszeiten. |
| `el/pagebuilder-link.html` | Rendert bzw. erzeugt einen Pagebuilder-Link. |
| `el/post-preview.html` | Vorschau eines einzelnen Posts. |
| `el/post-previews-by-name.html` | Rendert Post-Vorschauen anhand vorgegebener Namen. |
| `el/post-previews-per-category.html` | Gruppiert/rendert Post-Vorschauen nach Kategorie. |
| `el/post-previews.html` | Rendert eine allgemeine Liste von Post-Vorschauen. |
| `el/sitemap-table.html` | Rendert Sitemap-Inhalte tabellarisch. |
| `el/tag-link-list.html` | Rendert eine Linkliste aus Tags. |
| `el/TODO.md` | Arbeitsnotizen für Element-Includes. |
| `global.md` | Globaler Markdown-Inhalt, der im Hauptlayout eingebunden wird. |
| `part/loader.html` | Loader-/Runtime-Baustein, der im Body-Layout eingebunden wird. |

`use_navbar` und `use_footer` im Seiten-Frontmatter wählen diese Demo-Varianten;
ohne Angabe gilt `default`, mit `false` entfällt der Baustein.
`_styles/` wird nicht nach `_root` kopiert: Das ausgewählte Markup wird in die
aktiven Kundenlayouts übertragen, siehe [Architektur](../../ARCHITECTURE.md#übergang-von-docs-zum-kundenprojekt).
