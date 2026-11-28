### Sprechstundenzeiten

<liweco-collapse-openhour-table>
{% include components/site/opening-hours.html class="table opening-hours" %}
</liweco-collapse-openhour-table>

Wir bitten um eine Terminvereinbarung.

### Termine

{% assign location_id = page.location_id | default: 'default' %}
{% assign location = site.data.general.standorte[location_id] | default: site.data.general.standorte.default %}
{% if location.phone1 and location.phone1_text %}
Rufen Sie uns unter [{{ location.phone1_text }}](tel:{{ location.phone1 }}) an.
{% endif %}
{% if location.termin_url %}
[Online-Termin vereinbaren]({{ location.termin_url }})
{% endif %}
