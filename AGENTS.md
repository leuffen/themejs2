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

## `_root` als Vorlage für Nutzprojekte

Das Verzeichnis `_root` ist die Basis für aus dem Theme abgeleitete Nutzprojekte.
Es muss deshalb so gepflegt werden, dass es in ein neues Repository kopiert
werden kann und nach `npm update` direkt mit den vorhandenen `dev`- und
`dev-b`-Skripten gestartet werden kann. Abhängigkeiten von Workspace-Paketen
sind in `_root` daher als veröffentlichte semantische Versionen und nicht mit
`workspace:*` einzutragen. Relative Pfade oder lokale Workspace-Verknüpfungen
dürfen für die Nutzprojekt-Vorlage nicht erforderlich sein.

## `docs` als Test- und Präsentationsumgebung

Das Verzeichnis `docs` dient gleichzeitig als lokale Testumgebung und als
öffentliche Präsentation des Themes. Deshalb enthält es Sonderfälle wie
`_includes/_styles`, in denen mehrere Theme-Varianten parallel vorhanden sein
müssen. Diese Varianten decken die unterschiedlichen Präsentations- und
Testfälle des Theme-Projekts ab.

Solche Varianten gehören nicht in `_root`. In `_root` wird genau ein Theme
unter `_src` konfiguriert und anschließend direkt verwendet. Zusätzliche
parallele Theme-Varianten oder die Präsentations-Sonderfälle aus `docs` werden
nicht übernommen.

Alternative Dateien werden mit dem Präfix `alt-<name>` gekennzeichnet. Eine
Alternative kann durch einfaches Umbenennen aktiviert werden, indem die
aktive Datei und die gewünschte `alt-<name>`-Datei entsprechend getauscht oder
das Präfix entfernt wird.

## Funktionale Gleichheit von `docs` und `_root`

Die Versionen unter `docs` und `_root` dürfen sich funktional nicht
unterscheiden. Insbesondere müssen der Aufbau der erzeugten HTML-Struktur,
die Layouts, die Includes, die Slots und die relevanten Attribute in beiden
Versionen gleich bleiben.

Unterschiede zwischen `docs` und `_root` sind nur für die jeweilige Umgebung
zulässig, zum Beispiel mehrere Präsentationsvarianten und Test-Sonderfälle in
`docs` oder die reduzierte Konfiguration eines einzelnen Themes in `_root`.
Solche Unterschiede dürfen nicht zu einem anderen Seitenaufbau oder zu einem
anderen Laufzeitverhalten führen.

## Include-Namen und `_root` als Quelle der Wahrheit

Die Namen und Pfade der Includes müssen in `docs` und `_root` gleich gehalten
werden. `_root` ist dabei die Quelle der Wahrheit für die gemeinsame Include-
Struktur und die öffentlichen Include-Namen.

Änderungen an der Struktur der Includes, insbesondere das Umbenennen,
Verschieben, Hinzufügen oder Entfernen von Includes, erfordern die
ausdrückliche Zustimmung des Users. Das gilt auch dann, wenn eine Änderung
nur vorgenommen wird, um `docs` an `_root` anzugleichen.

Ohne ausdrückliche Zustimmung dürfen nur inhaltliche oder technische
Anpassungen vorgenommen werden, die die Include-Namen, Include-Pfade und die
gemeinsame Struktur unverändert lassen.

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
