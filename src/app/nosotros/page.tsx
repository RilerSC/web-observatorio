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
import TeamMemberCard from '@/components/Team/TeamMemberCard';

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
      nombre: 'Jorge Arturo Campos Montero',
      cargo: 'Director del Observatorio de la Sostenibilidad de FUNDEPOS y Catedrático por la UCR',
      bio: 'Reconocido por su extensa trayectoria de más de cuarenta años dedicada a la sostenibilidad, la gestión ambiental y el desarrollo sostenible en el ámbito académico y profesional.',
      foto: '/team/Jorge.jpeg',
    },
    {
      nombre: 'Lourdes Gómez',
      cargo: 'Máster en Sostenibilidad, cofundadora de Sistema B Centroamérica y Caribe',
      bio: 'Amplia carrera en mercadeo estratégico, comunicación corporativa y sostenibilidad. Se enfoca en movilizar profesionales y equipos mediante pensamiento sistémico.',
      foto: '/team/Lourdes.jpg',
    },
    {
      nombre: 'Francisco Javier Arias Vargas',
      cargo: 'Doctor en Administración y Dirección de Empresas, experto en Cooperación Académica Internacional',
      bio: 'Ha publicado trabajos en revistas especializadas sobre el desarrollo económico regional. Es Presidente de la Red Internacional de Investigación en Gestión del Conocimiento Empresarial.',
      foto: '/team/Francisco.jpeg',
    },
    {
      nombre: 'Pablo Gámez Cersósimo',
      cargo: 'Periodista de investigación, consultor y coach, especializado en sostenibilidad digital',
      bio: 'Trabaja en Europa y América Latina a través de Naturallydigital.org. Su área de especialización abarca la polución, ética y bienestar digital de las sociedades.',
      foto: '/team/Pablo.jpg',
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
                <Typography
                  variant="body1"
                  sx={{ color: '#2d2d2d', lineHeight: 1.8, fontFamily: 'Montserrat, sans-serif' }}
                >
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
            sx={{
              textAlign: 'center',
              mb: 4,
              fontWeight: 600,
              color: '#07a7ff',
              fontFamily: 'Montserrat, sans-serif',
            }}
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
                  <Box sx={{ color: '#00bed6', mb: 2 }}>{valor.icono}</Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, fontFamily: 'Montserrat, sans-serif', color: '#2d2d2d' }}
                  >
                    {valor.titulo}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: '#414042', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {valor.descripcion}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Sección de Equipo */}
        <Box
          sx={{
            mb: 10,
            position: 'relative',
            py: 6,
            px: { xs: 2, md: 0 },
          }}
        >
          {/* Fondo decorativo */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(0, 190, 214, 0.03) 0%, rgba(106, 191, 75, 0.03) 100%)',
              borderRadius: 4,
              zIndex: 0,
            }}
          />

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            {/* Título con decoración */}
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 700,
                  color: '#0a1623',
                  fontFamily: 'Montserrat, sans-serif',
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Nuestro Equipo Principal
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: '60px',
                    height: '3px',
                    background: 'linear-gradient(90deg, transparent, #00bed6)',
                    borderRadius: 2,
                  }}
                />
                <Box
                  sx={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#6abf4b',
                    borderRadius: '50%',
                  }}
                />
                <Box
                  sx={{
                    width: '60px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #6abf4b, transparent)',
                    borderRadius: 2,
                  }}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: '#414042',
                  fontFamily: 'Montserrat, sans-serif',
                  maxWidth: '600px',
                  mx: 'auto',
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                }}
              >
                [LOREM IPSUM] Conoce a los profesionales que lideran nuestras iniciativas en
                sostenibilidad y desarrollo sostenible.
              </Typography>
            </Box>

            {/* Grid de miembros */}
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {equipo.map((miembro, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <TeamMemberCard
                    nombre={miembro.nombre}
                    cargo={miembro.cargo}
                    bio={miembro.bio}
                    foto={miembro.foto}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
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

