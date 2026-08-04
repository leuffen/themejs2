# Element- und Child-Struktur für Theme-SCSS

Diese Referenz beschreibt, wie SCSS-Dateien in `theme/<theme-name>/elements/**` abgelegt werden sollen, damit schon am Dateinamen erkennbar ist, welches Element oder Unterelement gestylt wird.

## Grundprinzip

- Ein Element-Ordner enthält genau eine Entry-Datei: `elements/<element>/<element>.scss`.
- Die Entry-Datei enthält nur `@use "sass:meta";` und `@include meta.load-css(...)`.
- `_style-*.scss`, `_with-*.scss` und `_reverse.scss` stylen nur das Element, in dessen Ordner sie liegen.
- Styles für Child-Elemente, Slots, Parts oder Light-DOM-Unterelemente werden in einen passenden Unterordner verschoben.
- Wenn ein Parent-Style ein Child beeinflusst, heißt die Child-Datei `_in-style-*.scss`.

## Reihenfolge innerhalb jeder Style-Datei

In jeder Style-Datei steht zuerst der allgemeine Style. Danach folgen die `mode`-Blöcke in fester Reihenfolge:

1. Genereller Style ohne Breakpoint-/Mode-Einschränkung
2. `&[mode="mobile"]`
3. `&[mode="tablet"]`
4. `&[mode="desktop"]`

Nicht benötigte Mode-Blöcke werden weggelassen. Mode-Blöcke werden nicht zwischen allgemeine Regeln gemischt. Bei Child-Styles sitzt der Mode-Selector immer auf dem Parent, der das `mode`-Attribut trägt, z.B. `&[mode="mobile"] { ntl-card { ... } }` für `ntl-card` in `ntl-card-row`. Werte für Farben, Schriften und Abstände sind in den Beispielen nur Platzhalter; im Projekt sollen bevorzugt bestehende `--nt-*` Variablen und Nextrap-Styles verwendet werden.

```scss
&.style-example {
  // 1. genereller Style
  --example-gap: var(--nt-text-gap);

  &::part(container) {
    max-width: var(--nt-container-width);
  }

  // 2. mobile
  &[mode="mobile"] {
    --example-gap: 1rem;
  }

  // 3. tablet, falls nötig
  &[mode="tablet"] {
    --example-gap: 1.25rem;
  }

  // 4. desktop, falls nötig
  &[mode="desktop"] {
    --example-gap: 1.5rem;
  }
}
```

## Beispiel: `ntl-card-row` mit Child `ntl-card`

Problem: `ntl-card-row.style-ribbon` stylt nicht nur die Row selbst, sondern auch enthaltene `ntl-card`-Elemente. Diese Child-Styles gehören nicht in `_style-ribbon.scss`, sondern in den Child-Ordner. Wichtig: Nur `ntl-card-row` trägt das per JavaScript gesetzte `mode`-Attribut; `ntl-card` muss sich über Parent-Mode-Selektoren daran orientieren.

```text
theme/<theme-name>/elements/ntl-card-row/
├── ntl-card-row.scss
├── _style-default.scss
├── _style-no-border.scss
├── _style-ribbon.scss
├── _style-ribbon-top.scss
└── ntl-card/
    ├── ntl-card.scss
    ├── _in-style-default.scss
    ├── _in-style-no-border.scss
    ├── _in-style-ribbon.scss
    └── _in-style-ribbon-top.scss
```

### Parent-Entry

```scss
// elements/ntl-card-row/ntl-card-row.scss
@use "sass:meta";

ntl-card-row {
  // Style variants
  @include meta.load-css("./_style-default.scss");
  @include meta.load-css("./_style-no-border.scss");
  @include meta.load-css("./_style-ribbon.scss");
  @include meta.load-css("./_style-ribbon-top.scss");

  // Child-Styles laden
  @include meta.load-css("./ntl-card/ntl-card.scss");
}
```

### Parent-Style: nur `ntl-card-row`

```scss
// elements/ntl-card-row/_style-ribbon.scss
@use "@nextrap/ntl-card-row" as cardRow;

&.style-ribbon {
  // genereller Row-Style
  --gutter-y: 0;
  --default-cols: 0;

  position: relative;
  z-index: 3;
  width: 100vw;
  margin-top: -4.1rem;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  @include cardRow.default-style(
    $container-width: var(--nt-container-width),
    $gap: clamp(1rem, 2vw, 1.5rem),
    $inner-padding: 0,
    $container-background: transparent,
    $container-border: none,
    $container-border-radius: 0
  );

  &::part(container) {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }

  &::part(main) {
    width: var(--nt-container-width);
    max-width: var(--nt-container-width);
    margin: 0 auto;
    gap: 0;
  }

  &[mode="mobile"] {
    margin-top: 0;
    padding: 1.85rem 0 0;

    &::part(container),
    &::part(main) {
      width: 100%;
      max-width: 100%;
      margin: 0;
    }
  }

  &[mode="desktop"] {
    &::part(main) {
      align-items: stretch;
    }
  }
}
```

### Child-Entry

```scss
// elements/ntl-card-row/ntl-card/ntl-card.scss
@use "sass:meta";

@include meta.load-css("./_in-style-default.scss");
@include meta.load-css("./_in-style-no-border.scss");
@include meta.load-css("./_in-style-ribbon.scss");
@include meta.load-css("./_in-style-ribbon-top.scss");
```

### Child-Style: `ntl-card` innerhalb von `ntl-card-row.style-ribbon`

```scss
// elements/ntl-card-row/ntl-card/_in-style-ribbon.scss
&.style-ribbon {
  // genereller Child-Style
  ntl-card {
    --image-aspect-ratio: 16/9;
    --border: 0;
    --border-width: 0;
    --border-color: transparent;

    align-self: stretch;
    background: var(--nt-body-bg);
  }

  ntl-card::part(wrapper) {
    display: flex;
    flex-direction: column;
    gap: var(--nt-text-gap);
    padding: var(--nt-text-gap);
  }

  ntl-card::part(content) {
    flex: 1 1 auto;
  }

  ntl-card [slot="footer"] {
    margin-top: auto;
  }

  &[mode="mobile"] {
    ntl-card {
      --image-aspect-ratio: 1;
      border-bottom: 1px solid var(--nt-gray-300);
    }

    ntl-card::part(wrapper) {
      min-height: 0;
    }
  }

  &[mode="desktop"] {
    ntl-card {
      flex-grow: 1;
      padding: 0;
      border-right: 1px solid var(--nt-gray-300);
    }

    ntl-card:last-child {
      border-right: none;
    }
  }
}
```

## Wann weiter aufteilen?

Eine Child-Datei darf das Child und seine `::part(...)`-Bereiche gemeinsam stylen, solange die Datei übersichtlich bleibt. Wird sie groß oder betrifft sie klar unterscheidbare Unterbereiche, kann weiter aufgeteilt werden:

```text
elements/ntl-card-row/ntl-card/
├── ntl-card.scss
├── _in-style-ribbon.scss
├── part-wrapper/
│   └── _in-style-ribbon.scss
└── slot-footer/
    └── _in-style-ribbon.scss
```

Wichtig: Auch diese Dateien werden immer über den Parent geladen und bleiben dadurch unter `.theme-<theme-name>` gescoped.

## Naming-Checkliste

- Klasse auf dem Element selbst: `_style-default.scss` → `&.style-default`
- Modifier auf dem Element selbst: `_with-bg-primary.scss` → `&.with-bg-primary`
- Einfacher Modifier: `_reverse.scss` → `&.reverse`
- Child in Parent-Style: `<child>/_in-style-ribbon.scss` → `&.style-ribbon { <child> { ... } }`
- Datei und Selector müssen gleich heißen: `_style-no-border.scss` → `&.style-no-border`
