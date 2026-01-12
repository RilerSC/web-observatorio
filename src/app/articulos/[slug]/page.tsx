import React, { Suspense } from 'react';
import { Container, Typography, Box, Chip, CircularProgress } from '@mui/material';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import ArticuloContent from '@/components/Articulos/ArticuloContent';
import { ReadingProgress } from '@/components/UI/ReadingProgress';
import { WhatsAppFloatingButton } from '@/components/UI/WhatsAppFloatingButton';

interface ArticuloData {
  slug: string;
  titulo: string;
  master_info: string;
  autor: {
    nombre: string;
    foto: string;
    cargo: string;
  };
  fecha: string;
  categoria: string;
  resumen: string;
  contenido: Array<{
    tipo: string;
    texto: string;
  }>;
  tags: string[];
  relacionados: string[];
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Función para cargar el artículo desde el JSON
function getArticulo(slug: string): ArticuloData | null {
  try {
    const articulosDir = path.join(process.cwd(), 'src/data/articulos');
    const filePath = path.join(articulosDir, `${slug}.json`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error cargando artículo:', error);
    return null;
  }
}

// Generar metadata para SEO y Open Graph (Viralidad)
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const articulo = getArticulo(slug);
  
  if (!articulo) {
    return {
      title: 'Artículo no encontrado',
    };
  }
  
  // Descripción optimizada para conversión
  const ogDescription = `${articulo.resumen} | Maestría en Sostenibilidad e Innovación - Inicio: 12 de enero. ¡Última oportunidad de matrícula!`;
  
  return {
    title: `${articulo.titulo} | Observatorio de Sostenibilidad`,
    description: articulo.resumen,
    keywords: articulo.tags.join(', '),
    authors: [{ name: articulo.autor.nombre }],
    openGraph: {
      title: articulo.titulo,
      description: ogDescription,
      type: 'article',
      publishedTime: articulo.fecha,
      authors: [articulo.autor.nombre],
      images: [
        {
          url: '/team/Jorge.jpeg',
          width: 800,
          height: 800,
          alt: articulo.autor.nombre,
        },
      ],
      siteName: 'Observatorio de Sostenibilidad - FUNDEPOS',
      locale: 'es_CR',
    },
    twitter: {
      card: 'summary_large_image',
      title: articulo.titulo,
      description: ogDescription,
      images: ['/team/Jorge.jpeg'],
      creator: '@fundepos',
    },
  };
}

// Componente de Loading Fallback
function ArticuloLoadingFallback() {
  return (
    <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
      <CircularProgress size={60} sx={{ color: '#00bed6', mb: 3 }} />
      <Typography
        variant="h6"
        sx={{
          color: '#666',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        Cargando artículo...
      </Typography>
    </Container>
  );
}

const ArticuloPage = async ({ params }: PageProps) => {
  return (
    <Suspense fallback={<ArticuloLoadingFallback />}>
      <ArticuloPageContent params={params} />
    </Suspense>
  );
};

// Componente interno con el contenido
async function ArticuloPageContent({ params }: PageProps) {
  const { slug } = await params;
  const articulo = getArticulo(slug);
  
  if (!articulo) {
    notFound();
  }
  
  // Formatear fecha de manera consistente (sin toLocaleDateString para evitar hydration mismatch)
  const fecha = new Date(articulo.fecha);
  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const fechaFormateada = `${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;

  return (
    <Box>
      {/* Reading Progress Bar */}
      <ReadingProgress />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppFloatingButton
        phoneNumber="50660436984"
        message="Hola, vengo del artículo de sostenibilidad y quiero información del Master."
        scrollThreshold={400}
      />
      
      {/* Hero Section - Diseño elegante y profesional */}
      <Box
        sx={{
          backgroundColor: '#0a1623',
          color: '#ffffff',
          py: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Patrón decorativo de fondo */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            backgroundImage: `radial-gradient(circle, #00bed6 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Categoría y Fecha */}
          <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Chip
              label={articulo.categoria}
              sx={{
                backgroundColor: '#00bed6',
                color: '#ffffff',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '0.9rem',
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              {fechaFormateada}
            </Typography>
          </Box>

          {/* Título */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 4,
              fontFamily: 'Montserrat, sans-serif',
              fontSize: { xs: '2rem', md: '3rem' },
              lineHeight: 1.2,
            }}
          >
            {articulo.titulo}
          </Typography>

          {/* Resumen */}
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '900px',
              fontFamily: 'Montserrat, sans-serif',
              lineHeight: 1.7,
              mb: 5,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
            }}
          >
            {articulo.resumen}
          </Typography>

          {/* Información del Autor - Diseño elegante */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              p: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 3,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              maxWidth: '600px',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: 80,
                height: 80,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid #00bed6',
                flexShrink: 0,
                boxShadow: '0 4px 20px rgba(0, 190, 214, 0.3)',
              }}
            >
              <Image
                src={articulo.autor.foto}
                alt={articulo.autor.nombre}
                fill
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center 20%'
                }}
                sizes="80px"
                priority
              />
            </Box>
            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: '#00bed6',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  letterSpacing: 1,
                  display: 'block',
                }}
              >
                ESCRITO POR
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#ffffff',
                  mb: 0.5,
                }}
              >
                {articulo.autor.nombre}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                {articulo.autor.cargo}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Contenido del Artículo */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
        <ArticuloContent
          contenido={articulo.contenido}
          tags={articulo.tags}
          masterInfo={articulo.master_info}
          autorNombre={articulo.autor.nombre}
        />
      </Container>
    </Box>
  );
}

export default ArticuloPage;
