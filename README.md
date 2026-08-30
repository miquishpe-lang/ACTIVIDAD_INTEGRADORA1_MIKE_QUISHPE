# ACTIVIDAD_INTEGRADORA1_MIKE_QUISHPE
# Portafolio Personal

## Nombre del proyecto
**Portafolio Personal - Mike Quishpe Alban**

## ACTUALIZACION

El proyecto se desarrolla sobre el repositorio de la Actividad Integradora 1 y mantiene una evolución mediante commits descriptivos.

Actualización del portafolio personal desarrollado en la Actividad Integradora 1. En esta segunda actividad se mantiene la estructura base de HTML y CSS y se incorpora **JavaScript** para transformar el sitio en una experiencia más dinámica, interactiva y funcional.

El proyecto presenta información del estudiante, habilidades, proyectos académicos y un formulario de contacto, junto con funcionalidades realizadas mediante manipulación del DOM y eventos de JavaScript.

## Nuevas funcionalidades implementadas con JavaScript

### 1. Archivo JavaScript externo
- Se creó el archivo `script.js`.
- Se enlazó desde `index.html` mediante `script src="script.js" defer`.
- No se utilizó JavaScript directamente dentro del HTML.

### 2. Eventos con `addEventListener()`
Se implementaron varios eventos:
- `click` para cambiar entre modo oscuro y modo claro.
- `click` para abrir y cerrar el menú responsive.
- `click` para mostrar información adicional.
- `mouseover` para mostrar dinámicamente la habilidad seleccionada.
- `submit` para validar el formulario.
- `input` para reaccionar mientras el usuario escribe.
- `scroll` para mostrar el botón "Volver al inicio".

### 3. Manipulación del DOM
JavaScript modifica dinámicamente:
- La fecha actual y el año del pie de página.
- El saludo según la hora del día.
- El texto de interacción del portafolio.
- La visibilidad de información adicional de la sección "Sobre mí".
- El texto de detalles de los proyectos.
- Las clases CSS utilizadas para el modo claro/oscuro y validación de campos.
- La visibilidad del botón "Volver al inicio".

### 4. Funciones y estructuras de control
El archivo `script.js` utiliza variables, funciones y estructuras condicionales:
- `actualizarFecha()`
- `mostrarSaludo()`
- `cambiarTema()`
- `validarFormulario()`
- Condicionales `if`, `else if` y `else` para validar datos y determinar el saludo.

### 5. Validación del formulario
Antes de mostrar la confirmación se verifica mediante JavaScript que:
- El nombre no esté vacío.
- El correo no esté vacío y tenga un formato básico válido.
- El mensaje no esté vacío.

Los campos con errores se identifican visualmente y se muestran mensajes específicos. Cuando todos los datos son correctos, aparece un mensaje de confirmación personalizado.

### 6. Funcionalidades adicionales
Se incorporaron:
- **Modo oscuro / modo claro**, guardando la preferencia del usuario con `localStorage`.
- **Menú responsive** para facilitar la navegación desde dispositivos pequeños.
- **Botón "Volver al inicio"** que aparece después de desplazarse por la página.
- **Detalles interactivos de proyectos**.
- **Fecha y saludo dinámicos**.

### Commits de la Actividad Integradora 2

1. `feat: integrar archivo JavaScript externo`
2. `feat: implementar eventos interactivos`
3. `feat: agregar manipulacion del DOM`
4. `feat: validar formulario de contacto`
5. `feat: agregar modo claro y mejoras finales`

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
