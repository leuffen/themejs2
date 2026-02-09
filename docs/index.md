---
_schiller_instructions: ~
_schiller_template: pages/hausarzt-index-singleleistung
availLangs:
- de
body_class: ~
description: "\U0001F469‍⚕️ Besuchen Sie die HNO Privatpraxis Dr. Myriam Genné in
  Senftenberg. Wir bieten individuelle medizinische Versorgung, klassische HNO-Leistungen
  und Naturheilverfahren. \U0001F33F"
image: https://images.unsplash.com/photo-1612349317150-e413f6a5b16d
keywords: ~
layout: website
order: 0
permalink: /
ptags:
- nav
published: true
seoScore: 8
company: epraxis.digital
short_title: DAS MAGAZIN FÜR DIE DIGITALISIERUNG IN DER GESUNDHEITSBRANCHE
title: Digitale Transformation im Gesundheitswesen - verständlich, unabhängig, praxisnah.
headline_image: /assets/header-bg.svg
type: website

articles_related:
  - MAIN
  - TEST1
  - TEST2
---


## Übersicht über das Theme
{: layout=".container"}

- [Startseite](/pages/startseite.html){: .btn .btn-primary .text-center .m-1}
- [Demo Post](/2024/01/02/blogdemo-no-elements.html){: .btn .btn-primary .text-center .m-1}

### Sitemap

{% include el/sitemap-table.html dir="/" %}


Hier außerdem eine Demo von nützlichen `includes`.

Diese includes sehen für einen bis ca. 7 Posts gut aus, ohne das weitere Einstellungen vorgenommen werden müssen

Durch den folgendend include werden die neuesten 3 Posts aus der Kategorie "Datenschutz" angezeigt.

{% include el/post-previews-per-category.html category="datenschutz" limit=3 %}

Es gibt auch die Möglichkeit, Posts via ihres Namens frei hintereinanderzureihen:

{% include el/post-previews-by-name.html posts="datenloeschung-praxis,ablauf-optimierung,videosprechstunde-implementierung,patientenportal-optimierung" %}
