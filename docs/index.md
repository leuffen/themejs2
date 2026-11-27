---
layout: website
title: ThemeJS2
---

# ThemeJS2

## Seitenverzeichnis
{: #seitenverzeichnis }

{% assign demo_pages = site.pages | sort: 'path' %}
{% assign sections = 'Startseiten|pages/beispiele/startseiten/,Leistungsseiten|pages/beispiele/leistungen/,Kontaktseiten|pages/beispiele/kontakt/,Bausteine|pages/bausteine/,Weitere Seiten|pages/' | split: ',' %}
{% for section in sections %}
{% assign fields = section | split: '|' %}
{% assign folder = fields[1] %}
### {{ fields[0] }}

{% for entry in demo_pages %}
{% assign prefix = entry.path | slice: 0, folder.size %}
{% if prefix != folder or entry.published == false %}{% continue %}{% endif %}
{% if folder == 'pages/' %}
{% if entry.path contains 'pages/beispiele/' or entry.path contains 'pages/bausteine/' %}{% continue %}{% endif %}
{% endif %}
- [{{ entry.title | default: entry.name }}]({{ entry.url | relative_url }}) · `{{ entry.path }}`
{% endfor %}
{% endfor %}

### Dateien und Statusseiten

{% for entry in demo_pages %}
{% if entry.path contains '/' or entry.path == 'index.md' or entry.published == false %}{% continue %}{% endif %}
- [{{ entry.title | default: entry.name }}]({{ entry.url | relative_url }}) · `{{ entry.path }}`
{% endfor %}

{% for collection in site.collections %}
{% if collection.docs.size == 0 %}{% continue %}{% endif %}
{% unless collection.output or collection.label == 'posts' %}{% continue %}{% endunless %}
### {{ collection.label | replace: '_', ' ' | capitalize }}

{% assign documents = collection.docs | sort: 'path' %}
{% for entry in documents %}
{% if entry.published == false %}{% continue %}{% endif %}
- [{{ entry.title | default: entry.name }}]({{ entry.url | relative_url }}) · `{{ entry.path }}`
{% endfor %}
{% endfor %}

### Designvorlagen

{% assign design_templates = site.static_files | where_exp: 'template', "template.path contains '/design-templates/'" | sort: 'path' %}
{% for template in design_templates %}
{% unless template.extname == '.html' %}{% continue %}{% endunless %}
- [{{ template.name }}]({{ template.path | relative_url }}) · `{{ template.path | remove_first: '/' }}`
{% endfor %}
