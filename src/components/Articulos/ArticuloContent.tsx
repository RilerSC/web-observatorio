'use client';

import React from 'react';
import { Typography, Box, Chip } from '@mui/material';
import LinkButton from '@/components/UI/LinkButton';

interface ContenidoBloque {
  tipo: string;
  texto: string;
}

interface ArticuloContentProps {
  contenido: ContenidoBloque[];
  tags: string[];
  masterInfo: string;
  autorNombre: string;
}

export const ArticuloContent: React.FC<ArticuloContentProps> = ({ 
  contenido, 
  tags, 
  masterInfo,
  autorNombre 
}) => {
  return (
    <>
      

      {/* Contenido del Artículo - Optimizado para lectura */}
      <Box sx={{ mb: 6 }}>
        {contenido.map((bloque, index) => {
          switch (bloque.tipo) {
            case 'subtitulo':
              return (
                <Typography
                  key={index}
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    color: '#0a1623',
                    mb: 3,
                    mt: index === 0 ? 0 : 6,
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                    lineHeight: 1.3,
                  }}
                >
                  {bloque.texto}
                </Typography>
              );
            case 'destacado':
              return (
                <Box
                  key={index}
                  sx={{
                    p: { xs: 3, md: 4 },
                    backgroundColor: '#e8f5e9',
                    borderLeft: '6px solid #6abf4b',
                    borderRadius: 2,
                    my: 4,
                    boxShadow: '0 4px 15px rgba(106, 191, 75, 0.15)',
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: { xs: '1.05rem', md: '1.15rem' },
                      lineHeight: 1.8,
                      fontWeight: 500,
                      color: '#2d2d2d',
                      fontStyle: 'italic',
                    }}
                  >
                    "{bloque.texto}"
                  </Typography>
                </Box>
              );
            case 'cta':
              return (
                <Box
                  key={index}
                  sx={{
                    p: { xs: 3, md: 4 },
                    backgroundColor: '#f0f9ff',
                    borderRadius: 3,
                    my: 4,
                    border: '2px solid #00bed6',
                    boxShadow: '0 4px 20px rgba(0, 190, 214, 0.15)',
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: { xs: '1rem', md: '1.05rem' },
                      lineHeight: 1.8,
                      color: '#0a1623',
                      textAlign: 'center',
                    }}
                  >
                    {bloque.texto}
                  </Typography>
                </Box>
              );
            default: // parrafo
              return (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    mb: 3,
                    color: '#2d2d2d',
                    fontFamily: 'Georgia, serif',
                    lineHeight: 1.9,
                    fontSize: { xs: '1.05rem', md: '1.1rem' },
                    textAlign: 'justify',
                    letterSpacing: '0.01em',
                  }}
                >
                  {bloque.texto}
                </Typography>
              );
          }
        })}
      </Box>

      {/* Banner de Conversión Final */}
      <Box
        sx={{
          mt: 8,
          mb: 6,
          p: { xs: 4, md: 5 },
          backgroundColor: '#0a1623',
          borderRadius: 3,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
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
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h5"
            sx={{
              color: '#6abf4b',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              mb: 2,
            }}
          >
            ¿Listo para transformar tu carrera profesional?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: 'Montserrat, sans-serif',
              mb: 3,
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Únete a la Maestría en Sostenibilidad e Innovación de FUNDEPOS. 
            Inicio de lecciones: 12 de enero. ¡Últimos cupos disponibles!
          </Typography>
          
          {/* Datos de Contacto */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="body1"
              sx={{
                color: '#00bed6',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                textAlign: 'center',
                mb: 1,
              }}
            >
              📞 Teléfono: +(506) 4001-9254
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#00bed6',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              ✉️ Email: matricula@fundepos.ac.cr
            </Typography>
          </Box>
          
          <LinkButton
            href="https://wa.me/50660436984?text=Hola,%20estoy%20interesado%20en%20obtener%20más%20información%20sobre%20la%20Maestría%20en%20Sostenibilidad%20e%20Innovación."
            variant="contained"
            sx={{
              backgroundColor: '#25D366',
              color: '#ffffff',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '1.1rem',
              px: 5,
              py: 1.5,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#20BA5A',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            💬 Consultar por WhatsApp
          </LinkButton>
        </Box>
      </Box>

      {/* Tags */}
      <Box sx={{ mt: 6, pt: 4, borderTop: '2px solid #e0e0e0' }}>
        <Typography
          variant="subtitle2"
          sx={{
            mb: 2,
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            color: '#666',
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}
        >
          Temas relacionados:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              sx={{
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: '#e8f5e9',
                color: '#6abf4b',
                fontWeight: 600,
                fontSize: '0.9rem',
                px: 1,
                '&:hover': {
                  backgroundColor: '#6abf4b',
                  color: '#ffffff',
                },
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Firma del Autor */}
      <Box
        sx={{
          mt: 6,
          pt: 4,
          borderTop: '2px solid #e0e0e0',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#666',
            fontStyle: 'italic',
          }}
        >
          Artículo escrito por {autorNombre}
        </Typography>
      </Box>
    </>
  );
};

export default ArticuloContent;
