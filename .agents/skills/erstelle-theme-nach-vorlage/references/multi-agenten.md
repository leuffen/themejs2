# Multi-Agenten-Abgleich

Lies diese Referenz, wenn mehrere voneinander abgrenzbare Section-Styles gleichzeitig an dieselbe Vorlage angeglichen werden und Subagenten verfügbar sowie für die Aufgabe autorisiert sind. Nutze keine Subagenten für eine einzelne kleine Section oder wenn die Arbeit überwiegend dieselben Dateien betrifft.

## Zerlegung und Zuständigkeiten

Der koordinierende Agent besitzt die gemeinsame Referenzanalyse, Section-Matrix, Theme-Tokens, Content-Flow-Regeln, seitenweites Markup, Upstream-Entscheidungen und den Pull Request. Delegiere danach pro unabhängiger Section beziehungsweise `style-*`-Variante genau einen Spezialauftrag, beispielsweise Hero, Feature, Timeline, Testimonial, Pricing oder FAQ.

Parallelisiere nach visueller Verantwortung statt nach Dateityp. Ein Agent soll Markup und zugehörige Parent-/Child-Styles seiner Section gemeinsam beurteilen können. Lege für gemeinsam genutzte Dateien wie `_runtime-settings.scss`, `_theme.scss`, `tj-content-pane` oder eine zentrale Demo-Datei genau einen Owner fest; andere Agenten melden dort benötigte Änderungen nur zurück.

Verwende nach Möglichkeit getrennte Worktrees oder Branches. Ist nur ein gemeinsamer Workspace verfügbar, müssen die erlaubten Dateien der Agenten disjunkt sein. Kein Agent darf Änderungen eines anderen zurücksetzen, Arbeitsbäume bereinigen oder fremde Konflikte eigenständig auflösen.

## Koordinator-Phase vor dem Parallelstart

Starte Section-Agenten erst, nachdem der Koordinator:

1. einen gemeinsamen Basis-Commit als SHA festgehalten hat;
2. Theme-Tokens, Content Flow und die grundlegende Markup-/Slot-Struktur vorbereitet oder ausdrücklich als geschützt markiert hat;
3. eine Owner-Matrix für Demo-Markup, `_theme.scss`, Komponenten-Entries, Default-Styles, Assets und Upstream-Vorversionen erstellt hat;
4. jedem Agenten eine disjunkte Datei-Allowlist und die geschützten Dateien genannt hat;
5. die Integrationsreihenfolge festgelegt hat, insbesondere gemeinsame Struktur vor Section-Details;
6. einen erfolgreichen Basis-Build oder den konkreten bestehenden Build-Blocker dokumentiert hat.

Varianten derselben Komponente werden demselben Agenten zugeordnet oder nacheinander bearbeitet, wenn sie gemeinsame Entries, Parent-/Child-Regeln oder Default-Styles benötigen. Ein Agentenstand gilt als veraltet, sobald sein Basis-SHA durch eine strukturell relevante Integration überholt ist; der Koordinator prüft ihn dann erneut gegen den aktuellen Stand oder lässt ihn gezielt aktualisieren.

## Gemeinsames Briefing

Jeder Section-Agent erhält denselben relevanten Referenzstand und einen kurzen Vertrag mit:

- Section-Name und zugehöriger `style-*`-Variante;
- Desktop- und Mobilreferenz samt Zielbreiten;
- erlaubten Dateien und ausdrücklich geschützten gemeinsamen Dateien;
- aktuellem Content-Pane-Markup und betroffenen NTL-/NTE-Komponenten;
- zu lesenden Repository-, Theme- und Komponenten-Skills;
- bekannten Messankern wie Container, Spalten, Gap, Bildanteil oder sichtbarer Card-Anzahl;
- Auftrag zu einer zusammenhängenden Vergleichsrunde mit den drei verbindlichen Checkpoints aus `visuelle-iteration.md`;
- gefordertem Prüf- und Übergabeformat.

Gib nicht die erwartete Lösung vor. Übergib Ziel, Invarianten und Messdaten, damit der Agent die vorhandene Komponenten-API selbst prüft und die kleinste belastbare Änderung findet.

## Eine Vergleichsrunde je Section-Agent

Jeder Agent bearbeitet seine Section innerhalb einer Vergleichsrunde vollständig in dieser Reihenfolge:

1. Struktur und Seaming: Rollen, Slots, Children, Modifier und Desktop-/Mobil-Reihenfolge prüfen und korrigieren.
2. Geometrie und Rhythmus: Container, Raster, Gap, Padding, Bildgeometrie und Ausrichtung messen und angleichen.
3. Typografie und Robustheit: Umbrüche, Gewichte, Farben, States, Dekorationen sowie variable Texte und Item-Anzahlen prüfen.

Der Agent bündelt die belegten Änderungen aus allen drei Checkpoints und prüft Desktop und Mobile anschließend erneut. Ein Checkpoint ohne Änderungsbedarf bestätigt den vorhandenen Stand und erzeugt keinen künstlichen Diff. Nur wenn eine Änderung an Struktur, Seaming oder gemeinsamer API die folgenden Prüfergebnisse ungültig macht, darf der Agent innerhalb derselben Iteration weitere vollständige Vergleichsrunden ausführen; er dokumentiert dann den Grund.

## Grenzen für Section-Agenten

- Keine neuen Media Queries, Abhängigkeiten oder ungescopten Theme-Regeln.
- Keine Änderung an gemeinsamen Tokens, Entries, Build-Konfiguration oder fremden Sections ohne Rückgabe an den Koordinator.
- Keine Umgehung fehlender Shadow-DOM-Parts, Slots oder gemeinsamer Layout-APIs.
- Keine direkten Upstream-Commits oder zusätzlichen Pull Requests, sofern dies nicht ausdrücklich Teil des delegierten Auftrags ist.
- Keine generierten Assets in den Commit aufnehmen, wenn sie vom aktuellen Auftrag ausgeschlossen sind.

Erkennt ein Agent eine gemeinsame API-Lücke, beschreibt er vorhandene Alternativen, die kleinste opt-in API, betroffene Komponenten und den benötigten Theme-Einsatz. Der koordinierende Agent entscheidet anschließend über eine lokale Vorversion unter `theme/<name>/upstream-proposal/` und einen getrennten Upstream-PR.

Benötigt ein Agent eine geschützte gemeinsame Datei, ändert er sie nicht selbst, sondern meldet:

```text
ÄNDERUNGSANTRAG
- Datei: <Pfad>
- Section: <Name und style-*>
- Bedarf: <konkrete strukturelle oder registrierende Änderung>
- Auswirkung: <betroffene weitere Sections oder Defaults>
- Alternative: <kleinere Lösung oder warum keine tragfähig ist>
```

Der Koordinator bündelt kompatible Anträge, entscheidet über den gemeinsamen Diff und informiert betroffene Agenten über den neuen Basisstand.

## Übergabe jedes Section-Agenten

Die Rückgabe enthält:

| Feld | Inhalt |
| --- | --- |
| Ergebnis | wichtigste visuelle und strukturelle Änderung |
| Desktop | konkrete Auswirkung und geprüfte Breite |
| Mobile | konkrete Auswirkung und geprüfte Breite |
| Checkpoint Struktur | Änderung oder bestätigter Ist-Stand für Rollen, Slots und Reihenfolge |
| Checkpoint Geometrie | Änderung oder bestätigter Ist-Stand für Raster, Abstände und Media |
| Checkpoint Details | Änderung oder bestätigter Ist-Stand für Typografie, States und Robustheit |
| Dateien | vollständige Liste der geänderten Dateien |
| Prüfung | ausgeführter Build, Sass-, Diff- oder Markup-Check |
| Upstream-Lücke | keine oder konkret belegter Vorschlag |
| Nächste Revision | verbleibende Abweichung mit Zielbreite |
| Commit | Commit-SHA, falls im isolierten Branch gearbeitet wurde |

Ein Agent meldet Blocker statt Sicherheits-, Browser- oder Berechtigungsgrenzen zu umgehen.

## Integration durch den Koordinator

1. Prüfe vor der Übernahme den tatsächlichen Diff und die Dateigrenzen jedes Agenten.
2. Integriere Ergebnisse einzeln, damit Konflikte und Regressionen einer Section zugeordnet bleiben.
3. Löse Überschneidungen an gemeinsamen Dateien zentral anhand der Section-Matrix und der Theme-Invarianten.
4. Kompiliere nach jeder strukturell relevanten Integration und nach der letzten Übernahme das vollständige Theme.
5. Prüfe gemeinsame Auswirkungen auf alle betroffenen Sections in Desktop und Mobile; Default-Styles, Tokens, Blockquotes und Content Flow dürfen nicht nur an der zuletzt integrierten Section bewertet werden.
6. Führe Upstream-Lücken zusammen, aber halte fachlich getrennte Komponentenfähigkeiten in getrennten Vorversionen und Pull Requests.
7. Formuliere aus den Agentenübergaben einen konsolidierten Änderungsbedarf für die nächste visuelle Revision.
8. Kontrolliere abschließend Commit- und PR-Dateiliste sowie ausdrücklich ausgeschlossene Pfade.

Der Koordinator bleibt für das Gesamtergebnis verantwortlich. Erfolgreiche Einzelprüfungen ersetzen weder den vollständigen Build noch den abschließenden Desktop-/Mobilvergleich der integrierten Seite.

## Abschließende Vollseitenmatrix

Prüfe die integrierte Seite mindestens in der Referenz-Desktopbreite, an einem relevanten Tablet-/Breakpoint-Übergang sowie bei 375 und 320 Pixeln. Ergänze jede Section, die durch gemeinsame Tokens, Default-Styles, Markup oder Content Flow direkt oder indirekt betroffen ist.

| Viewport | Section | Referenznachweis | Resultatnachweis | Pass/Fail | Restabweichung |
| --- | --- | --- | --- | --- | --- |
| Referenz-Desktop | `<Section>` | Screenshot oder Messanker | Vorher-/Nachher-Screenshot oder Messprotokoll | `<Pass/Fail>` | `<konkret>` |
| Tablet/Übergang | `<Section>` | responsiver Vertrag | Resultat-Screenshot oder DOM-/CSS-Nachweis | `<Pass/Fail>` | `<konkret>` |
| 375px | `<Section>` | Mobilreferenz | Vorher-/Nachher-Screenshot oder Messprotokoll | `<Pass/Fail>` | `<konkret>` |
| 320px | `<Section>` | Overflow-/Umbruchziel | Resultat-Screenshot oder Box-Modell-Nachweis | `<Pass/Fail>` | `<konkret>` |

Ein Pass setzt korrekte Struktur, keinen unbeabsichtigten Dokument-Overflow, stabile Content-Umbrüche und keine wesentliche visuelle Abweichung in Hierarchie, Geometrie oder Zustand voraus. Sind Resultat-Screenshots technisch blockiert, ersetzt das Messprotokoll nicht die visuelle Freigabe; die betroffenen Matrixzeilen bleiben bis zur erreichbaren Preview als offen gekennzeichnet.
