# ACTIVIDAD_INTEGRADORA1_MIKE_QUISHPE
# Portafolio Personal

## Nombre del proyecto
**Portafolio Personal - Mike Quishpe Alban**

## Descripción
Sitio web personal desarrollado como actividad académica para presentar información del estudiante, habilidades, proyectos y un formulario de contacto.
Aplicado con estilo minimalista, con vistas consecutivas, aplicando los requesitos que se propone para esta actividad, un manejo sencillo
con pestañas que facilitan la movilidad dentro de toda la pagina web.

## Tecnologías utilizadas
- HTML5
- CSS3
- Git
- GitHub

## Estructura del proyecto
```text
portafolio-personal/
- index.html
- styles.css
-README.md
- img/
```
## Desarrollo del archivo index.html
```text
El archivo index.html constituye la estructura principal del portafolio. Se utilizaron etiquetas semánticas de HTML5 para organizar correctamente el contenido y facilitar su comprensión tanto para los usuarios como para los navegadores.

1. Encabezado y navegación

Se implementó un elemento header que contiene la navegación principal mediante las etiquetas nav, ul y li.

El menú permite acceder a las diferentes partes del portafolio:

Inicio
Sobre mí
Habilidades
Proyectos
Contacto

Los enlaces utilizan identificadores (id) para desplazarse directamente hacia cada sección de la página.

Por ejemplo:

<a href="#proyectos">Proyectos</a>

permite acceder directamente a:

<section id="proyectos">

Esto facilita la navegación y mejora la experiencia del usuario.

2. Sección principal o Inicio

La sección principal se desarrolló utilizando:

<section id="inicio" class="hero">

En esta sección se presenta la información principal del estudiante.

Se incluyeron:

Nombre del estudiante.
Carrera.
Descripción profesional.
Botón para acceder a los proyectos.
imagen representativa.

La información se dividió en diferentes contenedores para poder organizar el texto y la imagen mediante CSS.

También se utilizó una clase eyebrow para mostrar una pequeña etiqueta descriptiva en la parte superior de la sección.

3. Sección Sobre mí

Se implementó una sección independiente mediante:

<section id="sobre-mi" class="section">

La finalidad de esta sección es permitir que el visitante conozca mejor al propietario del portafolio y tenga una referencia sobre su formación e intereses dentro del área tecnológica.

4. Sección de habilidades

La sección de habilidades utiliza elementos article para representar cada competencia individual.

Entre las habilidades presentadas se encuentran:

HTML.
CSS.
Git y GitHub.
SQL y bases de datos.
Python.
Linux.

5. Sección de proyectos

La sección de proyectos permite presentar diferentes trabajos académicos realizados durante la formación.

Cada proyecto está representado mediante un elemento:

<article class="project-card">

Cada tarjeta contiene:

Nombre del proyecto.
Categoría.
Descripción.
Tecnologías utilizadas.
Imagen.

6. Sección de contacto

Se desarrolló un formulario visual utilizando la etiqueta:

<form>

El formulario contiene los campos solicitados en la actividad:

Nombre.
Correo electrónico.
Mensaje.
Botón de envío.

El formulario tiene una finalidad principalmente visual y académica, por lo que no requiere conexión con un servidor para procesar los mensajes.

7. Pie de página

Finalmente se implementó un elemento:

<footer>

donde se presenta:

Nombre del estudiante.
Año.
Enlace hacia GitHub.

El pie de página permite cerrar visualmente el sitio y proporciona información adicional sobre el propietario del portafolio.

Variables CSS

Se utilizaron variables dentro de :root para centralizar los principales valores del diseño.

Ejemplo:

:root {
    --primary: #b7ff2a;
    --background: #0b0e0f;
    --surface: #15191c;
    --text: #ffffff;
    --muted: #94a3b8;
}

El proyecto cumple con los principales requisitos solicitados en la actividad:

Etiquetas semánticas header, nav, main, section, article y footer.
Archivo principal index.html.
Archivo CSS externo styles.css.
Carpeta img para imágenes.
Variables CSS mediante :root.
Uso de display: flex.
Uso de pseudoclase :hover.
Uso de :focus en el formulario.
Diseño responsive.
Formulario de contacto.
Navegación interna mediante enlaces.
Código organizado e indentado.
Separación entre estructura HTML y presentación CSS.
Control de versiones con Git

```
## Requisitos implementados
- Etiquetas semánticas: `header`, `nav`, `main`, `section`, `article` y `footer`.
- Archivo principal `index.html`.
- Hoja de estilos externa `styles.css`.
- Carpeta `img/`.
- Variables CSS mediante `:root`.
- `display: flex`.
- Efectos `:hover`.
- Diseño responsive.
- Formulario visual de contacto.
- Secciones de inicio, sobre mí, habilidades, proyectos y contacto.

## Instrucciones para visualizar
1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto.
3. Abrir `index.html` en un navegador web.

También puede buscar nuevos estilos en algunos repositorios de Github, para que tenga un aspecto llamativo para que el usuario siga
navegando por la pagina web.


## Autor
**Mike Quishpe Alban**

Año: 2026
