import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Providers from '@/components/Providers';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  preload: true,
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://observatorio.fundepos.ac.cr'),
  title: {
    default: 'Observatorio de Sostenibilidad | FUNDEPOS Costa Rica',
    template: '%s | Observatorio de Sostenibilidad',
  },
  description: 'Monitoreo, análisis y promoción del impacto sostenible de organizaciones en Costa Rica. Investigación basada en ciencia de datos e inteligencia artificial para la sostenibilidad.',
  keywords: [
    'sostenibilidad',
    'Costa Rica',
    'ODS',
    'Objetivos de Desarrollo Sostenible',
    'desarrollo sostenible',
    'bioeconomía',
    'economía circular',
    'impacto social',
    'ESG',
    'FUNDEPOS',
    'observatorio',
    'medio ambiente',
    'gobernanza',
    'responsabilidad social',
  ],
  authors: [{ name: 'Universidad FUNDEPOS' }],
  creator: 'Universidad FUNDEPOS',
  publisher: 'Universidad FUNDEPOS',
  
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: 'https://observatorio.fundepos.ac.cr',
    siteName: 'Observatorio de Sostenibilidad',
    title: 'Observatorio de Sostenibilidad | FUNDEPOS Costa Rica',
    description: 'Monitoreo y análisis del impacto sostenible de organizaciones en Costa Rica y la región mediante ciencia de datos e IA.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Observatorio de Sostenibilidad - FUNDEPOS Costa Rica',
        type: 'image/jpeg',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Observatorio de Sostenibilidad | FUNDEPOS',
    description: 'Investigación y análisis sobre sostenibilidad en Costa Rica basado en ciencia de datos e inteligencia artificial',
    images: ['/twitter-image.jpg'],
    creator: '@fundepos',
    site: '@fundepos',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://observatorio.fundepos.ac.cr',
  },
  
  category: 'education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

