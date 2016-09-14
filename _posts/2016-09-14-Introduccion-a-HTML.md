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

Debido al veloz crecimiento de la web, [Tim Berners-Lee](https://es.wikipedia.org/wiki/Tim_Berners-Lee){:target="_blank"} identifico la necesidad de un estándar sobre el cual, la web pueda comunicarse, así nace HTML y partiendo de la primera versión de HTML (HTML 2.0) en cada versión se agrega nuevas normas sobre cuales son las etiquetas validas y cómo es que estas deben estar escritas. HTML5 no es más que un nuevo grupo de etiquetas que facilitan tareas que en HTML(4) eran algo tediosas.

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

## Tablas
Las tablas son un recurso valido para mostrar datos que necesitan ser tabulados u ordenados de algún modo. HTML nos permite trabajar con cabeceras de tablas, pie de tabla, títulos de tabla y la tabla en si.

Una tabla esta generalmente constituida por filas y columnas, que son representadas por etiquetas ```<tr></tr>``` para definir filas y ```<th></th>``` para definir celdas como cabeceras de tabla y ```<td></td>``` para definir una celda dentro de una fila. Ejm:

```html
<table> <!-- Apertura de tabla -->
  <tr> <!-- inicio de fila -->
    <th> <!-- celda -->
      Cabecera 1
    </th>
    <th> <!--celda-->
      Cabecera 2
    </th>
  </tr>
  <tr> <!-- inicio de fila -->
    <td> <!-- celda -->
      Celda 1
    </td>
    <td> <!--celda-->
      Celda 2
    </td>
  </tr>
</table>
```

Podrías repetir mas filas a lo largo de la tabla para representar los datos necesario y obtendríamos lo siguiente:


## Formularios y componentes
El formulario es un elemento que se usa para enviar información al servidor, este se representa por la etiqueta ```<form></form>``` y contiene una serie de componentes que contienen valores. Los atributos de esta etiqueta necesarios para enviar información  son el método y el action. El action es la ruta hacia la que va dirigida el contenido del formulario y el método es la forma en que este lo enviar, los mas comunes son 2, POST y GET: POST para crear o modificar data y GET para obtener data. ```<form action='/contacto.php' method='POST'>``` .

Las etiquetas mas comunes que usaremos dentro de un form son:
  * **label**: Este representa al titulo de un control y hace referencia mediante el atributo ```for```, que apuntara al id del control.
  * **input**: Este es el control mas común y representa a un campo de entrada de valores
  * **select**: Es un control que permite seleccionar dentro de un conjunto de opciones y trabaja con la etiqueta ```<option></option>```
  * **textarea**: Controlador de texto multilinea
  * **button**: Representa un boton

Cada una de estas etiquetas html, a excepción de ```label```, deberá tener un nombre y un valor.

```html
<form action="index.html" method="post">
  <label for="texto">Ingrese texto:</label>

  <input type="text" name="name" id="texto" value="">

  <select name="combo">
    <option value="option1">Opcion 1</option>
    <option value="option2">Opcion 2</option>
  </select>

  <textarea name="textarea" rows="8" cols="40"></textarea>

  <button type="submit" name="button">Enviar</button>
</form>
```

## Solución de problemas: Errores comunes
**Rutas de referencia**: Uno de los errores mas comunes al etiquetar nuestro HTML se da al referenciar recursos que no existen o que se encuentran en una ubicación distinta a la ingresada, es por ello que si algo se comporta extraño y hay involucrado un recurso externo, es mejor comenzar a revisar si el elemento existe y la ruta esta bien definida.

**Duplicidad de ID**: Otro de los errores comunes es usar el mismo valor del atributo ID a diferentes elementos. Si se requiere hacer referencia a 2 elementos similares o iguales, se deberá usar el atributo clase y no el mismo ID

**No cruzar etiquetas**: Las etiquetas no deberán interceptarse, sino contener una a otra. El código siguiente es un error ```<p>hola <a>link</p></a>```, la forma correcta es ```<p>hola <a>link</a></p>```.

**Duplicar elementos BODY o HEAD**: Estos elementos deberían ser únicos en nuestro documento HTML y además deberá seguir con el orden mencionado anteriormente para cumplir los estandares.

**Usar iFrames**: El uso de iframes esta permitido, pero es un error utilizar una URL que no esta preparada para ser usada como iframe, ya que estos generarán una pesima experiencia al usuario, muchas veces es mejor redirigirlos a la web a la que queremos hacer referencia. Ejemplos de web que si están preparadas para ser usadas como frames: Contenidos incrustados de Youtube, Vimeo. Plugins de Timeline de Twitter o Instagram.

## Practicar
Para comprobar que estamos reconociendo las etiquetas correctamente, deberemos ir a las siguientes web e identificar todos los elementos posibles que hemos repasado en este articulo, estos serán consultados la próxima clase a modo de practica ya que es muy importante reconocer los elementos HTML para comenzar a aplicar CSS.

Identificar los elementos de las siguientes webs:

  * El contenido de este articulo
  * [http://www.google.com/](http://www.google.com/){:target="_blank"}
  * [http://galego.com.pe/](http://galego.com.pe/){:target="_blank"}
  * [https://github.com/](https://github.com/){:target="_blank"} Sin login y con Login
  * [https://www.facebook.com](https://www.facebook.com){:target="_blank"} Sin login y con Login
  * [https://www.linio.com.pe/](https://www.linio.com.pe/){:target="_blank"}

Diviértanse mientras ubican las etiquetas y regresen a este documento de referencia para mas información o también  a las web de referencia de la [w3c](http://www.w3schools.com/tags/) donde podrán encontrar ejemplos, nos vemos el sábado!
