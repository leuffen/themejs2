---
description: Nummerierter Ablauf mit aufklappbaren Schritten
---

# Nummerierter Ablauf mit aufklappbaren Schritten

Content Pane erzeugt aus den Unterüberschriften `nte-accordion-item`.
Titel und Antworten bleiben normaler Markdown-Inhalt. Das Accordion
verwaltet Öffnen, Schließen und Tastaturbedienung. Pro Instanz genau ein
`style-*`; der Default wird automatisch gewählt.

```markdown
## Häufige Fragen
{: layout="nte-accordion.style-process[exclusive]" }

### Wie beginnt die Beratung?

Wir besprechen zunächst Ihre Fragen.

### Was folgt danach?

Sie erhalten die vereinbarten nächsten Schritte.
```
