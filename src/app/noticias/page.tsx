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
  CardActions,
  Button,
  Chip,
} from '@mui/material';
import { CalendarToday, ArrowForward } from '@mui/icons-material';

const NoticiasPage: React.FC = () => {
  const noticias = [
    {
      titulo: '[LOREM IPSUM] Noticia 1: Título de la Noticia sobre Sostenibilidad',
      resumen:
        '[LOREM IPSUM] Resumen breve de la noticia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      fecha: '15 de Marzo, 2024',
      categoria: 'Biodiversidad',
      imagen: '/img/1.jpg',
    },
    {
      titulo: '[LOREM IPSUM] Noticia 2: Título de la Noticia sobre Cambio Climático',
      resumen:
        '[LOREM IPSUM] Resumen breve de la noticia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      fecha: '10 de Marzo, 2024',
      categoria: 'Cambio Climático',
      imagen: '/img/2.jpg',
    },
    {
      titulo: '[LOREM IPSUM] Noticia 3: Título de la Noticia sobre Economía Circular',
      resumen:
        '[LOREM IPSUM] Resumen breve de la noticia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      fecha: '5 de Marzo, 2024',
      categoria: 'Economía Circular',
      imagen: '/img/3.jpg',
    },
    {
      titulo: '[LOREM IPSUM] Noticia 4: Título de la Noticia sobre Desarrollo Urbano',
      resumen:
        '[LOREM IPSUM] Resumen breve de la noticia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      fecha: '28 de Febrero, 2024',
      categoria: 'Desarrollo Urbano',
      imagen: '/img/4.jpg',
    },
    {
      titulo: '[LOREM IPSUM] Noticia 5: Título de la Noticia sobre Gobernanza',
      resumen:
        '[LOREM IPSUM] Resumen breve de la noticia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      fecha: '20 de Febrero, 2024',
      categoria: 'Gobernanza',
      imagen: '/img/5.jpg',
    },
    {
      titulo: '[LOREM IPSUM] Noticia 6: Título de la Noticia sobre Sostenibilidad',
      resumen:
        '[LOREM IPSUM] Resumen breve de la noticia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      fecha: '15 de Febrero, 2024',
      categoria: 'Biodiversidad',
      imagen: '/img/1.jpg',
    },
  ];

  const categorias = ['Todas', 'Biodiversidad', 'Cambio Climático', 'Economía Circular', 'Desarrollo Urbano', 'Gobernanza'];

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
            [LOREM IPSUM] Noticias
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '800px', mx: 'auto', fontFamily: 'Montserrat, sans-serif' }}>
            [LOREM IPSUM] Mantente informado sobre las últimas noticias y actualidad relacionadas
            con sostenibilidad y desarrollo sostenible.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Filtros de Categorías */}
        <Box sx={{ mb: 6, display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
          {categorias.map((categoria) => (
            <Chip
              key={categoria}
              label={categoria}
              clickable
              sx={{
                backgroundColor: categoria === 'Todas' ? '#00bed6' : '#FFFFFF',
                color: categoria === 'Todas' ? '#ffffff' : '#0a1623',
                '&:hover': {
                  backgroundColor: categoria === 'Todas' ? '#333333' : '#e0e0e0',
                },
              }}
            />
          ))}
        </Box>

        {/* Grid de Noticias */}
        <Grid container spacing={4}>
          {noticias.map((noticia, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                  image={noticia.imagen}
                  alt={noticia.titulo}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Chip
                    label={noticia.categoria}
                    size="small"
                    sx={{
                      mb: 2,
                      alignSelf: 'flex-start',
                      backgroundColor: '#0a1623',
                      color: '#ffffff',
                    }}
                  />
                  <Typography
                    variant="h6"
                    component="h2"
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    {noticia.titulo}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: '#414042' }}>
                    <CalendarToday sx={{ fontSize: 16, mr: 1 }} />
                    <Typography variant="caption">{noticia.fecha}</Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, flexGrow: 1 }}
                  >
                    {noticia.resumen}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    size="small"
                    endIcon={<ArrowForward />}
                    sx={{
                      color: '#00bed6',
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: 'rgba(46, 125, 50, 0.04)',
                      },
                    }}
                  >
                    Leer más
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Paginación (Placeholder) */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, gap: 1 }}>
          <Button variant="outlined" disabled>
            Anterior
          </Button>
          <Button variant="contained" sx={{ backgroundColor: '#00bed6', fontFamily: 'Montserrat, sans-serif', '&:hover': { backgroundColor: '#0099b3' } }}>
            1
          </Button>
          <Button variant="outlined">2</Button>
          <Button variant="outlined">3</Button>
          <Button variant="outlined">Siguiente</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NoticiasPage;

