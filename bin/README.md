# Theme-Development-Binary

Das lokale PHP-Binary entwickelt ein Theme iterativ anhand einer oder mehrerer
Referenzseiten bzw. Design-Dateien. Der Agent verwendet Phore AI Harness,
die Daemon-Regeln unter `bin/prompts/` und die Browser-Erweiterung des AI Harness
mit einem isolierten Browserless-Chromium-Context.

## Start

Voraussetzungen: PHP 8.5, Composer, PHP-YAML, PHP-mbstring, Node-Abhängigkeiten,
Jekyll, API-Zugang gemäß Phore AI Harness und der vorhandene Kickstart-Stack.
Benötigt wird `phore/ai-harness` auf `dev-main` mit der Browser-Erweiterung aus
[Harness PR #37](https://github.com/phore/phore-ai-harness/pull/37).
`chrome-php/chrome` wird bereits von diesem Entwicklungsprojekt bereitgestellt;
die Erweiterung im Harness lädt das Modul optional und meldet bei fehlendem
Modul oder unerreichbarem Endpoint eine `BrowserUnavailableException`.
Führe im Projektverzeichnis aus:

```bash
composer install
kick dev
bin/theme-develop auftrag.md
bin/theme-develop --debug auftrag.md
```

Die `CONF_*`-Konstanten in `bin/theme-develop` legen das Modell `gpt-6.2-sol`,
die Preview `http://main:4000`, den Browser `ws://chromium:3000/` und das Limit
von zehn Iterationen fest. Browserless wird nicht neu gestartet. Vite und Jekyll werden nach
Quelländerungen synchron gebaut; der vorhandene Server bleibt aktiv.

## Auftrag

Der Auftrag ist freier Markdown-Text ohne Pflicht-Frontmatter. Der Agent
ermittelt Theme und Zielseiten bei der Projektanalyse. Referenzen werden im
Text genannt: Live-Seiten als HTTP(S)-URL, Bilder und PDFs als Dateipfade
relativ zum Auftrag oder als absolute Pfade.

```markdown
Passe die Osman-Startseite an https://example.com/ an. Übertrage die
Typografie und Abstände; erhalte die editierbare Content-Struktur.
```

`CONF_VIEWPORTS` in `bin/theme-develop` legt Auswahl und Reihenfolge der
Auflösungen fest. Standard: 1280×800 und 393×852 (DPR 1). Weitere
Profile sind 1440×900 und 768×1024. Der `capture-plan` gibt dem Agenten die
Auftragsseiten und Vergleichsauflösungen vor. Referenz und Preview werden in
derselben Auflösung verglichen. Statische Design-Dateien besitzen keinen
inspizierbaren DOM.

## Browsertools und Kontextgrenzen

Die Implementierung für Verbindung, DOM, CSS, Source Maps und Konsole liegt in
[`phore/ai-harness/src/Tools/Browser`](https://github.com/phore/phore-ai-harness/tree/main/src/Tools/Browser).
`ThemeDevelopment` konfiguriert die gemeinsame `BrowserSession` und registriert
direkt `Phore\AiHarness\Tools\Browser\BrowserToolSet`. Alle Tool-Definitionen
und Ergebnisse stammen unverändert aus dem Harness. Der Auftrag liefert die
Seiten und Viewports; statische Designvorlagen werden als normale Bild- oder
PDF-Prompts übergeben.

1. `browser_open(url, width, height)` öffnet eine exakte URL aus `capture-plan`,
   etwa mit `width=1280` und `height=800`.
2. `browser_screenshot()` liefert den sichtbaren Viewport als PNG und eine
   kleine bereinigte DOM-Struktur. `browser_get_html` liefert bei Bedarf
   weitere begrenzte Strukturdatensätze mit Knotenreferenzen und Attributen;
   Kommentare, Skripte, Styles und Event-Handler werden entfernt.
3. `browser_query_selector` findet gezielt Elemente. Mit deren `nodeId` liefern
   `browser_get_computed_styles` die berechneten Werte und
   `browser_inspect_node` Geometrie, CSS-Regeln und verfügbare Source-Map-Quellen.
   Ein `properties`-Filter wie `["font-size", "line-height"]` begrenzt die
   Abfrage; ohne Filter sind alle Werte über begrenzte Seiten abrufbar.
   Passende CSS-Regeln allein belegen keine gewinnende Deklaration.
4. `browser_get_console` liefert begrenzte Konsoleneinträge mit optionalen
   `levels`-Filtern. `nextCursor` wird nur für konkret benötigte Fortsetzungen
   mit unveränderten Abfrageparametern verwendet.

Die bisherigen Ganzseitenaufnahmen werden durch Viewport-Aufnahmen und
gezielte Elementbilder ersetzt. `browser_screenshot(nodeId)` kann auch einen
Abschnitt unterhalb des sichtbaren Bereichs aufnehmen; große Knoten werden
begrenzt skaliert. Für Details einzelne Abschnitte auswählen. Automatisches
Scrollen zum Auslösen von Lazy Loading und Touch-/Mobilgeräte-Emulation gehören
nicht zur Harness-API. Schmale Viewports prüfen das responsive Layout;
ungeprüfte Lazy-Load-Inhalte und Interaktionszustände bleiben im Prüfbericht
als Abdeckungslücken sichtbar.

Es gibt jeweils eine aktuelle Seite. Navigation verwirft alte Knotenreferenzen
und Cursor und verwendet den vorhandenen Browsercontext weiter. Vor einem
Seiten- oder Viewportwechsel verlangen die Prompts `browser_close`, gefolgt von
`browser_open`, damit der Vergleich mit einem neuen Context beginnt.

Die erlaubten Origins stammen aus der Preview und den konkreten Live-Referenzen
des Auftrags. Der Harness erzwingt diese Origins und seine allgemeinen
Viewportgrenzen; die Auswahl der konkreten Seiten und Vergleichsgrößen folgt
dem `capture-plan`. Bei einer Weiterleitung auf einen nicht freigegebenen Origin
muss die kanonische Referenz-URL im Auftrag stehen.

`browser_reload` lädt die aktuelle Seite neu. Nach einem Build schließt der
Host die Sitzung; die Review beginnt mit `browser_open` und neuen
Knotenabfragen. `browser_close` und das Laufende geben den Browsercontext frei.
Screenshotbilder und DOM-Metadaten gehen als Harness-`MultiPrompt` direkt an die
AI. Zusätzliche lokale PNG-Kopien werden nicht gespeichert; dafür bietet der
Harness derzeit keinen Ergebnis-Hook. `bin/.tmp/` enthält die Laufberichte.

## Internetrecherche

Das native WebAccessTool des AI Harness steht im gesamten AiContext zur
Verfügung. Der Agent recherchiert bei fachlichem Bedarf HTML-, CSS- und
SCSS-Dokumentation, aktuelle Best Practices, Sass-Deprecations, Browser-
Kompatibilität und Fehlermeldungen. Er bevorzugt offizielle Dokumentation
und prüft die Empfehlungen gegen die installierten Versionen und Nextrap-
Verträge. Quellen-URLs, relevante Versionen und verwertbare Erkenntnisse
werden in den Findings festgehalten und bei späteren Iterationen genutzt.
Suchanfragen dürfen keine privaten Quelltexte, internen URLs, Secrets oder
Kundendaten enthalten. Die Websuche benötigt ein unterstütztes Modell und
API-Zugriff; es ist keine zusätzliche Such-API erforderlich. Ein fehlerhafter
Build beendet wie bisher den Lauf.

## Projektanalyse und Iterationen

Vor der Referenzanalyse erhält der Agent das AiFileSystem themejs2-readonly.
Schreiboperationen sind durch die FilesystemPolicy gesperrt. Er erstellt eine
kompakte Datei-Landkarte mit verifizierten Pfaden, Zuständigkeiten, Tokens,
Imports, Komponenten und relevanten Demos. Anschließend analysiert er die
Referenzen und die aktuelle Vorschau pro Seite und Auflösung. Er leitet
priorisierte, überprüfbare Abweichungen als Backlog ab und setzt den Checkpoint
reference. Seiten, die im Auftrag nur zur Kontrolle vorgesehen sind, bleiben
von Änderungen ausgenommen. Erst danach wird das
schreibfähige AiFileSystem themejs2 mit den bestehenden Schutzregeln registriert.

Jede Runde rollt den Gesprächscursor zu diesem Checkpoint zurück, nicht den
Dateizustand. Sie nutzt die bereits bekannte Projektstruktur, liest gezielt
die aktuellen betroffenen Dateien, ändert Quellen und erhält nach dem Build
neue Screenshots zur Prüfung. Erfolgreiche Builds schreiben ihre Details nur
im Debug-Modus. Der kumulative Bericht enthält unter
Project Findings neue oder korrigierte Erkenntnisse seit der initialen Karte.
Dazu gehören die DevTools-Messwerte mit Seitenname, Viewport, Selektor,
Computed Styles, Box Model, CSS-Regeln, nachweisbaren Quelldateien und
relevanten Konsolenfehlern. Auch die initialen Referenz-Findings
werden separat in der Karte erhalten. Nur der letzte Bericht wird
weitergereicht; die initiale Karte ist bereits im Checkpoint. Die Provider-Cache-Treffer werden gemessen; Checkpointing
garantiert sie nicht.

Neben der Auftragsdatei liegt `_dev.findings.md` mit der Datei-Landkarte und
späteren Ergänzungen. `dev.state.yml` wird ab dem Referenz-Checkpoint
atomar aktualisiert. Die Datei enthält dessen Provider-Response-ID sowie
Seitenzuordnung, Fortschritt und letzten Prüfbericht. Beide Dateien bleiben
außerhalb des Jekyll-Outputs und sollen nicht eingecheckt werden.

Um nach einem Abbruch fortzusetzen, denselben Befehl mit dem unveränderten
Auftrag und demselben Provider-Zugang erneut ausführen. Eine unvollständige
Iteration beginnt erneut; vorherige Dateiänderungen bleiben bestehen.
Vor dem ersten Checkpoint startet die Analyse erneut. Bei einem geänderten
Auftrag oder einem nicht mehr verfügbaren Provider-Checkpoint den alten
Zustand bei Bedarf archivieren und mit `bin/theme-develop -n auftrag.md`
neu starten. `-n` löscht `dev.state.yml` und leert `_dev.findings.md`, bevor
die Referenz neu aufgenommen wird. Bereits bearbeitete Projektdateien werden
nicht zurückgesetzt. Ohne `-n` warnt das CLI, wenn
es einen gespeicherten Checkpoint wiederverwendet. Pro Auftragsverzeichnis
nur einen Lauf gleichzeitig starten.

Jeder Start prüft den aktuellen Stand erneut und erlaubt bis zu
`CONF_ITERATIONS` weitere Runden. Beim Fortsetzen zählt die Nummerierung weiter.
Eine Runde ohne Netto-Dateiänderung endet als Blocker mit Exit-Code 2.
Exit-Code 0 bedeutet bestätigtes Ziel, 2 einen Blocker oder das Limit und 1
einen technischen Fehler. Die CLI meldet pro Screenshot eine Zeile, protokolliert
Dateipfade beim Schreiben und zeigt pro Runde einen Kurzbericht mit Änderungen
und nächstem Schritt. `--debug` zeigt zusätzlich Tool- und Diagnoseausgaben.
Der ausführliche Bericht und das Backlog werden als Arbeitskontext weitergegeben.
Wenn eine Entscheidung alle weiteren Arbeiten blockiert, gibt die CLI die
konkrete Frage aus. Die Antwort kann im Auftrag ergänzt werden. Danach mit
`-n` neu starten. Auch Checkpoints älterer Agent-Regeln benötigen `-n`.
Zwischenberichte liegen im von Git ignorierten Ordner `bin/.tmp/`. Ein neuer
Lauf leert den Ordner vor der Referenzanalyse;
parallele Läufe im selben Checkout werden abgewiesen. Das Binary
pusht oder merged keine Änderungen.

Die [Agent-Regeln](prompts/project.md) beschreiben, wie `theme-develop` mit
Layouts und Markdown-Vorlagen arbeitet. Die Auswahl von Farbvariablen und
anderen Theme-Tokens ist im [SCSS-Skill](../skills/edit-scss/SKILL.md) beschrieben.

Dommer nutzt für Start- und Leistungsseite `website-default`. Alle
`website-*`-Layouts erben über `blank` von `20_body` und enthalten ihren Frame
direkt. Die Website-Beispiele liegen unter `docs/themes/<name>/`; Unify behält
die Namen `unify-start`, `unify-saas` und `unify-services`. Seiten mit eigenem
Hero setzen `show_title: false`, damit kein zusätzlicher Page-Header erscheint.

Die Dommer-Beispiele setzen Navigationswurzel und Standort im Front Matter.
Der manuelle Link „Zurück“ auf `/` in der horizontalen Navigation zeigt, wie
sich neben den automatisch erzeugten Einträgen weitere Links ergänzen lassen.
Der Relocator übernimmt auch diesen Link ins mobile Menü.

Die Schreibberechtigung ist auf das Projekt begrenzt. Workspaces, Skills,
Build-Infrastruktur und Referenzdateien bleiben geschützt; node_modules,
vendor und Git-Metadaten werden nicht als AI-Dateisystem freigegeben.
