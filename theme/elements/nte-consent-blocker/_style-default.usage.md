---
description: Zustimmung vor dem Laden externer Inhalte.
---

# Externe Inhalte erst nach Zustimmung

Die gemeinsame Baseline verwendet die öffentliche Consent-API. Das Pairing
bindet einen Blocker direkt in die `aside`-Spalte von `ntl-2col` ein.
Ein inertes Template enthält den tatsächlichen Embed; der Blocker lädt ihn
erst nach Zustimmung. Das Theme verwaltet weder Zustimmung noch Speicherung.

Das Beispiel setzt das vorhandene Template `#google-maps-default` aus dem
Website-Head und den `text-block`-Pre-Parser voraus:

```markdown
## Anfahrt
{: layout="ntl-2col" }

Unsere Anschrift und eine Beschreibung des Wegs.

#[nte-consent-blocker.aside style="--default-template-selector: #google-maps-default;"]
```

In einer anderen Website das eigene inerte Template im HTML-Layout definieren
und dessen ID im Shortcut angeben; der externe Inhalt gehört nicht in einen
ungeslotteten Kindbereich des Blockers.
