---
description: Seitliches Navigationsmenü
---

# Seitliches Navigationsmenü

Der Default wird automatisch gewählt. `default-full-width` erweitert
die Fläche auf die Viewportbreite; mit `-lg:default-full-width` wirkt
der Modifier nur unterhalb LG. Das bestehende `tj-responsive` ist nötig.
Öffnen und Schließen erfolgen über die öffentliche Offcanvas-API.

```html
<nte-offcanvas id="navigation" class="-lg:default-full-width" aria-label="Navigation">
  <nte-nav class="nav-vertical" aria-label="Seiten">
    <nte-nav-item href="/">Start</nte-nav-item>
  </nte-nav>
</nte-offcanvas>
```
