# Referenz erfassen und zerlegen

Lies diese Referenz, wenn eine Website, ein Screenshot oder ein bestehendes Theme als Designvorlage dient.

## Quellen in sinnvoller Reihenfolge

1. Verwende die vom User benannte Originalseite als visuelle Hauptquelle.
2. Verwende zusätzliche Seiten nur für die ausdrücklich genannte Rolle, beispielsweise als reine Stilreferenz. Vermische weder deren Seitenstruktur noch deren Texte mit der Hauptvorlage.
3. Prüfe Desktop- und Mobil-Screenshots in den tatsächlichen Referenzbreiten. Ergänze mindestens eine schmale Breite um 320 Pixel und eine verbreitete Breite um 375 Pixel, wenn die Vorlage das nicht bereits abdeckt.
4. Untersuche bei erreichbarer Originalseite DOM, Stylesheets, Bildmaße und berechnete Geometrie. Übernimm keine fremde Framework-Struktur; nutze die Messwerte als Hinweise für Tokens, Proportionen und Rhythmus.
5. Vergleiche das ähnlichste vorhandene Theme und, wenn genannt, dessen Nutzrepository. Dadurch werden sowohl der Theme-Vertrag als auch die reale Verwendung in Markdown und Content Pane sichtbar.

Wenn eine Live-Preview oder lokale URL durch Browser- oder Sicherheitsrichtlinien blockiert ist, umgehe die Sperre nicht. Verwende Original-Screenshots, erreichbare Original-DOM-/CSS-Werte, kompiliertes SCSS und nachvollziehbare Box-Modell-Rechnungen; kennzeichne das Ergebnis als noch nicht per Resultat-Screenshot bestätigt.

## Section-Matrix

Lege vor der Implementierung pro Bereich mindestens diese Zuordnung fest:

| Feld | Entscheidung |
| --- | --- |
| Referenzrolle | Hero, Feature, Timeline, Testimonial, Pricing, FAQ oder anderer wiederverwendbarer Typ |
| Inhaltsrollen | Überschrift, Copy, Bild, Liste, CTA, Metadaten, wiederholte Items |
| NTL/NTE-Seaming | vorhandenes Layout, Slots, Children und Modifier |
| Theme-Ausdruck | Tokens, bestehende Utility, semantische Light-DOM-Class oder `style-*`-Variante |
| Desktop | Container, Spaltenverhältnis, Reihenfolge, Bildgeometrie und Innenrhythmus |
| Mobile | Stack/Flow, Reihenfolge, sichtbare Dichte, Abstände und Touch-Verhalten |
| Assets | Originalasset, lokales Theme-Asset, Icon-Ersatz oder Content-Bild |
| Risiko | fehlender Part/API, komplexes Autoren-Markup, feste Höhe oder Überlagerung |

## Was aus der Vorlage extrahiert wird

Erfasse zuerst Systeme statt Einzelpixel:

- Farbrollen und Kontrast, nicht nur Hexwerte;
- Typografiehierarchie, Gewichte, Zeilenhöhen und wiederkehrende Textbreiten;
- Containerbreite, Spaltenverhältnisse und wiederkehrende Gaps;
- Section-Rhythmus und innere Abstände getrennt;
- Radius-, Border- und Schattenfamilien;
- Bild-Seitenverhältnisse, Crop-Verhalten und dekorative Überlagerungen;
- wiederkehrende CTA-, Listen-, Link- und Card-Muster;
- responsive Reihenfolge, Dichte und Interaktion.

Miss markante Anker: linke und rechte Containerkante, Baselines von Überschrift und Bild, Section-Höhe, Card-Breite, Gap, Bildanteil, Überlagerungsposition und Anzahl gleichzeitig sichtbarer Items. Prozentuale Verhältnisse sind meist robuster als isolierte Pixelwerte.

## Gelernte Section-Muster

- Hero: Reihenfolge und semantische Gruppen zuerst festlegen; Formular, Social Proof und Pfeile getrennt modellieren. Dekorative Pfeile gehören als lokale Assets unter `docs/assets/<theme>/`, nicht als CSS-Textinhalt.
- Helle Bild-/Text-Section: `ntl-2col` mit `main` und `aside`; Spaltenzahl pro Instanz über `--cols`, nicht als neue Variante nur für Breite.
- Dunkle Feature-Bühne: Hintergrund und Bühne am Layout, Media-Crop und Mockup-Überlagerung als wiederverwendbares Medienmuster; Mobilreihenfolge ausdrücklich prüfen.
- Link-/Leistungsbereich: Links bleiben echter Content. Ein 3×2-Desktop-Raster kann mobil weiterhin zweispaltig sein, sofern Textlängen und Touchflächen stabil bleiben.
- Timeline: `ntl-card-row` ist passend; horizontales Mobile-Scrolling ist gemeinsames Layoutverhalten und kein theme-spezifischer Card-Hack.
- Testimonial: Quote, Attribution und CTA als Content; Bild/Text-Gap darf nicht durch Umdeutung des allgemeinen Content-Paddings erzeugt werden.
- Pricing: gleiche Card-Geometrie, Featured-Zustand, Badge, CTA-Reihenfolge sowie verfügbare/nicht verfügbare Features semantisch ausdrücken.
- FAQ: Seitentitel kann in `aside`, Accordion in `main` liegen; `reverse` und Justify-Modifier sind besser als eine CSS-seitige Neuordnung von Wrapper und Header.

