# § 1 Repository Structure

| Datum | Wesentliche Änderung | Commit |
| --- | --- | --- |
| 2026-11-27 | Verzeichnisregeln für Theme, Elements und Variants aus dem Proposal übernommen. | [`5a9bb7b0`](https://github.com/leuffen/themejs2/commit/5a9bb7b02b46103c7b8f7e1a926ff0965cd5d632) (Ausgangsstand) |

## § 1.1 Verzeichnisse

### § 1.1.1 `theme/`

`theme/` enthält die Theme-spezifischen Styles und seitenweiten Variants.
Die Zielstruktur führt `elements/` und `variants/` direkt unter `theme/`.

#### § 1.1.1.1 `theme/elements/`

Unter `theme/elements/` sind Web Components und HTML-Tags der Regelfall.
Das Unterverzeichnis trägt direkt den Tag-Namen, etwa `ntl-hero/`,
`nte-navbar/` oder `header/`. Eine funktionale Spezialformatierung bleibt
beim zugehörigen Element. Für eine Öffnungszeiten-Tabelle käme etwa
`table/_style-open-hours-table.scss` infrage.

Eigenständige ID-Styles sind begründete Ausnahmen für feste Layout-Bereiche
wie `id_footer/` für `#footer`. Ist für einen Style ein eigener
Klassenselektor nötig, prüfe zuerst, ob der Style überhaupt in
`theme/elements/` gehört. `class_<klasse>/` ist eine seltene, zu
begründende Ausnahme. Verwende für mehrteilige Klassennamen Bindestriche.
BEM-Notation ist unter `theme/elements/` ausgeschlossen.

Style-Dateien heißen `_style-<name>.scss`. Der Default-Style liegt in
`_style-default.scss`, sofern das Element dafür eigenes Styling benötigt.
Styles enthalten ihre zugehörigen Modifier, etwa einen Schalter für die
Reihenfolge. Für die aktive Style-Auswahl gilt der Komponentenvertrag
aus [§ 5.7 der Repository-Regeln](../AGENTS.md).

Zu jeder Style-Datei gehört direkt daneben ein Markdown-Sidecar mit
identischem Basisnamen, etwa `_style-default.md` zu `_style-default.scss`.
Das Front Matter enthält ausschließlich `description` für die automatische
Übersicht. Darunter stehen die Hinweise zur Verwendung und mindestens ein
Beispiel. Ein separates System liest die Sidecars aus. Sie gehören außerhalb
der Demo-Ausgabe.

Die [Referenz für Element-Styles und Markdown-Sidecars](references/element-style-sidecars.md)
ist verbindlich. Ein zusätzlicher Style setzt eine Funktion oder Komposition
voraus, die kein vorhandener Style abdeckt. Farbwerte gehören in die
seitenweite Variant unter `theme/variants/`.

#### § 1.1.1.2 `theme/variants/`

Lege pro seitenweiter Variant genau eine Datei
`theme/variants/_variant_<name>.scss` an. Die Datei exportiert genau ein
Sass-Mixin `variant-<name>`. Das Mixin gibt genau eine CSS-Klasse
`.variant-<name>` aus. Der Klassenblock enthält ausschließlich
CSS-Custom-Property-Deklarationen.

Setze regulär nur vorhandene `--nt-*`-Variablen aus Nextrap Style Base.
Dazu gehören Werte für Schriften, Farben, Rahmen und Hintergründe.
Verwende semantische Defaults und leite weitere Werte nach Möglichkeit
von der Primärfarbe ab. Neue `--theme-*`-Variablen erfordern die
ausdrückliche Zustimmung des Entwicklers.

Für Dommer exportiert `_variant_dommer.scss` das Mixin `variant-dommer`,
das `.variant-dommer` mit den zugehörigen Token-Werten ausgibt.
