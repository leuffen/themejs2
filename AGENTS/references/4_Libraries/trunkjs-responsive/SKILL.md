---
name: trunkjs-responsive
description: Bei responsiven Klassen, breakpoint-gesteuerten Styles oder Änderungen am responsive Verhalten einer ThemeJS2-Website lesen. Nutze @trunkjs/responsive und Arbitrary Values nur für seltene Einzelfälle.
---

# TrunkJS Responsive

`tj-responsive` ist in der Layout-Chain registriert; keine weitere
Registrierung in Seiten, Includes oder Komponenten ergänzen. Nutze zuerst
Nextrap-Klassen und Utilities mit Breakpoint-Syntax. Reichen sie nicht aus,
setze dokumentierte `--nt-*`-Variablen inline, bei Bedarf mit
`style-{breakpoint}`. Erst danach kommen elementbezogene Einzelwerte infrage.
Keine eigenen Resize-Listener oder `@media`-Regeln bei ausreichender API.

```html
<div class="-md:d-none md-xl:d-block.shadow xl:d-flex"></div>
```

Arbitrary Values werden im Browser zu CSS-Regeln, ohne Precompilation.
Sie sind eine Escape Hatch, kein Ersatz für Design Tokens oder gemeinsame
Klassen:

```html
<div class="width-[100%]:md:width-[50%]"></div>
```

Nutze dafür das vorhandene `tj-responsive`. Lies vorher die
[technische Referenz](references/ai-usage-info.md) für Syntax, Utilities und
Sicherheitsgrenzen.

Für responsive Klassen und `style-{breakpoint}` im Markdown:
[Responsive Klassen im Website-Content](references/themejs2-responsive-content.md).
