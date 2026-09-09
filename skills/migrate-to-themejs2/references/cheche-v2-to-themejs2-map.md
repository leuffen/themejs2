# Cheche V2 nach ThemeJS2

## Referenzstände

Die Analyse basiert auf folgenden Default-Branch-Ständen:

| Rolle | Repository | Stand |
|---|---|---|
| Alte Projektform | `dermatthes/leu-web-scheche-k30-v2` | GitHub-Tree `d361c2b63430ad4ccaa1c2c72157687767207de4` |
| Neue Projektform | `dermatthes/leu-web-osman2` | Commit `8441247e38e9dda403b42a41f45446b48bd7dd07`, GitHub-Tree `919bbb3ce70fec565c7fc312461d547300c4edfd` |
| ThemeJS2-Vorlage | `leuffen/themejs2` | Commit `54f6c16f201d9c5f5dd2937943cb0a2ebbc3795` |

Die Kundeninhalte dieser Repositories sind Beispiele, keine Vorlage für andere Kunden. Für eine neue Migration ist immer der konkrete Quellstand zu inventarisieren.

## Strukturzuordnung

| Cheche-/ThemeJS1-Struktur | ThemeJS2-Struktur | Regel |
|---|---|---|
| `webpack.config.js` | `vite.config.ts` | Vite-Konfiguration aus dem Zielgerüst verwenden und projektspezifische Entry-Points prüfen. |
| Root-`src/`, insbesondere `src/index.ts` | `docs/_src/index.ts` | Das referenzierte `docs/_src/` vollständig als Vite-Quelle übernehmen, benötigte Website-Funktionen explizit einordnen und Root-`src/` nach der Klassifikation entfernen. |
| `src/style*.scss` | `docs/_src/style.scss` und ThemeJS2-Theme | Mit der referenzierten `docs/_src/style.scss` beginnen und nur weiterhin benötigte allgemeine Designregeln in ThemeJS2-Tokens/Varianten übersetzen; keine redaktionellen Inhalte in SCSS übernehmen. |
| alte `package.json` mit Workspaces oder ThemeJS1-Paketen | referenzierte `package.json` | Aktive Workspaces entfernen; unter `dependencies` nur `@leuffen/themejs2` mit veröffentlichter semantischer Version führen und Buildwerkzeuge unter `devDependencies` halten. |
| `docs/_layouts/0_blanc.html` | `docs/_layouts/10_blanc.html` | Head, Metadaten, Kundendaten und notwendige Integrationen bewahren; ThemeJS2-Loader verwenden. |
| `docs/_layouts/1_body.html` | `docs/_layouts/20_body.html` | Body-Class und Scheme auf den Ziel-Theme-Vertrag abbilden. |
| `docs/_layouts/2_script.html` | kein eigenes Ziellayout; Verhalten in `10_blanc.html`, `20_body.html` oder `docs/_src/index.ts` einordnen | Alte Template-/Runtime-Injektion klassifizieren und nur die weiterhin benötigte Funktion an der passenden Target-Stelle übernehmen. |
| `docs/_layouts/3_1_navbar.html` | `docs/_layouts/50_navbar.html` | Navbar aus der gewählten ThemeJS2-Vorlage eins zu eins übernehmen; ausschließlich das Logo bei Bedarf anpassen. Keine alten kundenspezifischen Navbar-Anpassungen übertragen. |
| `docs/_layouts/3_2_footer.html` | `docs/_layouts/60_footer.html` | Footer-Inhalte, Links und Kundendaten unverändert erhalten. |
| `docs/_layouts/3_3_main.html` | `docs/_layouts/70_main.html` | Gemeinsamen ThemeJS2-Content-Pane-Vertrag verwenden. |
| `docs/_layouts/article.html` | `default`, `website` oder ein bestehendes fachliches Layout | Nach Seitenrolle entscheiden; sichtbare Headline und Bilddaten bewahren. |
| `docs/_layouts/legal.html` | `docs/_layouts/legal/legal.html` | Rechtstext unverändert übernehmen; nur Wrapper und Layoutsteuerung ändern. |
| `docs/pages/*.de.md` und Fachordner | entsprechende Zielseiten | Dateinamen dürfen sich ändern, wenn `.migration/page-map.json` die eindeutige Zuordnung und dieselbe Route nachweist. |
| `docs/_data/` | `docs/_data/` | Kundenwerte erhalten und nur ThemeJS2-spezifische Schlüssel ergänzen; sichtbare Öffnungszeiten als `openhours.table` mit `day` und `time` abbilden. |
| `docs/assets/` | `docs/assets/` | Redaktionelle Medien bytegleich kopieren; `dist/` neu bauen. |

## Include-Zuordnung

Die aktuelle Target-Struktur gliedert Includes nach Verantwortung. Migriere Aufrufe und relative Includes auf diese Pfade; kopiere die alten Verzeichnisse nicht als Parallelstruktur.

| Alte Cheche-/frühere Osman-Pfade | Aktueller Target-Pfad | Regel |
|---|---|---|
| `docs/_includes/el/address.html` | `docs/_includes/components/contact/address.html` | Kundendaten und optionale Felder erhalten; Aufrufparameter auf den dokumentierten Include-Vertrag abbilden. |
| `docs/_includes/el/navbar.html`, `nav2.html`, `navtree*.html` | `docs/_includes/components/navigation/main.html` und `docs/_layouts/50_navbar.html` | Vorlagen-Include und Navbar unverändert übernehmen; nur das Logo darf bei Bedarf angepasst werden. Navigationsziele und Reihenfolge über die vorgesehenen Datenquellen erhalten, ohne Darstellung oder Baumaufbereitung umzubauen. |
| `docs/_includes/el/post-preview*.html`, `sitemap-table.html`, `tag-link-list.html` | bei direkten Unterseiten `docs/_includes/components/navigation/section-cards.html`, sonst vorhandene passende Komposition | Nach Inhaltsrolle zuordnen; keine pauschale Ersetzung bei Posts, Tags oder Tabellen. |
| `docs/_includes/el/pagebuilder-link.html` | `docs/_includes/helpers/urls/pagebuilder.html` | Ergebnis-URL und Sprachparameter erhalten. |
| `docs/_includes/do/trans.html` | `docs/_includes/helpers/i18n/translate.html` | Übersetzungsschlüssel, Sprache und Fallback erhalten. |
| `docs/_includes/part/loader.html` | `docs/_includes/fragments/loader.html` | Loader-Aufruf und projektspezifisches Bild prüfen. |
| alte Öffnungszeiten-Includes oder festes Tabellen-Markup | `docs/_includes/components/site/opening-hours.html` | Jede sichtbare Zeile ohne Umformulierung nach `site.data.openhours.table` übertragen und das semantische Tabellen-Include verwenden. |
| `docs/_includes/do/link.html`, `remove-line-breaks.html` und übrige alte Hilfen | kein automatisches 1:1-Ziel | Aufrufstellen klassifizieren; nur weiterhin benötigtes Verhalten in einen fachlich passenden vorhandenen Helper überführen. |

## Kicker aus Überschrift und direkt folgendem Blockquote

In alten Versionen bildeten eine H2-, H3- oder H4-Überschrift und das unmittelbar folgende Blockquote eine gemeinsame Kicker-/Überschrifteneinheit: Der Text des ursprünglichen H-Elements war der Kicker, der Blockquote-Text die eigentliche sichtbare Überschrift. Migriere genau diese Folge, indem der ursprüngliche H-Text als `data-kicker` per Kramdown am H-Element hinterlegt wird und der Blockquote-Text dessen Überschriftentext ersetzt; erhalte die H-Ebene, vorhandene IDs und andere Attribute und entferne das nun übernommene Blockquote. Beide Texte bleiben unverändert; Attributwerte müssen syntaktisch korrekt maskiert werden.

Vorher:

```markdown
### Unser Angebot

> Medizin für die ganze Familie
```

Nachher:

```markdown
### Medizin für die ganze Familie
{: data-kicker="Unser Angebot" }
```

Die Regel gilt entsprechend für `##` und `####`, ausschließlich wenn das Blockquote der nächste Inhaltsblock auf derselben Ebene ist; trennende Leerzeilen und zum Heading gehörende Kramdown-Attribute unterbrechen die Folge nicht. Steht ein Absatz, Bild, eine Liste oder ein anderer Inhaltsblock dazwischen, bleibt das Blockquote ein Blockquote. H1, H5 und H6 sowie alleinstehende oder anders zugeordnete Zitate werden nicht umgewandelt. Prüfe bei jeder Umwandlung den ursprünglichen H-Text gegen `data-kicker`, den ursprünglichen Blockquote-Text gegen den neuen H-Text und die sichtbare Reihenfolge Kicker vor Überschrift; eine generische Textsequenz-Prüfung allein weist den Attributinhalt nicht nach.

## Navigation aus der Vorlage

Das Navigationslayout `nav` beziehungsweise `docs/_layouts/50_navbar.html` und die zugehörige Navbar werden eins zu eins aus der gewählten ThemeJS2-Vorlage übernommen. Einzige zulässige Anpassung ist bei Bedarf das Logo. Verändere weder Markup, Klassen, Struktur, Verhalten noch die zugehörige Navigationsaufbereitung und übertrage keine kundenspezifischen Navbar-Anpassungen aus der alten Version in die neue Vorlage, da diese dort nicht passen. Bestehende Kundendaten und Navigationsziele bleiben über die vorgesehenen Datenquellen erhalten; erfordert dies Änderungen an der Vorlage über das Logo hinaus, halte an und kläre den Konflikt.

## Mehrere Bilder

Bleiben in einer Inhaltsrolle mindestens zwei Bilder direkt aufeinander bezogen, erhalte ihre Reihenfolge, URLs und Alt-Texte und setze unmittelbar nach der Bildfolge das `nte-image`-Layout. Innerhalb einer `ntl-2col`-Seitenspalte lautet das Target-Muster:

```markdown
![Erster unveränderter Alt-Text](unveränderte-url-1)
![Zweiter unveränderter Alt-Text](unveränderte-url-2)
{: layout="nte-image" .aside }
```

Die Gruppe aktiviert den von `nte-image` bereitgestellten Slider. Einzelbilder bleiben normales Markdown, sofern ihre Inhaltsrolle keine vorhandene `nte-image`-Funktion benötigt.

## Layoutrollen

Die folgende Tabelle ist eine Entscheidungsstütze, keine blinde Suchen-und-Ersetzen-Liste:

| Alte Steuerung | Typische ThemeJS2-Komposition | Vor Entscheidung prüfen |
|---|---|---|
| `#sec-card-2col`, `#sec-card-feature` | `ntl-2col.style-default` mit vorhandenen Modifiern | Reihenfolge von Text/Bild, Slots, volle Breite, Reverse-Verhalten |
| `#sec-multi-card` | vorhandenes Card-Layout mit vorhandenen NTE-Cards | Kartenanzahl, Autoren-Markup und vorhandener Komponentenvertrag |
| `accordion()` | `nte-accordion.style-default` | Heading-Ebenen und Kramdown-Body unverändert |
| `#hero-max`, `#hero-title-small` | vorhandene `ntl-hero`-Variante oder vorhandenes Ziel-Layout | Bildrolle, CTA, Headline und Overlay; keine neue Variante ohne Bedarf/Freigabe |
| `#cta-base`, `#cta-form` | vorhandenes Layout mit normalem Markdown beziehungsweise vorhandener Formularfunktion | Link-/Formulardaten, Datenschutz und Runtime-Abhängigkeiten |
| `#sec-testimonial-ribbon` | vorhandene Testimonial-/2-Spalten-Komposition | Zitat, Attribution, Portrait und semantische Reihenfolge |

Ordne zuerst die Inhaltsrolle und dokumentierten Slots zu. Eine optische Position allein rechtfertigt weder einen falschen Slot noch eine neue Komponente. Wenn keine vorhandene Komposition den Inhalt ohne Textänderung aufnehmen kann, gilt die Abbruchbedingung aus dem Migrationsvertrag.

## Dateien, die nicht als Inhalt migriert werden

Generierte Webpack-Bundles und Sourcemaps unter `docs/assets/dist/` beziehungsweise `docs/_includes/dist/` werden inventarisiert und in `.old/` erhalten, aber nicht in die Ziel-Runtime übernommen. Das Ziel-`dist/` entsteht aus `npm run build`. Abhängigkeiten unter `node_modules/` und `vendor/` werden nie kopiert oder bearbeitet.
