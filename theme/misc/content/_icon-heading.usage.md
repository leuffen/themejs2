---
description: Verbindet ein dekoratives Icon mit einer Überschrift.
---

# Überschrift mit Icon

`icon-heading` ergänzt eine vorhandene Überschrift.
Ein Icon direkt im Titel benötigt verschachteltes HTML; der umgebende
Content bleibt Markdown mit einer Kramdown-Layoutzuweisung.

```markdown
## Unsere Leistungen
{: layout="ntl-2col" }

<h3 class="header icon-heading">
  <i class="bi bi-eye feature-icon" aria-hidden="true"></i>
  Diagnostik
</h3>

Wir klären Ihre Fragen.
```

Die Klasse `header` kann als vorhandener Slot-Marker stehen bleiben.
Nur `feature-icon` innerhalb von `icon-heading` wird gestaltet; andere
Feature-Icons behalten die Darstellung ihres Komponenten-Styles.
