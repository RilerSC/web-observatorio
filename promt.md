Eres un experto desarrollador Full-Stack especializado en la arquitectura de proyectos Next.js/React. Tu tarea es generar la estructura de componentes y páginas para un sitio web informativo, serio, sobrio y moderno, de un **Observatorio de Sostenibilidad**, utilizando el *framework* **Next.js** y la librería **Material UI (MUI)**. Usa **TypeScript** y **Tailwind CSS** para un desarrollo robusto y estilizado.

### Requisitos del Proyecto:

1.  **Tecnologías:** Next.js (App Router), React, TypeScript, Tailwind CSS, Material UI (MUI/Material 3).
2.  **Estética:** Seria, sobria, moderna e institucional (Observatorio de Sostenibilidad).
3.  **Contenido:** Todo el contenido debe ser texto de relleno **Lorem Ipsum** que indique claramente la sección, el propósito y el tipo de información que irá en ese bloque (ejemplo: `<Typography variant="h5"> [LOREM IPSUM] Eje Temático: Biodiversidad </Typography>`).
4.  **Assets (Imágenes/Videos/Logos):**
    * Asume que existe una carpeta `public/img`, `public/video`, y `public/logos` en la raíz del proyecto.
    * **Logos:** Usa el logo blanco (`/logos/logo-blanco.svg`) en el `Header` (ideal para fondos oscuros o barras de navegación con color) y el logo a color (`/logos/logo-color.svg`) en el `Footer`.
    * **Imágenes:** Usa **imágenes genéricas** de la carpeta `img` (ej: `/img/imagen-principal-1.jpg`) donde sea apropiado.
    * **Videos (Homepage):** El slider principal del `Homepage` debe ser un **carrusel de videos** usando los 4 videos de la carpeta `video` (ej: `/video/video-slider-1.mp4`).

### Estructura de Carpetas y Componentes (Modular):

Debes crear la siguiente estructura de carpetas en `src/components/`:

1.  **`src/components/Layout/Header.tsx`**: Componente de **Menú/Navegación** que incluye el **Logo del Observatorio (blanco)** y los enlaces de navegación principales. Debe usar componentes de MUI y ser *responsive*.
2.  **`src/components/Layout/Footer.tsx`**: Componente de **Pie de Página** que incluye el **Logo del Observatorio (color)**, logos institucionales (FUNDEPOS), enlaces legales, redes sociales y el aviso institucional.
3.  **`src/components/UI/VideoSlider.tsx`**: Componente modular reutilizable para el carrusel de videos del inicio.
4.  **`src/components/UI/ContactForm.tsx`**: Componente para el formulario de contacto (Nombre, Correo, Mensaje).

### Estructura de Páginas (`src/app/`):

Crea las siguientes páginas que consumirán los componentes modulares (Header y Footer) para armar su *layout*:

1.  **`src/app/page.tsx` (INICIO / Home):**
    * Debe contener el componente `VideoSlider` principal.
    * Una sección destacada (MUI `Card`s o `Grid`) que represente los **tres temas clave** (Ejes Temáticos, Noticias, Proyectos).
    * Una sección para la frase corta de propósito del Observatorio.

2.  **`src/app/nosotros/page.tsx` (NOSOTROS):**
    * Sección de **Identidad** (Misión, Visión, Valores).
    * Sección de **Equipo Principal** (con `Card`s individuales para cada miembro, con placeholders para foto y bio).
    * Sección de **Alianzas Institucionales** (con placeholders para logos).

3.  **`src/app/ejes-tematicos/page.tsx` (EJES TEMÁTICOS / Líneas de Trabajo):**
    * Una sección principal que liste los Ejes.
    * Para cada Eje Temático, una subsección detallada que muestre: Título del Eje, Descripción, y su ODS asociado (usar iconos de Font Awesome para los ODS de manera *placeholder*).

4.  **`src/app/noticias/page.tsx` (NOTICIAS / Actualidad):**
    * Una vista de **listado de Noticias** (usar `Grid` de MUI con `Card`s para simular el *feed*).

5.  **`src/app/contacto/page.tsx` (CONTACTO):**
    * Información de contacto (Correo, Teléfono, Dirección).
    * Integrar el componente modular `ContactForm.tsx`.

### Instrucciones Finales para el Código:

* Utiliza clases de **Tailwind CSS** para los estilos estructurales y de *layout*.
* Usa los componentes de **MUI** (`Container`, `Typography`, `AppBar`, `Card`, `Grid`, etc.) para el diseño visual.
* Incluye **Font Awesome** como librería de iconos.

**Comienza generando el archivo `src/components/Layout/Header.tsx` y el `src/app/page.tsx` con el componente `VideoSlider` y los *placeholders* de contenido, y continúa con el resto de la estructura.**