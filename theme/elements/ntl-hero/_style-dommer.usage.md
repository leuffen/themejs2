---
description: Bild-Hero mit überlagerter Textbox, die auf schmalen Viewports in den Inhaltsfluss übergeht.
---

```markdown
---
{: layout="2;ntl-hero.style-dommer" }

![](/assets/praxis.jpg)
{: slot="bg" }

---
{: layout="2.5;.box" }

# Willkommen in unserer Praxis
{: layout="3" }
```

Das Beispiel setzt `tj-content-pane` und eine registrierte `ntl-hero`-Komponente voraus. Das dekorative Bild belegt den Slot `bg`; die Textbox liegt im Standard-Slot. Der Hintergrund wird zugeschnitten, deshalb sollte das Bild keine wesentlichen Texte enthalten.

Für eine Unterseite kann `layout="2;ntl-hero.style-dommer.dommer-inner"` verwendet werden. `dommer-inner` lässt die Box in der Desktop-Ansicht über die untere Bildkante hinausragen. In den Modi `mobile` und `tablet` nimmt die Box die volle Breite ein. Der Modifier ist keine zweite `style-*`-Klasse.
