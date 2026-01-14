'use client';

import React from 'react';
import { Container, Typography, Box, Chip, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface FeaturedArticleProps {
  titulo: string;
  resumen: string;
  categoria: string;
  autorNombre: string;
  autorCargo: string;
  autorFoto: string;
  slug: string;
  masterInfo: string;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  titulo,
  resumen,
  categoria,
  autorNombre,
  autorCargo,
  autorFoto,
  slug,
  masterInfo,
}) => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: '#f8f9fa',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Patrón decorativo de fondo */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(106, 191, 75, 0.1) 0%, transparent 70%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 190, 214, 0.08) 0%, transparent 70%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Badge de Artículo Destacado */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Chip
            label="ARTÍCULO DESTACADO"
            sx={{
              backgroundColor: '#6abf4b',
              color: '#ffffff',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '0.9rem',
              px: 2,
              py: 2.5,
              letterSpacing: 1,
            }}
          />
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              backgroundColor: '#ffffff',
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
              transition: 'all 0.4s ease',
              '&:hover': {
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.18)',
                transform: 'translateY(-8px)',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 0,
              }}
            >
              {/* Columna Izquierda - Contenido */}
              <Box
                sx={{
                  flex: 1,
                  p: { xs: 4, md: 6 },
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Categoría */}
                <Chip
                  label={categoria}
                  size="small"
                  sx={{
                    backgroundColor: '#e8f5e9',
                    color: '#6abf4b',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    mb: 3,
                    alignSelf: 'flex-start',
                  }}
                />

                {/* Título */}
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    color: '#0a1623',
                    mb: 3,
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    lineHeight: 1.2,
                  }}
                >
                  {titulo}
                </Typography>

                {/* Resumen */}
                <Typography
                  variant="body1"
                  sx={{
                    color: '#2d2d2d',
                    mb: 4,
                    fontFamily: 'Montserrat, sans-serif',
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                  }}
                >
                  {resumen.substring(0, 250)}...
                </Typography>

                {/* Información del Autor */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 4,
                    p: 3,
                    backgroundColor: '#f8f9fa',
                    borderRadius: 2,
                    border: '1px solid #e0e0e0',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '3px solid #00bed6',
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={autorFoto}
                      alt={autorNombre}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                      sizes="60px"
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                        fontFamily: 'Montserrat, sans-serif',
                        color: '#0a1623',
                      }}
                    >
                      {autorNombre}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                    >
                      {autorCargo}
                    </Typography>
                  </Box>
                </Box>

                {/* Botón CTA */}
                <Button
                  component={Link}
                  href={`/articulos/${slug}`}
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#00bed6',
                    color: '#ffffff',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    alignSelf: 'flex-start',
                    '&:hover': {
                      backgroundColor: '#009bb0',
                      transform: 'translateX(5px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Leer artículo completo →
                </Button>
              </Box>

              {/* Columna Derecha - Banner de Matrícula */}
              <Box
                sx={{
                  width: { xs: '100%', md: '380px' },
                  backgroundColor: '#6abf4b',
                  backgroundImage: 'linear-gradient(135deg, #6abf4b 0%, #5aa93d 100%)',
                  p: { xs: 4, md: 5 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Patrón decorativo */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -30,
                    left: -30,
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  }}
                />

                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      letterSpacing: 2,
                      display: 'block',
                      mb: 2,
                    }}
                  >
                    MAESTRÍA FUNDEPOS
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: 2,
                      px: 2,
                      py: 2,
                      mb: 3,
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#ffffff',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 700,
                        textAlign: 'center',
                        mb: 0.5,
                        fontSize: '1.1rem',
                      }}
                    >
                      🗓️ Inicio: 12 de Enero
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.95)',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        textAlign: 'center',
                      }}
                    >
                      ¡Última oportunidad!
                    </Typography>
                  </Box>
                  
                  {/* Datos de Contacto */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#ffffff',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        textAlign: 'center',
                        mb: 0.5,
                        fontSize: '0.95rem',
                      }}
                    >
                      📞 +(506) 4001-9254
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#ffffff',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        textAlign: 'center',
                        fontSize: '0.9rem',
                      }}
                    >
                      ✉️ matricula@fundepos.ac.cr
                    </Typography>
                  </Box>
                  
                  <Button
                    component={Link}
                    href="https://wa.me/50660436984?text=Hola,%20estoy%20interesado%20en%20obtener%20más%20información%20sobre%20la%20Maestría%20en%20Sostenibilidad%20e%20Innovación."
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: '#ffffff',
                      color: '#25D366',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                      '&:hover': {
                        backgroundColor: '#f5f5f5',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 25px rgba(0, 0, 0, 0.25)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    💬 Consultar por WhatsApp
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedArticle;
