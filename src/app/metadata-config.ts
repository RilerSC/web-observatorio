/**
 * CONFIGURACIÓN DE METADATOS POR PÁGINA
 * 
 * Este archivo contiene los metadatos recomendados para cada página.
 * NOTA: Para implementar estos metadatos, las páginas deben ser refactorizadas
 * a Server Components (Tarea I2 de la auditoría).
 * 
 * Mientras las páginas sean 'use client', estos metadatos no pueden ser aplicados
 * directamente. Una vez refactorizadas, cada página podrá exportar:
 * export const metadata: Metadata = { ... }
 */

import type { Metadata } from 'next';

// Metadatos para /nosotros
export const nosotrosMetadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce al equipo del Observatorio de Sostenibilidad: misión, visión, valores y alianzas estratégicas para el desarrollo sostenible en Costa Rica.',
  keywords: [
    'equipo',
    'misión',
    'visión',
    'valores',
    'alianzas',
    'FUNDEPOS',
    'sostenibilidad',
    'Costa Rica',
  ],
  openGraph: {
    title: 'Sobre Nosotros | Observatorio de Sostenibilidad',
    description: 'Equipo, misión y alianzas del Observatorio de Sostenibilidad de Costa Rica',
    url: 'https://observatorio.fundepos.ac.cr/nosotros',
    images: [
      {
        url: '/og-nosotros.jpg',
        width: 1200,
        height: 630,
        alt: 'Equipo del Observatorio de Sostenibilidad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Nosotros | Observatorio de Sostenibilidad',
    description: 'Equipo, misión y alianzas del Observatorio de Sostenibilidad',
    images: ['/twitter-nosotros.jpg'],
  },
  alternates: {
    canonical: 'https://observatorio.fundepos.ac.cr/nosotros',
  },
};

// Metadatos para /ejes-tematicos
export const ejesTematicosMetadata: Metadata = {
  title: 'Ejes Temáticos',
  description: 'Explora los 7 ejes temáticos del Observatorio: modelos de negocio sostenibles, bioeconomía, economía circular, ciudades sostenibles, industrias transformadoras y más.',
  keywords: [
    'ejes temáticos',
    'modelos de negocio',
    'bioeconomía',
    'economía circular',
    'ciudades sostenibles',
    'ESG',
    'industrias',
    'innovación',
  ],
  openGraph: {
    title: 'Ejes Temáticos | Observatorio de Sostenibilidad',
    description: '7 ejes temáticos para el análisis y promoción de la sostenibilidad en Costa Rica',
    url: 'https://observatorio.fundepos.ac.cr/ejes-tematicos',
    images: [
      {
        url: '/og-ejes.jpg',
        width: 1200,
        height: 630,
        alt: 'Ejes Temáticos del Observatorio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ejes Temáticos | Observatorio de Sostenibilidad',
    description: '7 ejes temáticos para la sostenibilidad en Costa Rica',
    images: ['/twitter-ejes.jpg'],
  },
  alternates: {
    canonical: 'https://observatorio.fundepos.ac.cr/ejes-tematicos',
  },
};

// Metadatos para /noticias
export const noticiasMetadata: Metadata = {
  title: 'Noticias',
  description: 'Últimas noticias sobre sostenibilidad, bioeconomía, economía circular y desarrollo sostenible en Costa Rica y la región.',
  keywords: [
    'noticias',
    'actualidad',
    'sostenibilidad',
    'bioeconomía',
    'economía circular',
    'Costa Rica',
    'desarrollo sostenible',
  ],
  openGraph: {
    title: 'Noticias | Observatorio de Sostenibilidad',
    description: 'Últimas noticias sobre sostenibilidad en Costa Rica y la región',
    url: 'https://observatorio.fundepos.ac.cr/noticias',
    images: [
      {
        url: '/og-noticias.jpg',
        width: 1200,
        height: 630,
        alt: 'Noticias del Observatorio de Sostenibilidad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noticias | Observatorio de Sostenibilidad',
    description: 'Últimas noticias sobre sostenibilidad en Costa Rica',
    images: ['/twitter-noticias.jpg'],
  },
  alternates: {
    canonical: 'https://observatorio.fundepos.ac.cr/noticias',
  },
};

// Metadatos para /contacto
export const contactoMetadata: Metadata = {
  title: 'Contacto',
  description: 'Contáctanos para más información sobre el Observatorio de Sostenibilidad. Estamos ubicados en San José, Costa Rica.',
  keywords: [
    'contacto',
    'información',
    'consultas',
    'FUNDEPOS',
    'San José',
    'Costa Rica',
  ],
  openGraph: {
    title: 'Contacto | Observatorio de Sostenibilidad',
    description: 'Contáctanos para más información sobre sostenibilidad en Costa Rica',
    url: 'https://observatorio.fundepos.ac.cr/contacto',
    images: [
      {
        url: '/og-contacto.jpg',
        width: 1200,
        height: 630,
        alt: 'Contacto - Observatorio de Sostenibilidad',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Contacto | Observatorio de Sostenibilidad',
    description: 'Contáctanos para más información',
  },
  alternates: {
    canonical: 'https://observatorio.fundepos.ac.cr/contacto',
  },
};

// Metadatos para página principal (ya aplicados en layout.tsx)
export const homeMetadata: Metadata = {
  title: 'Observatorio de Sostenibilidad | FUNDEPOS Costa Rica',
  description: 'Monitoreo, análisis y promoción del impacto sostenible de organizaciones en Costa Rica mediante ciencia de datos e inteligencia artificial.',
  openGraph: {
    title: 'Observatorio de Sostenibilidad | FUNDEPOS Costa Rica',
    description: 'Investigación y análisis sobre sostenibilidad en Costa Rica',
    url: 'https://observatorio.fundepos.ac.cr',
  },
  alternates: {
    canonical: 'https://observatorio.fundepos.ac.cr',
  },
};
