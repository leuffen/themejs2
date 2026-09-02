# CMJS Sync Root

## Zweck

Dieser Skill synchronisiert die aktive Entwicklungsumgebung unter `docs/` mit dem wiederverwendbaren Projekt-Stub unter `_root/`. `docs/` ist die Quelle für aktuelle Entwicklungsänderungen; die bereits etablierte Struktur unter `_root/` ist die verbindliche Zielstruktur und darf beim Synchronisieren nicht wieder auf die historische `docs/`-Struktur zurückgebaut werden.

## Wann verwenden

Diesen Skill verwenden, wenn Änderungen aus `docs/` nach `_root/` übernommen, Unterschiede zwischen beiden Bereichen geprüft oder der Root-Stub an den aktuellen Entwicklungsstand angepasst werden sollen.

## Zielstruktur

- `_root/` ist das Root-Verzeichnis eines späteren Einzelprojekts.
- Jekyll-Inhalte liegen unter `_root/docs/`.
- Projektdateien wie `package.json` und `vite.config.ts` liegen direkt unter `_root/`.
- `docs/_src/` wird nach `_root/docs/_src/` synchronisiert.
- Normale Includes aus `docs/_includes/` werden nach `_root/docs/_includes/` übernommen.
- `docs/_includes/_styles/` wird nicht als Style-Include-Struktur nach `_root/docs/_includes/` kopiert. Varianten daraus werden als explizite Layout-Alternativen unter `_root/docs/_layouts/` gepflegt.
- Assets werden nur nach ausdrücklicher Freigabe synchronisiert. Aktuell gehören die Leuffen-Logos aus `docs/assets/` zum Stub.

## Layout-Vertrag

Die bestehende Layout-Struktur unter `_root/docs/_layouts/` ist die Zielstruktur. Änderungen aus `docs/_layouts/` müssen in diese Struktur übersetzt werden, nicht umgekehrt.

Die vorgeschaltete Pipeline verwendet Zehnerschritte, damit später Zwischenstufen eingefügt werden können:

- `10_blanc.html`
- `20_body.html`
- `30_script.html`
- `40_main.html`

Navbar und Footer liegen als parallele 50er-Bausteine vor:

- `50_navbar.html` ist die Standardvariante.
- Weitere tatsächlich in `docs/_includes/_styles/` vorhandene Navbar-Varianten heißen `50_navbar.alt-<style>.html`.
- `50_footer.html` ist die Standardvariante.
- Weitere tatsächlich in `docs/_includes/_styles/` vorhandene Footer-Varianten heißen `50_footer.alt-<style>.html`.

Es werden keine künstlichen Varianten erzeugt. Existiert für einen Style beispielsweise nur ein Footer, wird nur die Footer-Alternative angelegt.

`40_main.html` bindet die passenden 50er-Bausteine direkt ein. Die Root-Version soll für diese Style-Auswahl nicht von `_includes/_styles` abhängig sein.

## Synchronisationsablauf

1. Aktuellen `main`-Stand laden und zuerst die Unterschiede zwischen `docs/` und `_root/` ermitteln.
2. Prüfen, welche Änderungen in `docs/` seit der letzten Synchronisierung relevant für den wiederverwendbaren Stub sind.
3. Allgemeine Jekyll-Struktur in `_root/docs/` aktualisieren, ohne generierte `_site`-Ausgaben oder projektspezifische/redaktionelle Artikel ungeprüft zu übernehmen.
4. Änderungen an `docs/_layouts/` in den Layout-Vertrag der Zielstruktur übersetzen.
5. Änderungen unter `docs/_includes/_styles/` als Änderungen an den passenden `50_navbar[.alt-*].html`- bzw. `50_footer[.alt-*].html`-Dateien abbilden.
6. Normale Includes außerhalb `_styles` nach `_root/docs/_includes/` synchronisieren.
7. `docs/_src/` nach `_root/docs/_src/` synchronisieren.
8. Freigegebene Assets synchronisieren; derzeit die Dateien `docs/assets/leuffen-logo-*.svg` nach `_root/docs/assets/`.
9. Änderungen an den für den Stub benötigten Root-Builddateien prüfen. `package.json` und `vite.config.ts` werden bei relevanten Änderungen aus dem Repository-Root nach `_root/` übernommen.
10. Abschließend Diff prüfen: keine unerwünschten Artikel, kein `_site`, keine `_includes/_styles`-Kopie und keine Rückkehr zur alten Layout-Struktur.

## Grundsätze

- Bestehende Zielstruktur hat Vorrang vor einem mechanischen 1:1-Kopieren.
- Änderungen werden möglichst als gezielte Aktualisierung bestehender Dateien durchgeführt.
- Neue Style-Varianten richten sich ausschließlich nach tatsächlich vorhandenen Varianten in `docs/_includes/_styles/`.
- Projektspezifische Inhalte werden nicht automatisch zu Template-Inhalten.
- Der Skill wird bei weiteren Anforderungen an den Sync-Prozess erweitert.