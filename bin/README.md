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
Inspection liefert CSS-Kaskaden für ausgewählte Light-DOM-Selektoren.

## Iterationen

Der Agent lädt den Referenzkontext einmal und setzt danach den Checkpoint
reference. Jede Runde rollt den Gesprächscursor zu diesem Checkpoint zurück,
nicht den Dateizustand. Sie analysiert den aktuellen Build, ändert Quellen
über AiFileSystem und erhält nach dem Build neue Screenshots zur Prüfung.
Nur der letzte kumulative Bericht wird an die nächste Runde weitergereicht.
Die Provider-Cache-Treffer werden gemessen; Checkpointing garantiert sie nicht.

Der Auftrag kann optional max_tokens setzen; das Budget wird zwischen
Iterationen geprüft und ist deshalb kein hartes Limit für Einzelrequests.
Nach spätestens iterations Runden oder zwei Runden ohne Dateiänderung endet
der Prozess. Exit-Code 0 bedeutet bestätigtes Ziel, 2 ein offenes Ziel oder
Limit, 1 einen Fehler. Die Screenshots und Berichte liegen unter /tmp und
werden nicht committed. Das Binary pusht oder merged keine Änderungen.

Die Schreibberechtigung ist auf das Projekt begrenzt. Workspaces, Skills,
Build-Infrastruktur und Referenzdateien bleiben geschützt; node_modules,
vendor und Git-Metadaten werden nicht als AI-Dateisystem freigegeben.
