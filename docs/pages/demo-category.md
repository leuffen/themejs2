---
layout: 3_3_main
---

Auf dieser Kategorieseite können Content Authoren schreiben, was sie wollen.

Hier außerdem eine Demo von nützlichen `includes`.

Diese includes sehen für einen bis ca. 7 Posts gut aus, ohne das weitere Einstellungen vorgenommen werden müssen

Durch den folgendend include werden die neuesten 3 Posts aus der Kategorie "Datenschutz" angezeigt.

{% include epraxis/posts-by-category.html category="datenschutz" limit=3 %}

Es gibt auch die Möglichkeit, Posts via ihres Namens frei hintereinanderzureihen:

{% include epraxis/posts-by-name.html posts="datenloeschung-praxis,ablauf-optimierung,videosprechstunde-implementierung,patientenportal-optimierung" %}
