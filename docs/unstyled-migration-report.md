# Report: ThemeJS2 mit Nextrap `/unstyled`

JavaScript-/TypeScript-Komponentenimporte in zentralem Entry, Formmailer, Demo und Nutzprojekt-Vorlage verwenden `/unstyled`. Kommentare und Repository-/Theme-Regeln erklären den Grund: Light-DOM-CSS wird ausschließlich vom Theme zusammengestellt; funktionale Shadow-DOM-Styles bleiben erhalten. Sass-Imports verwenden weiter die öffentliche Paket-API ohne `/unstyled`.

## Themes

Alle sechs Themes sind angepasst: **epraxis, medic, mueller, osman, raven, unify**. Je Theme gibt es explizite Sass-Einbindungen für Bild-Vollansicht (`nte-image.fullsize-style()`), Feedback und Spinner. Diese Styles kamen zuvor über Komponenten-JavaScript; mit `/unstyled` übernimmt jedes Theme sie in seinem eigenen Scope. Die vorhandenen übrigen Theme-Komponenten-Mixins bleiben bestehen.

## Prüfung und Abhängigkeit

Alle sechs Theme-Sass-Einstiege kompilieren. Der Vite-Site-Build gegen die neu gebauten Nextrap-Artefakte war erfolgreich; `docs/assets/dist/index.js` und `style.css` wurden daraus aktualisiert. Die lokale Prüfung verwendete temporäre Auflösungen auf diese Artefakte, ohne installierte Abhängigkeiten zu verändern oder eine Übergangslogik einzuchecken.

**Der reguläre Build braucht Nextrap-Pakete mit dem neuen `/unstyled`-Export und den ergänzten Sass-Mixins.** Die bisher installierbaren Paketstände besitzen diesen Export nicht. Zuerst Nextrap integrieren und die neuen Paketartefakte bereitstellen; anschließend ThemeJS2 mit diesen Paketen bauen. Nur das Mergen ersetzt keine npm-Veröffentlichung. Dependency-Versionen und Lockfile enthalten keine erfundenen, noch unveröffentlichten Versionen.

Eine visuelle Desktop-/Mobil-Prüfung der veröffentlichten Vorschau steht aus. Besonders Bild-Vollansicht, Feedback/Spinner und Navbar prüfen. Der aktuelle CI-Lauf kann erst nach Verfügbarkeit der neuen Nextrap-Pakete erfolgreich sein; ein älterer Pages-Stand ist kein Nachweis für diesen PR. `medic` ist ein bestehender Legacy-Theme-Einstieg und wurde zusätzlich separat kompiliert.

## Geänderte Dateien

- `.agents/skills/modify-theme/SKILL.md`
- `AGENTS.md`
- `ARCHITECTURE.md`
- `_root/docs/_src/index.ts`
- `demo/main.ts`
- `docs/assets/dist/index.js`
- `docs/assets/dist/style.css`
- `functions/formmailer.ts`
- `index.ts`
- `theme/epraxis/_theme.scss`
- `theme/epraxis/elements/nte-feedback/_style-default.scss`
- `theme/epraxis/elements/nte-feedback/nte-feedback.scss`
- `theme/epraxis/elements/nte-image/_style-default.scss`
- `theme/epraxis/elements/nte-image/nte-image.scss`
- `theme/epraxis/elements/nte-spinner/_style-default.scss`
- `theme/epraxis/elements/nte-spinner/nte-spinner.scss`
- `theme/medic/_theme.scss`
- `theme/medic/elements/nte-feedback/_style-default.scss`
- `theme/medic/elements/nte-feedback/nte-feedback.scss`
- `theme/medic/elements/nte-image/_style-default.scss`
- `theme/medic/elements/nte-image/nte-image.scss`
- `theme/medic/elements/nte-spinner/_style-default.scss`
- `theme/medic/elements/nte-spinner/nte-spinner.scss`
- `theme/mueller/_theme.scss`
- `theme/mueller/elements/nte-feedback/_style-default.scss`
- `theme/mueller/elements/nte-feedback/nte-feedback.scss`
- `theme/mueller/elements/nte-image/_style-default.scss`
- `theme/mueller/elements/nte-image/nte-image.scss`
- `theme/mueller/elements/nte-spinner/_style-default.scss`
- `theme/mueller/elements/nte-spinner/nte-spinner.scss`
- `theme/osman/_theme.scss`
- `theme/osman/elements/nte-feedback/_style-default.scss`
- `theme/osman/elements/nte-feedback/nte-feedback.scss`
- `theme/osman/elements/nte-image/_style-default.scss`
- `theme/osman/elements/nte-image/nte-image.scss`
- `theme/osman/elements/nte-spinner/_style-default.scss`
- `theme/osman/elements/nte-spinner/nte-spinner.scss`
- `theme/raven/_theme.scss`
- `theme/raven/elements/nte-feedback/_style-default.scss`
- `theme/raven/elements/nte-feedback/nte-feedback.scss`
- `theme/raven/elements/nte-image/_style-default.scss`
- `theme/raven/elements/nte-image/nte-image.scss`
- `theme/raven/elements/nte-spinner/_style-default.scss`
- `theme/raven/elements/nte-spinner/nte-spinner.scss`
- `theme/unify/_theme.scss`
- `theme/unify/elements/nte-feedback/_style-default.scss`
- `theme/unify/elements/nte-feedback/nte-feedback.scss`
- `theme/unify/elements/nte-image/_style-default.scss`
- `theme/unify/elements/nte-image/nte-image.scss`
- `theme/unify/elements/nte-spinner/_style-default.scss`
- `theme/unify/elements/nte-spinner/nte-spinner.scss`

## Beobachteter CI-Status

Der erste [Pages-Lauf](https://github.com/leuffen/themejs2/actions/runs/34726779994) für Commit `00cea9325c3ee14b1d6fd1a8328c40866c0314e0` scheiterte bereits bei `npm update`: `Cannot read properties of null (reading 'edgesOut')`. Der Frontend-Build und die Vorschau wurden deshalb nicht ausgeführt. Dieser Installationsfehler ist zusätzlich zur noch ausstehenden Nextrap-Paketbereitstellung zu klären; er ist kein nachgewiesener Unstyled-Buildfehler.
