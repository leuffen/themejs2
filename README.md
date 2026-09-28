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

## Schiller-Projektvorlage

Das veröffentlichte Paket enthält `_tpl/_root/` als kopierbare Projektwurzel. Die Raven-Seiten unter `_tpl/` sind mit `schiller.tags` und `schiller.target` gekennzeichnet und werden nur bei Auswahl installiert. Die ausführbare `schiller`-Datei kommt aus `leuffen/leuffen-shiller-lib` (Composer); ThemeJS2 wird über npm bezogen.

In einem neuen Projekt mit beiden Abhängigkeiten:

```sh
schiller init --template-dir ./node_modules/@leuffen/themejs2/_tpl --tags raven
```

`init` kopiert zuerst den gesamten Inhalt von `_tpl/_root/` in das aktuelle Verzeichnis und installiert die Raven-Seiten als `docs/index.md` und `docs/kontakt.md`. Die `schiller.target`-Werte `index.md` und `kontakt.md` sind relativ zum Document Root. Bestehende Zieldateien werden ersetzt. Die kopierte `docs/.shiller.yml` verweist für spätere Aufrufe relativ zu `docs/` auf das npm-Paket:

```sh
schiller install --tags raven
```

Ohne `--root` wird `docs/` im aktuellen Projekt verwendet. Für eine weitere Website wählt `--root ./site-b/public` deren Document Root; `_root/docs/` und die markierten Seiten werden dann nach `site-b/public/` kopiert, die übrigen `_root`-Dateien nach `site-b/`.

Der `schiller`-Front-Matter-Block bleibt in Markdown-Seiten erhalten. Weitere Varianten können unter `_tpl/` denselben Zielpfad mit anderen Tags anbieten; mehrere gleichzeitig ausgewählte Varianten für dasselbe Ziel sind ein Fehler.

## Skills für die Bearbeitung

Das npm-Paket liefert die Autorenanleitungen unter `skills/` mit. Für Änderungen an installierten Seiten, Layouts und Includes beginne mit [edit-themejs2-site](skills/edit-themejs2-site/SKILL.md). Bei responsiven Klassen lies zusätzlich [trunkjs-responsive](skills/trunkjs-responsive/SKILL.md); für Markdown mit Content Pane [content-pane-usage](skills/content-pane-usage/SKILL.md) und bei `layout`-Attributen [content-pane-layout](skills/content-pane-layout/SKILL.md). Die technischen Beispiele liegen jeweils bei den Skills und werden nicht in das Kundenprojekt kopiert.
