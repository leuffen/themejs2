---
layout: website
title: ThemeJS2
permalink: /
order: 0
---

# ThemeJS2

## Vollständige Seiten

- [Startseiten]({{ '/pages/beispiele/startseiten/' | relative_url }})
- [Leistungsseiten]({{ '/pages/beispiele/leistungen/' | relative_url }})
- [Kontaktseiten]({{ '/pages/beispiele/kontakt/' | relative_url }})

## Bausteine

- [Hero]({{ '/pages/bausteine/hero/' | relative_url }})
- [Karten]({{ '/pages/bausteine/karten/' | relative_url }})
- [Zweispalter]({{ '/pages/bausteine/zweispalter/' | relative_url }})
- [Kontakt]({{ '/pages/bausteine/kontakt/' | relative_url }})
- [Navbar und Footer]({{ '/pages/bausteine/rahmen/' | relative_url }})

## Design-Templates
{: layout="ntl-2col.style-cta" data-kicker="Direkte Vorlagen" }

<!-- Die Dateiliste verlinkt alle statischen Design-Templates direkt und wächst mit dem Verzeichnisinhalt. -->
{% assign design_templates = site.static_files | where_exp: "template", "template.path contains '/design-templates/'" | sort: "path" %}
{% for template in design_templates %}
- [{{ template.name }}]({{ template.path | relative_url }})
{% endfor %}
