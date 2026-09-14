# Repository-Regeln

## Verbindliche Skills

Für Arbeiten in diesem Repository sind die jeweils passenden Skills aus
`/opt/.agents/skills/` zu beachten. Insbesondere gelten die Regeln des
`modify-theme`-Skills für Theme-Entwicklung und Theme-Änderungen.

Bei Änderungen am Repository `/opt/workspaces/nextrap-monorepo` müssen zusätzlich
immer die Regeln des internen Nextrap-Skills beachtet werden:

```text
/opt/workspaces/nextrap-monorepo/.agents/skills/nextrap-skill/SKILL.md
```

Der Nextrap-Skill ist vor Änderungen am Nextrap-Monorepo zu lesen. Seine
Vorgaben zu Komponentenverträgen, Shadow DOM, Parts, Mixins, Responsivität,
Lifecycle, Wiederverwendung und Prüfungen gelten zusätzlich zu den Regeln des
jeweils verwendeten Skills.

## Lokale und veröffentlichte Skills

Das Verzeichnis `.agents/skills/` enthält ausschließlich Skills für die lokale
Entwicklung von ThemeJS2. Es darf nicht mit dem npm-Paket veröffentlicht und
nicht als Ablage für Skills verwendet werden, die Paketnutzer benötigen.

Alle extern genutzten Skills, insbesondere Migrations-Skills, müssen unter
`skills/<skillName>/` liegen. Das Root-Verzeichnis `skills/` ist Bestandteil
des veröffentlichten npm-Pakets; jeder Skill erhält dort ein eigenes
Unterverzeichnis.

## Entwicklung, statischer Output und CDN

Die Website wird später statisch auf einem CDN gehostet. Vite und Jekyll
werden ausschließlich lokal für die Entwicklung verwendet. Änderungen an der
lokalen Entwicklungsumgebung dürfen deshalb keine produktive Server- oder
Runtime-Abhängigkeit voraussetzen.

Der von Jekyll und Vite erzeugte Output muss vollständig statisch auslieferbar
sein. HTML, CSS, JavaScript, Bilder, Schriften und weitere Assets müssen als
fertige Dateien im Output vorhanden sein. HMR, LiveReload, lokale Watcher und
Workspace-Verknüpfungen sind reine Entwicklungsfunktionen und dürfen nicht für
den späteren CDN-Betrieb erforderlich sein.

Die fertigen JavaScript- und CSS-Builds werden unter `assets/` beziehungsweise
`docs/assets/` in das Repository eingecheckt. Diese Dateien sind Teil des
lieferbaren Projektstands und werden für den späteren CDN-Betrieb direkt
verwendet. Ein abgeleitetes Nutzprojekt muss nach dem Kopieren und `npm update`
start- und auslieferbar sein, ohne die Builds erneut lokal erzeugen zu müssen.

Vor jeder Rückmeldung zu einer Build-Änderung ist zu prüfen, ob `vite build`
erfolgreich durchgelaufen ist. Erst danach darf der Build als aktuell,
verwendbar oder auslieferbar bezeichnet werden. Fehlgeschlagene Builds müssen
als solche gemeldet werden; vorhandene alte Build-Dateien dürfen nicht als
Beleg für einen erfolgreichen aktuellen Build gewertet werden.

## Versionen bauen und veröffentlichen

Neue npm-Versionen werden ausschließlich durch einen Git-Tag im Format
`release/X.Y.Z` gebaut und veröffentlicht, zum Beispiel `release/1.0.12`.
`X`, `Y` und `Z` müssen reine Ganzzahlen sein; Präfixe wie `v`, fehlende
Versionssegmente und Vorabversionen sind nicht zulässig.

Der Tag wird auf dem zu veröffentlichenden Commit angelegt und gepusht:

```sh
git tag release/1.0.12
git push origin release/1.0.12
```

Der Publish-Workflow extrahiert daraus `1.0.12`, setzt diese Version vor dem
Build per `npm version --no-git-tag-version`, baut das Paket und veröffentlicht
es anschließend bei npm. Die Version in `package.json` muss für diesen Vorgang
nicht manuell geändert werden. Vor dem Tagging ist lokal mit `npm run build` zu
prüfen, dass der vorgesehene Commit erfolgreich gebaut werden kann. Bereits bei
npm veröffentlichte Versionsnummern dürfen nicht erneut verwendet werden.

## `_root` als Vorlage für Nutzprojekte

Das Verzeichnis `_root` ist die Basis für aus dem Theme abgeleitete Nutzprojekte.
Es muss deshalb so gepflegt werden, dass es in ein neues Repository kopiert
werden kann und nach `npm update` direkt mit den vorhandenen `dev`- und
`dev-b`-Skripten gestartet werden kann. Abhängigkeiten von Workspace-Paketen
sind in `_root` daher als veröffentlichte semantische Versionen und nicht mit
`workspace:*` einzutragen. Relative Pfade oder lokale Workspace-Verknüpfungen
dürfen für die Nutzprojekt-Vorlage nicht erforderlich sein.

## Aufbau und Ziel von Demo und Kundenvorlage

`docs/` ist die normale GitHub-Pages-Demo und zugleich Test- und Präsentationsumgebung für mehrere Themes. `_root/` ist die kopierbare Projektwurzel für Kunden-Repositories; die Website liegt darin unter `_root/docs/`. Die fachliche Include-Struktur orientiert sich an `dermatthes/leu-web-osman2/docs/_includes/`: `components/` enthält darstellende Bausteine, `helpers/` Hilfsfunktionen und `fragments/` gemeinsame Seitenfragmente wie den Loader. Leuffen-Logos liegen in beiden Versionen unter `docs/assets/leuffen/`. Die alte Struktur mit `el/`, `do/` und `part/` wird nicht wieder eingeführt.

| Bereich | GitHub-Pages-Demo `docs/` | Kundenvorlage `_root/docs/` |
| --- | --- | --- |
| Themes | Mehrere Themes für Vergleich und Tests | Genau ein Theme in `_src/style.scss` |
| Navbar und Footer | Varianten unter `_includes/_styles/<name>/navbar.html` bzw. `footer.html` | Genau eine Navbar direkt in `_layouts/50_navbar.html` und ein Footer direkt in `_layouts/60_footer.html` |
| Auswahl und Ausblenden | Nur hier: `use_navbar`, `use_footer`, `skip-navbar` sowie Demo-Schaltwerkzeuge | Keine Variantenabfrage, Ausblendschalter oder Theme-Switcher-Abhängigkeit |
| Alternative Rahmen-Dateien | Keine `navbar.alt-*`-/`footer.alt-*`-Dateien und kein `_layouts/alternatives/`; Varianten gehören unter `_includes/_styles/` | Keine alternativen Rahmenkopien und kein `_includes/_styles/` |
| Gemeinsame Bausteine | Fachliche Includes mit denselben Namen und Parametern wie in `_root` | Verbindliche gemeinsame Include-Struktur für Kundenprojekte |

## Demo-Varianten unter `docs`

Die bestehenden Verzeichnisse `docs/_includes/_styles/default/`, `osman/` und die weiteren tatsächlich vorhandenen Varianten bleiben erhalten. Die Demo-Layouts `50_navbar.html` und `60_footer.html` wählen Navbar und Footer unabhängig über `use_navbar` bzw. `use_footer`; ohne Angabe gilt `default`. `false` blendet den jeweiligen Bereich aus, `skip-navbar: true` bleibt für die Demo unterstützt. Nicht jede Variante muss beide Dateien anbieten; eine fehlende Navbar oder ein fehlender Footer wird nicht künstlich ergänzt. Variantenwechsel und Demo-Schaltwerkzeuge dürfen ausschließlich in `docs/` vorkommen.

## Fester Rahmen in `_root`

Die Kundenvorlage enthält genau einen aktiven Website-Rahmen: Das Markup der gewählten Navbar steht direkt in `_root/docs/_layouts/50_navbar.html`, das des gewählten Footers direkt in `_root/docs/_layouts/60_footer.html`. Individuelle Kundenanpassungen erfolgen in diesen beiden Dateien. Es werden weder Demo-Dispatcher noch `use_navbar`-/`use_footer`-/`skip-navbar`-Abfragen, zusätzliche Rahmenfragmente, Variantenkopien oder Theme-Switcher-Imports und -Abhängigkeiten übernommen. Fachliche Navigationselemente wie das mobile Menü bleiben Bestandteil der festen Navbar. Das rahmenlose `blanco`-Layout hat eine feste Layout-Verknüpfung zu `20_body` und benötigt keine Schaltlogik.

## Zusammenspiel und Synchronisation der beiden Versionen

Die gemeinsame Layout-Kette lautet `10_blanc → 20_body → 50_navbar → 60_footer → 70_main`; `20_body` enthält die gemeinsamen seitenweiten Laufzeit-Bausteine. Fachliche Includes, Slots, Attribute und das gerenderte Markup der gewählten Rahmenvariante müssen in Demo und Kundenvorlage zusammenpassen. Funktionale Gleichheit bezieht sich auf diese gewählte Variante, nicht auf identische Layout-Quelldateien: In der Demo wird sie eingebunden, im Kundenlayout steht ihr Markup direkt. Die Demo-Auswahl selbst gehört ausdrücklich nicht zum Kundenverhalten.

Bei einer Änderung zuerst prüfen, ob sie einen gemeinsamen Include, eine reine Demo-Variante oder den für `_root` gewählten Rahmen betrifft. Gemeinsame Includes unter `components/`, `helpers/` und `fragments/` in beiden Versionen unter identischen Pfaden aktualisieren. Betrifft die Änderung den ausgewählten Kundenrahmen, das entsprechende Demo-Markup gezielt in `50_navbar.html` bzw. `60_footer.html` übernehmen; dabei Layout-Frontmatter und genau ein `{{ content }}` nach der Navbar bzw. vor dem Footer erhalten. Nicht die Demo-Verzeichnisse oder Dispatcher kopieren. Änderungen an anderen Demo-Varianten erzeugen keine weiteren Kundenlayouts. Kundendaten und individuelle Anpassungen dürfen bei späteren Übernahmen nicht durch Demo-Daten überschrieben werden.

Ein neues Kundenprojekt erhält den Inhalt von `_root/` als Projektwurzel und verwendet das veröffentlichte Theme-Paket über seine regulären Package-Imports. Ein Paketupdate ersetzt nicht automatisch die ins Kunden-Repository kopierten Layouts und Includes; notwendige Änderungen an diesen Dateien werden gezielt abgeglichen. Vor Abschluss sowohl die betroffenen Demo-Varianten als auch die feste Kundenversion prüfen: Include-Auflösung, Slots und Markup, genau eine Navbar und ein Footer im normalen Kundenlayout sowie keine verbliebene Demo-Auswahl oder Schaltwerkzeuge in `_root`.

## Include-Namen und `_root` als Quelle der Wahrheit

`_root` ist die Quelle der Wahrheit für die gemeinsame fachliche Include-Struktur und deren öffentliche Namen und Parameter. Diese Pfade bleiben in `docs` und `_root` gleich. Die ausdrücklich demoexklusiven Rahmenvarianten unter `docs/_includes/_styles/` sind davon ausgenommen und werden nicht in `_root` nachgebildet. Änderungen an gemeinsamen Include-Namen und -Pfaden, insbesondere Umbenennen, Verschieben, Hinzufügen oder Entfernen, benötigen die ausdrückliche Zustimmung des Users; ohne diese Zustimmung sind nur inhaltliche oder technische Anpassungen bei unveränderter gemeinsamer Struktur zulässig.

## Dokumentation von Code-Blöcken

Alle Code-Dateien werden nach funktionalen Blöcken kommentiert. Das gilt unter
anderem für SCSS, CSS, TypeScript, JavaScript, HTML, PHP und Konfigurations-
oder Markup-Dateien.

Vor jedem zusammengehörigen Code-Block, jeder Funktion, Methode, Klasse,
Komponente, Regelgruppe oder jedem Mixin steht ein kurzer deutscher Kommentar,
der den Zweck, das gesteuerte Verhalten und — sofern relevant — den betroffenen
Zustand oder die Variante beschreibt. Einzelne Anweisungen oder Deklarationen
innerhalb eines zusammengehörigen Blocks benötigen keinen eigenen Kommentar.
Reine technische Folge- oder Hilfsanweisungen dürfen mit dem Kommentar des
übergeordneten Blocks gruppiert werden.

Kommentare dürfen nicht nur den Namen des Elements wiederholen. Sie müssen
erklären, warum der Block genau so umgesetzt ist und welche Verantwortung er
hat.

Vor jeder Änderung an einer Code-Regel, Funktion, Methode, Klasse, Komponente
oder einem Mixin müssen die vorhandenen Zweckkommentare evaluiert werden. Wenn
sich Zweck oder Verhalten ändert, sind die Kommentare anzupassen.

## ContentPane-Shortcuts in Markdown

In Markdown-Inhalten, die durch `tj-content-pane` mit dem `text-block`-Pre-Parser verarbeitet werden, sind einzelne HTML-Elemente nach Möglichkeit mit der Shortcut-Notation `#[...]` statt als Raw-HTML zu schreiben. Jeder Shortcut muss eine eigene vollständige Zeile belegen; der Inhalt in den eckigen Klammern beschreibt das zu rendernde HTML-Element einschließlich CSS-Selector und Attribute, zum Beispiel `#[i class="bi bi-shield-check" aria-hidden="true"]`, und wird von ContentPane als entsprechendes HTML gerendert. Shortcuts dürfen deshalb nicht inline in Überschriften, Links oder anderen Markdown-Zeilen stehen. Beispiele und Demos verwenden die Notation für einzeln darstellbare Elemente; Raw-HTML bleibt nur für tatsächlich verschachtelte oder komplexe Strukturen, die sich nicht sinnvoll mit Standard-Markdown, Kramdown-Attributen oder einem einzelnen ContentPane-Shortcut ausdrücken lassen.

## Responsive Zuständigkeit

`tj-responsive` ist bereits im Theme beziehungsweise in der Website-Struktur
registriert und wird dort bereitgestellt. Es darf bei der Entwicklung oder
Änderung von Komponenten nicht erneut in Komponenten, Component-Templates,
Package-Entrypoints oder deren internen Initialisierungen eingefügt werden.
Komponenten verwenden nur die vorhandene Responsive-API und dokumentieren ihre
responsive Zustände; die Registrierung und Einbindung bleibt ausschließlich
Aufgabe des Themes beziehungsweise der Website.

Bei Änderungswünschen von Entwicklern müssen mögliche Seiteneffekte auf andere
Komponenten, Module, Varianten, Breakpoints, Slots, Zustände oder öffentliche
APIs vor der Umsetzung geprüft werden. Wenn Seiteneffekte nicht eindeutig
ausgeschlossen werden können, muss zuerst der User gefragt werden. Die
Änderung darf bis zur Klärung nicht umgesetzt werden.
