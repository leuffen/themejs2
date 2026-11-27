# Repository-Regeln

## Regeln

### § 5 Repository-Regeln

#### § 5.1 Verbindliche Skills

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

Bei visuellen Änderungen, Theme-Entwicklung mit Auswirkungen auf die Darstellung,
Layout-Problemen und Frontend-Debugging ist zusätzlich der lokale Skill
`.agents/skills/browserless-screenshots-debugging/SKILL.md` verbindlich.
Verwende dafür Chrome DevTools über Browserless anstelle des allgemeinen
`browser-screenshot-with-puppeteer`-Skills; prüfe die betroffenen Vorlagen in
beiden vorgeschriebenen Viewports vor und nach der Änderung.

#### § 5.2 Lokale und veröffentlichte Skills

Das Verzeichnis `.agents/skills/` enthält ausschließlich Skills für die lokale
Entwicklung von ThemeJS2. Es darf nicht mit dem npm-Paket veröffentlicht und
nicht als Ablage für Skills verwendet werden, die Paketnutzer benötigen.

Alle extern genutzten Skills, beispielsweise Bearbeitungs- und Content-Skills, müssen unter
`skills/<skillName>/` liegen. Das Root-Verzeichnis `skills/` ist Bestandteil
des veröffentlichten npm-Pakets; jeder Skill erhält dort ein eigenes
Unterverzeichnis.

#### § 5.3 Entwicklung, statischer Output und CDN

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

#### § 5.4 Versionen bauen und veröffentlichen

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

#### § 5.5 `_root` als Vorlage für Nutzprojekte

Das Verzeichnis `_root` ist die Basis für aus dem Theme abgeleitete Nutzprojekte.
Es muss deshalb so gepflegt werden, dass es in ein neues Repository kopiert
werden kann und nach `npm update` direkt mit den vorhandenen `dev`- und
`dev-b`-Skripten gestartet werden kann. Abhängigkeiten von Workspace-Paketen
sind in `_root` daher als veröffentlichte semantische Versionen und nicht mit
`workspace:*` einzutragen. Relative Pfade oder lokale Workspace-Verknüpfungen
dürfen für die Nutzprojekt-Vorlage nicht erforderlich sein.

#### § 5.6 Aufbau und Ziel von Demo und Kundenvorlage

Setze Demos unter `docs/` so nah wie möglich an realen Kundenimplementierungen
um. Verwende für gleichartige Funktionen dieselben Komponenten, Datenquellen,
Front-Matter-Felder und Navigationsmechanismen wie in Kundenprojekten. Lege
Demo-spezifische Inhalte und Pfade in Seiten oder Konfiguration ab, damit die
Layouts wiederverwendbar bleiben.

`docs/` ist die normale GitHub-Pages-Demo und zugleich Test- und Präsentationsumgebung für mehrere Themes. `_root/` ist die kopierbare Projektwurzel für Kunden-Repositories; die Website liegt darin unter `_root/docs/`. Die fachliche Include-Struktur orientiert sich an `dermatthes/leu-web-osman2/docs/_includes/`: `components/` enthält darstellende Bausteine, `helpers/` Hilfsfunktionen und `fragments/` gemeinsame Seitenfragmente wie den Loader. Leuffen-Logos liegen in beiden Versionen unter `docs/assets/leuffen/`. Die alte Struktur mit `el/`, `do/` und `part/` wird nicht wieder eingeführt.

| Bereich | GitHub-Pages-Demo `docs/` | Kundenvorlage `_root/docs/` |
| --- | --- | --- |
| Themes | Mehrere Themes für Vergleich und Tests | Genau ein Theme in `_src/style.scss` |
| Navbar und Footer | Feste Kombinationen unter `_layouts/website*.html` mit Markup unter `_includes/frames/` | Genau eine Navbar direkt in `_layouts/50_navbar.html` und ein Footer direkt in `_layouts/60_footer.html` |
| Auswahl und Ausblenden | In bestehenden `website-*`-Layouts Auswahl über `layout:`. Für auf `blank` aufgebaute Layouts gelten die globalen Seitenschalter aus [§ 2.2](bin/prompts/project.md#-22-layout-rahmen-und-sichtbarkeit). | Keine Variantenabfrage, Ausblendschalter oder Theme-Switcher-Abhängigkeit |
| Alternative Rahmen-Dateien | Seitenlayouts `website-none`, `website-footer-only` und `website-navbar-only` | Keine alternativen Rahmenkopien und kein `_includes/_styles/` |
| Gemeinsame Bausteine | Fachliche Includes mit denselben Namen und Parametern wie in `_root` | Verbindliche gemeinsame Include-Struktur für Kundenprojekte |

#### § 5.7 Gemeinsame Basis, Theme-Profile und Komponenten-Styles

Die gemeinsame ThemeJS2-Basis stellt die Grunddarstellung aller Komponenten
und ihre funktionalen Standard-Styles bereit. Eine Website aktiviert ihr
visuelles Profil am Body über eine Klasse wie `theme-mueller`, `theme-osman`
oder `theme-raven`. Die gemeinsame Basis bildet zugleich den Default, wenn
kein Profil gesetzt ist.

Jedes Profil hat einen SCSS-Einstieg für alle Komponenten. Es setzt bevorzugt
gemeinsame CSS-Variablen und ergänzt bei Bedarf lokal begrenzte visuelle
Regeln. Dazu gehören Farben, Typografie, Rahmen und Trennlinien, Rundungen,
Schatten sowie visuelle Innen- und Außenabstände und Gaps. Ein Profil muss
mit jeder unterstützten `style-*`-Variante kombinierbar sein. Es darf weder
Slots oder Inhaltsbereiche ein- und ausblenden noch Reihenfolge, Interaktion,
Spaltenlogik oder responsive Umbruchregeln umschalten.

Eine Klasse wie `style-default`, `style-ribbon` oder `style-feature-list`
wählt auf der Komponenteninstanz eine eigenständige Komposition. Der
Komponenten-Style bestimmt Struktur, Slots und Parts, Anordnung, Reihenfolge,
responsives Verhalten und die dafür nötigen Layout-Regeln. Ein Abstand mit
struktureller Wirkung gehört ebenfalls hierher, etwa ein Versatz, der ein
Ribbon gezielt über das vorherige Element legt. Optische Abstände bleiben
Theme-Eingaben.

Vor dem Anlegen einer Variante prüfen, ob die vorhandene Komposition mit
Theme-Variablen oder einem vorhandenen funktionalen Modifier ausreicht.
Ribbon-Varianten mit derselben Komposition sollen einen gemeinsamen
`style-ribbon` nutzen. Prüfe beim Zusammenlegen insbesondere sichtbare
Slots, die Spaltenlogik und das mobile Stapeln. Eine optionale Überlappung
gehört zur Komponente und wird gezielt an der Instanz ausgewählt. Namen mit
Theme-Herkunft bleiben nur dann als Komponenten-Style sinnvoll, wenn sie
eine eigenständige Komposition bezeichnen.

#### § 5.8 Demo-Layouts und Seitenverzeichnis

Eine Endseite in `docs/` wählt den vollständigen Rahmen über `layout:`.
Die `website-*`-Layouts erben von `20_body` und binden Navbar,
Inhaltsbereich und Footer in fester Reihenfolge ein. Die Navbar- und
Footer-Fragmente unter `docs/_includes/frames/` haben feste Include-Pfade.
`website-none`, `website-footer-only` und `website-navbar-only` bieten
die reduzierten Rahmen. Theme-Profile bleiben unabhängig vom Layout.

Die Demo-Startseite verlinkt alle veröffentlichten Beispiele direkt mit
ihrem Dateipfad als Beschriftung. Demo-Endseiten erhalten ihre URL aus dem
Dateinamen und Verzeichnis. Kategorien stehen als Überschriften auf der
Startseite.

#### § 5.9 Fester Rahmen in `_root`

Die Kundenvorlage enthält genau einen aktiven Website-Rahmen: Das Markup der gewählten Navbar steht direkt in `_root/docs/_layouts/50_navbar.html`, das des gewählten Footers direkt in `_root/docs/_layouts/60_footer.html`. Individuelle Kundenanpassungen erfolgen in diesen beiden Dateien. Es werden weder Demo-Dispatcher noch `use_navbar`-/`use_footer`-/`skip-navbar`-Abfragen, zusätzliche Rahmenfragmente, Variantenkopien oder Theme-Switcher-Imports und -Abhängigkeiten übernommen. Fachliche Navigationselemente wie das mobile Menü bleiben Bestandteil der festen Navbar. Das rahmenlose `blanco`-Layout hat eine feste Layout-Verknüpfung zu `20_body` und benötigt keine Schaltlogik.

#### § 5.10 Zusammenspiel und Synchronisation der beiden Versionen

Für bestehende `website-*`-Layouts lautet die Demo-Kette `10_blanc → 20_body → website-*`. Auf `blank` aufgebaute Layouts verwenden `10_blanc → 20_body → blank → konkretes Layout`. Die Kundenvorlage verwendet weiterhin `10_blanc → 20_body → 50_navbar → 60_footer → 70_main`. `20_body` enthält die gemeinsamen seitenweiten Laufzeit-Bausteine. Fachliche Includes, Slots, Attribute und das gerenderte Markup der gewählten Rahmenvariante müssen in Demo und Kundenvorlage zusammenpassen. Funktionale Gleichheit bezieht sich auf diese gewählte Variante, nicht auf identische Layout-Quelldateien: In der Demo wird sie eingebunden, im Kundenlayout steht ihr Markup direkt. Die Demo-Auswahl selbst gehört ausdrücklich nicht zum Kundenverhalten.

Bei einer Änderung zuerst prüfen, ob sie einen gemeinsamen Include, eine reine Demo-Variante oder den für `_root` gewählten Rahmen betrifft. Gemeinsame Includes unter `components/`, `helpers/` und `fragments/` in beiden Versionen unter identischen Pfaden aktualisieren. Betrifft die Änderung den ausgewählten Kundenrahmen, das entsprechende Demo-Markup gezielt in `50_navbar.html` bzw. `60_footer.html` übernehmen; dabei Layout-Frontmatter und genau ein `{{ content }}` nach der Navbar bzw. vor dem Footer erhalten. Nicht die Demo-Verzeichnisse oder Dispatcher kopieren. Änderungen an anderen Demo-Varianten erzeugen keine weiteren Kundenlayouts. Kundendaten und individuelle Anpassungen dürfen bei späteren Übernahmen nicht durch Demo-Daten überschrieben werden.

Ein neues Kundenprojekt erhält den Inhalt von `_root/` als Projektwurzel und verwendet das veröffentlichte Theme-Paket über seine regulären Package-Imports. Ein Paketupdate ersetzt nicht automatisch die ins Kunden-Repository kopierten Layouts und Includes; notwendige Änderungen an diesen Dateien werden gezielt abgeglichen. Vor Abschluss sowohl die betroffenen Demo-Varianten als auch die feste Kundenversion prüfen: Include-Auflösung, Slots und Markup, genau eine Navbar und ein Footer im normalen Kundenlayout sowie keine verbliebene Demo-Auswahl oder Schaltwerkzeuge in `_root`.

#### § 5.11 Include-Namen und `_root` als Quelle der Wahrheit

`_root` ist die Quelle der Wahrheit für die gemeinsame fachliche Include-Struktur und deren öffentliche Namen und Parameter. Diese Pfade bleiben in `docs` und `_root` gleich. Die ausdrücklich demoexklusiven Rahmenvarianten unter `docs/_includes/frames/` sind davon ausgenommen und werden nicht in `_root` nachgebildet. Änderungen an gemeinsamen Include-Namen und -Pfaden, insbesondere Umbenennen, Verschieben, Hinzufügen oder Entfernen, benötigen die ausdrückliche Zustimmung des Users; ohne diese Zustimmung sind nur inhaltliche oder technische Anpassungen bei unveränderter gemeinsamer Struktur zulässig.

#### § 5.12 Dokumentation von Code-Blöcken

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

#### § 5.13 Layoutstruktur und Content Pane

Prüfe vor jeder Änderung an der Layoutstruktur die TrunkJS-Regeln für
`tj-content-pane` und wende sie auf das jeweilige Layout an. Du kannst
Layout-Elemente ergänzen und vorhandene Inhaltsbereiche neu anordnen.
Verwende dabei die bestehenden Inhaltsdefinitionen weiter und stelle sicher,
dass das Layout alle Inhalte der Seiten aufnehmen kann, die es verwenden.

#### § 5.14 ContentPane-Shortcuts in Markdown

In Markdown-Inhalten, die durch `tj-content-pane` mit dem `text-block`-Pre-Parser verarbeitet werden, sind einzelne HTML-Elemente nach Möglichkeit mit der Shortcut-Notation `#[...]` statt als Raw-HTML zu schreiben. Jeder Shortcut muss eine eigene vollständige Zeile belegen; der Inhalt in den eckigen Klammern beschreibt das zu rendernde HTML-Element einschließlich CSS-Selector und Attribute, zum Beispiel `#[i class="bi bi-shield-check" aria-hidden="true"]`, und wird von ContentPane als entsprechendes HTML gerendert. Shortcuts dürfen deshalb nicht inline in Überschriften, Links oder anderen Markdown-Zeilen stehen. Beispiele und Demos verwenden die Notation für einzeln darstellbare Elemente; Raw-HTML bleibt nur für tatsächlich verschachtelte oder komplexe Strukturen, die sich nicht sinnvoll mit Standard-Markdown, Kramdown-Attributen oder einem einzelnen ContentPane-Shortcut ausdrücken lassen.

#### § 5.15 Responsive Zuständigkeit

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
