# Architektur: ThemeJS2

## Grundstruktur

Das Repository enthält zwei unterschiedliche Ebenen:

- `docs/` ist die lokale Testumgebung und die öffentliche Präsentation des Themes.
- `_root/` ist die Vorlage für daraus abgeleitete Nutzprojekte.

Für ein ausgewähltes Theme müssen beide Versionen dieselbe funktionale
HTML-Struktur, Slots, Attribute und dasselbe Laufzeitverhalten erzeugen.
Die Quelldateien müssen dafür nicht identisch aufgebaut sein: `docs/` ist die
GitHub-Pages-Demo für alle Themes, `_root/` die Vorlage für ein einzelnes
Kundenprojekt. Die Auswahl mehrerer Header und Footer gehört nur zur Demo.

## Entwicklung und Hosting

Die Website wird später statisch über ein CDN gehostet. Vite und Jekyll werden
nur lokal während der Entwicklung verwendet:

- Jekyll erzeugt lokal aus den Markdown-Dateien den statischen HTML-Output.
- Vite übernimmt lokal die Verarbeitung der JavaScript-, TypeScript-, CSS- und
  SCSS-Dateien sowie HMR und die Entwicklungsintegration.
- Der fertige statische Output wird anschließend auf das CDN übertragen.
- Vite- und Jekyll-Entwicklungsserver, HMR, LiveReload und Workspace-Verknüpfungen
  gehören nicht zur späteren Produktionsumgebung.

Die Produktionsdateien müssen vollständig statisch und unabhängig von lokalen
Entwicklungsservern ausgeliefert werden können. CSS, JavaScript, Bilder,
Schriften und sonstige Assets müssen als fertige Dateien im statischen Output
vorhanden sein.

Die fertigen JavaScript- und CSS-Builds werden unter `assets/` beziehungsweise
`docs/assets/` in das Repository eingecheckt. Sie gehören zum auslieferbaren
Projektstand und werden beim späteren CDN-Hosting direkt verwendet. Ein
Nutzprojekt darf für den Betrieb nicht voraussetzen, dass diese Builds erneut
lokal erzeugt werden.

Vor jeder Aussage über einen aktuellen oder auslieferbaren Build muss geprüft
werden, ob `vite build` erfolgreich durchgelaufen ist. Ein fehlgeschlagener
Build muss ausdrücklich als fehlgeschlagen dokumentiert werden; alte, bereits
vorhandene Dateien unter `assets/` gelten nicht als Nachweis für einen
aktuellen erfolgreichen Build.

## `_root` als Nutzprojekt-Vorlage

`_root/` muss in ein neues Repository kopiert werden können und nach
`npm update` direkt startbar sein. Es darf daher keine aktive Abhängigkeit auf
einen lokalen Workspace oder auf relative Workspace-Pfade benötigen.

Die aktiven Laufzeitabhängigkeiten von `_root/package.json` sind bewusst auf
die beiden zentralen Pakete reduziert:

```json
"dependencies": {
  "@leuffen/themejs2": "^1.0.0",
  "@leuffen/vite-jekyll-hmr-manager": "^1.0.0"
}
```

Die übrigen Theme-, Komponenten- und Utility-Abhängigkeiten werden über
`@leuffen/themejs2` bereitgestellt. Entwicklungswerkzeuge wie Vite,
TypeScript, Sass und `concurrently` bleiben als `devDependencies` erhalten.

Die historischen Workspace-Einträge bleiben in `_root/package.json` unter dem
Key `--workspaces` dokumentiert. Dadurch werden sie von npm nicht aktiviert,
bleiben aber als Hinweis auf die ursprüngliche Repository-Struktur erhalten.

## Globale Ankündigungen und Popup

Die Website verwendet für aktuelle Meldungen und Praxisankündigungen die
Komponenten aus `@leuffen/announcements`. Der News-Shower steht auf der
Startseite unter der Überschrift „Aktuelle Meldungen“ zur Verfügung:

```html
<leuffen-announcements>Keine aktuellen Hinweise</leuffen-announcements>
```

Das Urlaubs-Popup wird weiterhin im gemeinsamen Script-Layout bereitgestellt:

```html
<leuffen-vacation-modal></leuffen-vacation-modal>
```

Beide Funktionen stehen in `docs` und `_root` gleichartig zur Verfügung und
bleiben unabhängig vom eigenständigen HMR-Dialog des Vite-Plugins.

## Theme-Konfiguration

In `_root` wird genau ein Theme unter `_src` konfiguriert. Parallele Varianten
wie `docs/_includes/_styles` gehören ausschließlich in die Präsentations- und
Testumgebung.

### Theme-Auswahl in der Demo

Startseiten und andere Markdown-Seiten wählen CSS-Theme, Header und Footer
unabhängig voneinander im YAML-Frontmatter, zum Beispiel:

```yaml
---
layout: website
body_class: theme-raven
use_navbar: osman
use_footer: raven
---
```

`body_class` aktiviert das CSS-Theme. `use_navbar` und `use_footer` wählen
HTML-Includes unter `docs/_includes/_styles/<name>/`. Diese Dateien sind
Jekyll-/HTML-Fragmente, keine SCSS-Dateien. Vorhandene Kombinationen:

| Theme | `use_navbar` | `use_footer` |
| --- | --- | --- |
| ePraxis / allgemeine Demo | `default` | `default` |
| Müller | `default` | `mueller` |
| Osman | `osman` | `osman` |
| Raven | `osman` | `raven` |
| Unify | `unify` | `unify` |

Ohne Angabe gilt jeweils `default`, auch über `docs/_config.yml`.
`use_navbar: false` beziehungsweise `use_footer: false` unterdrückt den
entsprechenden Baustein; `skip-navbar: true` bleibt ebenfalls unterstützt.
`false` muss ein YAML-Boolean sein, kein Text in Anführungszeichen.
Ein explizit gewählter Name muss als Include existieren; ein Tippfehler soll
beim Jekyll-Build auffallen und nicht unbemerkt einen anderen Header anzeigen.

Die Layout-Kette bleibt `70_main → 60_footer → 50_navbar → 30_script →
20_body → 10_blanc`. `50_navbar` setzt den gewählten Header vor den Inhalt,
`60_footer` den gewählten Footer dahinter. Die Demo-Auswahl erfolgt beim
Jekyll-Build und benötigt keine zusätzliche JavaScript-Laufzeit.

### Übergang von `docs/` zum Kundenprojekt

1. `_root/` als Projektwurzel kopieren; darin liegen die Jekyll-Dateien unter
   `docs/`. Die Demo niemals vollständig über `_root/` kopieren.
2. Ein Theme in `docs/_src/style.scss` des Kundenprojekts konfigurieren und
   die passende Body-Klasse verwenden. Demo-Seiten, Theme-Galerie und parallele
   Theme-Registrierungen werden nicht automatisch übernommen.
3. Den gewünschten Header und Footer aus der Demo anhand folgender Zuordnung
   mit den aktiven Kundenlayouts abgleichen:

| Demo-Quelle im ThemeJS2-Repository | Ziel in der Vorlage |
| --- | --- |
| `docs/_includes/_styles/<navbar>/navbar.html` | `_root/docs/_layouts/50_navbar.html` |
| `docs/_includes/_styles/<footer>/footer.html` | `_root/docs/_layouts/60_footer.html` |
| `docs/_layouts/70_main.html` | `_root/docs/_layouts/70_main.html` |
| gemeinsame Includes außerhalb `_styles/` | `_root/docs/_includes/` unter gleichem Namen |

4. Nur das ausgewählte Fragment in das jeweilige Layout übernehmen: Im Header
   bleiben `layout: 30_script`, die gewünschte Ausblendbedingung und genau ein
   `{{ content }}` **nach** dem Header erhalten. Im Footer bleiben
   `layout: 50_navbar` und genau ein `{{ content }}` **vor** dem Footer erhalten.
   Den Demo-Dispatcher und `_includes/_styles/` nicht ins Kundenprojekt kopieren.
5. `use_navbar` und `use_footer` zur Variantenauswahl aus übernommenen
   Kundenseiten entfernen. Das Kundenprojekt enthält genau einen aktiven Header
   und Footer. Die vorhandenen Dateien unter `_layouts/alternatives/` sind
   inaktive Vorlagen, keine automatische Auswahl. Bei deren Verwendung das
   Fragment in `50_navbar.html` beziehungsweise `60_footer.html` einsetzen;
   historische `50_footer.alt-*.html`-Namen ändern nicht den aktiven Zielnamen
   `60_footer.html`.
6. Abhängige Includes, Datenfelder, Logos, Links und CSS-Varianten gezielt
   abgleichen. Kundendaten und Inhalte nicht durch Demo-Daten ersetzen.
   Danach Jekyll-Ausgabe und Website-Rahmen auf Desktop und Mobil prüfen:
   genau ein Header, ein Hauptinhalt, ein Footer; passende Slots, IDs,
   Navigation und Offcanvas-Verhalten. Bei Asset-Änderungen zusätzlich Vite bauen.

Spätere Korrekturen folgen derselben Zuordnung: gemeinsame Funktionalität
abgleichen, die Demo-Auswahl ausschließlich in `docs/` belassen. `_root` bleibt
die Quelle für die gemeinsame Kundenstruktur und öffentliche Include-Namen;
`_styles` ist die ausdrücklich getrennte Preview-Struktur.

Historie: Commit `5aef0a403e157449be01528e0d591b5550ef819b` entfernte die
Demo-Includes und verschob Varianten in Layout-Alternativen. Die Wiederherstellung
übernimmt erhaltene Footer-Varianten und bewahrt die neueren Osman-/Unify-Rahmen,
statt die gesamte Demo auf den damaligen Repository-Stand zurückzusetzen.
