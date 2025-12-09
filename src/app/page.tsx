'use client';

import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Link from 'next/link';
import VideoSlider from '@/components/UI/VideoSlider';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/UI/ScrollReveal';
import ImpactSection from '@/components/UI/ImpactSection';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  // Usando imágenes con efecto Ken Burns para mejor rendimiento
  const heroMedia = [
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
  ];

  const temasClave = [
    {
      titulo: 'Ejes Temáticos',
      descripcion: 'El Observatorio de Sostenibilidad de Costa Rica define su trabajo en cuatro ejes estratégicos: Modelos de negocio de impacto positivo, Nuevos modelos económicos, Economía Naranja y Cultura, y Estrategias de restauración eco-social y sostenibilidad urbana.',
      imagen: '/img/1.jpg',
      enlace: '/ejes-tematicos',
    },
    {
      titulo: 'Noticias',
      descripcion: 'Mantente informado con las últimas noticias, investigaciones y actualidad sobre sostenibilidad, desarrollo sostenible e innovación. Accede a artículos, reportes y análisis que reflejan las tendencias y avances en materia de sostenibilidad en Costa Rica y la región.',
      imagen: '/img/2.jpg',
      enlace: '/noticias',
    },
    {
      titulo: 'Proyectos',
      descripcion: 'Descubre los proyectos e iniciativas del Observatorio de Sostenibilidad que están transformando la manera en que las organizaciones abordan los desafíos ambientales, sociales y económicos, generando impacto positivo y sostenible en la región.',
      imagen: '/img/3.jpg',
      enlace: '/proyectos',
    },
  ];

  return (
    <Box>
      {/* Hero Slider con imágenes y efecto Ken Burns */}
      <VideoSlider media={heroMedia} autoPlay={true} interval={6000} mode="image" />

      {/* Sección de Propósito con fondo gradiente */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 8, md: 10 },
          overflow: 'hidden',
          background: `
            linear-gradient(180deg, #FFFFFF 0%, #f8fdf6 50%, #FFFFFF 100%)
          `,
        }}
      >
        {/* Patrón decorativo sutil */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.4,
            background: `
              radial-gradient(circle at 20% 80%, rgba(106, 191, 75, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 190, 214, 0.08) 0%, transparent 50%)
            `,
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: '#6abf4b',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    letterSpacing: 3,
                    mb: 2,
                    display: 'block',
                  }}
                >
                  BIENVENIDOS
                </Typography>
              </motion.div>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 700, mb: 3, color: '#0a1623', fontFamily: 'Montserrat, sans-serif' }}
              >
                Observatorio de Sostenibilidad
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#2d2d2d',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.8,
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Nuestro propósito es transformar la información en acción sostenible, fortalecer la toma de decisiones basadas en evidencia y consolidarnos como aliados estratégicos en sostenibilidad e innovación.
              </Typography>
            </Box>
          </ScrollReveal>
        </Container>
      </Box>

      {/* Sección de Impacto con Contadores */}
      <ImpactSection />

      {/* Sección de Temas Clave con fondo texturizado */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 8, md: 10 },
          overflow: 'hidden',
          background: `
            linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f0f7f0 100%)
          `,
        }}
      >
        {/* Patrón geométrico sutil */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.3,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236abf4b' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ textAlign: 'center', mb: 6, fontWeight: 700, color: '#009155', fontFamily: 'Montserrat, sans-serif' }}
            >
              Nuestros Temas Clave
            </Typography>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.15}>
            <Grid container spacing={4}>
              {temasClave.map((tema, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <StaggerItem>
                    <Card
                      component={motion.div}
                      whileHover={{ y: -12, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                        border: '1px solid rgba(106, 191, 75, 0.1)',
                        '&:hover': {
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                          borderColor: 'rgba(0, 190, 214, 0.3)',
                        },
                      }}
                    >
                      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                        <CardMedia
                          component="img"
                          height="220"
                          image={tema.imagen}
                          alt={tema.titulo}
                          sx={{
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                            '&:hover': {
                              transform: 'scale(1.1)',
                            },
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '60%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)',
                            pointerEvents: 'none',
                          }}
                        />
                      </Box>
                      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                        <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, color: '#0a1623', fontFamily: 'Montserrat, sans-serif' }}>
                          {tema.titulo}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ mb: 3, flexGrow: 1, color: '#2d2d2d', fontFamily: 'Montserrat, sans-serif', lineHeight: 1.7 }}
                        >
                          {tema.descripcion}
                        </Typography>
                        <Button
                          component={Link}
                          href={tema.enlace}
                          variant="contained"
                          endIcon={<ArrowForward />}
                          sx={{
                            mt: 'auto',
                            backgroundColor: '#00bed6',
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 600,
                            borderRadius: 2,
                            py: 1.2,
                            '&:hover': {
                              backgroundColor: '#0099b3',
                              transform: 'translateX(5px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Ver más
                        </Button>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                </Grid>
              ))}
            </Grid>
          </StaggerContainer>
        </Container>
      </Box>

      {/* Sección Adicional de Información con diseño moderno */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 8, md: 12 },
          overflow: 'hidden',
          background: '#FFFFFF',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <ScrollReveal direction="left">
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  sx={{
                    position: 'relative',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <Box
                    component="img"
                    src="/img/4.jpg"
                    alt="Observatorio de Sostenibilidad"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                  {/* Overlay decorativo */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(0, 190, 214, 0.1) 0%, rgba(106, 191, 75, 0.1) 100%)',
                      pointerEvents: 'none',
                    }}
                  />
                  {/* Badge decorativo */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 20,
                      left: 20,
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      px: 3,
                      py: 1.5,
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 700,
                        color: '#6abf4b',
                        letterSpacing: 1,
                      }}
                    >
                      Costa Rica • Centroamérica
                    </Typography>
                  </Box>
                </Box>
              </ScrollReveal>
            </Grid>
            <Grid item xs={12} md={6}>
              <ScrollReveal direction="right" delay={0.2}>
                <Box sx={{ pl: { md: 4 } }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: '#00bed6',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 600,
                      letterSpacing: 2,
                      mb: 1,
                      display: 'block',
                    }}
                  >
                    CONÓCENOS
                  </Typography>
                  <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 3, color: '#0a1623', fontFamily: 'Montserrat, sans-serif' }}>
                    Sobre el Observatorio
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: '#2d2d2d', lineHeight: 1.9, fontFamily: 'Montserrat, sans-serif', fontSize: '1.05rem' }}>
                    El Observatorio de Sostenibilidad es una iniciativa académica y empresarial que monitorea, analiza y promueve el impacto sostenible de las organizaciones en Costa Rica y la región. Transformamos información en acción sostenible mediante ciencia de datos e inteligencia artificial.
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: '#2d2d2d', lineHeight: 1.9, fontFamily: 'Montserrat, sans-serif', fontSize: '1.05rem' }}>
                    Donde la sostenibilidad se convierte en estrategia. Investigamos, conectamos y generamos soluciones que impulsan a las organizaciones hacia la sostenibilidad del futuro.
                  </Typography>
                  <Box sx={{ mt: 4 }}>
                    <Button
                      component={Link}
                      href="/nosotros"
                      variant="outlined"
                      size="large"
                      sx={{
                        borderColor: '#6abf4b',
                        borderWidth: 2,
                        color: '#6abf4b',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        borderRadius: 2,
                        px: 4,
                        py: 1.5,
                        '&:hover': {
                          borderColor: '#54993c',
                          borderWidth: 2,
                          backgroundColor: '#6abf4b',
                          color: '#FFFFFF',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Conoce más sobre nosotros
                    </Button>
                  </Box>
                </Box>
              </ScrollReveal>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
