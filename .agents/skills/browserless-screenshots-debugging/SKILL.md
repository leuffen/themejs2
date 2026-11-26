---
name: browserless-screenshots-debugging
description: Verwende Chrome DevTools über Browserless für visuelle Änderungen, Theme-Entwicklung mit sichtbaren Auswirkungen, Layout- und CSS-Probleme sowie Frontend-Debugging. Vergleiche betroffene Vorlagen vor und nach Änderungen verpflichtend mobil (393 × 852) und am Desktop (1280 × 800), ermittle die wirksamen Quellregeln und respektiere Workspace-Grenzen.
---

# Browserless: Screenshots und Debugging

## Browser verbinden

Verwende das im Kickstart-Build installierte `chrome-devtools` aus dem Paket
`chrome-devtools-mcp`. Der vorhandene Chromium-Container ist über
`ws://chromium:3000` erreichbar. Rufe die Website aus diesem Browser über
`http://main:4000` auf; Port 4999 ist der interne Jekyll-Port. Starte keinen
eigenen Chromium. Prüfe bei Verbindungsfehlern den Kickstart-Stack und ob
`kick dev` ausgeführt wurde. Melde den Fehler, statt Screenshots vorzutäuschen.

Starte erst bei Bedarf eine eigene CLI-Session mit der Projektkonfiguration.
Verwende dieselbe Session-ID bei allen Befehlen. Befehle sind von der
Projektwurzel aus auszuführen. Bei separaten Shell-Aufrufen ersetze die
Variablen durch die zuvor ermittelten Werte oder setze sie erneut.

```bash
SESSION=$(node -p 'require("node:crypto").randomUUID()')
echo "$SESSION"
chrome-devtools start --sessionId="$SESSION" --config="$PWD/.agents/chrome-devtools.json" --workspace=/tmp
chrome-devtools new_page http://main:4000 --sessionId="$SESSION"
chrome-devtools list_pages --sessionId="$SESSION"
```

Setze `PAGE` auf die tatsächlich ausgegebene Page-ID (nicht pauschal 1).
Ermittle bei Unsicherheit Parameter mit `chrome-devtools <tool> --help`.
Verwende keine unkonfigurierte CLI-Session als Fallback. Lege Diagnose-Dateien
ausschließlich unter `/tmp` ab und committe sie nicht.

## Visuelle Pflichtprüfung

Prüfe jede betroffene Demo-Seite, Vorlage und relevante Theme-Variante vor
und nach der Änderung in beiden Viewports. Berücksichtige die Kundenvorlage
`_root/docs/` zusätzlich zu `docs/`, wenn die Änderung deren gemeinsames
Markup oder Styling betrifft. Stelle die tatsächlich betroffene Vorlage über
die vorhandene lokale Preview bereit; verwechsle sie nicht mit der Demo.
Nutze vorhandene Designvorlagen, Referenzbilder oder konkrete Zielvorgaben.
Wenn eine Referenz fehlt, dokumentiere dies und verwende den Ausgangszustand
als Vergleich, nicht als Beleg für Designkonformität.

| Ansicht | CSS-Viewport | Emulation |
| --- | --- | --- |
| Mobil (iPhone-Größe) | 393 × 852 | mobile, touch |
| Desktop | 1280 × 800 | Desktop |

Verwende DPR 1 für vergleichbare PNG-Dateien in der angegebenen Größe.
Die mobile Prüfung emuliert Chromium, nicht Safari auf einem echten iPhone.
Warte nach Navigation, Reload oder Viewportwechsel auf die sichtbaren
Inhalte, geladene Schriften und ein stabiles Layout. Verifiziere die
Viewportgröße tatsächlich, statt nur den erfolgreichen Befehl anzunehmen.

```bash
OUT=$(mktemp -d /tmp/themejs2-visual.XXXXXX)
echo "$OUT"
chrome-devtools emulate "$PAGE" --viewport "393x852x1,mobile,touch" --sessionId="$SESSION"
chrome-devtools evaluate_script 'async () => { await document.fonts.ready; return {width: innerWidth, height: innerHeight, dpr: devicePixelRatio}; }' --pageId "$PAGE" --sessionId="$SESSION"
chrome-devtools take_screenshot "$PAGE" --filePath "$OUT/mobile-before.png" --sessionId="$SESSION"

chrome-devtools emulate "$PAGE" --viewport "1280x800x1" --sessionId="$SESSION"
chrome-devtools evaluate_script 'async () => { await document.fonts.ready; return {width: innerWidth, height: innerHeight, dpr: devicePixelRatio}; }' --pageId "$PAGE" --sessionId="$SESSION"
chrome-devtools take_screenshot "$PAGE" --filePath "$OUT/desktop-before.png" --sessionId="$SESSION"
```

Öffne die PNG-Dateien mit dem Bild-Lesewerkzeug des Agents und beurteile sie
visuell. Vergleiche die Ansichten jeweils mit der passenden Referenzgröße.
Prüfe insbesondere Abstände, Ausrichtung, Typografie, Umbrüche,
Containerbreiten, Überläufe, Navbar/Footer und relevante Zustände.
Ein DOM-Snapshot oder die bloße Existenz einer PNG-Datei ersetzt die
visuelle Prüfung nicht. Erstelle bei Bedarf zusätzliche Full-Page-Screenshots
mit `--fullPage true` und Detail-Screenshots mit `--uid`.

## Ursache im DOM und in der CSS-Kaskade finden

Ermittle zunächst die verantwortlichen Elemente, deren Eltern und Geschwister.
Untersuche Klassen, tatsächliches Markup, offene Shadow Roots, Slots und Parts.
Verwende bei Bedarf eine neue Momentaufnahme, da UIDs nach einer Navigation
oder DOM-Änderung ungültig werden können. Setze `ELEMENT_UID` auf eine UID
aus dem aktuellen Snapshot.

```bash
chrome-devtools take_snapshot "$PAGE" --verbose true --sessionId="$SESSION"
chrome-devtools get_css_styles "$PAGE" "$ELEMENT_UID" --pageSize 30 --sessionId="$SESSION"
chrome-devtools evaluate_script '(el) => { const s = getComputedStyle(el); const r = el.getBoundingClientRect(); return {tag: el.tagName, classes: [...el.classList], rect: r.toJSON(), margin: s.margin, padding: s.padding, gap: s.gap, lineHeight: s.lineHeight, display: s.display, boxSizing: s.boxSizing, maxWidth: s.maxWidth, parentClasses: el.parentElement ? [...el.parentElement.classList] : []}; }' --pageId "$PAGE" --args "$ELEMENT_UID" --sessionId="$SESSION"
```

Verwende `get_css_styles` auch für Eltern- und Nachbarelemente; blättere
mit `--pageIdx` weiter, bis die wirksame Regel identifiziert ist. Achte
auf überschreibende und vererbte Regeln, CSS Custom Properties, Cascade
Layers, Media Queries, Container Queries, Flex/Grid-Gap, Margin Collapsing,
Bootstrap-Utilities und responsive Klassen. Messe relevante Differenzen
in CSS-Pixeln. Wenn ein Element im Accessibility-Snapshot keine UID hat,
ermittle es über einen konkreten DOM-Selector per `evaluate_script`; prüfe
bei Web Components auch offene Shadow Roots.

## Source Maps und Debugging

Die DevTools-Konfiguration aktiviert `sourceMaps`; die lokale Vite-
Konfiguration aktiviert bereits `css.devSourcemap` und `esbuild.sourcemap`.
Nutze Source Maps, um die wirksame CSS-Regel zur ursprünglichen SCSS-Datei
und JavaScript-Fehler zur ursprünglichen TypeScript-Datei zurückzuverfolgen.
Prüfe Selektor, Quelldatei, Zeile, Import-Kette und die tatsächlich wirksame
Deklaration im Repository. Wenn DevTools nur generierte Positionen liefert,
prüfe die zugehörige Source Map und `sourceMappingURL` bzw. die Vite-
Quellzuordnung. Melde fehlende oder nicht auflösbare Maps ausdrücklich;
behaupte keine nicht nachgewiesene Quellposition.

```bash
chrome-devtools list_console_messages "$PAGE" --sessionId="$SESSION"
chrome-devtools list_network_requests "$PAGE" --sessionId="$SESSION"
```

Verwende `get_console_message` mit der ermittelten Message-ID,
`get_network_request` mit `--reqid` und der Request-ID sowie bei Bedarf
`set_logpoints` mit der ermittelten originalen Source-Position. Entferne
temporäre Logpoints nach der Diagnose. Ändere keinen Code nur für Logs,
wenn DevTools die benötigten Informationen liefern kann.

## Korrektur und Workspace-Schutz

Behebe die nachgewiesene Ursache möglichst direkt an der verantwortlichen
Quellregel oder am fehlerhaften Markup. Vermeide zusätzliche Overrides,
unnötige Spezifität, `!important`, pauschale Abstandsänderungen und
Änderungen an generierten Assets oder installierten Abhängigkeiten als
Ersatz für eine Quellkorrektur. Prüfe den Zweck vorhandener Regeln sowie
Auswirkungen auf andere Vorlagen, Breakpoints und Komponenten.

Wenn die Ursache in einem eingebundenen Workspace liegt, lies vor einer
Änderungsanfrage dessen `AGENTS.md`, `SKILLS.md`, einschlägige Skills,
Dokumentation, vorhandene Tests und Architekturentscheidungen. Prüfe, warum
die Regel dort existiert, welche Invarianten sie schützt und ob eine
zulässige projektspezifische Lösung existiert. Erkläre dem Benutzer die
Ursache, Alternativen, betroffene Dateien und mögliche Seiteneffekte.
Hole vor jedem nicht bereits ausdrücklich autorisierten Workspace-
Schreibzugriff die ausdrückliche Freigabe ein; ohne diese darf der
Workspace nicht geändert werden. Änderungen in `node_modules/` sind
keine Alternative.

## Abschlussprüfung

Lade die geänderte Seite neu, warte auf den stabilen Zustand und wiederhole
die vollständige Screenshot-Prüfung für jede betroffene Vorlage und Variante
mit beiden Viewports. Verwende für die zweite Serie die Dateinamen
`mobile-after.png` und `desktop-after.png` im gleichen Diagnoseverzeichnis
(bzw. getrennte Verzeichnisse je Vorlage). Vergleiche die Bilder visuell
und kontrolliere Console Errors, fehlgeschlagene Network Requests und
gegebenenfalls Source Maps erneut. Wiederhole die Korrektur nur innerhalb
des freigegebenen Scopes. Berichte kurz über geprüfte URLs, beide
Auflösungen, Bildpfade, die gefundene Quellregel, visuelle Abweichungen
und nicht durchführbare Prüfungen.

Schließe die eigene Seite und beende nur die eigene Session:

```bash
chrome-devtools close_page "$PAGE" --sessionId="$SESSION"
chrome-devtools stop --sessionId="$SESSION"
```
