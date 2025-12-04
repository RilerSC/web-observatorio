 Eres un desarrollador Full-Stack experto. Tu tarea actual es **poblar la sección de Equipo Principal** de la página `src/app/nosotros/page.tsx` con la información biográfica real proporcionada. Debes adherirte estrictamente a todas las guías de estilo previamente definidas:
* **Tipografía:** Exclusivamente **Montserrat**.
* **Colores:** Usar la paleta de colores HEX oficial (Cian `#00bed6`, Verde `#6abf4b`, Negro Puro `#2d2d2d`, etc.).
* **Componentes:** Utilizar componentes modulares de **MUI** (`Card`, `Grid`, `Typography`, etc.).

### 1. Paso Inicial: Creación del Componente Modular de Tarjeta de Miembro

Antes de poblar la página, crea el componente reutilizable para la tarjeta de cada miembro en la ruta: `src/components/Team/TeamMemberCard.tsx`.

| Elemento | Componente y Estilo | Uso de Marca |
| :--- | :--- | :--- |
| **Contenedor** | `Card` de MUI, diseño limpio y moderno. | Aplicar el color **Gris Oscuro** (`#414042`) para bordes o sombras sutiles. |
| **Foto** | `Image` de Next.js, con `layout="responsive"` o dimensiones fijas. | Ruta: `/team/[nombre-archivo-asumido].jpg`. |
| **Nombre** | `Typography` (h5 o h6, **Bold**). | **Montserrat.** Color de texto: **Negro Puro** (`#2d2d2d`). |
| **Cargo/Título** | `Typography` (subtitle1 o body1). | **Montserrat.** Color de acento: **Cian** (`#00bed6`). |
| **Bio Resumida** | `Typography` (body2). | **Montserrat.** Color de texto: **Gris Oscuro** (`#414042`). Limitar a 3-4 líneas. |

### 2. Población de Contenido Real en `src/app/nosotros/page.tsx`

Identifica la sección de equipo en `src/app/nosotros/page.tsx` y utiliza el componente `TeamMemberCard.tsx` dentro de un contenedor `Grid` de MUI para crear una disposición de 2 o 3 tarjetas por fila en escritorio.

#### Detalle de Contenido para cada Miembro:

| Miembro | Nombre Completo | Título/Cargo Principal (Cian) | Bio Resumida (Gris Oscuro) | Ruta de Foto (Asumida) |
| :--- | :--- | :--- | :--- | :--- |
| **Jorge Campos** | Jorge Arturo Campos Montero | [cite_start]Director del Observatorio de la Sostenibilidad de FUNDEPOS y Catedrático por la Universidad de Costa Rica[cite: 12, 6]. | [cite_start]Reconocido por su extensa trayectoria dedicada a la sostenibilidad, la gestión ambiental y el desarrollo sostenible[cite: 6]. [cite_start]Ha dirigido iniciativas en el ámbito académico y profesional durante más de cuarenta años[cite: 7]. | `/team/jorge-campos.jpg` |
| **Lourdes Gómez** | Lourdes Gómez | [cite_start]Máster en Sostenibilidad e Innovación [cite: 1][cite_start], cofundadora de Sistema B Centroamérica y Caribe [cite: 3][cite_start], y especialista internacional en investigación de sostenibilidad[cite: 3]. | [cite_start]Con una amplia carrera en mercadeo estratégico, comunicación corporativa y sostenibilidad[cite: 1]. [cite_start]Se enfoca en movilizar profesionales y equipos mediante pensamiento sistémico y comunicación efectiva[cite: 3]. | `/team/lourdes-gomez.jpg` |
| **Francisco Arias** | Francisco Javier Arias Vargas | [cite_start]Doctor en Administración y Dirección de Empresas [cite: 17] [cite_start]y experto en Cooperación Académica Internacional, Gestión, Mercados e Internacionalización de Empresas[cite: 19]. | [cite_start]Ha publicado trabajos en revistas especializadas donde analiza diferentes sectores estratégicos ligados al desarrollo económico regional[cite: 18]. [cite_start]Es miembro del Consejo Directivo de UNEV en Honduras y Presidente de la Red Internacional de Investigación en Gestión del Conocimiento Empresarial (RED GCE)[cite: 20]. | `/team/francisco-arias.jpg` |
| **Pablo Gámez** | [cite_start]Pablo Gámez Cersósimo [cite: 21] | Periodista de investigación, consultor y coach. [cite_start]Su área de especialización abarca la polución y sostenibilidad digital, ética y bienestar digital[cite: 22, 23]. | [cite_start]Trabaja en Europa y América Latina a través de Naturallydigital.org[cite: 23]. [cite_start]Durante más de quince años, fue editor en jefe para los informativos de Radio Nederland Internacional[cite: 23]. | `/team/pablo-gamez.jpg` |

### 3. Instrucciones Finales

* Asegura que los títulos de la sección (ej. "Nuestro Equipo Principal") utilicen uno de los **Colores Destacados** (ej. Azul Brillante `#07a7ff`) y la fuente Montserrat.
* Una vez que el contenido del equipo esté completo, rellena las secciones restantes de **Nosotros** (Misión, Visión, Valores, Alianzas) con texto **Lorem Ipsum** que indique claramente la sección.
* **IMPORTANTE:** Todos los textos extraídos deben llevar la fuente **Montserrat**.