---
description: Zentrierte CTA-Fläche mit Aktionen und optionaler zweiter Inhaltsspalte.
---

# Handlungsaufforderung

## Markdown

```markdown
## Möchten Sie mehr erfahren?
{: layout="ntl-2col.style-cta" }

Wir beantworten Ihre Fragen.

[Kontakt aufnehmen](./kontakt.html){: .btn .btn-primary }
```

## Verwendung

Ohne Aside verwendet der CTA die volle Wrapperbreite. Direkte Kinder mit
`.aside` oder `slot="aside"` aktivieren die zweispaltige Komposition;
beispielsweise für eine Einladung mit Kontaktformular oder eine Aktion
mit ergänzenden Informationen. `nte-input` erhält innerhalb dieser
Komposition die neutrale Eingabefläche.

Keine eigenen Modifier. Nextrap-Modifier wie `reverse-desktop` bleiben
dokumentierte Ausnahmen. Inhalte in `header` oder `footer` bleiben
außerhalb des Wrappers.

[Zugehöriger Style](_style-cta.scss)
