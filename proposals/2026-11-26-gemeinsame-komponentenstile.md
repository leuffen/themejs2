# ThemeJS2 als gemeinsamer Baukasten

| Datum | Benutzername | Kurzbeschreibung |
|---|---|---|
| 2026-11-26 | dermatthes | §§ 1–6: Proposal angelegt |

## § 1 Ziel

Eine Website lädt eine gemeinsame ThemeJS2-Basis und wählt die Darstellung an jeder Komponenteninstanz per Klasse. Damit kann dieselbe Seite einen Müller-Hero, eine Raven-Zweispalte und Osman-Karten verwenden. Die Website gibt Farben und typografische Grundwerte vor. Die Demo bietet vollständige Seiten nach Seitentyp und einen Katalog zum direkten Vergleich einzelner Bausteine.

## § 2 Ausgangslage

`docs/_src/style.scss` aktiviert Müller, Osman, Raven, ePraxis und Unify über `.theme-*`-Scopes. Ein Name am Body bündelt damit Token, Basiselemente und Komponentenregeln. `docs/index.md` gruppiert die Vorschauen nach Herkunfts-Theme. Navbar und Footer haben bereits eine unabhängige Auswahl über `use_navbar` und `use_footer`; einzelne Rahmenvarianten haben eigenes Markup.

Müller, Osman und Unify verwenden für den Einstieg `ntl-hero`, Raven verwendet `ntl-2col.style-hero` mit einem Porträt im Aside-Slot. Die Migration folgt diesen Komponentenverträgen. In der Demo können alle vier Einstiege im selben fachlichen Katalog „Hero“ stehen.

## § 3 Gemeinsamer Theme-Build

| Vorgeschlagener Pfad | Inhalt |
|---|---|
| `theme/shared.scss` | Öffentlicher SCSS-Einstieg für die gemeinsame Basis |
| `theme/shared/_theme.scss` | Orchestrierung der bestehenden Layer aus `theme/_global.scss` |
| `theme/shared/_runtime-settings.scss` | Neutrale Defaults und Mapping von öffentlichen `--theme-*`-Werten auf Nextrap-`--nt-*`-Tokens |
| `theme/shared/elements/<komponente>/` | Komponenten-Entry und Partials für Default und Varianten, etwa `ntl-hero/_style-mueller.scss` |
| `theme/shared/classes/` | Wiederverwendbare Light-DOM-Muster mit semantischen Klassennamen, etwa `hero__specialties` |
| `theme/<name>.scss` | Bestehende Paketimporte und Mixins während der Übergangsphase |

Die gemeinsame Basis materialisiert Reset, Scheme, Typografie und Utilities einmal. Die Varianten verwenden Rollen wie `--nt-primary`, `--nt-surface` und `--nt-text`. Die Website kann zum Beispiel `--theme-primary` im vorhandenen `website`-Layer setzen. Markenfarben bleiben in der Website oder in Demo-Profilen, mit denen sich zusätzlich bisherige Vorschauen nachvollziehen lassen. Eine Variante steuert Geometrie und Anordnung, etwa einen Glaskasten oder das Verhältnis zwischen Bild und Text.

### § 3.1 Klassen und Komponentenverträge

Pro Instanz gilt eine Darstellungsvariante. Die Default-Darstellung folgt dem jeweiligen Nextrap-Vertrag. Bestehende Modifier für orthogonale Eigenschaften wie Umkehrung oder Ausrichtung bleiben zusätzlich kombinierbar. Variantenregeln greifen nur auf dem zuständigen Element und dessen dokumentierten Slots, Parts oder Variablen. Die Herkunftsnamen bezeichnen wiederverwendbare Darstellungen.

| Herkunft | Heute | Vorgeschlagene Auswahl |
|---|---|---|
| Default | Mehrere Theme-spezifische Defaults | Gemeinsame neutrale Baseline je Komponente |
| Müller | `ntl-hero.hero-box` | `ntl-hero.style-mueller` |
| Osman | `ntl-hero.style-default.hero-box` | `ntl-hero.style-osman` |
| Raven | `ntl-2col.style-hero` | `ntl-2col.style-raven` |
| ePraxis | `ntl-hero.theme1` mit Footer-Slider | `ntl-hero.style-epraxis`, Slider im dafür vorgesehenen Slot |
| Unify | `ntl-hero.style-default` mit Lead-Formular | `ntl-hero.style-unify`, Formular als optionaler Inhalt |

Eine gemischte ContentPane-Seite verwendet beispielsweise `layout="2;ntl-hero.style-mueller"` für den Einstieg und `layout="ntl-2col.style-raven"` mit passendem Aside-Slot für einen späteren Abschnitt. Varianten derselben Komponente lassen sich durch Austausch der Style-Klasse wechseln. Beim Wechsel zu einer anderen Komponente wird auch deren Slot-Struktur ausgewählt.

Die Inventur erfasst pro Komponente jede vorhandene Darstellung und jeden eigenständigen Modifier, einschließlich weiterer Quellen wie `theme/medic/`. Identische Regeln erhalten eine gemeinsame Implementierung. Bestehende Shortcuts und Variantenbezeichnungen werden vor einer Umstellung auf Paket- und Vorlagennutzung geprüft. Sonderfunktionen wie Terminaktionen, Formulare oder Meldungen bleiben explizites Markup beziehungsweise vorhandene Funktionsbausteine. Für Navbar und Footer dient die bestehende unabhängige Include-Auswahl zunächst weiter als Übergang für Varianten mit strukturellen Unterschieden.

## § 4 Demos nach Anwendungsfall

`docs/index.md` führt künftig über zwei Einstiege. `docs/pages/beispiele/` enthält vollständige Seiten samt Rahmen. `docs/pages/bausteine/` enthält Vergleichsseiten mit identischen Beispieldaten und derselben Palette je Vergleich. Die Verzeichnisse liegen unter dem bestehenden `navigation_root: pages`. Demo-Daten für Adressen und Öffnungszeiten liegen unter `docs/_data/` und werden von mehreren Beispielen genutzt.

| Ziel unter `docs/pages/` | Übernahme und Zuschnitt |
|---|---|
| `beispiele/startseiten/` | Osman als Praxisstart mit Schnellzugriff und Sprechzeiten, Müller als Praxisstart mit Behandlungskarten und Team, Raven als porträtorientierter Einstieg. ePraxis bleibt eine Magazin-Startseite mit redaktionellem Schwerpunkt, Unify eine Landingpage mit Lead-Formular. |
| `beispiele/leistungen/` | Müller als kompakter Leistungskatalog mit Karten und Abschluss-CTA, Raven als ausführliche Leistungsübersicht mit Artikelabschnitten und Akkordeon. |
| `beispiele/kontakt/` | Müller als kompakte Seite für Anfahrt und Termin, Raven als ausführliche Seite mit Anreiseoptionen, Barrierefreiheit und Formular. |
| `bausteine/hero/` | Die Einstiege aller fünf Demos und der neutrale Default. Für gleichartige Slots dieselben Texte und Bilder einsetzen. |
| `bausteine/karten/`, `bausteine/zweispalter/` | Kartenreihen und Zweispalter aus den bestehenden Seiten, darunter Ribbon, Timeline, Pricing, Testimonial und CTA. |
| `bausteine/kontakt/`, `bausteine/rahmen/` | Adresse, Öffnungszeiten, Anfahrt und Formular einzeln zeigen. Navbar und Footer mit demselben Demo-Datensatz vergleichen. |

Mindestens eine vollständige Startseite kombiniert Varianten mehrerer Herkunfts-Themes. Beispieldaten sind neutral. Das Demo-Formular stellt Eingabe und Validierung dar und hat keinen produktiven Empfänger. Magazin-Collections und statische Design-Templates behalten einen eigenen Einstieg als redaktionelle Demo beziehungsweise Designreferenz.

## § 5 Kandidaten zum Entfernen

| Kandidat | Voraussetzung |
|---|---|
| Theme-Verzeichnisse unter `docs/pages/theme-*/` und bisherige Gruppierung auf `docs/index.md` | Inhalte sind den neuen Seiten und Bausteinen zugeordnet. Bisherige öffentliche URLs sind über Permalinks oder statische Weiterleitungen erreichbar. |
| Zusätzliche Linkliste `docs/pages/site/index.md` | Die neue Übersicht verlinkt dieselben Praxisbeispiele und ersetzt den bisherigen Menüeintrag. |
| `demo/aerzte/osman-start.md` und `demo/aerzte/mueller-start.md` | Prüfen, ob Skripte oder andere Verbraucher diese Dateien referenzieren. Eigenständige Beispiele in den Katalog übernehmen. |
| Wiederholte Platzhalterkarten und identische Standardabschnitte | Ein Abschnitt bleibt erhalten, wenn er einen eigenen Seitenablauf, Zustand oder Layoutfall zeigt. Kartenanzahl dort beibehalten, wo sie für Raster oder Umbruch relevant ist. |
| Doppelt ausgegebene Basisregeln und alte Demo-Scopes | Gemeinsamer Build deckt Basis und Varianten ab. Öffentliche Sass-Imports erst nach Prüfung bestehender Paketnutzer ablösen. |

`_tpl/` einschließlich `_tpl/_root/` ist vom Umbau ausgenommen. Die dort eingesetzten Kundenvorlagen bleiben Referenz für die Kompatibilitätsprüfung. Laut `package.json` werden `theme/` und `_tpl/` veröffentlicht. Bestehende Einträge unter `theme/<name>` bleiben daher zunächst nutzbar.

## § 6 Reihenfolge und Abnahme

1. Pro Herkunft die Komponenten, vorhandenen Varianten, Modifier, Slots, Parts und optionalen Funktionen erfassen. Je Eintrag die Quellseite und das Ziel im neuen Katalog festhalten. Die Demo-Imports und öffentlichen Paketimporte separat prüfen.
2. Gemeinsamen Einstieg und Token-Mapping ergänzen. Als ersten Durchstich Default, Müller und Osman auf `ntl-hero` sowie Raven auf `ntl-2col` übertragen. Zwei Varianten derselben Komponente nebeneinander und mehrfach auf derselben Seite rendern. Die Website-Farbe einmal ändern und deren Wirkung auf alle Varianten prüfen.
3. Die übrigen Bausteine nach Inventur migrieren und die Beispielseiten neu ordnen. Links mit GitHub-Pages-Basispfad, Navigation und bestehende URLs abgleichen. Alte Demo-Seiten anhand der Kriterien in § 5 abbauen.
4. In der Umsetzung Jekyll- und Vite-Build prüfen und die gerenderten Vorlagen bei 393 × 852 und 1280 × 800 Pixeln mit den Ausgangsvorschauen vergleichen. Kontrollieren, dass die gemischte Seite ohne `.theme-*` am Body auskommt, die Styles auf ihre Instanzen begrenzt bleiben und alle `_tpl/`-Dateien im Diff fehlen.
