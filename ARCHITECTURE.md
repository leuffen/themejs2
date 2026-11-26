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
wie `docs/_includes/frames` gehören ausschließlich in die Präsentations- und
Testumgebung.

### Layout-Auswahl in der Demo

Eine Endseite wählt den Rahmen über ihr Jekyll-Layout:

```yaml
layout: website-raven
theme_profile: raven
```

Das Layout erbt von `20_body` und bindet Navbar, Inhalt und Footer mit festen
Include-Pfaden ein. `theme_profile` aktiviert unabhängig davon die visuelle
Body-Klasse. Reduzierte Rahmen stehen als `website-none`,
`website-navbar-only` und `website-footer-only` zur Verfügung.

Das Seitenverzeichnis auf `docs/index.md` verlinkt die Endseiten direkt.
Der Dateipfad unter `docs/` bestimmt die URL der Demo-Seite.

### Übergang von `docs/` zum Kundenprojekt

1. `_root/` als Projektwurzel kopieren; Jekyll-Inhalte liegen darin unter `docs/`.
2. Genau ein Theme unter `docs/_src/style.scss` konfigurieren; die Vorlage verwendet Osman.
3. Kundendaten in `docs/_data/` eintragen. Die Vorlage enthält genau einen festen Rahmen:
   Navbar-Markup in `docs/_layouts/50_navbar.html`, Footer-Markup in `docs/_layouts/60_footer.html`.
4. Für einen anderen Kundenrahmen das gewünschte Demo-Markup in diese Dateien übernehmen
   oder dort direkt bearbeiten. Layout-Frontmatter und die Position von `{{ content }}` erhalten.
   Den festen Kundenrahmen direkt in seinen Layout-Dateien pflegen.
5. Gemeinsame fachliche Includes unter `components/`, `helpers/` und `fragments/` synchron halten.
6. Kategorie-Seiten wie Osman2 als `leistungen/index.md` und direkte Unterseiten organisieren;
   `ptags: [nav]` nimmt sie ins Menü auf. Nur die Demo verwendet `navigation_root: pages`.

Leuffen-Logos liegen in beiden Umgebungen unter `assets/leuffen/`.
Die öffentlichen Include-Pfade, Parameter und Beispiele stehen in [README_INCLUDES.md](README_INCLUDES.md).
