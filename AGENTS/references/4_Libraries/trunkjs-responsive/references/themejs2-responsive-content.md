# TrunkJS Responsive: Klassen und Styles im Markdown

Markdown-Beispiele zu `trunkjs-responsive` und `ai-usage-info.md`.
Nutze das vorhandene `tj-responsive` im Frame; keine zweite Registrierung
oder zusätzliche Wrapper in Content-Sections anlegen.

Bei Content-Änderungen Klassen, Styles und Breakpoints erhalten.
Responsive-Änderungen nur auf Auftrag: Klassen und Theme-Utilities vorziehen,
keine eigenen Resize-Listener oder `@media`-Regeln bei ausreichender API.

## Klassen an Breakpoints koppeln

Ranges sind links inklusive und rechts exklusiv. Standard-Breakpoints:
xs=0, sm=576, md=768, lg=992, xl=1200, xxl=1400 (Pixel).

- -md:d-none gilt unterhalb md.
- md:d-block oder md-:d-block gilt ab md.
- md-xl:d-block gilt ab md bis unter xl.
- md:d-block.shadow aktiviert beide Klassen ab md.
- d-block:md:d-flex:xl:d-none verkettet Zustände über Breakpoints.

Kramdown-Klassen gehören ohne Leerzeile direkt zum vorhergehenden Block:

```markdown
- Erstes Leistungsmerkmal
- Zweites Leistungsmerkmal
{: .features-list .-md:compact .xl:desktop }
```

Klassen und Breakpoint-Styles lassen sich kombinieren:

```html
<div class="card -md:d-none md-xl:d-block.shadow xl:d-flex"
     style="width:100%;color:black"
     style-md="width:50%"
     style-xl="width:33%;color:red">
  Inhalt
</div>
```

`style-{breakpoint}` überschreibt nur angegebene CSS-Properties;
alle übrigen bleiben wirksam.

## Runtime Arbitrary Values nur als Ausnahme

`width-[100%]`, `md:text-size-[22px]` und `width-[100%]:md:width-[50%]`
werden zur Runtime im Browser zu CSS-Regeln, ohne Precompilation. `layer`
am vorhandenen `tj-responsive` steuert den Cascade-Layer; kein Extra-Wrapper.
Leerzeichen als Unterstriche schreiben: `width-[calc(100%_-_2rem)]`.
URLs und beliebige CSS-Property-Namen werden nicht unterstützt.

Reihenfolge: Nextrap-Utilities → Utilities mit Breakpoint → dokumentierte
`--nt-*`-Variablen inline oder per `style-{breakpoint}` → Einzelwerte über
`style`/`style-{breakpoint}` → seltene Arbitrary-Value-Klasse. Keine Variablen
erfinden. Wiederkehrende Werte gehören in Theme-Tokens oder gemeinsame
Utilities. Komponenten mit eigener `mode`-API nicht durch zusätzliche
Responsive-Klassen intern nachbauen.
