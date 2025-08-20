---
layout: projects
title: Projects
permalink: /projects/
---

<style>
/* === Uniform project card theme (free Hydejack friendly) === */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 22px;
}
.project-card {
  display: block;
  border-radius: 16px;
  overflow: hidden;
  background: var(--body-bg);
  box-shadow: 0 6px 20px rgba(0,0,0,.08);
  transition: transform .15s ease, box-shadow .15s ease;
  text-decoration: none;
  color: inherit;
  border: 1px solid rgba(0,0,0,.06);
}
.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0,0,0,.12);
}
.project-card__media {
  aspect-ratio: 16 / 9;
  width: 100%;
  object-fit: cover;
  display: block;
}
.project-card__body {
  padding: 14px 16px 16px;
}
.project-card__title {
  margin: 0 0 6px 0;
  font-size: 1.05rem;
  line-height: 1.35;
  font-weight: 700;
}
.project-card__meta {
  font-size: .82rem;
  opacity: .6;
  margin-bottom: 6px;
}
.project-card__summary {
  margin: 0;
  font-size: .95rem;
  line-height: 1.45;
  opacity: .9;
}
</style>

{% assign items = site.projects | sort: "date" | reverse %}

<div class="projects-grid">
  {% for p in items %}
    <a class="project-card" href="{{ p.url | relative_url }}">
      {% if p.thumb %}
        <img class="project-card__media" src="{{ p.thumb | relative_url }}" alt="{{ p.title }}">
      {% endif %}
      <div class="project-card__body">
        <div class="project-card__title">{{ p.title }}</div>
        <div class="project-card__meta">
          {% if p.date %}{{ p.date | date: "%b %Y" }}{% endif %}
        </div>
        {% if p.summary %}
          <p class="project-card__summary">{{ p.summary }}</p>
        {% endif %}
      </div>
    </a>
  {% endfor %}
</div>
