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
bin/theme-develop auftrag.md --iterations=10
```

Der Preview-Server läuft auf Port 4000. Der Browserless-Container erreicht
ihn über http://main:4000. Für einen lokalen Browser kann der Auftrag
stattdessen preview: http://localhost:4000 und dessen WebSocket-Endpunkt
angeben. Browserless wird nicht neu gestartet. Vite und Jekyll werden nach
Quelländerungen synchron gebaut; der vorhandene Server bleibt aktiv.

## Auftrag

Die Markdown-Datei enthält die Zielseite je Referenz und den Arbeitsauftrag.
URL-Referenzen werden direkt im Browser geöffnet; lokale HTML-Referenzen
müssen über HTTP erreichbar sein. Statische Design-Dateien werden geladen,
nicht gerendert. Dateipfade sind relativ zum Auftrag, Zielpfade relativ zur
Preview. Die Angaben width/height bei Designs beschreiben die Designbreite,
nicht die Größe eines Full-Page-Bildes.

```markdown
---
theme: osman
preview: http://main:4000
browser: ws://chromium:3000
model: gpt-5.4
iterations: 10
pages:
  - name: home
    reference: https://example.com/
    target: /demo-home.html
  - name: contact
    target: /demo-contact.html
    designs:
      - file: designs/contact-desktop.png
        width: 1440
        height: 900
      - file: designs/contact-mobile.png
        width: 393
        height: 852
---
Passe das Theme an die Referenzen an. Übertrage die Typografie, Abstände und
Section-Varianten; erhalte die editierbare Content-Struktur.
```

Die sechs festen Viewports sind 1440×900, 1280×800, 1024×768, 768×1024,
667×375 und 393×852 CSS-Pixel bei DPR 1. Live-Seiten werden durchgescrollt;
Full-Page-Screenshots enthalten individuelle ImagePrompt-Instructions.
Initial werden zusätzlich ausgewählte Computed Styles, Box-Modelle,
CSS-Regeln und Stylesheet-/Source-Map-URLs gesammelt. Die gezielte
Inspection liefert CSS-Kaskaden für ausgewählte Light-DOM-Selektoren auf
Live-Referenzseiten (kind: reference) und Zielseiten (kind: target).
Der Agent untersucht aktiv die relevanten Elemente, mindestens in den
Desktop- und Mobilansichten, einschließlich Console-/Network-Diagnostik.
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

Die vollständige Datei-Landkarte steht im Laufverzeichnis in
project-findings.md. Sie wird nach jeder Bearbeitungs- und Reviewphase
aktualisiert; spätere Korrekturen haben Vorrang vor der initialen Karte.
Sichere diese Datei außerhalb von /tmp, wenn sie einen Neustart oder eine
Bereinigung des temporären Verzeichnisses überdauern soll. Ein späterer
Auftrag kann sie optional als Frontmatter-Feld project_findings angeben,
zum Beispiel project_findings: findings/project-findings.md. Relative
Pfade beziehen sich auf die Auftragsdatei. Der Agent validiert die alte
Karte gegen den aktuellen Checkout, statt sie ungeprüft zu übernehmen.

Der Auftrag kann optional max_tokens setzen; das Budget wird zwischen
Iterationen geprüft und ist deshalb kein hartes Limit für Einzelrequests.
Nach spätestens iterations Runden oder zwei Runden ohne Dateiänderung endet
der Prozess. Exit-Code 0 bedeutet bestätigtes Ziel, 2 ein offenes Ziel oder
Limit, 1 einen Fehler. Die Screenshots und Berichte liegen unter /tmp und
werden nicht committed. Das Binary pusht oder merged keine Änderungen.

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
