---
layout: blog
title: Projects
permalink: /projects/
show_collection: projects
featured:        false 

---
<!-- 
{% assign items = site.projects | sort: "date" | reverse %}
<div class="grid grid--p">
  {% for p in items %}
    <a class="card" href="{{ p.url | relative_url }}" style="display:block;margin-bottom:1.25rem;">
      {% if p.screenshot and p.screenshot.src %}
        <img src="{{ p.screenshot.src | relative_url }}" alt="{{ p.title }}" style="width:100%;height:auto;border-radius:12px;">
      {% endif %}
      <h3 style="margin:0.6rem 0 0.25rem;">{{ p.title }}</h3>
      {% if p.description %}<p style="margin:0;color:var(--body-fg);opacity:.8;">{{ p.description }}</p>{% endif %}
    </a>
  {% endfor %}
</div> -->
