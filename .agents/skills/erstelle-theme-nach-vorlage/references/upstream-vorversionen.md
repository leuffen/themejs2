# Upstream-Vorversionen

Lies diese Referenz, wenn eine Referenzdarstellung mit der veröffentlichten NTL-/NTE-API nicht sauber und wiederverwendbar umsetzbar ist.

## Zuerst die Lücke belegen

Prüfe im Package:

- öffentliche Mixins und Exports;
- Slots, Parts, States und CSS-Variablen;
- Modifier-Registrierung und Default-Verhalten;
- lokale Usage-/Theming-Skills, README, Demo und Web-Types;
- responsive Zuständigkeit und Besitzer des `mode`-Attributs.

Eine abweichende Farbe, Breite oder ein einmaliger visueller Effekt ist keine Upstream-Lücke. Kandidaten sind allgemeine Fähigkeiten, die mehrere Themes oder Content-Formen benötigen und die Theme-Code sonst durch Nachbau interner Layoutlogik lösen müsste.

## Vorversion im Theme

Implementiere die kleinste öffentliche Kandidaten-API zuerst isoliert unter:

```text
theme/<name>/upstream-proposal/<package-or-component>/_<feature>.scss
```

Für einen einzelnen klar zugeordneten Vorschlag darf eine Datei direkt unter `upstream-proposal/` liegen. Die Vorversion muss:

- einen allgemeinen Namen und eine einzelne Verantwortung haben;
- rückwärtskompatibel und opt-in sein;
- vorhandene Variablen wiederverwenden, sofern deren Semantik passt;
- keine fremden Shadow-Interna umgehen;
- tatsächlich aus dem Theme geladen und in mindestens einer realen Demo-Section verwendet werden;
- ohne neue Media Query kompilieren;
- nach einer späteren Upstream-Veröffentlichung leicht entfernbar sein.

Beispiele aus dem Unify-Abgleich:

- `ntl-card-row` benötigte einen opt-in `with-horizontal-flow()` für mobile Timeline-/Carousel-artige Reihen. Die Vorversion definierte sichtbare Spaltenzahl, Gap und Scroll-Snap, während Desktop unverändert blieb.
- `ntl-2col` benötigte einen opt-in `with-wrapper-gap()`, damit der Abstand zwischen `main` und `aside` die bestehende Variable `--gap` nutzen kann, ohne `--inner-padding` als Content-Padding umzudeuten.

## Upstream-Proposal und PR

Eröffne für jede fachlich getrennte Komponentenlücke einen eigenen Draft-PR mit Titelpräfix `[tjemejs2 auto request]`. Das Proposal enthält:

1. Verlauf direkt unter H1;
2. stabile Abschnitte `## § N`;
3. belegte Lücke und aktuelle Auswirkung;
4. Pfad und Einsatz der validierten Theme-Vorversion;
5. konkrete öffentliche API und Implementierungsskizze;
6. Content-Pane-Beispiel;
7. Responsive- und Rückwärtskompatibilitätsvertrag;
8. Non-Goals;
9. betroffene Package-Dateien, Dokumentation und Tests;
10. prüfbare Akzeptanzkriterien.

Wenn der Auftrag die Umsetzung im Upstream einschließt, liefere zusätzlich die konkrete Package-Implementierung, Exports, Modifier-Registrierung, Demo, Skills, `.ai-usage-info.md`, README, Web-Types und Tests. Wenn nur ein Proposal autorisiert ist, belasse den PR proposal-only und kennzeichne das ausdrücklich.

## Rückführung

Nach Veröffentlichung der gemeinsamen API:

1. ersetze den Theme-Import durch den Package-Import;
2. entferne ausschließlich die zugehörige lokale Vorversion;
3. kompiliere und vergleiche Desktop/Mobile erneut;
4. prüfe, dass der Default ohne Opt-in unverändert bleibt;
5. dokumentiere die Upstream-Version, ab der die Vorversion entfallen kann.

