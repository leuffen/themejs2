---
description: ""
icon: bi bi-phone
image: ~
lang: de
layout: article
order: 70
permalink: /vcard
pid: service/online-vcard
ptags: 
    - footernav
published: true
skipHead: false
title: VCard
body_class: ~
type: article
_shiller_tags: base
_shiller_target_pid: service/online-vcard
_shiller_template: service/online-vcard
_shiller_instructions: "Ändere nur das bild. Lass die {{ variablen }} genau so stehen."
---

## Testimonial
{: layout="use: #sec-testimonial-ribbon"}

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
{: layout="use: #sec-card-2col"}

---
{: layout="use: #e-form" .mt-5}

[input type="text"  name="Name" required .mb-3]
[input type="email" name="E-Mail" required .mb-3]
[input type="tel" name="Telefon" required .mb-3]
[textarea name="Ihre Nachricht (optional)" .mb-3 style="height: 120px;"]
[input type="checkbox" name="Datenschutz" label="Ich akzeptiere die Datenschutzbestimmungen" required .mb-3]
[input type="submit" value="Absenden" .btn .btn-primary .btn-lg .mt-3]

## Mehr erfahren?
{: layout="use: #cta-base"}

[Zur Website](/)
