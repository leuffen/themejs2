---
name: trunkjs-responsive
description: Bei responsiven Klassen, breakpoint-gesteuerten Styles oder Änderungen am responsive Verhalten einer ThemeJS2-Website lesen. Nutze @trunkjs/responsive und Arbitrary Values nur für seltene Einzelfälle.
---

# TrunkJS Responsive

ThemeJS2 registriert `tj-responsive` bereits in der Layout-Kette. Füge die Registrierung nicht erneut in Seiten, Includes oder Komponenten ein. Bevorzuge vorhandene semantische Klassen oder Utility-Klassen und kombiniere sie mit der bestehenden Breakpoint-Syntax. Nutze keine eigenen Resize Listener oder einzelnen CSS `@media` rules, wenn `@trunkjs/responsive` das Verhalten ausdrücken kann.

```html
<div class="-md:d-none md-xl:d-block.shadow xl:d-flex"></div>
```

Arbitrary Values wie `width-[100%]` oder `md:text-size-[22px]` werden vollständig on the fly im Browser in CSS rules übersetzt. Sie sind eine Escape Hatch und dürfen nicht anstelle eines wiederverwendbaren Design Tokens oder einer gemeinsamen Klasse verwendet werden.

```html
<div class="width-[100%]:md:width-[50%]"></div>
```

Arbitrary Values werden zur Laufzeit erzeugt; ihre Verwendung muss mit dem bereits eingebundenen `tj-responsive` funktionieren. Es findet keine Vorkompilierung statt.

Lies vor der Verwendung von Arbitrary Values [die mitgelieferte technische Referenz](references/ai-usage-info.md). Dort stehen die unterstützten Utilities, Sicherheitsgrenzen und die vollständige Syntax.
