---
description: Aktuelle Meldungen als seitenbreites Banner.
---


# Meldungsbanner

Die vorhandene Announcement-Library liest `window.openhours`, das der
Website-Head aus `site.data.openhours` bereitstellt. `style-banner` wählt
die Darstellung. Die von der Library gesetzte Klasse `no-announcements`
blendet das Banner aus, wenn für seinen Typfilter keine Meldung aktiv ist.

```markdown
#[leuffen-announcements.style-banner > Momentan keine Meldungen.]
```

Im Website-Frame kann derselbe Baustein direkt vor der Navbar stehen:

```html
<leuffen-announcements class="style-banner">Momentan keine Meldungen.</leuffen-announcements>
```
