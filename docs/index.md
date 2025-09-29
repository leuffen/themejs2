---
_schiller_instructions: ~
_schiller_template: pages/hausarzt-index-singleleistung
availLangs:
- de
body_class: ~
description: "\U0001F469‍⚕️ Besuchen Sie die HNO Privatpraxis Dr. Myriam Genné in
  Senftenberg. Wir bieten individuelle medizinische Versorgung, klassische HNO-Leistungen
  und Naturheilverfahren. \U0001F33F"
image: ""
keywords: ~
layout: page/homepage
order: 0
permalink: /
ptags:
- nav
published: true
seoScore: 8
short_title: Home
title: ~
type: website
---


## Übersicht über das Theme


- [Startseite](/homepage.html){: .btn .btn-primary .text-center .m-1}
- [Demo Post](/2024/01/02/blogdemo-no-elements.html){: .btn .btn-primary .text-center .m-1}

### Sitemap

{% include el/sitemap-table.html %}


Hier außerdem eine Demo von nützlichen `includes`.

Diese includes sehen für einen bis ca. 7 Posts gut aus, ohne das weitere Einstellungen vorgenommen werden müssen

Durch den folgendend include werden die neuesten 3 Posts aus der Kategorie "Datenschutz" angezeigt.

{% include el/post-previews-per-category.html category="datenschutz" limit=3 %}

Es gibt auch die Möglichkeit, Posts via ihres Namens frei hintereinanderzureihen:

{% include el/post-previews-by-name.html posts="datenloeschung-praxis,ablauf-optimierung,videosprechstunde-implementierung,patientenportal-optimierung" %}
