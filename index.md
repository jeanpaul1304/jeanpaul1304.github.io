---
layout: page
title: Hey!
tagline: Bienvenido a mi blog
---
{% include JB/setup %}

Hola, mi nombre es ~~jeanpaul1304~~ Jean Paul Diaz y soy un egresado de Ingenieria de Sistemas que se dedica al Desarrollo Frontend. Este blog es parte de algunas pruebas que estoy realizando con [Github Pages](http://pages.github.com/) y [Jekyll](https://jekyllrb.com/), mientras aprendo algo de [Markdown](https://es.wikipedia.org/wiki/Markdown).

Ustedes tambien puede generar un blog como este siguiendo esta  [Guia rapida de Jekyll](http://jekyllbootstrap.com/usage/jekyll-quick-start.html) o usando [Jekyll Bootstrap](http://jekyllbootstrap.com).

## Últimas Publicaciones

{% for post in site.posts %}

  <h4>
    <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> -
    <span style="font-size:12px;">{{ post.date | date_to_string }}</span>
  </h4>
{% endfor %}
