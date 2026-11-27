# Theme-Development-Binary

Das lokale PHP-Binary entwickelt ein Theme iterativ anhand einer oder mehrerer
Referenzseiten bzw. Design-Dateien. Der Agent verwendet Phore AI Harness,
die lokalen Skills und einen isolierten Browserless-Chromium-Context.

## Start

Voraussetzungen: PHP 8.5, Composer, PHP-YAML, PHP-mbstring, Node-Abhängigkeiten,
Jekyll, API-Zugang gemäß Phore AI Harness und der vorhandene Kickstart-Stack.
Die neue MultiPrompt-API aus [Harness PR #35](https://github.com/phore/phore-ai-harness/pull/35)
muss in dev-main verfügbar sein. Führe im Projektverzeichnis aus:

```bash
composer install
kick dev
bin/theme-develop auftrag.md
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
Auflösungen fest. Standard: 1440×900, 1280×800, 768×1024 und 393×852 (DPR 1). Weitere
Profile werden in `BrowserSession::VIEWPORTS` definiert. Das Modell ruft
`browser_capture` für jede konfigurierte URL und Auflösung einzeln auf. Das
Tool liefert einen Screenshot über die volle Dokumenthöhe und den
Gerüst-HTML-Code des sichtbaren Dokuments: nur `<body>`, ohne `<script>`-Tags
und ohne Inhalt von `<style>`-Tags. `browser_inspect` kann bei Bedarf einen
Light-DOM-Knoten in einer konfigurierten Auflösung untersuchen. Das letzte
Ergebnis je Auflösung bleibt bis zum nächsten Build fürs Blättern im Cache.
Statische Design-Dateien besitzen keinen inspizierbaren DOM.

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
Referenzen und setzt den Checkpoint reference. Erst danach wird das
schreibfähige AiFileSystem themejs2 mit den bestehenden Schutzregeln registriert.

Jede Runde rollt den Gesprächscursor zu diesem Checkpoint zurück, nicht den
Dateizustand. Sie nutzt die bereits bekannte Projektstruktur, liest gezielt
die aktuellen betroffenen Dateien, ändert Quellen und erhält nach dem Build
neue Screenshots zur Prüfung. Der kumulative Bericht enthält unter
Project Findings neue oder korrigierte Erkenntnisse seit der initialen Karte.
Dazu gehören die DevTools-Messwerte mit Seitenname, Viewport, Selektor,
Computed Styles, Box Model, CSS-Regeln, nachweisbaren Quelldateien und
relevanten Console-/Network-Fehlern. Auch die initialen Referenz-Findings
werden separat in der Karte erhalten. Nur der letzte Bericht wird
weitergereicht; die initiale Karte ist bereits im Checkpoint. Die Provider-Cache-Treffer werden gemessen; Checkpointing
garantiert sie nicht.

Neben der Auftragsdatei liegt `dev.findings.md` mit der Datei-Landkarte und
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
neu starten. `-n` löscht `dev.state.yml` und leert `dev.findings.md`, bevor
die Referenz neu aufgenommen wird. Bereits bearbeitete Projektdateien werden
nicht zurückgesetzt. Ohne `-n` warnt das CLI, wenn
es einen gespeicherten Checkpoint wiederverwendet. Pro Auftragsverzeichnis
nur einen Lauf gleichzeitig starten.

Jeder Start prüft den aktuellen Stand erneut und erlaubt bis zu
`CONF_ITERATIONS` weitere Runden. Beim Fortsetzen zählt die Nummerierung weiter.
Nach zwei Runden ohne Dateiänderung endet der Prozess vorzeitig. Exit-Code 0 bedeutet bestätigtes Ziel, 2 ein offenes Ziel oder
Limit, 1 einen Fehler. Screenshots und Zwischenberichte liegen direkt im von Git ignorierten
Ordner `bin/.tmp/`. Ein neuer Lauf leert den Ordner vor der ersten Aufnahme;
parallele Läufe im selben Checkout werden abgewiesen. Das Binary
pusht oder merged keine Änderungen.

Das Theming verwendet die bestehenden Nextrap NTL-Layouts und NTE-Elemente,
deren dokumentierte APIs, Varianten und Theme-Tokens. Markdown-Texte,
Bilder, Links und Section-Struktur bleiben unverändert, sofern der Auftrag
nicht ausdrücklich eine Inhalts- oder Strukturänderung verlangt. Notwendige
Klassen- und Attributanpassungen erfolgen in der vorhandenen Kramdown-/Content-
Pane-Syntax; neues Raw-HTML in Markdown ist nicht zulässig. Wiederverwendbares
Markup gehört in geeignete Komponenten, Layouts oder freigegebene Includes.

Die Schreibberechtigung ist auf das Projekt begrenzt. Workspaces, Skills,
Build-Infrastruktur und Referenzdateien bleiben geschützt; node_modules,
vendor und Git-Metadaten werden nicht als AI-Dateisystem freigegeben.
