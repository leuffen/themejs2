---
layout: website-default
title: ThemeJS2
show_title: false
---

<!-- Das Verzeichnis listet veröffentlichte Demo-Seiten unter ihren tatsächlichen Pfaden. -->
<div class="container" markdown="1">

# ThemeJS2
{: #seitenverzeichnis }

## Themes
{: #themes }

{% assign demo_pages = site.pages | sort: 'path' %}
{% assign themes = 'Dommer|dommer,Müller|mueller,Osman|osman,Unify|unify,Raven|raven,ePraxis|epraxis' | split: ',' %}
{% for theme in themes %}
{% assign fields = theme | split: '|' %}
{% assign folder = 'themes/' | append: fields[1] | append: '/' %}
### {{ fields[0] }}

{% assign theme_pages = demo_pages | sort: 'order' %}
{% for entry in theme_pages %}
{% assign prefix = entry.path | slice: 0, folder.size %}
{% if prefix != folder or entry.published == false %}{% continue %}{% endif %}
{% unless entry.navigation_root %}{% continue %}{% endunless %}
- [{{ entry.path }}]({{ entry.url | relative_url }})
{% endfor %}
{% endfor %}

## Bausteine
{: #bausteine }

{% for entry in demo_pages %}
{% assign prefix = entry.path | slice: 0, 16 %}
{% if prefix != 'pages/bausteine/' or entry.published == false %}{% continue %}{% endif %}
- [{{ entry.path }}]({{ entry.url | relative_url }})
{% endfor %}

## Weitere Seiten

{% for entry in demo_pages %}
{% assign prefix = entry.path | slice: 0, 6 %}
{% if prefix != 'pages/' or entry.path contains 'pages/bausteine/' or entry.published == false %}{% continue %}{% endif %}
- [{{ entry.path }}]({{ entry.url | relative_url }})
{% endfor %}

### Dateien und Statusseiten

{% for entry in demo_pages %}
{% if entry.path contains '/' or entry.path == 'index.md' or entry.published == false %}{% continue %}{% endif %}
- [{{ entry.path }}]({{ entry.url | relative_url }})
{% endfor %}

{% for collection in site.collections %}
{% if collection.docs.size == 0 %}{% continue %}{% endif %}
{% unless collection.output or collection.label == 'posts' %}{% continue %}{% endunless %}
### {{ collection.label | replace: '_', ' ' | capitalize }}

{% assign documents = collection.docs | sort: 'path' %}
{% for entry in documents %}
{% if entry.published == false %}{% continue %}{% endif %}
- [{{ entry.path }}]({{ entry.url | relative_url }})
{% endfor %}
{% endfor %}

### Designvorlagen

{% assign design_templates = site.static_files | where_exp: 'template', "template.path contains '/design-templates/'" | sort: 'path' %}
{% for template in design_templates %}
{% unless template.extname == '.html' %}{% continue %}{% endunless %}
- [{{ template.path | remove_first: '/' }}]({{ template.path | relative_url }})
{% endfor %}

</div>
