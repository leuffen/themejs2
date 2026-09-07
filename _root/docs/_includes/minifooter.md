{% assign footer_version = page.url | size | modulo: site.data.defaults.footers.size %}
{% assign selected_footer = site.data.defaults.footers[footer_version] %}


<a class="text-decoration-none" href="{{ selected_footer.logo_href }}" label="{{ selected_footer.logo_label }}">
<img width="67" height="22" src="{{ selected_footer.logo_url }}" style="height: 22px; margin-top:-8px;" alt="{{ selected_footer.logo_alt }}">
</a>
<a class="text-decoration-none" href="{{ selected_footer.text_href }}">{{ selected_footer.text }}</a>

