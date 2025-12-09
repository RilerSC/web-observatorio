'use client';

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import NatureIcon from '@mui/icons-material/Nature';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LanguageIcon from '@mui/icons-material/Language';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/UI/ScrollReveal';

// Datos de proyectos de ejemplo
const proyectos = [
  {
    id: 1,
    titulo: 'Índice de Sostenibilidad Empresarial',
    descripcion: 'Desarrollo de un índice integral que mide el desempeño sostenible de las organizaciones en dimensiones ambientales, sociales y de gobernanza, permitiendo comparativas regionales y seguimiento temporal.',
    imagen: '/img/1.jpg',
    categoria: 'investigacion',
    estado: 'En curso',
    fecha: '2024 - Presente',
    ubicacion: 'Costa Rica y Centroamérica',
    participantes: '45+ organizaciones',
    tags: ['ESG', 'Métricas', 'Benchmarking'],
  },
  {
    id: 2,
    titulo: 'Economía Circular en PYMES',
    descripcion: 'Programa de acompañamiento a pequeñas y medianas empresas para implementar modelos de economía circular, reduciendo residuos y optimizando recursos mediante metodologías innovadoras.',
    imagen: '/img/2.jpg',
    categoria: 'consultoria',
    estado: 'En curso',
    fecha: '2023 - Presente',
    ubicacion: 'San José, Costa Rica',
    participantes: '28 PYMES',
    tags: ['Economía Circular', 'PYMES', 'Innovación'],
  },
  {
    id: 3,
    titulo: 'Observatorio de Empleos Verdes',
    descripcion: 'Monitoreo y análisis del mercado laboral sostenible, identificando tendencias, competencias demandadas y oportunidades de formación en sectores de economía verde y transición justa.',
    imagen: '/img/3.jpg',
    categoria: 'investigacion',
    estado: 'Completado',
    fecha: '2023',
    ubicacion: 'Regional',
    participantes: '12 países',
    tags: ['Empleos Verdes', 'Formación', 'Mercado Laboral'],
  },
  {
    id: 4,
    titulo: 'Red de Ciudades Sostenibles',
    descripcion: 'Articulación de gobiernos locales para compartir buenas prácticas en sostenibilidad urbana, movilidad, gestión de residuos y adaptación al cambio climático en la región centroamericana.',
    imagen: '/img/4.jpg',
    categoria: 'colaboracion',
    estado: 'En curso',
    fecha: '2024 - Presente',
    ubicacion: 'Centroamérica',
    participantes: '15 municipios',
    tags: ['Ciudades', 'Gobernanza', 'Cambio Climático'],
  },
  {
    id: 5,
    titulo: 'Plataforma de Datos Abiertos',
    descripcion: 'Desarrollo de una plataforma digital que centraliza y democratiza el acceso a datos de sostenibilidad, facilitando la toma de decisiones basadas en evidencia para múltiples stakeholders.',
    imagen: '/img/5.jpg',
    categoria: 'tecnologia',
    estado: 'En desarrollo',
    fecha: '2024',
    ubicacion: 'Digital / Regional',
    participantes: '100+ usuarios',
    tags: ['Open Data', 'IA', 'Visualización'],
  },
  {
    id: 6,
    titulo: 'Certificación Turismo Regenerativo',
    descripcion: 'Creación de un programa de certificación para operadores turísticos que adopten prácticas regenerativas, contribuyendo a la restauración de ecosistemas y el bienestar comunitario.',
    imagen: '/img/1.jpg',
    categoria: 'consultoria',
    estado: 'Piloto',
    fecha: '2024',
    ubicacion: 'Guanacaste, Costa Rica',
    participantes: '8 operadores',
    tags: ['Turismo', 'Regeneración', 'Certificación'],
  },
];

const categorias = [
  { id: 'todos', label: 'Todos', icon: <LanguageIcon /> },
  { id: 'investigacion', label: 'Investigación', icon: <TrendingUpIcon /> },
  { id: 'consultoria', label: 'Consultoría', icon: <PeopleIcon /> },
  { id: 'colaboracion', label: 'Colaboración', icon: <NatureIcon /> },
  { id: 'tecnologia', label: 'Tecnología', icon: <TrendingUpIcon /> },
];

const estadoColors: { [key: string]: string } = {
  'En curso': '#6abf4b',
  'Completado': '#00bed6',
  'En desarrollo': '#07a7ff',
  'Piloto': '#d1bd00',
};

const ProyectosPage: React.FC = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  const proyectosFiltrados = categoriaActiva === 'todos'
    ? proyectos
    : proyectos.filter(p => p.categoria === categoriaActiva);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '50vh', md: '60vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: `
            linear-gradient(135deg, #0a1623 0%, #0d2137 50%, #0a1623 100%)
          `,
        }}
      >
        {/* Elementos decorativos animados */}
        <Box
          component={motion.div}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          sx={{
            position: 'absolute',
            top: '-20%',
            right: '-15%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            border: '1px solid rgba(0, 190, 214, 0.1)',
            pointerEvents: 'none',
          }}
        />
        <Box
          component={motion.div}
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          sx={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            border: '1px solid rgba(106, 191, 75, 0.15)',
            pointerEvents: 'none',
          }}
        />
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          sx={{
            position: 'absolute',
            bottom: '-30%',
            left: '-10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(106, 191, 75, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
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
                  INICIATIVAS CON IMPACTO
                </Typography>
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    color: '#FFFFFF',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.1,
                    mb: 3,
                  }}
                >
                  Proyectos que
                  <Box
                    component="span"
                    sx={{
                      display: 'block',
                      background: 'linear-gradient(90deg, #00bed6, #6abf4b)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    transforman
                  </Box>
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    lineHeight: 1.8,
                    maxWidth: '550px',
                    mb: 4,
                  }}
                >
                  Conoce las iniciativas que estamos desarrollando para impulsar la sostenibilidad 
                  y generar impacto positivo en organizaciones, comunidades y territorios.
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              >
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Chip
                    icon={<TrendingUpIcon sx={{ color: '#00bed6 !important' }} />}
                    label="6 Proyectos activos"
                    sx={{
                      backgroundColor: 'rgba(0, 190, 214, 0.15)',
                      color: '#00bed6',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 600,
                      border: '1px solid rgba(0, 190, 214, 0.3)',
                    }}
                  />
                  <Chip
                    icon={<LanguageIcon sx={{ color: '#6abf4b !important' }} />}
                    label="7 Países"
                    sx={{
                      backgroundColor: 'rgba(106, 191, 75, 0.15)',
                      color: '#6abf4b',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 600,
                      border: '1px solid rgba(106, 191, 75, 0.3)',
                    }}
                  />
                  <Chip
                    icon={<PeopleIcon sx={{ color: '#07a7ff !important' }} />}
                    label="100+ Organizaciones"
                    sx={{
                      backgroundColor: 'rgba(7, 167, 255, 0.15)',
                      color: '#07a7ff',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 600,
                      border: '1px solid rgba(7, 167, 255, 0.3)',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Sección de Filtros */}
      <Box
        sx={{
          backgroundColor: '#f8f9fa',
          py: 3,
          borderBottom: '1px solid #e0e0e0',
          position: 'sticky',
          top: { xs: 56, md: 70 },
          zIndex: 100,
          backdropFilter: 'blur(10px)',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            {categorias.map((cat) => (
              <Button
                key={cat.id}
                variant={categoriaActiva === cat.id ? 'contained' : 'outlined'}
                startIcon={cat.icon}
                onClick={() => setCategoriaActiva(cat.id)}
                sx={{
                  borderRadius: 3,
                  px: 3,
                  py: 1,
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  textTransform: 'none',
                  ...(categoriaActiva === cat.id
                    ? {
                        backgroundColor: '#0a1623',
                        color: '#FFFFFF',
                        '&:hover': {
                          backgroundColor: '#0d2137',
                        },
                      }
                    : {
                        borderColor: '#ccc',
                        color: '#666',
                        '&:hover': {
                          borderColor: '#00bed6',
                          color: '#00bed6',
                          backgroundColor: 'rgba(0, 190, 214, 0.05)',
                        },
                      }),
                }}
              >
                {cat.label}
              </Button>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Grid de Proyectos */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background: 'linear-gradient(180deg, #f8f9fa 0%, #FFFFFF 100%)',
        }}
      >
        <Container maxWidth="lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={categoriaActiva}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Grid container spacing={4}>
                {proyectosFiltrados.map((proyecto, index) => (
                  <Grid item xs={12} md={6} key={proyecto.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card
                        component={motion.div}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        sx={{
                          height: '100%',
                          borderRadius: 4,
                          overflow: 'hidden',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                          border: '1px solid rgba(0, 0, 0, 0.05)',
                          display: 'flex',
                          flexDirection: 'column',
                          '&:hover': {
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                          },
                        }}
                      >
                        {/* Imagen del proyecto */}
                        <Box
                          sx={{
                            position: 'relative',
                            height: 220,
                            overflow: 'hidden',
                          }}
                        >
                          <Image
                            src={proyecto.imagen}
                            alt={proyecto.titulo}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7) 100%)',
                            }}
                          />
                          {/* Estado badge */}
                          <Chip
                            label={proyecto.estado}
                            size="small"
                            sx={{
                              position: 'absolute',
                              top: 16,
                              right: 16,
                              backgroundColor: estadoColors[proyecto.estado] || '#666',
                              color: '#FFFFFF',
                              fontFamily: 'Montserrat, sans-serif',
                              fontWeight: 600,
                              fontSize: '0.75rem',
                            }}
                          />
                        </Box>

                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                          {/* Tags */}
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                            {proyecto.tags.map((tag, i) => (
                              <Chip
                                key={i}
                                label={tag}
                                size="small"
                                variant="outlined"
                                sx={{
                                  fontSize: '0.7rem',
                                  height: 24,
                                  borderColor: '#e0e0e0',
                                  color: '#666',
                                  fontFamily: 'Montserrat, sans-serif',
                                }}
                              />
                            ))}
                          </Box>

                          <Typography
                            variant="h5"
                            component="h3"
                            sx={{
                              fontFamily: 'Montserrat, sans-serif',
                              fontWeight: 700,
                              color: '#0a1623',
                              mb: 2,
                              fontSize: '1.25rem',
                            }}
                          >
                            {proyecto.titulo}
                          </Typography>

                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: 'Montserrat, sans-serif',
                              color: '#666',
                              lineHeight: 1.7,
                              mb: 3,
                            }}
                          >
                            {proyecto.descripcion}
                          </Typography>

                          {/* Info adicional */}
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CalendarTodayIcon sx={{ fontSize: 18, color: '#00bed6' }} />
                              <Typography
                                variant="caption"
                                sx={{ fontFamily: 'Montserrat, sans-serif', color: '#666' }}
                              >
                                {proyecto.fecha}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <LocationOnIcon sx={{ fontSize: 18, color: '#6abf4b' }} />
                              <Typography
                                variant="caption"
                                sx={{ fontFamily: 'Montserrat, sans-serif', color: '#666' }}
                              >
                                {proyecto.ubicacion}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <PeopleIcon sx={{ fontSize: 18, color: '#07a7ff' }} />
                              <Typography
                                variant="caption"
                                sx={{ fontFamily: 'Montserrat, sans-serif', color: '#666' }}
                              >
                                {proyecto.participantes}
                              </Typography>
                            </Box>
                          </Box>

                          <Button
                            variant="text"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                              fontFamily: 'Montserrat, sans-serif',
                              fontWeight: 600,
                              color: '#00bed6',
                              textTransform: 'none',
                              p: 0,
                              '&:hover': {
                                backgroundColor: 'transparent',
                                color: '#0099b3',
                              },
                            }}
                          >
                            Ver detalles
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </AnimatePresence>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 8, md: 12 },
          overflow: 'hidden',
          background: `
            linear-gradient(135deg, #0a1623 0%, #0d2137 100%)
          `,
        }}
      >
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 190, 214, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <ScrollReveal>
            <Typography
              variant="h3"
              sx={{
                color: '#FFFFFF',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '1.75rem', md: '2.5rem' },
              }}
            >
              ¿Tienes un proyecto en mente?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontFamily: 'Montserrat, sans-serif',
                mb: 4,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              Colaboremos para desarrollar iniciativas que generen impacto positivo. 
              Contáctanos para explorar cómo podemos trabajar juntos.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                href="/contacto"
                sx={{
                  backgroundColor: '#6abf4b',
                  color: '#FFFFFF',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  textTransform: 'none',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: '#54993c',
                  },
                }}
              >
                Proponer proyecto
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/nosotros"
                sx={{
                  borderColor: '#00bed6',
                  color: '#00bed6',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  textTransform: 'none',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: '#00bed6',
                    backgroundColor: 'rgba(0, 190, 214, 0.1)',
                  },
                }}
              >
                Conocer más
              </Button>
            </Box>
          </ScrollReveal>
        </Container>
      </Box>
    </Box>
  );
};

export default ProyectosPage;

