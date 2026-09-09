---
body_class: theme-mueller
description: "Direkte Entwicklerübersicht der sieben ThemeJS2-Style-Previews."
layout: website
use_footer: mueller
order: 0
permalink: /
ptags:
  - nav
published: true
short_title: Theme-Previews
title: ThemeJS2 Preview-Übersicht
type: website
---

## Theme-Previews
{: layout="ntl-2col" data-kicker="Entwicklungsübersicht" }

<!-- Die Preview-Übersicht gruppiert alle Vorlagen automatisch anhand ihrer Theme-Verzeichnisse. -->
{% assign theme_previews = site.pages | where_exp: "preview", "preview.path contains 'pages/theme-'" | sort: "title" %}
{% assign preview_themes = "mueller|Müller,osman|Osman,raven|Raven,epraxis|ePraxis,unify|Unify" | split: "," %}
{% for preview_theme in preview_themes %}
  {% assign theme_data = preview_theme | split: "|" %}
  {% assign theme_path = "pages/theme-" | append: theme_data[0] | append: "/" %}
### Theme {{ theme_data[1] }}

  {% for preview in theme_previews %}
    {% if preview.path contains theme_path %}
- [{{ preview.title }}]({{ preview.url | relative_url }})
    {% endif %}
  {% endfor %}
{% endfor %}
