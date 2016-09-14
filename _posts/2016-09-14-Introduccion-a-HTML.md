---
layout: post
category : lessons
tagline: "Taller de programación Frontend Básico"
tags : [html, beginner, frontend, tutorial]
---
{% include JB/setup %}

## ¿Qué es HTML?

HyperText Markup Language (lenguaje de marcas de hipertexto). Es un lenguaje de marcado, que se usa para definir diversos componentes de la web. Estos generalmente no tiene estilos y se muestran de diferentes maneras en diferentes versiones de navegador. Pero para nuestros fines prácticos, estos solo se usaran para definir cada ítem de nuestra web.

### Terminos y definiciones

```html
<h1 class="hm" id="hm">Hola mundo!</h1>

<!-- Etiqueta: h1 -->
<!-- Atributos: class, id -->
```

**Etiquetas:** Son fragmentos de texto rodeados por corchetes angular o símbolos de mayor/menor (<>) que definen el inicio o el final de de un elemento HTML

**Atributos:** Son valores adicionales que configuran los elementos HTML acuerdo a las necesidades del cliente. Tienen funcionalidades limitadas y funcionan distinto en diferentes navegadores.

## HTML y HTML5

Debido al veloz crecimiento de la web, [Tim Berners-Lee](https://es.wikipedia.org/wiki/Tim_Berners-Lee) identifico la necesidad de un estándar sobre el cual, la web pueda comunicarse, así nace HTML y partiendo de la primera versión de HTML (HTML 2.0) en cada versión se agrega nuevas normas sobre cuales son las etiquetas validas y cómo es que estas deben estar escritas. HTML5 no es más que un nuevo grupo de etiquetas que facilitan tareas que en HTML(4) eran algo tediosas.

## Etiquetas básicas y estructura de un documento

La estructura de nuestro documento HTML inicial debe ser el siguiente:

```html
<!DOCTYPE html> <!--Declaración de HTML5-->
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <!-- contenido -->
  </body>
</html>
```

 El elemento raíz ```<!doctype html>``` le comunica a nuestro navegador que estamos usando HTML5.

La etiqueta ```<html></html>``` es la que engloba todo el contenido de nuestra pagina, todas las demás etiquetas deberán estar dentro de esta.

#### HEAD y Metadata
La etiqueta ```<head></head>``` representa a una colección de metadatos acerca de nuestro documento, incluyendo definición de titulo, enlaces de scripts, autores, escrituras de estilos y cualquier otro metadato.

**Metadato:** Datos que describen a otros datos.

```html
<head>
  <meta charset="utf-8"> <!-- Definición de caracteres de documento -->
  <link href="/css/master.css" media="screen"> <!--Enlace de externo-->
  <script src="" charset="utf-8"></script> <!--script externo-->
  <title>Jean Diaz</title> <!--Titulo de pagina-->
  <style></style> <!--Estilos en documento-->
  <meta name="keywords" content="webpage"> <!--Keywords-->
</head>
```
#### BODY
La etiqueta ```<body></body>``` representa al contenido principal del documento HTML. Deberá existir solo un elemento ```<body></body>``` en un documento. Dentro de este, se incluirá la parte visible de la web.

```html
<body>
  <h1>Hola mundo!</h1>
</body>
```
## Secciones
Las etiquetas de secciones sirven para enmarcar partes de nuestra web que suelen ser bloques. *Recordatorio: En clase comentamos que algunas de estas no existían en la anterior versión de html ya que eran representadas con un div con la clase header y footer por ejemplo ```<div class="header"></div>``` y que algunos de estos fueron reemplazados por lo que representaban para hacer mas semántica la web ```<header></header>```*

```html
<section></section> <!--Define una sección-->

<header></header> <!--Define la cabecera de una pagina. Contiene generalmente el titulo, logotipo y navegación-->

<nav></nav> <!--Define una sección con links de navegación-->

<article></article> <!-- Define un articulo, que podría ser migrado individualmente. Una publicación de un blog por ejemplo-->

<aside></aside><!--Define secciones generalmente laterales de la web-->

<footer></footer><!--El pie de pagina-->

<h1></h1> <!--Titulos y subtitulos-->
<h2></h2> <!--Titulos y subtitulos-->
<h3></h3> <!--Titulos y subtitulos-->
<h4></h4> <!--Titulos y subtitulos-->
<h5></h5> <!--Titulos y subtitulos-->
<h6></h6> <!--Titulos y subtitulos-->

<div></div> <!--Representa un contenedor genérico-->
```

## Agrupadores de contenido
Los agrupadores de contenido consideran elementos como los listados sin orden y ordenados, párrafos, separadores de linea y citas

```html
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc...</p> <!--Parrafo-->

<hr> <!--Quiebre de linea-->

<ul>
  <li>Elemento 1</li> <!--Elemento de lista-->
  <li>Elemento 2</li> <!--Elemento de lista-->
  <li>Elemento 3</li> <!--Elemento de lista-->
</ul>

<!--Lista sin orden -->

<ol>
  <li>Elemento 1</li> <!--Elemento de lista-->
  <li>Elemento 2</li> <!--Elemento de lista-->
  <li>Elemento 3</li> <!--Elemento de lista-->
</ol>

<!--Lista ordenada-->

<blockquote>
  "Free like a bird" - Nelson Mandela
</blockquote>

<!--Cita-->
```

## Texto
HTML nos permite manejar texto como lo haría un editor de texto cualquiera como por ejemplo *Microsoft Word*, con las facilidades para usar negrita (```<b></b>``` o ```<strong></strong>```), saltos de linea con la etiqueta ```<br>```  e hipervinculos ```<a></a>```.

```html
<a href="http://www.google.com">Google</a><!--Link a google-->

<strong>Texto en negrita</strong>

<code>
  <h1>Hola mundo</h1>
</code>

<!--Representa codigo como texto, no es interpretado-->

<span>Texto</span> <!--Texto sin significado relevante o especifico-->

<br> <!--Salto de linea-->
```

## Imagenes, multimedia y contenido incrustado
El manejo de contenido multimedia ha sido un problema en versiones anteriores de HTML, teniendo que requerir muchas veces a plugins exteriores como Flash y Java. Actualmente **html5** nos ha dado una facilidad de manejo de elementos como video, sonidos, elementos embebidos, canvas y svgs. Pero, no todo es color de rosa, ya que si bien es cierto se ha generado un gran avance al dejar de depender de plugins, aun debemos lidiar con las diversas especificaciones de los navegadores a la hora de implementar elementos como video y audio, ya que cada navegador utiliza un formato de archivo distinto.

```html
<img src="http://rutadeimage.com/imagen.jpg" alt="Texto en caso no cargue la imagen" />

<iframe src="http://ruta-de-iframe.com/" width="200" height="300">
  Texto en caso iframe no cargue.
  Recordar solo usar iframe, si las rutas a las que referencia están preparadas para usarse como iframe, de lo contrario evitar ya que generará una mala experiencia de usuario.
</iframe>

<video src="archivo-de-video.ogg" autoplay controls poster="posterimage.jpg">
  Aqui deberá ir el contenido en caso el video no cargue
</video>

<audio src="ruta-audio.mp3"></audio>
```
