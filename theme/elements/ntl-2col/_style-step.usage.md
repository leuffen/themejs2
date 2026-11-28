---
description: Editierbare Schritte mit Beschreibung, Checkliste und zugehörigem Medium.
---

# Prozessschritt mit Medien

## Markdown

```markdown
## Schritt 1: Vorbereiten
{: layout="ntl-2col.style-step" section-style="--cols: 5;" }

**Vorbereitung**
{: .step-kicker }

- Informationen zusammentragen.
- Gemeinsam Ziele festlegen.
{: .list-checked }

![Vorbereitung](./vorbereitung.jpg)

## Schritt 2: Umsetzen
{: layout="ntl-2col.style-step" section-style="--cols: 5;" }

**Umsetzung**
{: .step-kicker }

Wir setzen die vereinbarten Maßnahmen um.

![Umsetzung](./umsetzung.jpg)
```

## Verwendung

Haupttext, Kicker und Checkliste bleiben in `main`; direkte
Markdown-Bilder landen in `aside`. Die Schrittfolge eignet sich für
Onboarding oder einen Beratungsprozess. Auf kleinen und mittleren
Ansichten steht zuerst die Anleitung, danach das zugehörige Bild.
Mehrere Schritte brauchen keine feste Anzahl und keine festen IDs.

Keine eigenen Modifier. Die Reihenfolge auf Desktop kann über die
dokumentierte Nextrap-Ausnahme `reverse-desktop` gewählt werden.

[Zugehöriger Style](_style-step.scss)
