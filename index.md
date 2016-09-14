---
layout: page
title: Hey!
tagline: Bienvenido a mi blog
---
{% include JB/setup %}

Este blog fue desarrollado con [Jekyll](http://jekyllbootstrap.com/usage/jekyll-quick-start.html) y [Jekyll Bootstrap](http://jekyllbootstrap.com), ademas corre sobre [github](http://github.com/)


## Publicaciones

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
