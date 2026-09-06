# Implementierung und Content-Vertrag

Lies diese Referenz vor dem Anlegen des Themes, der Demo und neuer Section-Varianten.

## Theme zuerst als System aufbauen

1. Lege den Root-Entry nach dem vorhandenen Theme-Muster an.
2. Initialisiere das Theme über das bestehende Runtime-Mixin und `_runtime-settings.scss`.
3. Ordne die erkannten Designregeln vorhandenen semantischen `--nt-*`-Rollen zu. Erfinde kein paralleles Token-System.
4. Definiere den wiederkehrenden Section-Abstand einmal im `tj-content-pane`-Partial über `--nt-spacing-section`.
5. Registriere das Theme im Entwicklungs-Entry, ohne Theme-Werte dort abzulegen.
6. Lege Component-Styles ausschließlich unter `theme/<name>/elements/<component>/` und Light-DOM-Muster unter `theme/<name>/classes/` ab.

Verwende pro Style-Datei genau eine erkennbare Verantwortung. Lade Dateien über komponentenspezifische Entries mit `meta.load-css`. Allgemeine Regeln stehen vor `mode="mobile"`, `mode="tablet"` und `mode="desktop"` in dieser Reihenfolge; unbenutzte Modes entfallen.

## Struktur vor Styling

Prüfe vor jeder CSS-Regel:

1. Liegt der Content im richtigen dokumentierten Slot?
2. Reicht eine Instanzvariable wie `--cols`, `--gap` oder ein vorhandenes Token?
3. Reicht eine vorhandene Utility?
4. Reicht ein vorhandener Modifier wie `reverse`, `breakout-*`, `with-*` oder ein Justify-Modifier?
5. Ist es ein allgemeines Light-DOM-Muster für Standard-Markdown?
6. Braucht die Komponente tatsächlich eine neue, wiederverwendbare `style-*`-Baseline?

Behebe falsches Seaming im Markdown, nicht durch visuelle Neuordnung im CSS. Insbesondere bei `ntl-2col` bleiben `main` und `aside` innerhalb des Wrappers, `top` und `bottom` über dessen Breite sowie `header` und `footer` über der Containerbreite.

## Kramdown und Content Pane

- Hänge `layout`, Classes und `section-style` an die Überschrift, die die Section eröffnet.
- Verwende normale Überschriften, Absätze, Listen, Bilder, Links und Blockquotes als Autoreninhalt.
- Verwende `hr[layout]` nur für einen Wrapper ohne eigene Überschrift.
- Vermeide unnötige Layout-Indizes und komplexe HTML-Wrapper.
- Direkte Kinder von `tj-content-pane` sind grundsätzlich `ntl-*`-Layouts.
- Nutze `&shy;` an redaktionell sinnvollen Stellen, wenn lange Wörter sonst instabil umbrechen.
- Halte Texte, URLs, Bildquellen, Preise und wiederholte Daten aus Theme-SCSS heraus.

Ein Theme ist erst praktisch nutzbar, wenn seine Demo zeigt, wie dieselben Varianten direkt aus Markdown und Content Pane aktiviert werden. Teste deshalb nicht nur isoliertes HTML.

## Shadow DOM und Children

- Verwende ausschließlich dokumentierte Parts, Slots, States und Mixins.
- Style Child-Elemente abhängig von der Parent-Variante in einem Child-Unterordner als `_in-style-*.scss`.
- Hänge responsive Child-Regeln an den Parent, der das `mode`-Attribut tatsächlich besitzt.
- Setze keine visuellen Defaults auf einen bloßen `ntl-*`-Selector.
- Verwende keine Media Queries; nutze `mode` und die vorhandene responsive Klassenlogik.
- Kommentiere funktionale Codeblöcke kurz auf Deutsch und beschreibe Verantwortung oder Grund.

## Assets und Build-Ausgabe

- Speichere ausdrücklich benötigte dekorative Theme-Assets unter `docs/assets/<theme>/` und referenziere sie stabil aus dem Content oder Theme.
- Bildauswahl bleibt grundsätzlich Content; CSS enthält keine fest eingebauten Autorenbilder.
- Prüfe SVGs auf sinnvolle ViewBox, Farbe, Skalierung und rein dekorative Nutzung.
- Führe den vollständigen Sass-/Vite-Build aus, wenn die Umgebung es zulässt.
- Nenne einen Build nur erfolgreich, wenn der aktuelle Lauf erfolgreich war.
- Halte ausdrücklich ausgeschlossene generierte Pfade aus Commit und PR heraus. Kompiliere für die Prüfung bei Bedarf in eine temporäre Datei außerhalb dieser Pfade.

## Website-Rahmen

Navbar und Footer gehören nicht automatisch zu einer Theme-Demo. Werden sie ausdrücklich verlangt, halte `docs` und `_root` funktional gleich, ändere keine Include-Namen ohne Freigabe und kapsle die Auswahl über eine Theme-/Layout-Option, statt andere Themes zu überschreiben.

