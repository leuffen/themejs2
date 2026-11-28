# themejs2

- [Jekyll Includes Doc](README_INCLUDES.md)
- [Best Practices](BEST_PRACTICE.md)

## Gemeinsame Theme-Basis

Alle Seiten verwenden denselben Sass-Entry. Er registriert Reset, Schemes,
Runtime-Tokens, Typografie, Elemente, Komponenten, Variants, Misc und Utilities:

```scss
@use "@leuffen/themejs2" as themejs;

:where(:root) {
  @include themejs.theme();
}
```

Eine optionale Body-Klasse wie `variant-osman`, `variant-mueller`,
`variant-raven`, `variant-epraxis`, `variant-unify` oder `variant-dommer`
setzt ausschließlich vorhandene `--nt-*`-Tokens. Ohne Variant gilt die
gemeinsame Basis. In Jekyll setzt `theme_profile: raven` die Body-Klasse;
`layout:` wählt unabhängig davon den editierbaren Website-Frame.

```html
<body class="variant-raven">
  <!-- Eine funktionale Komposition, unabhängig von der gewählten Palette. -->
  <ntl-2col class="style-testimonial">...</ntl-2col>
</body>
```

Element-Styles liegen unter `theme/elements/<tag>/` beziehungsweise `id_<id>/`.
Jede `_style-*.scss` hat eine benachbarte `.usage.md` mit Voraussetzungen,
Modifiern und Markdown-/Kramdown-Beispielen. Pro Instanz gilt höchstens eine
`style-*`-Klasse; NTE/NTL wählen `style-default` automatisch. Modifier wie
`testimonial-portrait`, `image-text-overlap` oder `ribbon-overlap` ergänzen
die gewählte Komposition. Eine Variant ändert keine Slots oder Breakpoints.

Die alten Theme-Imports und `all.scss` entfallen. Consumer stellen auf den
obigen Entry um und ersetzen `theme-*` durch `variant-*`. Herkunftsbezogene
Style-Namen werden funktional gewählt: Hero-Bildpanels verwenden
`style-image-text`, redaktionelle Heroes `style-editorial`, Kampagnen
`style-campaign`; das frühere Raven-Zweispalten-Hero heißt `style-hero`.
Weitere Zuordnungen stehen in den Sidecars der jeweiligen Elemente.

Website-Anpassungen setzen `--nt-*` direkt auf dem Variant-Träger, damit
auch abgeleitete Tokens dort neu berechnet werden:

```scss
@layer website {
  :where(body.variant-raven) {
    --nt-primary: #315b70;
    --nt-radius: .25rem;
  }
}
```

Die [Theme-Architektur](docs/theme-architecture.md) erklärt Layer und Ablage.
Das [Seitenverzeichnis](docs/index.md) verlinkt die vollständigen Demos.

## Build on:

Reference to the Projects that are used to build this project:

- [Responsive CSS design system from TrunkJS](https://github.com/trunkjs/trunkjs-monorepo/blob/main/packages/responsive/README.md)
- [TrunkJS Content Area](https://github.com/trunkjs/trunkjs-monorepo/blob/main/packages/content-pane/README.md)

## Designs

- [XD Design EPraxis Theme](https://xd.adobe.com/view/7290d634-af00-4094-ae0f-fd4c6d63d1ab-27c3/screen/1244a5ba-fac0-4dd7-bede-fbb3413d2c11/)

### Setup

*This Project uses [kickstart](https://nfra.infracamp.org/)*

- Clone the repository and run `kickstart` in the root directory. Inside the container run `kick dev` to execute the development server defined in `.kick.yml`.
- Don't forget to run `npm install` within `kickstart` environment.

### Running It

```sh
kickstart
kick dev
```

### Versionen bauen und veröffentlichen

Ein npm-Release wird durch einen Git-Tag im Format `release/X.Y.Z` ausgelöst.
Beispiel für Version `1.0.12`:

```sh
npm run build
git tag release/1.0.12
git push origin release/1.0.12
```

Der GitHub-Publish-Workflow akzeptiert nur drei numerische Versionssegmente,
übernimmt `1.0.12` automatisch als Paketversion, baut das Paket und
veröffentlicht es bei npm. `package.json` muss vorher nicht manuell versioniert
werden. Jede npm-Versionsnummer darf nur einmal veröffentlicht werden.

### Guides

#### How to Change Styles

- For theme-specific changes, edit its functional style under `theme/elements/` or its token variant under `theme/variants/`
- Base styles come from published npm packages: `@nextrap/style-*` and `@trunkjs/*`


#### No legacy CSS!

> Kunde: Ich möchte auf allen Blog-Seiten unter der Infotext den Hintergrund blau haben!
> 
> Bisher: Klar, ich füge eine Klasse `info-box-blog` hinzu und setze den Hintergrund auf blau.
> 
> Wir wollen dahin: Ich ängere das drekt in der `_layout/blog.html` Datei.

In order to keep the CSS small and maintainable, we do not allow legacy CSS in this project. This means:


```html
<!-- Bad: -->
<div class="info-box-blog">...</div>

<!-- Good: -->
<div class="d-flex border border-1 bg-light p-5" style="opacity: 0.8" style-xl="opacity: 1">...</div>
```

Why? Keep it Simple Stupid (KISS)! 

- All styles that are specific within a layout or include should be done with utility classes and style attributes.
- Utility classes are documented and changes will have a predictable effect.
- Layout and includes should be readable and understandable without having to look up custom CSS.

**Checklist for adding a CSS Class:**

Do you think you need a new CSS class? Please check the following:

- [ ] There is no utility class that does the same
- [ ] You need media query that is not covered by style-md= or style-xl= syntax (see trunkjs responsive docs)
- [ ] The class is used in more than one place
- [ ] The class is univerally useful (e.g. `.info-box` is not, `.text-box` is) and is not too specific
- [ ] The class has no side effects with other classes or requires specific ordering
