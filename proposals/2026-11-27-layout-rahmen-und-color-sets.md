# Gemeinsamer Seitenrahmen und austauschbare Variants

| Datum | Benutzername | Kurzbeschreibung |
|---|---|---|
| 2026-11-27 | dermatthes | §§ 1–6: Proposal angelegt |
| 2026-11-27 | dermatthes | §§ 2, 4.1, 4.2 und 6: Selektoren, Scope-Vorrang und Prüfung präzisiert |
| 2026-11-27 | dermatthes | §§ 4.1 und 6: Komponenten-Default und Ausschließlichkeit der Varianten präzisiert |
| 2026-11-27 | dermatthes | § 3: Ablage für ID- und Klassen-Styles unter elements korrigiert |
| 2026-11-27 | dermatthes | §§ 1–6: Zielstruktur, Variants und verpflichtende Style-Beschreibungen präzisiert |

## § 1 Ziel

Eine Website soll Header, Navbar und Footer aus einem gemeinsamen Layout
übernehmen und ihre Darstellung pro Bereich wählen können. Farben,
Schriftfamilien, Rundungen und Rahmen sollen sich für die ganze Website
gemeinsam als Variant austauschen lassen. Kundenprojekte behalten editierbares Markup für
Fälle, in denen zusätzliche Informationen oder eine andere Struktur nötig sind. [geändert]

## § 2 Abgleich mit dem Bestand

| Bestand | Konsequenz für den Vorschlag |
|---|---|
| `theme/shared.scss`, `theme/shared/_runtime-settings.scss` und `theme/shared/elements/` bilden bereits eine gemeinsame Sass-Basis. | Einstieg, Token-Mapping und NTL-/NTE-Verträge weiterverwenden. |
| `docs/_src/style.scss` lädt bisherige `.theme-*`-Profile. `theme/shared/_profiles.scss` enthält bereits Profilwerte. | Rein visuelle Werte schrittweise als Variants anbieten. Bestehende Selektoren und öffentliche Sass-Imports während der Migration weiter unterstützen. [geändert] |
| `docs/_layouts/theme-dommer.html` erbt von `blank` und enthält Navbar, optionalen Seitentitel, Content Pane und Footer. | Dommer als erstes Beispiel für den gemeinsamen Rahmen übernehmen. Den Content Pane und die vorhandenen Sichtbarkeitsschalter erhalten. |
| §§ 5.6, 5.9 und 5.10 der `AGENTS.md` beschreiben für Kundenvorlagen einen festen editierbaren Rahmen. | Ein Kundenprojekt behält einen aktiven Rahmen. Klassen am festen Markup und eine Variant benötigen weder zusätzliche Layouts noch einen Dispatcher. [geändert] |
| Das [Baukasten-Proposal](2026-11-26-gemeinsame-komponentenstile.md) sieht gemeinsame Varianten vor und nennt `use_navbar` und `use_footer` als Übergang. | Den Baukasten weiterverwenden. Für migrierte Rahmen gilt die Auswahl von Klassen am gemeinsamen Markup. Ein abweichendes Layout bleibt für echte Strukturunterschiede vorgesehen. |

Der bisherige Theme-Leitfaden reserviert `style-*` für NTL und NTE. Die neue
Regel erweitert diese Konvention gezielt auf die drei Rahmen-IDs. Styles
für den Rahmen verwenden deshalb Selektoren wie `#footer.style-default`.

## § 3 Vorgeschlagene Ablage

Die Zielstruktur hat eine Theme-Wurzel `theme/`. Die bisherige Ebene
`theme/shared/` entfällt im Zielaufbau. Element-Styles liegen direkt unter
`theme/elements/`, seitenweite Designwerte unter `theme/variants/`. [neu]

| Pfad | Verantwortung |
|---|---|
| `docs/_layouts/website-standard.html` | Gemeinsamer Rahmen auf Basis von `blank` mit stabilen IDs `header`, `navbar` und `footer` sowie genau einem `main` mit Content Pane. |
| `theme/elements/id_<id>/` | Styles für einen ID-Selektor. `id_header/`, `id_navbar/` und `id_footer/` liegen direkt unter `elements/` und enthalten den Sass-Einstieg sowie Default und Varianten des jeweiligen Rahmenbereichs. [geändert] |
| `theme/elements/class_<klasse>/` | Styles für eine gemeinsam genutzte CSS-Klasse. `class_hero__specialties/` enthält beispielsweise die Styles für `.hero__specialties`. [geändert] |
| `theme/variants/` | Neutrale Ausgangswerte und seitenweit wählbare Variants wie Dommer. Der gemeinsame Sass-Einstieg nutzt das vorhandene Token-Mapping. [geändert] |
| `theme/elements/<komponente>/` | Zielablage für NTL-/NTE-Styles, Parts, Slots und Komponentenverträge. [geändert] |
| `theme/elements/<element>/style-<name>.ts` | Verpflichtende TypeScript-Beschreibung pro Style, einschließlich des Defaults. Sie liegt direkt neben der zugehörigen SCSS-Datei. [neu] |
| `docs/_src/frame-catalog.ts` und `docs/pages/bausteine/rahmen/` | Der Katalog liest die lokalen Style-Beschreibungen für die interaktive Vorschau ein. [geändert] |

ID- und Klassen-Verzeichnisse liegen auf derselben Ebene wie `ntl-hero/`
und andere NTL-/NTE-Komponenten. Der Präfix bezeichnet die Art des
Selektors im Dateisystem. Im Markup bleiben die Namen unverändert. So liegt
zum Beispiel der Style für `#footer.style-raven` in
`theme/elements/id_footer/_style-raven.scss`. [geändert]

Die Pflicht gilt für NTL-/NTE-Komponenten, ID-Selektoren und Klassen unter
`theme/elements/`. Für `#footer.style-raven` liegt `style-raven.ts`
beispielsweise neben `_style-raven.scss` in `id_footer/`. Jede Beschreibung
nennt den Zielselektor, die zugehörige Variante, ihren Zweck und die für
sie verfügbaren Funktionsklassen. [neu]

## § 4 Auswahl und Zuständigkeiten

### § 4.1 Layout, Varianten und Funktionsklassen

Das Layout legt Struktur, Reihenfolge und verfügbare Inhalte fest. Plane
zusätzliche Angaben zuerst über vorhandene Slots oder editierbare
Layout-Bereiche. Eine eigene Vorlage ist für wesentliche Markup-Unterschiede
vorgesehen. Eine gemeinsame Darstellung bleibt unter derselben Klasse nutzbar,
auch wenn mehrere Themes sie verwenden.

Jeder Rahmenbereich hat eine `style-*`-Variante und fällt bei fehlender
Variantenklasse auf `style-default` zurück. NTL- und NTE-Instanzen setzen
`style-default` selbst, wenn keine Style-Variante angegeben ist. Ihr Quellmarkup
enthält höchstens eine `style-*`-Klasse. Eine Variante ist eine vollständige
Komposition. CTA und Formular lassen sich über getrennte Instanzen kombinieren.
Sticky-Verhalten und Ausblenden beim Scrollen
sind unabhängige Funktionsklassen. Die jeweils verfügbaren Schalter bleiben
im editierbaren Markup sichtbar. Ein führendes `-` kennzeichnet eine
deaktivierte Klasse, etwa `-sticky-top` als inaktives Gegenstück zu
`sticky-top`. Das Beispiel zeigt die Namenskonvention. Die Implementierung
übernimmt die tatsächlich unterstützten Schalter der Komponente. Eine Rahmen-ID erhält
genau eine `style-*`-Klasse. Der feste Kundenrahmen kann die Variante direkt
im editierbaren Markup wählen.

### § 4.2 Scope-Konfiguration und Variants

Für die Jekyll-Defaults pro Scope sind `header_class`, `navbar_class`,
`footer_class` und `variant` als Feldnamen vorgeschlagen. Das Layout übernimmt
die Klassen an den jeweiligen Bereich. Wenn eine Konfiguration eine
Funktionsklasse ändert, muss sie die vorhandene aktive oder deaktivierte Form
ersetzen. Eine konfigurierte `style-*`-Variante ersetzt `style-default`. Die Namen, Zuordnung und Fallbacks werden bei der Umsetzung
dokumentiert. Die Sichtbarkeit bleibt über `show_navbar`, `show_title` und
`show_footer` steuerbar. [geändert]

Eine Variant liefert Farben, Schriftfamilien, Rundungen und Rahmen über Tokens.
Abstände, die zur Komposition einer Rahmenvariante gehören, bleiben in deren
Styles. Für Dommer ergibt sich daraus der gemeinsame Rahmen mit
`style-default`, der Variant Dommer für die blaue Navbar und einer separat
gewählten Sticky-Funktion. Ein eigener Dommer-Rahmenstyle kommt infrage, wenn
die Darstellung mit den gemeinsamen Tokens und Varianten nicht abbildbar ist. [geändert]

### § 4.3 Navigation und Website-Daten

Die Demo-Seiten setzen ihre `navigation_root` im Front Matter. Die
Navigations-Includes erhalten die Wurzel und den jeweiligen P-Tag `nav`
oder `footer-nav`. Der manuelle Zurück-Link auf `/` bleibt ein Demo-Beispiel
für zusätzliche, über `order` einsortierbare Links. Rahmen-Markup erhält
Praxisdaten standardmäßig aus `site.data.general.standorte.default`. Die
bestehenden Datenverträge für `general`, `defaults` und `openhours` gelten
auch für migrierte Layouts.

## § 5 Migration und Vorschau

1. Dommer als ersten Durchstich auf dem gemeinsamen Rahmen zeigen. Start- und
   Leistungsseite behalten ihre URLs, Inhalte, P-Tags und Front-Matter-Overrides.
   Die Kundenvorlage bleibt der Vergleichsstand für kopierbares Markup.
2. Die Darstellungen der übrigen Demos inventarisieren. Gleiche Rahmenvarianten
   teilen dieselbe Klasse. Eigene Layouts und neue Varianten benötigen einen
   konkret benannten Unterschied. Neue Beispiele behalten ihre nachvollziehbaren
   Dateipfade.
3. Den Variantenkatalog aus den lokalen Style-Beschreibungen aufbauen.
   Die Vorschau schaltet die Klassen am
   gerenderten Element um und gibt die gewählte Scope-Konfiguration zur
   Übernahme aus. Strukturvarianten zeigen ihre benötigten Slots oder ihr
   abweichendes Markup als eigenes Beispiel. [geändert]

## § 6 Abnahme

- Jeder Style einschließlich des Defaults hat seine TypeScript-Beschreibung
  neben der SCSS-Datei. Der Katalog übernimmt die Beschreibungen für Vorschau
  und Klassenauswahl. [neu]

- Je Bereich greifen Default und ausgewählte Variante mit derselben Layout-Datei.
  Zwei Themes können dieselbe Variante verwenden. Prüfe bei NTL und NTE den
  automatischen Default ohne Style-Klasse und eine explizite Variante mit
  genau einer `style-*`-Klasse.
- Der Wechsel der Variant ändert die visuellen Werte. Markup,
  Navigationsauswahl und aktivierte Funktionen bleiben dabei gleich. [geändert]
- Sticky und Scroll-Verhalten lassen sich unabhängig von der Palette prüfen.
  Deaktivierte Schalter bleiben im Quellmarkup sichtbar. Mit einem Scope-Wechsel
  auf den Gegenzustand bleibt genau eine Form des Schalters wirksam.
- Start- und Leistungsseite behalten ihre Navigation und den Content Pane.
  Vite und Jekyll bauen die Seiten. Der visuelle Vergleich verwendet
  393 × 852 und 1280 × 800 Pixel.
