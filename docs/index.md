---
body_class: theme-mueller
description: "Zentrale Übersicht aller veröffentlichten ThemeJS2-Demo- und Inhaltsseiten."
layout: website
order: 0
permalink: /
ptags:
  - nav
published: true
short_title: Seitenübersicht
title: ThemeJS2 Seitenübersicht
type: website
---

## Alle ThemeJS2-Seiten
{: layout="ntl-2col" data-kicker="Theme Müller" }

Diese Übersicht wird bei jedem Build automatisch aus allen veröffentlichten HTML-Seiten, Beiträgen und Collection-Dokumenten erzeugt.

{% assign indexed_pages = site.pages | concat: site.documents | sort: "url" %}
<ul>
  {% for indexed_page in indexed_pages %}
    {% if indexed_page.output_ext == ".html" and indexed_page.url != page.url and indexed_page.url != "/404.html" %}
      {% assign indexed_title = indexed_page.nav_title | default: indexed_page.short_title | default: indexed_page.title | default: indexed_page.url %}
      <li>
        <a href="{{ indexed_page.url | relative_url }}">{{ indexed_title }}</a>
        <small>– {{ indexed_page.url }}</small>
      </li>
    {% endif %}
  {% endfor %}
</ul>
