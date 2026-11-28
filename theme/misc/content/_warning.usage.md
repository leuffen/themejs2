---
description: Gruppiert Warnsymbol und Titel sowie einen optional hervorgehobenen Handlungsaufruf.
---

# Warnhinweis

`warning-heading` gestaltet eine Überschrift mit einem dekorativen Icon.
`warning-emergency` betont einen kurzen nachfolgenden Hinweis.

```markdown
## Bitte beachten
{: layout="ntl-2col" }

Beachten Sie die Hinweise zur Terminvereinbarung.
{: .warning-emergency }
```

Das vorhandene HTML-Muster für ein Icon im Titel bleibt möglich:

```html
<h2 class="warning-heading">
  <i class="bi bi-exclamation-triangle" aria-hidden="true"></i>
  <span>Bitte beachten</span>
</h2>
```

Die Darstellung verwendet einen fließenden Größenbereich und benötigt keine
eigene Responsive-Registrierung.
