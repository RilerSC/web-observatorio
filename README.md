# Observatorio de Sostenibilidad - Web

Sitio web informativo del Observatorio de Sostenibilidad desarrollado con Next.js, TypeScript, Material UI y Tailwind CSS.

## Tecnologías

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Material UI (MUI)**
- **Tailwind CSS**
- **Font Awesome**

## Estructura del Proyecto

```
web_observatorio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página de inicio
│   │   ├── globals.css         # Estilos globales
│   │   ├── theme.ts            # Tema de MUI
│   │   ├── nosotros/           # Página Nosotros
│   │   ├── ejes-tematicos/     # Página Ejes Temáticos
│   │   ├── noticias/           # Página Noticias
│   │   └── contacto/           # Página Contacto
│   └── components/
│       ├── Layout/
│       │   ├── Header.tsx      # Componente Header
│       │   └── Footer.tsx      # Componente Footer
│       └── UI/
│           ├── VideoSlider.tsx # Componente Slider de Videos
│           └── ContactForm.tsx # Componente Formulario de Contacto
├── public/
│   ├── img/                    # Imágenes
│   ├── video/                  # Videos
│   └── logos/                  # Logos
└── package.json
```

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## Características

- Diseño responsive y moderno
- Navegación intuitiva
- Carrusel de videos en la página principal
- Formulario de contacto funcional
- Integración con Material UI
- Estilos con Tailwind CSS





