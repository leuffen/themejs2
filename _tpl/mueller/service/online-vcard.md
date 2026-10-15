---
description: ""
layout: article
order: 70
ptags: 
    - footernav
published: true
title: VCard
shiller:
  tags: [mueller]
  target: service/online-vcard.md
---

## Testimonial
{: layout="ntl-2col.style-testimonial"}

![](https://cdn.leuffen.de//s-seemann-k135/v2/2/a_gfedcba/seemann-portrait-1x1.webp)


#### {{ site.data.general.name}}

{{ site.data.general.desc}}

[VCard herunterladen](/praxis.vcf){: .btn .btn-primary .btn-lg .w-100 .my-3}

<i class="bi bi-telephone-forward"></i> **Telefon:** <br>[{{site.data.general.phone1_text}}]({{site.data.general.phone1}})


<i class="bi bi-envelope"></i> **E-Mail:**<br>
[{{site.data.general.email}}](mailto:{{site.data.general.email}})


<i class="bi bi-geo-alt"></i> **Anschrift:**<br>
{{site.data.general.street}}<br>
{{site.data.general.zip}} {{site.data.general.city}}









## Nachricht schreiben
{: layout="ntl-2col"}

---
{: layout="tj-form" .mt-5}

#[nte-input.hoverlabel type="text" name="name" label="Name" required]
#[nte-input.hoverlabel type="email" name="email" label="E-Mail" required]
#[nte-input.hoverlabel type="tel" name="telefon" label="Telefon" required]
#[nte-input.hoverlabel type="textarea" name="nachricht" label="Ihre Nachricht (optional)" style="height: 120px;"]
#[nte-input type="checkbox" name="datenschutz" label="Ich akzeptiere die Datenschutzbestimmungen" required]
#[button type="submit" class="btn btn-primary" > Absenden]
## Mehr erfahren?
{: layout="ntl-2col.style-cta"}

[Zur Website](/)
