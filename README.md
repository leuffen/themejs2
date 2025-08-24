# themejs2

- [Jekyll Includes Doc](README_INCLUDES.md)
- [Best Practices](BEST_PRACTICE.md)

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

### Guides

#### How to Change Styles

- For theme-specific changes, edit the CSS of a theme, e.g. `src/epraxis-theme/theme.scss` (not to be confused with the files in `docs/_src`)
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
