---
_schiller_instructions: ~
_schiller_template: pages/hausarzt-index-singleleistung
availLangs:
- de
body_class: theme-mueller
description: "Sitemap"
keywords: ~
layout: website
order: 0
permalink: /sitemap
ptags:
published: true
title: Sitemap
---




## Sitemap
{: layout=".container"}


{% assign docs = site.posts | concat: site.pages %}


<table>
  {% for doc in docs %}
<tr>
<td><a href="{{ doc.url }}">{{ doc.title }}</a></td>
<td>{{ doc.path }}</td>
</tr>
  {% endfor %}
</table>



