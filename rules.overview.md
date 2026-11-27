# Regelübersicht für ThemeJS2

Die Übersicht erfasst die Daemon-Regeln aus `bin/prompts/` und die Repository-Regeln aus `AGENTS.md`.

## Regeln

| Paragraf | Regel | Datei | Zweck |
| --- | --- | --- | --- |
| § 1 | Iteration | [`bin/prompts/iteration.md`](bin/prompts/iteration.md) | • Steuert die wiederholte Bearbeitung des Backlogs und die Übergabe an die Prüfung. |
| § 1.1 | Arbeitsstand und Vorher-Aufnahmen | [`bin/prompts/iteration.md`](bin/prompts/iteration.md) | • Checkpoint und Backlog nutzen, aktuelle Quellen lesen und nötige Vorher-Aufnahmen erfassen. CSS und Geometrie gezielt messen. |
| § 1.2 | Auswahl und Umsetzung | [`bin/prompts/iteration.md`](bin/prompts/iteration.md) | • Priorisierte Aufgaben zusammenhängend bearbeiten und alle zugeordneten Seiten sowie kurze und lange Inhalte berücksichtigen. |
| § 1.3 | Iterationsbericht | [`bin/prompts/iteration.md`](bin/prompts/iteration.md) | • Geänderte Pfade, Effekte, vollständiges Backlog und kumulative Befunde dokumentieren. |
| § 2 | Projektregeln und Initialisierung | [`bin/prompts/project.md`](bin/prompts/project.md) | • Legt die Leitplanken für alle Daemon-Phasen und die schreibgeschützte Auftragsanalyse fest. |
| § 2.1 | Arbeitsumfang und Wiederverwendung | [`bin/prompts/project.md`](bin/prompts/project.md) | • Schreibgrenzen einhalten und vorhandene NTL-/NTE-Komponenten, Utilities und Theme-Tokens bevorzugen. |
| § 2.2 | Layout, Rahmen und Sichtbarkeit | [`bin/prompts/project.md`](bin/prompts/project.md) | • Konkrete Layouts auf `blank` aufbauen. Globale Sichtbarkeitsschalter sind standardmäßig aktiv und lassen sich pro Seite deaktivieren. |
| § 2.3 | Content Pane und responsive Komposition | [`bin/prompts/project.md`](bin/prompts/project.md) | • Zentralen Content Pane immer rendern. TrunkJS-Vertrag, vorhandene Inhaltsdefinitionen und alle Seiten des Layouts berücksichtigen. |
| § 2.4 | Markdown und Seitenabdeckung | [`bin/prompts/project.md`](bin/prompts/project.md) | • Redaktionelle Inhalte bewahren, Struktur über Layouts und Komponenten lösen und alle zugeordneten Seiten an beiden Auflösungen prüfen. |
| § 2.5 | Quellen und Datenschutz | [`bin/prompts/project.md`](bin/prompts/project.md) | • Browserbefunde als externe Evidenz behandeln, technische Quellen gegen installierte Versionen prüfen und private Daten aus Suchanfragen heraushalten. |
| § 2.6 | Initialisierung | [`bin/prompts/project.md`](bin/prompts/project.md) | • Ermittelt den Auftrag, ordnet Referenzen zu und erstellt eine verifizierte Projektkarte. |
| § 2.6.1 | Auftragsdateien und Rückfragen | [`bin/prompts/project.md`](bin/prompts/project.md) | • Dateinamen gegen den Bestand prüfen, eindeutige Diktatfehler auflösen und bei Mehrdeutigkeit gezielt fragen. |
| § 2.6.2 | Seiten- und Referenzzuordnung | [`bin/prompts/project.md`](bin/prompts/project.md) | • Die Seitenzuordnung als JSON ausgeben und bei fehlender Referenz die Vorschau als Baseline verwenden. |
| § 2.6.3 | Projektkarte | [`bin/prompts/project.md`](bin/prompts/project.md) | • Pfade, Komponentenverträge und die ähnlichste bekannte Umsetzung schreibgeschützt ermitteln. |
| § 3 | Referenzanalyse | [`bin/prompts/reference.md`](bin/prompts/reference.md) | • Ermittelt überprüfbare Abweichungen zwischen Soll und Vorschau. |
| § 3.1 | Referenzen und Baselines | [`bin/prompts/reference.md`](bin/prompts/reference.md) | • Jede Referenz und Zielseite pro konfiguriertem Viewport erfassen. Fehlende Referenzen durch Kriterien aus dem Auftrag ersetzen. |
| § 3.2 | Komponentenabgleich und Messungen | [`bin/prompts/reference.md`](bin/prompts/reference.md) | • Soll-Aufbau vorhandenen Komponenten und Tokens zuordnen. Messungen, Schätzwerte und Diagnosen festhalten. |
| § 3.3 | Priorisiertes Backlog und Befunde | [`bin/prompts/reference.md`](bin/prompts/reference.md) | • Abweichungen pro Seite und Viewport priorisieren, Abnahmekriterien formulieren und Befunde für den Checkpoint sichern. |
| § 4 | Review | [`bin/prompts/review.md`](bin/prompts/review.md) | • Prüft den aktuellen Build und liefert den Status für den nächsten Schritt. |
| § 4.1 | Vorschau und Prüfumfang | [`bin/prompts/review.md`](bin/prompts/review.md) | • Vorschau schreibgeschützt prüfen und bei Änderungen neue Screenshots erfassen. Nicht geprüfte Inhaltsfälle kenntlich machen. |
| § 4.2 | Status und Abschlusskriterien | [`bin/prompts/review.md`](bin/prompts/review.md) | • `DONE`, `CONTINUE` oder `BLOCKED` anhand von Build, Zielprüfung und Blockern melden. |
| § 4.3 | Kurzbericht | [`bin/prompts/review.md`](bin/prompts/review.md) | • Auf Deutsch ausgeführte Arbeit, verifizierte Dateipfade und den nächsten Schritt oder eine konkrete Frage nennen. |
| § 4.4 | Details, Backlog und Befunde | [`bin/prompts/review.md`](bin/prompts/review.md) | • Effekte, Entscheidungen, offene Aufgaben und gültige Messbefunde kompakt fortschreiben. |
| § 5 | Repository-Regeln | [`AGENTS.md`](AGENTS.md) | • Regelt Entwicklung, Veröffentlichung und die gemeinsamen Verträge von Demo und Kundenvorlage. |
| § 5.1 | Verbindliche Skills | [`AGENTS.md`](AGENTS.md) | • Passende Skills laden. Bei Nextrap- und visuellen Arbeiten gelten zusätzliche Prüfpflichten. |
| § 5.2 | Lokale und veröffentlichte Skills | [`AGENTS.md`](AGENTS.md) | • Lokale Skills unter `.agents/skills/` und veröffentlichte Skills unter `skills/` pflegen. |
| § 5.3 | Entwicklung, statischer Output und CDN | [`AGENTS.md`](AGENTS.md) | • Statisch auslieferbaren CDN-Output erzeugen und den aktuellen Vite-Build prüfen. |
| § 5.4 | Versionen bauen und veröffentlichen | [`AGENTS.md`](AGENTS.md) | • npm-Releases über `release/X.Y.Z` nach erfolgreichem Build veröffentlichen. |
| § 5.5 | `_root` als Vorlage für Nutzprojekte | [`AGENTS.md`](AGENTS.md) | • `_root` als kopierbare Vorlage mit veröffentlichten Abhängigkeiten und direkt nutzbaren Dev-Skripten pflegen. |
| § 5.6 | Aufbau und Ziel von Demo und Kundenvorlage | [`AGENTS.md`](AGENTS.md) | • Demo an Kundenumsetzungen ausrichten und die Layouts sowie gemeinsamen Bausteine beider Varianten einordnen. |
| § 5.7 | Gemeinsame Basis, Theme-Profile und Komponenten-Styles | [`AGENTS.md`](AGENTS.md) | • Pro NTL-/NTE-Instanz höchstens eine Kompositionsvariante wählen. Ohne Angabe setzt die Komponente ihren Default. |
| § 5.8 | Demo-Layouts und Seitenverzeichnis | [`AGENTS.md`](AGENTS.md) | • Demo-Rahmen über das Seitenlayout wählen und Beispiele mit ihren Dateipfaden verlinken. |
| § 5.9 | Fester Rahmen in `_root` | [`AGENTS.md`](AGENTS.md) | • Einen festen Kundenrahmen mit Navbar und Footer sowie dem rahmenlosen `blanco` bereitstellen. |
| § 5.10 | Zusammenspiel und Synchronisation der beiden Versionen | [`AGENTS.md`](AGENTS.md) | • Gemeinsame Includes und ausgewähltes Rahmen-Markup gezielt abgleichen und beide Varianten prüfen. |
| § 5.11 | Include-Namen und `_root` als Quelle der Wahrheit | [`AGENTS.md`](AGENTS.md) | • `_root` als Quelle für gemeinsame Include-Verträge verwenden. Strukturänderungen brauchen Zustimmung. |
| § 5.12 | Dokumentation von Code-Blöcken | [`AGENTS.md`](AGENTS.md) | • Den Zweck zusammengehöriger Code-Blöcke auf Deutsch erklären und die Kommentare bei Verhaltensänderungen aktualisieren. |
| § 5.13 | Layoutstruktur und Content Pane | [`AGENTS.md`](AGENTS.md) | • Vor Layout-Umbauten TrunkJS-Regeln prüfen und vorhandene Inhaltsdefinitionen für alle betroffenen Seiten erhalten. |
| § 5.14 | ContentPane-Shortcuts in Markdown | [`AGENTS.md`](AGENTS.md) | • Einzelne Elemente als eigenständige `#[...]`-Zeile schreiben. Komplexe Strukturen dürfen Raw-HTML verwenden. |
| § 5.15 | Responsive Zuständigkeit | [`AGENTS.md`](AGENTS.md) | • Responsive-Registrierung dem Theme überlassen und mögliche Seiteneffekte vor der Umsetzung klären. |
| § 5.17 | Navigation, Rahmenvarianten und Color Sets | [`AGENTS.md`](AGENTS.md#-517-navigation-rahmenvarianten-und-color-sets) | • Rahmenvarianten je ID und Funktionsschalter eindeutig auswählen. Visuelle Tokens als Color Sets bündeln. |

## Widerspruchsprüfung

- **§ 2.3 und § 5.13** — Der Daemon-Prompt verlangte, den Content Pane bei leerem Inhalt auszublenden. § 2.3 verlangt jetzt, `main` und den Pane immer zu rendern. [`theme-dommer.html`](docs/_layouts/theme-dommer.html) prüft den Inhalt weiterhin auf Leerheit. Die Layout-Umsetzung bleibt offen.
- **§ 2.2, § 5.6 und § 5.10** — Die Beschreibung der Demo stellte den bisherigen `website-*`-Rahmen als einzige Layout-Kette dar. Die Repository-Regeln beschreiben jetzt auch die `blank`-Kette für migrierte Layouts. `show_navbar`, `show_title` und `show_footer` stehen in [`docs/_config.yml`](docs/_config.yml) weiterhin in den Dommer-spezifischen Defaults. Bei fehlenden Werten behandelt das Dommer-Layout die Schalter als aktiv. `navigation_root` und `brand_url` werden weiterhin konfiguriert und im Layout ausgewertet.
- **§ 2.2 und § 5.6** — Demo-spezifische Inhalte und Pfade gehören generell in Seiten oder Konfiguration. Bei `blank`-Layouts sind Rahmen-Assets wie Logos direkt im Layout definiert.
- **§ 2.1 und § 5.1** — Der Prompt erlaubt die Bearbeitung im Auftragsrahmen. Der [`modify-theme`-Skill](.agents/skills/modify-theme/SKILL.md) verlangt bei Änderungen an `docs/_layouts` oder `docs/_includes` eine Rückfrage. Der Prompt legt bislang nicht ausdrücklich fest, wann diese Zusatzfreigabe nötig ist.
- **§ 1.2, § 2.6.1 und § 4.2** — Unabhängige Aufgaben laufen bei einem Konflikt weiter. Eine erforderliche Entscheidung blockiert den gesamten Lauf erst, wenn sie die verbleibende Arbeit stoppt. Eine Runde ohne Netto-Dateiänderung ist ebenfalls ein Blocker.
- **§ 1.3, § 3.3 und § 4.3–4.4** — `## Kurzbericht`, `## Details`, `## To-do` und `## Project Findings` sind Überschriften der erzeugten Berichte. Die Nummerierung steht in den Regeldateien und lässt diese Ausgabevorgaben bestehen.
