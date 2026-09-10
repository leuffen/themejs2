# NTE-Card: ThemeJS2-Anpassung an Wrapper-Padding und Regions-Gap

| Datum | Benutzername | Kurzbeschreibung |
|---|---|---|
| 2026-09-10 | dermatthes | §§ 1–7: Entwurf für Osman, Müller, Raven, Unify, ePraxis und Medic mit konkreten Anpassungsstellen und Abnahmeplan angelegt |

## § 1 Ziel und Status

Dieser PR enthält den Theme-Anpassungsentwurf; Theme-SCSS, Markup, Assets und Abhängigkeiten werden noch nicht geändert. Der dazugehörige Core-Entwurf liegt im Nextrap-Monorepo unter `.agents/proposals/2026-09-10-nte-card-wrapper-spacing.md`. Die beiden Card-PRs sind unabhängig von den bestehenden 2COL-PRs.

Ziel ist ein gemeinsamer Abstandsvertrag: Die Card besitzt einen Rahmenabstand am Wrapper und einen unabhängigen Gap zwischen ihren sichtbaren Regionen. Anders als bei 2COL gehören Header und Footer einer Card **in** ihren Rahmen. Die Kartenreihe steuert weiterhin den Abstand zwischen mehreren Cards.

Der Entwurf ist gegen [ThemeJS2, 99aff706](https://github.com/leuffen/themejs2/tree/99aff7062346f276e45e490ab10133003370d194) und [NTE-Card, 894f0ffd](https://github.com/nextrap/nextrap-monorepo/tree/894f0ffd5e3fdb7d27ec62b2cf19759c427a46e7/nextrap-elements/nte-card) abgeglichen. Die aufgeführten Theme-Verwendungen wurden im Quellcode untersucht. Eine gerenderte Abnahme der vorgeschlagenen Änderung ist noch nicht erfolgt.

## § 2 Gemeinsamer Theme-Vertrag

| Zuständigkeit | Vorgabe |
|---|---|
| NTL-Card-Row / NTL-Card-Grid | Vorhandenen Reihen-Gap, Gutter, Spalten und äußeren Content-Rhythmus erhalten |
| NTE-Card | `default-style($innerPadding: ..., $gap: ...)` als vollständige Baseline verwenden |
| Card-Wrapper | Einziger Eigentümer des Außenpaddings innerhalb des Kartenrahmens |
| Image / Header / Content / Footer | Keine zusätzlichen Regions-Paddings als Layout-Ausgleich |
| Content-Typografie | Absätze, Listen und Buttons gezielt prüfen; keine globalen Margin-Resets |
| Overlay | Expliziter Textschutz innerhalb der gemeinsamen Bild-/Content-Fläche; keine normalen Regions-Paddings wieder einschleusen |
| Responsive Styles | Bestehendes `mode`-Attribut verwenden, keine neuen Media Queries oder Responsive-Registrierungen |
| Helper | Kanonische `.with-image-overlay` / `.with-image-fullsize` automatisch aus dem Default; bisherige Aliasse bleiben möglich |

Der neue `$gap`-Parameter wird im Core am Ende der Parameterliste ergänzt. Als allgemeiner Default ist `var(--nt-text-gap)` vorgesehen. Jede Card initialisiert ihren Gap selbst, damit ein NTL-Eltern-Gap nicht versehentlich innerhalb der Card weiterwirkt. Themes können einen anderen vorhandenen Spacing-Token ausdrücklich wählen.

Das neue normale Bild ist wie die Textregionen eingerückt. Eine identische Erhaltung der bisher randlosen Bilder wäre ein gesondertes Bleed-Feature und wird nicht durch negative Theme-Margins nachgebaut. Das bestehende Fullsize-Mixin steuert die natürliche Bildgröße, nicht die Randabstände.

Karten mit gleicher Gesamthöhe dürfen Content weiterhin wachsen lassen. Zusätzliche Auto-Margins an Regionsgrenzen entfernen, wenn sie neben diesem Wachstum weiteren Zwischenraum verteilen. Die Position des letzten Textes innerhalb eines wachsenden Content-Bereichs ist von der Größe des Regions-Gaps zu unterscheiden.

## § 3 Konkrete Theme-Anpassungen

Alle Pfade in diesem Abschnitt sind relativ zu `theme/`. Aufgeführte Dateien sind **geplante Prüf-/Änderungsstellen**, keine bereits ausgeführten Änderungen.

### § 3.1 Osman

| Datei | Bestehender Befund | Geplante Anpassung |
|---|---|---|
| `osman/elements/ntl-card-row/_style-default.scss` | Card-Default mit Text-Padding, eigener Content-Gap, Footer-Auto-Margin und Footer-Padding-Reset | Card-Gap ausdrücklich wählen; Footer-Padding-Reset entfernen; Footer-Anordnung über wachsenden Content erhalten. Content-Gap auf tatsächliche slottierte Boxen prüfen. |
| `osman/elements/ntl-card-row/_style-noborder.scss` | Keine eigene vollständige Card-Baseline; Wrapper-Padding nur auf Desktop | Card-Baseline für die Komposition vollständig binden und Padding in beiden Modi über `--inner-padding` steuern. |
| `osman/elements/ntl-card-row/_style-ribbon.scss` | Wrapper-Padding und Wrapper-Gap lokal nachgebaut | Diese Werte in den Card-Default übernehmen; vorhandene Mindesthöhe und Reihen-Separatoren getrennt erhalten. |
| `osman/elements/ntl-card-row/_style-ribbon-top.scss` | Wrapper-Padding lokal, einzelne Footer-Margins | Gemeinsame Card-Baseline und Gap nutzen; Footer-Inhaltsmargin auf echte Notwendigkeit prüfen. |
| `osman/elements/nte-card/nte-card.scss` | Bloßer Card-Selektor setzt nur Background-/Border-Variablen | Eigenständige Cards über eine vollständige `nte-card.style-default`-Baseline versorgen; keine Abhängigkeit von visuellen Shadow-DOM-Defaults. |

Die Reihen-Separatoren sind keine Card-Rahmen. Ihre Position, Länge und reservierter Platz müssen separat geprüft werden; sie dürfen nicht durch das Entfernen von Card-Padding verschwinden oder versehentlich als zusätzlicher Karten-Gap gezählt werden.

### § 3.2 Müller

| Datei | Bestehender Befund | Geplante Anpassung |
|---|---|---|
| `mueller/elements/ntl-card-row/nte-card/_in-style-default.scss` | Card-Default mit `--nt-space-5`, gleicher Kartenhöhe und wachsendem Content | Padding-Token beibehalten, unabhängigen Card-Gap festlegen; eingerückte Bilder in beiden Modi prüfen. |
| `mueller/elements/ntl-card-row/nte-card/_in-style-ribbon.scss` | Default-Padding null, eigenes Wrapper-Padding, Header-Margin sowie entfernte äußere Padding-Kanten erster/letzter Desktop-Card | Wrapper-Padding in den Default übernehmen; Header-Abstand durch G ersetzen; erste/letzte Card nicht vom gemeinsamen Randabstand ausnehmen. |
| `mueller/elements/ntl-card-row/nte-card/_in-style-footer.scss` | Eigene Footer-Komposition verwendet Card-Default | Card-Gap explizit prüfen; keine Regions-Paddings ergänzen. |

Die Separatoren in `mueller/elements/ntl-card-row/_style-ribbon.scss` bleiben Verantwortung der Reihe. Deren Card-Kanten nach Änderung des Paddings kontrollieren; nicht pauschal Rahmenregeln entfernen.

### § 3.3 Raven

| Datei | Bestehender Befund | Geplante Anpassung |
|---|---|---|
| `raven/elements/ntl-card-row/nte-card/_in-style-default.scss` | Card-Default mit Komponenten-Padding, gleichem Wrapper und Hover-Darstellung | Gap ergänzen; normales Bild innerhalb des Paddings prüfen. Bestehende Hover-Darstellung bleibt unberührt. |
| `raven/elements/ntl-card-row/nte-card/_in-style-ribbon.scss` | Default-Padding null, eigenes Wrapper-Padding, Header-Margin; auf Mobile entferntes Seitenpadding | Padding über die gemeinsame API in beiden Modi erhalten; Header-Margin durch Gap ersetzen. Mobile Randabstände nicht pauschal auf null setzen. |

### § 3.4 Unify

Alle nachstehenden Dateien liegen unter `unify/elements/ntl-card-row/nte-card/`.

| Datei | Behandlung |
|---|---|
| `_in-style-default.scss` | Card-Gap explizit; Footer-Auto-Margin bei wachsendem Content vermeiden. |
| `_in-style-feature-list.scss` | Bild-/Icon-Margins, die denselben Außenabstand nachbauen, entfernen; Icon-/Textabstände innerhalb des Content erhalten. |
| `_in-style-testimonial-list.scss` | Avatar-Margin zum Rahmen entfernen; Größe, Rundung und Ausrichtung beibehalten. Das äußere Alternieren ganzer Cards nicht ändern. |
| `_in-style-testimonial-slider.scss` | Wie Testimonial-Liste: Avatar-Außenmargin durch Wrapper-Padding ersetzen; Zitat-Typografie bleibt eigenständig. |
| `_in-style-tool-gallery.scss` | Gap explizit konfigurieren; Textabstände innerhalb des Content separat prüfen. |
| `_in-style-pricing.scss` | Footer-Padding-Reset und redundant verteilte Auto-Margin entfernen; Preis-, Listen-, Badge- und Buttonabstände nicht pauschal zurücksetzen. |
| `_in-style-stories.scss` | Region-spezifisches Header-/Content-/Footer-Padding in ein Wrapper-Padding überführen; normale und zweispaltige Featured-Story getrennt behandeln. |
| `_in-style-metrics.scss` | Host-Padding und Header-Margin als aktuelle Abstandsquelle prüfen; Card-inneres Padding zum Wrapper, Regionsabstand zu G verlagern. |
| `_in-style-timeline.scss` | Bewusst rahmenlose Typografie-Komposition: Null-Padding und gegebenenfalls Null-Gap explizit festlegen; redaktionelle Inhaltsabstände erhalten. |

Für die Featured-Story reicht ein Padding-Tausch nicht aus: Das Bild spannt derzeit Grid-Zeilen 1–3, während Header, Content und Footer die zweite Spalte belegen. Fehlende Textregionen dürfen keine leeren expliziten Tracks samt Gaps übriglassen. Eine Variante mit vollständig geprüftem, belegungsabhängigem Track-Modell ist Voraussetzung der Umsetzung. Neue Autoren-Wrapper sind dafür nicht vorgesehen.

### § 3.5 ePraxis

Die vorhandenen Card-Row-Pairings unter `epraxis/elements/ntl-card-row/nte-card/` verwenden bereits den Core-Default:

- `_in-style-default.scss`: Gap ausdrücklich prüfen.
- `_in-style-article-grid.scss`: neue Abstände bei normalen und Aside-Cards prüfen.
- `_in-style-featured.scss`: neue Baseline und Overlay-Textschutz gemeinsam prüfen; das Overlay wird für einen Teil der Desktop-Cards direkt per Mixin eingebunden.

Zusätzlich nachweislich relevant sind `epraxis/elements/ntl-card-grid/_featured.scss` mit lokalem Wrapper-Padding und direktem Overlay-Mixin sowie `_featured2.scss` und `ntl-card-grid.scss` im selben Verzeichnis. Nur den NTE-Card-Zweig der dortigen `:is(ntl-card, nte-card)`-Selektoren anpassen; keine ungeprüfte Änderung der alten NTL-Card.

`epraxis/elements/ntl-card/ntl-card.scss` setzt über denselben gemischten Selektor unter anderem Hintergrund und Radius am Host. Host- und Wrapper-Rahmen dürfen nicht zwei konkurrierende sichtbare Flächen bilden. Die Verantwortung für NTE-Card explizit in einer vollständigen Baseline klären, ohne eine Migration der Legacy-Komponente mit einzuschließen.

### § 3.6 Medic

`medic/elements/ntl-card/ntl-card.scss` sowie `medic/elements/ntl-card-row/ntl-card-row.scss`, `_style-ribbon.scss` und `_style-footer.scss` im Card-Row-Verzeichnis verwenden ebenfalls gemischte `:is(ntl-card, nte-card)`-Selektoren und zum Teil nur Host-Variablen.

NTE-Card benötigt vor Entfernung visueller Core-Shadow-Defaults eine ausdrücklich eingebundene Card-Baseline. Legacy-NTL-Card separat erhalten. Ankündigungs-Inhalte und Reihen-Separatoren bleiben funktional unverändert; deren innere Grid-Gaps sind keine zu entfernenden Card-Regionsabstände.

## § 4 Styling-Muster für die spätere Umsetzung

Beispiel für eine vorhandene Card-Row-Variant; die konkrete Datei behält ihre bisherige Tokenauswahl:

```scss
@use "@nextrap/nte-card" as card;

// Die Reihe komponiert direkte Cards; verschachtelte Karten bleiben eigenständig.
&.style-default {
  > nte-card.style-default {
    @include card.default-style(
      $innerPadding: var(--nt-spacing-component),
      $gap: var(--nt-text-gap),
      $border: var(--nt-border-width) solid var(--nt-border),
      $background-color: var(--nt-surface-raised)
    );
  }
}
```

Ein Card-eigener `style-*`-Selektor bindet die vollständige Baseline, der bestehende Eltern-Style grenzt das Pairing ein. Das automatische Setzen von `style-default` weiterhin verwenden; Autoren brauchen im normalen Markdown keine zusätzliche Klasse. Breite Descendant-Selektoren dürfen verschachtelte Cards nicht versehentlich erfassen.

Die automatische Helper-Registrierung bleibt am jeweiligen Style gescoped. Wer sie bewusst deaktiviert, verwendet `$modifierClasses: false` beziehungsweise `none` und bindet benötigte Mixins ausdrücklich ein. Eine Theme-Kopie des Core-Padding-Fixes wird nicht angelegt.

## § 5 Validierung und Reihenfolge

1. Core-Entwurf und sichtbare Änderung an bisher randlosen Bildern reviewen.
2. Core-Baseline einschließlich Overlay-Textschutz und Leerzuständen umsetzen und geometrisch testen.
3. Alle in § 3 betroffenen NTE-Card-Verwendungen auf eine vollständige Baseline abgleichen; dann Layout-Padding-/Margin-Dopplungen gezielt entfernen.
4. Mindestens je eine Standard-, Ribbon-/List-, Avatar-, Overlay- und Featured-Story-Darstellung auf Mobile und Desktop prüfen. Fehlende Header/Footer, nur Image, nur Content und Link-only mit einbeziehen.
5. Unabhängigkeit von Card-Gap und NTL-Gap prüfen; ein großer Reihen-Gap darf nicht die Card innen vergrößern.
6. Lange Inhalte, gleich hohe Karten, Footer-Aktionen, klickbare Cards und verschachtelte Komponenten prüfen. Regionsboxen und typografische Inhaltsabstände getrennt messen.
7. NTE-Card-Version veröffentlichen und ThemeJS2 gegen diese Version bauen; kein erfolgreiches Ergebnis mit einer alten installierten Core-Version behaupten.
8. Vollständigen Theme-Build, generierte Assets und zugehörige Desktop-/Mobile-Preview erst nach erfolgreichem Lauf abnehmen.

Die Core-Entwurfsdatei enthält die technische Testmatrix mit P=24px und G=0px/16px/40px. Tests und Builds sind Abnahmekriterien für die spätere Implementierung, nicht bereits erledigte Nachweise dieses Dokumentations-PRs.

## § 6 Offene Review-Entscheidungen

- Bestätigung des eingerückten Standardbildes; eine randlose Darstellung benötigt ein eigenständiges explizites Feature.
- Konkrete Gap-Tokens für kompakte Ribbons und Metrics; `--nt-text-gap` ist der allgemeine Vorschlag, null bleibt eine ausdrückliche Variante.
- Belegungsabhängiges Track-Modell der horizontalen Unify-Story, ohne neue Autorenstruktur.
- Umfang der NTE-spezifischen Entkopplung gemischter Legacy-Selektoren; keine nebenläufige NTL-Card-Migration.

## § 7 Umfang dieses PRs und Prüfstand

Dieser PR legt genau diese eine Markdown-Datei an. Die Tabellen benennen die späteren Implementierungsstellen; sie behaupten keine bereits vorgenommenen Theme-Änderungen. Der separate Core-PR legt ebenfalls nur seinen Entwurf an. Beide verwenden eigene Branches und überschreiben keine 2COL-Arbeit.

Die Quellanalyse ist abgeschlossen; geometrische und visuelle Abnahme bleiben Teil der Umsetzung. Aus der vorherigen Theme-Arbeit ist der vollständige lokale Build durch `@leuffen/vite-jekyll-hmr-manager@^1.0.1` blockiert gewesen. Dieser Entwurfs-PR ändert weder diese Abhängigkeit noch die Deployment-Konfiguration und behauptet keinen aktuellen erfolgreichen Theme-Build.
