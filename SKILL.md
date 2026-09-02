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
