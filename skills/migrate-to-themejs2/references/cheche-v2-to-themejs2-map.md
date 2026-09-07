# Cheche V2 nach ThemeJS2

## Referenzstände

Die Analyse basiert auf folgenden Default-Branch-Ständen:

| Rolle | Repository | Stand |
|---|---|---|
| Alte Projektform | `dermatthes/leu-web-scheche-k30-v2` | GitHub-Tree `d361c2b63430ad4ccaa1c2c72157687767207de4` |
| Neue Projektform | `dermatthes/leu-web-osman2` | GitHub-Tree `ce56eb54a559f01055655aa5aa1bd65b36d6b9e2` |
| ThemeJS2-Vorlage | `leuffen/themejs2` | Commit `54f6c16f201d9c5f5dd2937943cb0a2ebbc3795` |

Die Kundeninhalte dieser Repositories sind Beispiele, keine Vorlage für andere Kunden. Für eine neue Migration ist immer der konkrete Quellstand zu inventarisieren.

## Strukturzuordnung

| Cheche-/ThemeJS1-Struktur | ThemeJS2-Struktur | Regel |
|---|---|---|
| `webpack.config.js` | `vite.config.ts` | Vite-Konfiguration aus dem Zielgerüst verwenden und projektspezifische Entry-Points prüfen. |
| `src/index.ts` | `docs/_src/index.ts` | Benötigte Website-Funktionen explizit importieren; ThemeJS1 nicht weiterladen. |
| `src/style*.scss` | `docs/_src/style.scss` und ThemeJS2-Theme | Designregeln in ThemeJS2-Tokens/Varianten übersetzen; keine redaktionellen Inhalte in SCSS übernehmen. |
| `docs/_layouts/0_blanc.html` | `docs/_layouts/10_blanc.html` | Head, Metadaten, Kundendaten und notwendige Integrationen bewahren; ThemeJS2-Loader verwenden. |
| `docs/_layouts/1_body.html` | `docs/_layouts/20_body.html` | Body-Class und Scheme auf den Ziel-Theme-Vertrag abbilden. |
| `docs/_layouts/2_script.html` | `docs/_layouts/30_script.html` | Alte Template-/Runtime-Injektion entfernen, soweit ThemeJS2 sie ersetzt. |
| `docs/_layouts/3_1_navbar.html` | `docs/_layouts/50_navbar.html` | Navigation semantisch und mit denselben Zielen übernehmen. |
| `docs/_layouts/3_2_footer.html` | `docs/_layouts/60_footer.html` | Footer-Inhalte, Links und Kundendaten unverändert erhalten. |
| `docs/_layouts/3_3_main.html` | `docs/_layouts/70_main.html` | Gemeinsamen ThemeJS2-Content-Pane-Vertrag verwenden. |
| `docs/_layouts/article.html` | `default`, `website` oder ein bestehendes fachliches Layout | Nach Seitenrolle entscheiden; sichtbare Headline und Bilddaten bewahren. |
| `docs/_layouts/legal.html` | `docs/_layouts/legal/legal.html` | Rechtstext unverändert übernehmen; nur Wrapper und Layoutsteuerung ändern. |
| `docs/pages/*.de.md` und Fachordner | entsprechende Zielseiten | Dateinamen dürfen sich ändern, wenn `.migration/page-map.json` die eindeutige Zuordnung und dieselbe Route nachweist. |
| `docs/_data/` | `docs/_data/` | Kundenwerte erhalten und nur ThemeJS2-spezifische Schlüssel ergänzen. |
| `docs/assets/` | `docs/assets/` | Redaktionelle Medien bytegleich kopieren; `dist/` neu bauen. |

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
