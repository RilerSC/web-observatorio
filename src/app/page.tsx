'use client';

import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Link from 'next/link';
import VideoSlider from '@/components/UI/VideoSlider';

const HomePage: React.FC = () => {
  const videos = [
    '/video/v1.mp4',
    '/video/v3.mp4',
    '/video/v4.mp4',
  ];

  const temasClave = [
    {
      titulo: 'Ejes Temáticos',
      descripcion: '[LOREM IPSUM] Descripción de los ejes temáticos del Observatorio de Sostenibilidad. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imagen: '/img/1.jpg',
      enlace: '/ejes-tematicos',
    },
    {
      titulo: 'Noticias',
      descripcion: '[LOREM IPSUM] Últimas noticias y actualidad sobre sostenibilidad. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imagen: '/img/2.jpg',
      enlace: '/noticias',
    },
    {
      titulo: 'Proyectos',
      descripcion: '[LOREM IPSUM] Proyectos e iniciativas del Observatorio de Sostenibilidad. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imagen: '/img/3.jpg',
      enlace: '/proyectos',
    },
  ];

  return (
    <Box>
      {/* Video Slider Principal */}
      <VideoSlider videos={videos} autoPlay={true} interval={6000} />

      {/* Sección de Propósito */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, mb: 3, color: '#0a1623', fontFamily: 'Montserrat, sans-serif' }}
          >
            [LOREM IPSUM] Observatorio de Sostenibilidad
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
            [LOREM IPSUM] Frase corta de propósito del Observatorio de Sostenibilidad. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris.
          </Typography>
        </Box>
      </Container>

      {/* Sección de Temas Clave */}
      <Box sx={{ backgroundColor: '#FFFFFF', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ textAlign: 'center', mb: 6, fontWeight: 700, color: '#009155', fontFamily: 'Montserrat, sans-serif' }}
          >
            [LOREM IPSUM] Nuestros Temas Clave
          </Typography>

          <Grid container spacing={4}>
            {temasClave.map((tema, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={tema.imagen}
                    alt={tema.titulo}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, color: '#0a1623', fontFamily: 'Montserrat, sans-serif' }}>
                      {tema.titulo}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mb: 2, flexGrow: 1, color: '#2d2d2d', fontFamily: 'Montserrat, sans-serif' }}
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
                        '&:hover': {
                          backgroundColor: '#0099b3',
                        },
                      }}
                    >
                      Ver más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Sección Adicional de Información */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/img/4.jpg"
              alt="Observatorio de Sostenibilidad"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 3, color: '#009155', fontFamily: 'Montserrat, sans-serif' }}>
              [LOREM IPSUM] Sobre el Observatorio
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#2d2d2d', lineHeight: 1.8, fontFamily: 'Montserrat, sans-serif' }}>
              [LOREM IPSUM] Información adicional sobre el Observatorio de Sostenibilidad. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#2d2d2d', lineHeight: 1.8, fontFamily: 'Montserrat, sans-serif' }}>
              [LOREM IPSUM] Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
            <Button
              component={Link}
              href="/nosotros"
              variant="outlined"
              size="large"
              sx={{
                mt: 2,
                borderColor: '#6abf4b',
                color: '#6abf4b',
                fontFamily: 'Montserrat, sans-serif',
                '&:hover': {
                  borderColor: '#54993c',
                  backgroundColor: 'rgba(106, 191, 75, 0.04)',
                },
              }}
            >
              Conoce más sobre nosotros
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;

