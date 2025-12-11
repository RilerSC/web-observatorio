'use client';

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { CalendarToday, ArrowForward, Close, OpenInNew, Download } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/UI/ScrollReveal';

interface Noticia {
  id: number;
  titulo: string;
  resumen: string;
  fecha: string;
  categoria: string;
  fuente: string;
  pdfUrl: string;
  color: string;
}

const NoticiasPage: React.FC = () => {
  const [selectedNoticia, setSelectedNoticia] = useState<Noticia | null>(null);
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Cargill Invierte Más De U$S 1.000 MM En Negocios De Química Verde',
      resumen: 'La multinacional Cargill realiza una inversión histórica de más de mil millones de dólares en el sector de química verde, apostando por la bioeconomía y la producción sostenible de químicos a partir de fuentes renovables.',
      fecha: '2024',
      categoria: 'Bioeconomía',
      fuente: 'BioEconomia',
      pdfUrl: '/noticias/Cargill Invierte Más De U$S 1.000 MM En Negocios De Química Verde - BioEconomia.pdf',
      color: '#6abf4b',
    },
    {
      id: 2,
      titulo: 'Bogotá, Colombia: Finalista en Wellbeing Cities',
      resumen: 'La capital colombiana es reconocida como finalista en el programa Wellbeing Cities de NewCities, destacando sus iniciativas para mejorar la calidad de vida urbana y el bienestar de sus ciudadanos.',
      fecha: '2024',
      categoria: 'Ciudades Sostenibles',
      fuente: 'NewCities',
      pdfUrl: '/noticias/Bogotá, Colombia _ Wellbeing Cities Finalist - NewCities.pdf',
      color: '#00bed6',
    },
    {
      id: 3,
      titulo: 'Estrategia de Bioeconomía de la Comisión Europea',
      resumen: 'La Comisión Europea presenta su estrategia integral de bioeconomía, estableciendo el marco para una economía basada en recursos biológicos renovables y prácticas sostenibles en toda la Unión Europea.',
      fecha: '2024',
      categoria: 'Bioeconomía',
      fuente: 'European Commission',
      pdfUrl: '/noticias/Bioeconomy strategy - European Commission.pdf',
      color: '#6abf4b',
    },
    {
      id: 4,
      titulo: 'La Contaminación del Aire Vinculada a Millones de Nacimientos Prematuros en 2019',
      resumen: 'Un estudio científico revela la alarmante conexión entre la contaminación atmosférica y los nacimientos prematuros a nivel global, destacando la urgencia de políticas de aire limpio para proteger la salud materno-infantil.',
      fecha: '2024',
      categoria: 'Salud Ambiental',
      fuente: 'Estudio Científico',
      pdfUrl: '/noticias/Air Pollution Linked To Millions Of Premature Births In 2019, Study Finds.pdf',
      color: '#ff6b6b',
    },
    {
      id: 5,
      titulo: 'Coca-Cola Lanza Su Primera Botella de Papel - Agenda 2030',
      resumen: 'En un hito para la sostenibilidad corporativa, Coca-Cola presenta su primera botella fabricada completamente de papel, marcando un paso importante hacia la reducción de plásticos de un solo uso.',
      fecha: '2024',
      categoria: 'Economía Circular',
      fuente: 'Agenda 2030',
      pdfUrl: '/noticias/Agenda 2030 _ Noticia Coca cola lanza su primera botell de papel.pdf',
      color: '#00bed6',
    },
    {
      id: 6,
      titulo: '¿Qué es la Economía del Donut? La Teoría de Ámsterdam',
      resumen: 'Descubre la teoría económica del donut que Ámsterdam está implementando para superar crisis y construir una economía que respete los límites planetarios mientras garantiza las necesidades humanas básicas.',
      fecha: '2024',
      categoria: 'Nuevos Modelos Económicos',
      fuente: 'Análisis Económico',
      pdfUrl: '/noticias/¿Qué es la economía del donut_ La teoría con la que Ámsterdam pretende superar la crisis del coronavirus.pdf',
      color: '#9b59b6',
    },
    {
      id: 7,
      titulo: '¿Pueden los Pagos Digitales Impulsar el Impacto de los Programas Sociales?',
      resumen: 'Análisis sobre cómo la digitalización de los pagos puede mejorar la eficiencia y el alcance de los programas de protección social, especialmente en comunidades vulnerables de América Latina.',
      fecha: '2024',
      categoria: 'Innovación Social',
      fuente: 'Ideas que Cuentan',
      pdfUrl: '/noticias/¿Pueden los pagos digitales impulsar el impacto de los programas sociales_ - Ideas que Cuentan.pdf',
      color: '#3498db',
    },
    {
      id: 8,
      titulo: '¿Puede el Precio al Carbono Ayudar a América Latina hacia Cero Emisiones?',
      resumen: 'Exploración de las políticas de fijación de precios del carbono como herramienta para que América Latina y el Caribe avancen hacia un futuro de cero emisiones netas de carbono.',
      fecha: '2024',
      categoria: 'Cambio Climático',
      fuente: 'Sostenibilidad',
      pdfUrl: '/noticias/¿Puede poner un precio al carbono ayudar a América Latina y el Caribe en su camino hacia un futuro de cero emisiones netas de carbono_ - Sostenibilidad.pdf',
      color: '#27ae60',
    },
    {
      id: 9,
      titulo: '¿Cómo Llega el Plástico a Mares y Océanos?',
      resumen: 'Greenpeace España explica las rutas y mecanismos por los cuales el plástico termina contaminando nuestros mares y océanos, y las acciones necesarias para combatir esta crisis ambiental.',
      fecha: '2024',
      categoria: 'Contaminación',
      fuente: 'Greenpeace España',
      pdfUrl: '/noticias/¿Cómo llega el plástico a mares y océanos_ _ Greenpeace España.pdf',
      color: '#00bed6',
    },
  ];

  const categorias = ['Todas', 'Bioeconomía', 'Ciudades Sostenibles', 'Salud Ambiental', 'Economía Circular', 'Nuevos Modelos Económicos', 'Innovación Social', 'Cambio Climático', 'Contaminación'];

  const noticiasFiltradas = categoriaActiva === 'Todas' 
    ? noticias 
    : noticias.filter(n => n.categoria === categoriaActiva);

  const handleOpenNoticia = (noticia: Noticia) => {
    setSelectedNoticia(noticia);
  };

  const handleCloseNoticia = () => {
    setSelectedNoticia(null);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: '#0a1623',
          color: '#ffffff',
          py: 8,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Patrón decorativo */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: `radial-gradient(circle at 20% 50%, #00bed6 0%, transparent 50%),
                        radial-gradient(circle at 80% 50%, #6abf4b 0%, transparent 50%)`,
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <Typography
              variant="overline"
              sx={{
                color: '#00bed6',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                letterSpacing: 3,
                mb: 2,
                display: 'block',
              }}
            >
              ACTUALIDAD
            </Typography>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 2, fontFamily: 'Montserrat, sans-serif' }}>
              Noticias de Sostenibilidad
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '800px', mx: 'auto', fontFamily: 'Montserrat, sans-serif' }}>
              Mantente informado sobre las últimas noticias, investigaciones y actualidad relacionadas con sostenibilidad, bioeconomía y desarrollo sostenible.
            </Typography>
          </ScrollReveal>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Filtros de Categorías */}
        <ScrollReveal>
          <Box sx={{ mb: 6, display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
            {categorias.map((categoria) => (
              <Chip
                key={categoria}
                label={categoria}
                clickable
                onClick={() => setCategoriaActiva(categoria)}
                sx={{
                  backgroundColor: categoriaActiva === categoria ? '#00bed6' : '#FFFFFF',
                  color: categoriaActiva === categoria ? '#ffffff' : '#0a1623',
                  border: '1px solid',
                  borderColor: categoriaActiva === categoria ? '#00bed6' : '#e0e0e0',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: categoriaActiva === categoria ? '#0099b3' : '#f5f5f5',
                    transform: 'translateY(-2px)',
                  },
                }}
              />
            ))}
          </Box>
        </ScrollReveal>

        {/* Grid de Noticias */}
        <StaggerContainer staggerDelay={0.1}>
          <Grid container spacing={4}>
            {noticiasFiltradas.map((noticia) => (
              <Grid item xs={12} sm={6} md={4} key={noticia.id}>
                <StaggerItem>
                  <Card
                    component={motion.div}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      '&:hover': {
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                        borderColor: noticia.color,
                      },
                    }}
                  >
                    {/* Header con color de categoría */}
                    <Box
                      sx={{
                        height: 8,
                        backgroundColor: noticia.color,
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                      <Chip
                        label={noticia.categoria}
                        size="small"
                        sx={{
                          mb: 2,
                          alignSelf: 'flex-start',
                          backgroundColor: `${noticia.color}20`,
                          color: noticia.color,
                          fontFamily: 'Montserrat, sans-serif',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                        }}
                      />
                      <Typography
                        variant="h6"
                        component="h2"
                        gutterBottom
                        sx={{ 
                          fontWeight: 700, 
                          mb: 2, 
                          fontFamily: 'Montserrat, sans-serif',
                          color: '#0a1623',
                          lineHeight: 1.3,
                          minHeight: '3.9em',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {noticia.titulo}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: '#666' }}>
                        <CalendarToday sx={{ fontSize: 14, mr: 1 }} />
                        <Typography variant="caption" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {noticia.fecha} • {noticia.fuente}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ 
                          mb: 2, 
                          flexGrow: 1, 
                          color: '#555',
                          fontFamily: 'Montserrat, sans-serif',
                          lineHeight: 1.7,
                          display: '-webkit-box',
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {noticia.resumen}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ p: 3, pt: 0 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        endIcon={<ArrowForward />}
                        onClick={() => handleOpenNoticia(noticia)}
                        sx={{
                          backgroundColor: noticia.color,
                          fontFamily: 'Montserrat, sans-serif',
                          fontWeight: 600,
                          borderRadius: 2,
                          py: 1.2,
                          '&:hover': {
                            backgroundColor: noticia.color,
                            filter: 'brightness(0.9)',
                            transform: 'translateX(5px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Leer más
                      </Button>
                    </CardActions>
                  </Card>
                </StaggerItem>
              </Grid>
            ))}
          </Grid>
        </StaggerContainer>
      </Container>

      {/* Modal del Visor de PDF */}
      <Dialog
        open={!!selectedNoticia}
        onClose={handleCloseNoticia}
        maxWidth="xl"
        fullWidth
        fullScreen={isMobile}
        PaperProps={{
          sx: {
            borderRadius: isMobile ? 0 : 3,
            overflow: 'hidden',
            height: isMobile ? '100%' : '90vh',
            maxHeight: '90vh',
          },
        }}
      >
        {selectedNoticia && (
          <>
            {/* Header del Modal */}
            <DialogTitle
              sx={{
                backgroundColor: '#0a1623',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 2,
                px: 3,
              }}
            >
              <Box sx={{ flex: 1, mr: 2 }}>
                <Chip
                  label={selectedNoticia.categoria}
                  size="small"
                  sx={{
                    mb: 1,
                    backgroundColor: `${selectedNoticia.color}40`,
                    color: '#ffffff',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: '0.7rem',
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    fontSize: { xs: '0.9rem', md: '1.1rem' },
                  }}
                >
                  {selectedNoticia.titulo}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Fuente: {selectedNoticia.fuente}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  href={selectedNoticia.pdfUrl}
                  target="_blank"
                  sx={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
                  }}
                  title="Abrir en nueva pestaña"
                >
                  <OpenInNew />
                </IconButton>
                <IconButton
                  href={selectedNoticia.pdfUrl}
                  download
                  sx={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
                  }}
                  title="Descargar PDF"
                >
                  <Download />
                </IconButton>
                <IconButton
                  onClick={handleCloseNoticia}
                  sx={{
                    color: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
                  }}
                >
                  <Close />
                </IconButton>
              </Box>
            </DialogTitle>

            {/* Contenido del Modal - Visor de PDF */}
            <DialogContent
              sx={{
                p: 0,
                backgroundColor: '#f5f5f5',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                }}
              >
                <iframe
                  src={`${selectedNoticia.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    minHeight: isMobile ? 'calc(100vh - 120px)' : 'calc(90vh - 120px)',
                  }}
                  title={selectedNoticia.titulo}
                />
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default NoticiasPage;
