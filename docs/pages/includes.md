---
layout: website-default
title: Includes verwenden
---

## 1. Kontakt und Öffnungszeiten
{: layout="ntl-2col" }

{% include components/contact/address.html %}

{% include components/site/opening-hours.html %}

## 2. Footer und Übersetzung
{: layout="ntl-2col" }

{% include helpers/i18n/translate.html key="Kontakt" %}

<ul>
{% include components/navigation/footer.html tag="footer-nav" root="pages/legal" %}
</ul>

## 3. Seite bearbeiten
{: layout="ntl-2col" }

<a href="{% include helpers/urls/pagebuilder.html %}">Im Pagebuilder öffnen</a>
