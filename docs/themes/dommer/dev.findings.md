# Initial project map

### Projektkarte

| Bereich | Verifizierter Pfad und Befund |
|---|---|
| Auftrag und Seiten | `docs/themes/dommer/AUFTRAG.md`; `docs/themes/dommer/dommer-start.md` und `docs/themes/dommer/dommer-leistungen.md`. Beide Seiten nutzen `layout: theme-dommer`, deaktivieren den Standardtitel und deklarieren bereits `ntl-hero.style-dommer`. Damit ist `htl-hero` im Auftrag als `ntl-hero` aufgelöst. |
| Layout und Rahmen | `docs/_layouts/theme-dommer.html` ist die bestehende Implementierung für beide Seiten. Dort steht `leuffen-announcements` bereits vor der Navigation; die Sichtbarkeit bei leeren Meldungen ist noch zu prüfen. `docs/_layouts/blank.html` und `docs/_layouts/20_body.html` sind die vorhandenen Basislayouts; `docs/_layouts/website-osman.html` ist die Vergleichsimplementierung. Jekyll-Konfiguration: `docs/_config.yml`. |
| SCSS | `theme/dommer/index.scss` existiert bereits und ist über `docs/_src/style.scss` (`@include dommer.theme()`) eingebunden. Den Einstieg daher weiterverwenden, statt ihn neu anzulegen. Für den angeforderten gemeinsamen Hero-Partial `_style-dommer.scss` wurde kein bestehender Quellpfad gefunden. |
| Komponentenverträge | Content Pane: `workspaces/trunkjs-monorepo/packages/content-pane/skills/content-pane-usage/SKILL.md` (`pre-parser="text-block"`, `#[...]`). Spalten: `workspaces/nextrap-monorepo/nextrap-layout/ntl-columns/src/components/ntl-columns/ntl-columns.ts`. Bestehende Hero-Stile als Vergleich: `theme/medic/elements/ntl-hero/ntl-hero.scss` und `theme/epraxis/elements/ntl-hero/ntl-hero.scss`. |

**Referenzabgleich:** Die Startseite gibt die Abfolge aus Hero, Praxiseinführung und Sprechzeiten vor. Für die Leistungsseite zählt neben dem Hero auch die Gliederung der Leistungsübersicht bis zum Sprechzeitenblock. Die Vorlagen dienen der Gestaltung; Texte und Links von Dommer bleiben erhalten. ([zahnzentral-melle.de](https://zahnzentral-melle.de/))

Die Seitenzuordnung ist eindeutig. Der visuelle Desktop- und Mobilabgleich sowie die Prüfung der Meldungszustände stehen noch aus. In dieser schreibgeschützten Phase wurden keine Dateien geändert.

## Reference inspection findings

- **Gemessen:** Die Referenz-Startseite ist bei `1280 × 800` insgesamt `1385 px` hoch. `browser_inspect` meldet für `.teaserbox` `Zilla Slab`, `30 px` und Weiß (`rgb(255, 255, 255)`); die Ansicht meldet `0` fehlgeschlagene Bilder. Die konkrete CSS-Quelldatei wurde im ausgewerteten Inspektionsausschnitt nicht verifiziert.
- **Aus den Screenshots abgelesen, nicht per DOM vermessen:** In beiden Referenzen ist die Topline am Desktop rund `44 px`, mobil rund `56 px` hoch. Der mobile Inhaltsrand liegt bei rund `30 px`, in Dommer bei rund `32 px`. Weitere Designgrößen waren nicht vorgegeben.
- **Im gerenderten Dommer-DOM bestätigt:** Beide Seiten verwenden bereits `tj-responsive`, `tj-content-pane[pre-parser="text-block"]`, `ntl-hero.style-dommer` und `ntl-columns` mit dem Kontaktblock in `slot="end"`. Die Spaltenkomponente rendert in den Captures im Desktop- bzw. Mobilmodus. Ein Austausch dieser Komponenten ist nicht nötig.
- **Meldungen und Diagnostik:** Alle vier Zielaufnahmen zeigen den leeren Zustand mit `.no-announcements` ohne sichtbare Leiste. Der aktive Zustand wurde nur in der Referenz beobachtet und muss für Dommer noch separat geprüft werden. Die zuletzt abgefragte Browserkonsole enthielt lediglich einen jQuery-Migrate-Logeintrag; das ist keine vollständige Konsolen- oder Netzwerkprüfung aller Ansichten.

# Cumulative updates

Later verified corrections supersede the initial map.

- **Quellen und Struktur:** `docs/_src/style.scss` bindet `theme/dommer/index.scss` ein; dieser Einstieg lädt `theme/dommer/_style-dommer.scss`. Über `docs/_layouts/theme-dommer.html` verwenden beide Seiten je ein `main` mit `tj-content-pane[pre-parser="text-block"]`, `ntl-hero.style-dommer` und `ntl-columns` mit dem Kontaktblock im Endslot. Die Topline-Regel in `theme/dommer/index.scss` prüft den dokumentierten Marker `[data-owner='leuffen-announcement']`.
- **Leistungen, Ziel, 1280 × 800:** `.dommer-announcements` hat laut Inspektion `boxModel: null`. Die Ansicht meldet `3960 px` Dokumenthöhe und einen nicht zugeordneten Bildfehler.
- **Navigation, Leistungen, Ziel, 1280 × 800:** Für `#dommer-nav-horizontal nte-nav-item[current='page']` wurden am Host `rgb(4, 59, 95)` und `system-ui, sans-serif` gemessen. Das sind keine Messwerte des sichtbaren Links im Shadow DOM.
- **Typografie und Geometrie:** Referenz-Startseite, 1280 × 800: `.teaserbox` verwendet gemessen `Zilla Slab`, `30 px` und Weiß. Die Referenz-Topline ist aus den Aufnahmen auf rund `44 px` am Desktop und `56 px` mobil abgelesen. Ziel-Startseite, 393 × 852: `.dommer-contact-panel` verwendet gemessen `16 px`, `system-ui, sans-serif` und `rgb(4, 59, 95)`.
- **Konsole:** Die Leistungsinspektion zeigt Vite-Verbindung und Content-Pane-Verarbeitung sowie Warnungen zum Lit-Entwicklungsmodus, zum Offcanvas-Update und zu nicht mehr verbundenen `tj-responsive`-Elementen. Keine dieser Meldungen konnte dem Bildfehler zugeordnet werden.
