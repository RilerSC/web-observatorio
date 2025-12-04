'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from '@mui/material';
import { Person, School, Business } from '@mui/icons-material';

const NosotrosPage: React.FC = () => {
  const valores = [
    {
      titulo: 'Compromiso',
      descripcion:
        '[LOREM IPSUM] Compromiso con la sostenibilidad y el desarrollo responsable. Lorem ipsum dolor sit amet.',
      icono: <Business sx={{ fontSize: 40 }} />,
    },
    {
      titulo: 'Excelencia',
      descripcion:
        '[LOREM IPSUM] Excelencia en la investigación y generación de conocimiento. Lorem ipsum dolor sit amet.',
      icono: <School sx={{ fontSize: 40 }} />,
    },
    {
      titulo: 'Integridad',
      descripcion:
        '[LOREM IPSUM] Integridad en todas nuestras acciones y decisiones. Lorem ipsum dolor sit amet.',
      icono: <Person sx={{ fontSize: 40 }} />,
    },
  ];

  const equipo = [
    {
      nombre: '[LOREM IPSUM] Nombre del Miembro 1',
      cargo: 'Director General',
      bio: '[LOREM IPSUM] Breve biografía del miembro del equipo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      foto: '/img/1.jpg',
    },
    {
      nombre: '[LOREM IPSUM] Nombre del Miembro 2',
      cargo: 'Coordinador de Investigación',
      bio: '[LOREM IPSUM] Breve biografía del miembro del equipo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      foto: '/img/2.jpg',
    },
    {
      nombre: '[LOREM IPSUM] Nombre del Miembro 3',
      cargo: 'Especialista en Sostenibilidad',
      bio: '[LOREM IPSUM] Breve biografía del miembro del equipo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      foto: '/img/3.jpg',
    },
    {
      nombre: '[LOREM IPSUM] Nombre del Miembro 4',
      cargo: 'Analista de Proyectos',
      bio: '[LOREM IPSUM] Breve biografía del miembro del equipo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      foto: '/img/4.jpg',
    },
  ];

  const alianzas = [
    { nombre: 'FUNDEPOS', logo: '/logos/LOGO_COLOR.svg' },
    { nombre: '[LOREM IPSUM] Alianza 1', logo: '/img/5.jpg' },
    { nombre: '[LOREM IPSUM] Alianza 2', logo: '/img/1.jpg' },
    { nombre: '[LOREM IPSUM] Alianza 3', logo: '/img/2.jpg' },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: '#0a1623',
          color: '#ffffff',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 2, fontFamily: 'Montserrat, sans-serif' }}>
            [LOREM IPSUM] Nosotros
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '800px', mx: 'auto', fontFamily: 'Montserrat, sans-serif' }}>
            [LOREM IPSUM] Conoce más sobre el Observatorio de Sostenibilidad, nuestra misión,
            visión y equipo de trabajo.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Sección de Identidad */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ textAlign: 'center', mb: 6, fontWeight: 700, color: '#009155', fontFamily: 'Montserrat, sans-serif' }}
          >
            [LOREM IPSUM] Nuestra Identidad
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#009155', fontFamily: 'Montserrat, sans-serif' }}>
                  Misión
                </Typography>
                <Typography variant="body1" sx={{ color: '#2d2d2d', lineHeight: 1.8, fontFamily: 'Montserrat, sans-serif' }}>
                  [LOREM IPSUM] Nuestra misión es promover la sostenibilidad a través de la
                  investigación, educación y generación de conocimiento. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#009155', fontFamily: 'Montserrat, sans-serif' }}>
                  Visión
                </Typography>
                <Typography variant="body1" sx={{ color: '#2d2d2d', lineHeight: 1.8, fontFamily: 'Montserrat, sans-serif' }}>
                  [LOREM IPSUM] Ser un referente en sostenibilidad a nivel nacional e
                  internacional. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#009155', fontFamily: 'Montserrat, sans-serif' }}>
                  Propósito
                </Typography>
                <Typography variant="body1" sx={{ color: '#2d2d2d', lineHeight: 1.8, fontFamily: 'Montserrat, sans-serif' }}>
                  [LOREM IPSUM] Contribuir al desarrollo sostenible mediante la generación de
                  conocimiento y la promoción de buenas prácticas. Lorem ipsum dolor sit amet.
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Valores */}
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            sx={{ textAlign: 'center', mb: 4, fontWeight: 600 }}
          >
            [LOREM IPSUM] Nuestros Valores
          </Typography>
          <Grid container spacing={4}>
            {valores.map((valor, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Box sx={{ color: '#2e7d32', mb: 2 }}>{valor.icono}</Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {valor.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {valor.descripcion}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Sección de Equipo */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}
          >
            [LOREM IPSUM] Equipo Principal
          </Typography>

          <Grid container spacing={4}>
            {equipo.map((miembro, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={miembro.foto}
                    alt={miembro.nombre}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                      {miembro.nombre}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="primary"
                      gutterBottom
                      sx={{ mb: 1, fontWeight: 500 }}
                    >
                      {miembro.cargo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {miembro.bio}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Sección de Alianzas */}
        <Box>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}
          >
            [LOREM IPSUM] Alianzas Institucionales
          </Typography>

          <Grid container spacing={4} alignItems="center" justifyContent="center">
            {alianzas.map((alianza, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={alianza.logo}
                    alt={alianza.nombre}
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default NosotrosPage;

