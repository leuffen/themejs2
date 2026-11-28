---
description: Zentrierte Logoübersicht mit optionalen Beschriftungen und Abschlussaktion.
---

# Partner- und Integrationslogos

## Markdown

```markdown
## Unsere Partner
{: layout="ntl-2col.style-logo-cloud" .header }

- [![Partner A](./partner-a.svg)](https://example.com/a)
- [![Partner B](./partner-b.svg)](https://example.com/b)
- [![Partner C](./partner-c.svg)](https://example.com/c)
{: .bottom .logo-cloud }

[Alle Partner](./partner.html)
{: .footer }
```

## Verwendung

Die Überschrift nutzt `header`, die Logoliste den vollbreiten
`bottom`-Slot und ein optionaler Link `footer`. Das Raster passt sich
der verfügbaren Breite an. Die Bilder stammen aus dem Autoreninhalt.

`with-labels` ist eine dokumentierte Ausnahme am Kind
`.logo-cloud`: Sie erzeugt kompakte Integrationskacheln mit Bild und
`strong`-Beschriftung. Es ist kein Host-Modifier und kein zweiter Style.

```markdown
- ![Kalender](./kalender.svg) **Kalender**
- ![Nachrichten](./nachrichten.svg) **Nachrichten**
{: .bottom .logo-cloud .with-labels }
```

[Zugehöriger Style](_style-logo-cloud.scss)
