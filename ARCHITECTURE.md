# Architektur: ThemeJS2

## Grundstruktur

Das Repository enthält zwei unterschiedliche Ebenen:

- `docs/` ist die lokale Testumgebung und die öffentliche Präsentation des Themes.
- `_root/` ist die Vorlage für daraus abgeleitete Nutzprojekte.

Die funktionalen Ergebnisse von `docs/` und `_root/` müssen gleich bleiben. Das
betrifft insbesondere die HTML-Struktur, Layouts, Includes, Slots und relevanten
Attribute. Mehrere Theme-Varianten und Präsentations-Sonderfälle dürfen nur in
`docs/` vorkommen.

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

Alternative Dateien werden mit `alt-<name>` gekennzeichnet und können durch
Umbenennen aktiviert werden. Änderungen an Namen, Pfaden oder der Struktur der
Includes erfordern die ausdrückliche Zustimmung des Users. `_root` ist für die
gemeinsame Include-Struktur die Quelle der Wahrheit.
