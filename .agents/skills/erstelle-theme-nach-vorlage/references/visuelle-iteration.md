# Visuelle Iteration mit einer Vergleichsrunde

Lies diese Referenz für jede Section, die an eine Desktop- und Mobilvorlage angeglichen wird. Führe pro Section und Iteration standardmäßig eine zusammenhängende Vergleichsrunde aus. Diese Runde arbeitet die drei folgenden Checkpoints in Reihenfolge ab, bündelt die belegten Änderungen und vergleicht danach das Ergebnis erneut mit Desktop- und Mobilvorlage. Dadurch können vollständige Seiteniterationen häufiger stattfinden, ohne Struktur, Geometrie oder Robustheit auszulassen.

## Checkpoint 1: Struktur und Seaming

Vergleiche:

- semantische Reihenfolge und Content-Gruppen;
- Layouttyp, Slots, Child-Komponenten und Modifier;
- Desktop-/Mobil-Reihenfolge;
- Container- und Full-Bleed-Verantwortung;
- Autorenfreundlichkeit des Markdown-Vertrags.

Korrigiere hier Slots und Markup. CSS-Feintuning vor stabilem Seaming erzeugt fragile Sonderregeln.

## Checkpoint 2: Geometrie und Rhythmus

Vergleiche mit messbaren Ankern:

- Containerbreite und Außenkanten;
- Spaltenverhältnis, Card-Anzahl, Gap und Padding;
- Bildbreite, Seitenverhältnis, Crop und Überlagerung;
- Section-Höhe und vertikale Abstände;
- Ausrichtung von Überschrift, Copy, Listen und CTA.

Rechne erwartete Größen nach. Beispiel: Bei 1116 Pixel Container und 24 Pixel Gap ergeben zwei gleich breite Pricing-Cards jeweils 546 Pixel. Solche Rechnungen machen Abweichungen nachvollziehbar und verhindern zufälliges Pixel-Tuning.

## Checkpoint 3: Typografie, Details und Robustheit

Vergleiche:

- Schriftgröße, Gewicht, Zeilenhöhe, Textbreite und tatsächliche Umbrüche;
- Farben, Borders, Radien, Schatten, Icons und dekorative Details;
- CTA-Größe und -Kontrast;
- Fokus-, Open-, Featured-, Disabled- oder Unavailable-Zustände;
- Robustheit bei längeren Texten, fehlenden optionalen Feldern und abweichender Item-Anzahl.

Setze feste Höhen nur, wenn die Referenz und variabler Content sie gemeinsam rechtfertigen. Bevorzuge `min-height`, intrinsische Größen und flexible Tracks.

## Abschluss der Vergleichsrunde

Vergleiche nach den drei Checkpoints alle geänderten Zustände gemeinsam und halte pro Section dieses kurze Protokoll:

| Bereich | Ergebnis |
| --- | --- |
| Checkpoints | Änderung oder bestätigter Ist-Stand für Struktur, Geometrie und Details |
| Desktop-Wirkung | konkrete Änderung an Raster, Ausrichtung, Größe oder Rhythmus |
| Mobile-Wirkung | konkrete Änderung an Reihenfolge, Dichte, Scroll-/Stack-Verhalten oder Umbruch |
| Verifiziert durch | Resultat-Screenshot, DOM-/CSS-Messung, kompiliertes CSS oder Box-Modell-Rechnung |
| Nächste Revision | verbleibende sichtbare Abweichung mit Zielbreite |

Prüfe nach Änderungen stets alle betroffenen Sections, nicht nur die zuletzt bearbeitete. Gemeinsame Tokens, Default-Styles, Blockquotes oder Content-Flow-Regeln können mehrere Bereiche beeinflussen.

## Wann drei vollständige Runden sinnvoll sind

Drei getrennte Vergleichsrunden sind eine begründete Ausnahme. Nutze sie bei einer Erstangleichung ohne stabile Section-Struktur, bei Änderungen an Slots, Parent-/Child-Seaming oder responsiver Reihenfolge sowie bei einer neuen gemeinsamen API, deren Integration die zuvor geprüfte Geometrie oder Typografie erneut verändern kann. Dokumentiere den Grund vor Beginn. Für normale Folgeiterationen bleibt eine Vergleichsrunde mit drei Checkpoints der Standard; zeigt ihr Ergebnis weitere Abweichungen, starte lieber eine neue, kurze Seiteniteration mit frischem Resultat-Render als dieselbe Section vorsorglich dreimal vollständig zu durchlaufen.

## Empfohlene Vergleichsbreiten

- Referenz-Desktopbreite und ein schmalerer Desktop/Tablet-Übergang;
- Referenz-Mobilbreite;
- 320 Pixel für harte Umbruch- und Overflow-Fälle;
- 375 Pixel für eine verbreitete Mobilgeometrie.

Vergleiche möglichst mit gleicher Viewportbreite, gleicher Font-Ladung und gleichem Content. Markiere Referenz- und Resultat-Screenshot eindeutig.

## Typische letzte Prüfpunkte

- Hero: H1-Umbruch, Formularbreite, Social-Proof-Abstand und Dekorationsposition.
- Feature-Bühne: Bildcrop, Mockup-Höhe, Dots/Pattern-Clipping und mobile Reihenfolge.
- Linkraster: Wrap langer Linktexte und Touchabstände.
- Timeline: sichtbare Card-Anzahl, Snap, Dokument-Overflow und Pfeilsteuerung.
- Testimonial: Quote-Icon-Überlagerung, Wrapper-Gap und dekoratives Clipping.
- Pricing: Badge, Shadow, Button-Kontrast, Featurezustände und gleiche Höhen.
- FAQ: Überschriftenausrichtung, Open-Body-Abstand und Accordion-Klickfläche.

Wenn kein echter Resultat-Screenshot möglich war, darf der Abschluss nicht „pixelgenau geprüft“ behaupten. Benenne die konkreten Breiten und Details, die in der nächsten erreichbaren Preview visuell bestätigt werden müssen.
