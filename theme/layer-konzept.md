# Proposal: Self-contained Theme-Entrypoints

## Status

Dieser Text beschreibt die vorgeschlagene Zielarchitektur. Der Pull Request ändert noch keinen Theme-Code.

## Beobachteter Ist-Stand

Osman ist die aktuelle Referenz für die interne Theme-Struktur:

- `theme/osman/_theme.scss` ordnet seine Ausgabe bereits den Layern `reset`, `themes.tokens`, `themes.base`, `themes.typography`, `themes.elements`, `themes.components`, `themes.patterns`, `themes.utilities` und `website` zu.
- `theme/osman/_runtime-settings.scss` trennt öffentliche `--theme-*`-Eingaben vom Mapping auf `--nt-*`.
- Der Consumer muss die globale Layer-Reihenfolge und die Scheme-Initialisierung trotzdem selbst kennen.
- `dermatthes/leu-web-osman2/docs/_src/style.scss` importiert deshalb zusätzlich `@nextrap/style-base`, ruft `runtime-scheme-selectors()` auf und hält Theme- sowie Font-Mapping im Projekt.
- Raven verwendet noch keine entsprechenden Layer und konfiguriert überwiegend `--nt-*` direkt. Damit ist Osman die geeignete Vorlage für die Angleichung.

Die interne Osman-Struktur ist damit weitgehend richtig, aber der öffentliche Einstieg leakt noch Infrastrukturwissen in jedes Nutzprojekt.

## Zielbild

Ein normales Nutzprojekt soll nur noch ein produktionsfertiges Theme importieren und dessen öffentliche Variablen konfigurieren. Es soll weder die Layer-Reihenfolge noch Nextrap Reset, Scheme-Initialisierung, Runtime-Token-Mapping oder die interne Reihenfolge der Theme-Teile kennen.

Der gewünschte Consumer bleibt auf diese Entscheidungen begrenzt:

1. Theme auswählen;
2. optional eine Schrift laden und zuweisen;
3. Farben, Typografie und andere freigegebene Spezialisierungen über `--theme-*` setzen;
4. nur echte Projektausnahmen als Projekt-CSS ergänzen.

## Vorgeschlagene öffentliche API

Für Nutzprojekte wird ein neuer Side-effect-Entrypoint eingeführt. Der bestehende Mixin-Entrypoint bleibt für die Theme-Demo, Multi-Theme-Bundles und eine rückwärtskompatible Migration erhalten.

Ein Osman-Nutzprojekt soll anschließend beispielsweise nur noch Folgendes benötigen:

```scss
@use "@leuffen/themejs2/font/opensans-regular" as font;

@use "@leuffen/themejs2/theme/osman/site" with (
  $font-family: font.$font-family-base,
  $font-family-header: font.$font-family-header,
  $theme-values: (
    --theme-primary: #2b94d6,
    --theme-accent: #2b94d6,
    --theme-neutral: #6f6f6f,
    --theme-secondary: #4c4c4c,
    --theme-radius: 0
  )
);
```

Der Import erzeugt selbstständig das vollständige, auf `:where(.theme-osman)` begrenzte Theme. Ohne `with (...)` werden die Theme-Defaults verwendet. Das Projekt konfiguriert nur die dokumentierte `--theme-*`-API; direkte `--nt-*`-Werte bleiben ein Low-Level-Escape-Hatch.

Die Sass-Map verwendet absichtlich die echten CSS-Custom-Property-Namen. Dadurch entsteht kein zweites Alias-System zwischen Sass-Konfiguration und Runtime-Variablen.

Falls ein Projekt mehrere zur Laufzeit auswählbare Wertprofile benötigt, kann derselbe Vertrag optional erweitert werden:

```scss
@use "@leuffen/themejs2/theme/osman/site" with (
  $theme-values: (
    --theme-primary: #2b94d6,
    --theme-radius: 0
  ),
  $theme-variants: (
    high-contrast: (
      --theme-primary: #005d75,
      --theme-accent: #a33b00
    )
  )
);
```

Der Entrypoint erzeugt daraus nur zusätzliche Variablen-Scopes, zum Beispiel `:where(.theme-osman[data-theme-variant="high-contrast"])`. Solche Theme-Varianten sind reine Wertprofile. Sie sind ausdrücklich nicht mit den Komponentenvarianten `.style-*` gleichzusetzen und dürfen keine kunden- oder seitenbezogenen Komponentenregeln enthalten.

## Verantwortlichkeiten

### Foundation

Eine interne, einmal geladene Foundation registriert die vollständige Kaskade:

```scss
@layer reset, schemes, themes, website;

@layer themes {
  @layer tokens, base, typography, elements, components, patterns, utilities;
}
```

Sie materialisiert außerdem genau einmal den globalen Nextrap Reset und die Scheme-Selektoren auf `:root`. Diese Infrastruktur ist für alle Themes identisch und darf nicht mehr in Nutzprojekten dupliziert werden.

### Theme

Das Theme besitzt:

- Defaultwerte und Mapping von `--theme-*` auf `--nt-*`;
- Base, Typografie, HTML-Elemente, Komponenten, Patterns und Utilities;
- den festen Scope `:where(.theme-<name>)`;
- die Ausgabe der konfigurierten Theme-Werte und optionalen Wertprofile;
- die Zuordnung jeder Deklaration zum festgelegten Layer.

Das Theme lädt keine konkrete Textschrift mehr ungefragt. Theme-eigene Assets wie eine zwingend benötigte Icon-Schrift dürfen Bestandteil des Themes bleiben. Textschriften werden vom Consumer optional importiert und ausschließlich über die öffentliche Font-Konfiguration zugewiesen.

### Projekt

Ein Projekt besitzt nur seine Werte und echte Ausnahmen. Die normale Spezialisierung erfolgt über `--theme-*`. Eine Ausnahme, die Selektoren oder `::part()` benötigt, bleibt bewusst im `website`-Layer und wird nicht als neue Theme-Variable getarnt.

## Vorgeschlagene Modulstruktur

```text
theme/
  _foundation.scss       # globale Layer-Reihenfolge, Reset und Schemes
  osman.scss             # bestehende Low-Level-/Mixin-API
  osman/
    _theme.scss          # interne Layer-Zuordnung und Theme-Ausgabe
    _runtime-settings.scss
    site.scss            # produktionsfertiger Side-effect-Entrypoint
  raven.scss
  raven/
    _theme.scss
    _runtime-settings.scss
    site.scss
```

`site.scss` lädt die Foundation, setzt den festen Theme-Scope, ruft das vorhandene `theme()`-Mixin auf und gibt die konfigurierten `--theme-*`-Werte im `website`-Layer aus. Der Low-Level-Entrypoint bleibt frei von automatischer Ausgabe, damit `docs` mehrere Themes kontrolliert in einem Bundle darstellen kann.

## Verhalten der Layer

Die Priorität bleibt:

1. `reset`
2. `schemes`
3. `themes.tokens`
4. `themes.base`
5. `themes.typography`
6. `themes.elements`
7. `themes.components`
8. `themes.patterns`
9. `themes.utilities`
10. `website`

Theme-Defaults und das Mapping liegen in `themes.tokens`. Consumer-Werte werden im `website`-Layer ausgegeben, sodass sie unabhängig von Selektor-Spezifität gewinnen. Alle von diesen Variablen abhängigen Runtime-Ableitungen bleiben funktionsfähig, weil sie die Variablen zur Laufzeit auswerten.

Normale Theme-Deklarationen verwenden kein `!important`. Ungelayertes Projekt-CSS bleibt während der Migration wirksam, soll langfristig aber nur für bewusst dokumentierte Ausnahmen bestehen.

## Migration

### Phase 1: gemeinsamer Vertrag

- Foundation als einzige Eigentümerin von Layer-Reihenfolge, Reset und Schemes einführen.
- Osman um den neuen `site.scss`-Entrypoint ergänzen.
- Die bestehende `osman.theme()`-API zunächst beibehalten.
- Font-Loading von Font-Zuweisung trennen.
- Eine minimale Compile-Fixture für den neuen Entrypoint hinzufügen.

### Phase 2: Osman-Referenzprojekt

`leu-web-osman2/docs/_src/style.scss` auf den neuen Entrypoint umstellen. Dabei entfallen der direkte Style-Base-Import, die Scheme-Initialisierung, der manuelle Theme-Selector und das direkte `--nt-*`-Mapping. Der resultierende CSS-Build und die Desktop-/Mobile-Darstellung müssen unverändert bleiben.

### Phase 3: Raven angleichen

Raven nach demselben internen Vertrag wie Osman strukturieren:

- `--theme-*` als öffentliche Eingaben definieren;
- ausschließlich dort auf `--nt-*` mappen;
- Ausgabe auf die benannten Layer verteilen;
- feste Textschrift aus dem Theme-Renderer lösen;
- produktionsfertigen `site.scss`-Entrypoint ergänzen.

Die visuelle Raven-Darstellung wird dabei nicht neu gestaltet. Die Migration ändert nur Ownership und Konfigurationsweg.

### Phase 4: weitere Themes und Dokumentation

Erst nach erfolgreicher Osman- und Raven-Prüfung wird das Muster auf weitere Themes übertragen. `docs/_src/style.scss` bleibt als Multi-Theme-Testumgebung bewusst auf der Low-Level-API und demonstriert zusätzlich mindestens einen produktionsnahen Compile-Test des Site-Entrypoints.

## Akzeptanzkriterien

- Ein Osman-Nutzprojekt benötigt keine eigene `@layer`-Deklaration.
- Ein Osman-Nutzprojekt importiert `@nextrap/style-base` oder `@nextrap/style-reset` nicht direkt.
- Reset, Scheme-Selektoren und Layer-Reihenfolge erscheinen im kompilierten CSS genau einmal.
- Theme-CSS bleibt vollständig unter `:where(.theme-osman)` beziehungsweise `:where(.theme-raven)` gescoped; nur Foundation und unkritische globale Assets dürfen global sein.
- Alle normalen Anpassungen des Osman-Referenzprojekts sind durch dokumentierte `--theme-*`-Werte ausdrückbar.
- Ein optionales Theme-Wertprofil überschreibt nur Variablen und erzeugt keine Komponenten- oder Content-Struktur.
- `docs` kann weiterhin Osman und Raven parallel laden.
- `vite build` besteht in `themejs2` und anschließend im migrierten Osman-Referenzprojekt.
- Desktop- und Mobile-Screenshots zeigen keine unbeabsichtigte visuelle Änderung.

## Bewusste Nicht-Ziele

Dieser Proposal führt keine neue NTL-/NTE-Komponente ein, verändert keine Header-/Footer-Struktur und erweitert keine Komponenten-API. Er verschiebt keine einmaligen Kundenausnahmen in das Theme. Responsive Bereinigungen, harte Einzelwerte und bestehende `!important`-Fälle bleiben getrennte Folgearbeiten, damit die Entrypoint-Migration das visuelle Verhalten nicht gleichzeitig verändert.
