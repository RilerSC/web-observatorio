'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Chip,
  Stack,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLeaf,
  faWater,
  faSun,
  faRecycle,
  faCity,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';

const EjesTematicosPage: React.FC = () => {
  const ejesTematicos = [
    {
      titulo: '[LOREM IPSUM] Eje Temático: Biodiversidad',
      descripcion:
        '[LOREM IPSUM] Descripción detallada del eje temático de Biodiversidad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      descripcionCorta: '[LOREM IPSUM] Protección y conservación de la diversidad biológica y los ecosistemas.',
      ods: [
        { numero: 14, nombre: 'Vida Submarina', icono: faWater },
        { numero: 15, nombre: 'Vida de Ecosistemas Terrestres', icono: faLeaf },
      ],
      color: '#2e7d32',
      imagen: '/img/1.jpg',
    },
    {
      titulo: '[LOREM IPSUM] Eje Temático: Cambio Climático',
      descripcion:
        '[LOREM IPSUM] Descripción detallada del eje temático de Cambio Climático. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      descripcionCorta: '[LOREM IPSUM] Mitigación y adaptación al cambio climático para un futuro sostenible.',
      ods: [
        { numero: 7, nombre: 'Energía Asequible y No Contaminante', icono: faSun },
        { numero: 13, nombre: 'Acción por el Clima', icono: faSun },
      ],
      color: '#f57c00',
      imagen: '/img/2.jpg',
    },
    {
      titulo: '[LOREM IPSUM] Eje Temático: Economía Circular',
      descripcion:
        '[LOREM IPSUM] Descripción detallada del eje temático de Economía Circular. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      descripcionCorta: '[LOREM IPSUM] Promoción de modelos económicos sostenibles y circulares.',
      ods: [
        { numero: 12, nombre: 'Producción y Consumo Responsables', icono: faRecycle },
      ],
      color: '#1976d2',
      imagen: '/img/3.jpg',
    },
    {
      titulo: '[LOREM IPSUM] Eje Temático: Desarrollo Urbano Sostenible',
      descripcion:
        '[LOREM IPSUM] Descripción detallada del eje temático de Desarrollo Urbano Sostenible. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      descripcionCorta: '[LOREM IPSUM] Ciudades y comunidades inclusivas, seguras, resilientes y sostenibles.',
      ods: [
        { numero: 11, nombre: 'Ciudades y Comunidades Sostenibles', icono: faCity },
      ],
      color: '#7b1fa2',
      imagen: '/img/4.jpg',
    },
    {
      titulo: '[LOREM IPSUM] Eje Temático: Gobernanza y Participación',
      descripcion:
        '[LOREM IPSUM] Descripción detallada del eje temático de Gobernanza y Participación. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      descripcionCorta: '[LOREM IPSUM] Fortalecimiento de instituciones y alianzas para el desarrollo sostenible.',
      ods: [
        { numero: 16, nombre: 'Paz, Justicia e Instituciones Sólidas', icono: faHandshake },
        { numero: 17, nombre: 'Alianzas para Lograr los Objetivos', icono: faHandshake },
      ],
      color: '#c62828',
      imagen: '/img/5.jpg',
    },
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
            [LOREM IPSUM] Ejes Temáticos
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '800px', mx: 'auto', fontFamily: 'Montserrat, sans-serif' }}>
            [LOREM IPSUM] Conoce nuestras líneas de trabajo y los Objetivos de Desarrollo
            Sostenible (ODS) asociados a cada eje temático.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        {/* Lista de Ejes Temáticos con diseño alternado */}
        {ejesTematicos.map((eje, index) => {
          const isEven = index % 2 === 0;
          return (
            <Box
              key={index}
              sx={{
                mb: { xs: 6, md: 12 },
                position: 'relative',
              }}
            >
              <Grid
                container
                spacing={0}
                sx={{
                  alignItems: 'center',
                  minHeight: { xs: 'auto', md: '500px' },
                  flexDirection: { xs: 'column', md: isEven ? 'row' : 'row-reverse' },
                }}
              >
                {/* Imagen */}
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      position: 'relative',
                      height: { xs: '300px', md: '500px' },
                      width: '100%',
                      overflow: 'hidden',
                      borderRadius: { xs: '8px 8px 0 0', md: isEven ? '8px 0 0 8px' : '0 8px 8px 0' },
                    }}
                  >
                    <Box
                      component="img"
                      src={eje.imagen}
                      alt={eje.titulo}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    {/* Overlay con gradiente */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${eje.color}40 0%, transparent 100%)`,
                      }}
                    />
                    {/* Icono grande decorativo */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        opacity: 0.1,
                      }}
                    >
                      <FontAwesomeIcon
                        icon={eje.ods[0].icono}
                        style={{ fontSize: '150px', color: eje.color }}
                      />
                    </Box>
                  </Box>
                </Grid>

                {/* Contenido */}
                <Grid item xs={12} md={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 4, md: 6 },
                      height: { xs: 'auto', md: '500px' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      backgroundColor: '#ffffff',
                      borderRadius: { xs: '0 0 8px 8px', md: isEven ? '0 8px 8px 0' : '8px 0 0 8px' },
                      border: '1px solid #e8f5e9',
                      borderLeft: { xs: 'none', md: isEven ? 'none' : `4px solid ${eje.color}` },
                      borderRight: { xs: 'none', md: isEven ? `4px solid ${eje.color}` : 'none' },
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: 4,
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    {/* Número del eje */}
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        backgroundColor: `${eje.color}15`,
                        mb: 3,
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: eje.color,
                        }}
                      >
                        {index + 1}
                      </Typography>
                    </Box>

                    {/* Título */}
                    <Typography
                      variant="h4"
                      component="h2"
                      sx={{
                        fontWeight: 700,
                        color: eje.color,
                        mb: 2,
                        fontSize: { xs: '1.75rem', md: '2rem' },
                      }}
                    >
                      {eje.titulo}
                    </Typography>

                    {/* Descripción corta */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#424242',
                        mb: 3,
                        fontWeight: 400,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                      }}
                    >
                      {eje.descripcionCorta}
                    </Typography>

                    {/* Descripción completa */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#2d2d2d',
                        lineHeight: 1.8,
                        mb: 4,
                      }}
                    >
                      {eje.descripcion}
                    </Typography>

                    {/* ODS Asociados */}
                    <Box>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          color: '#009155',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          fontSize: '0.85rem',
                        }}
                      >
                        ODS Asociados
                      </Typography>
                      <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                        {eje.ods.map((ods, odsIndex) => (
                          <Chip
                            key={odsIndex}
                            icon={
                              <FontAwesomeIcon
                                icon={ods.icono}
                                style={{ color: eje.color, fontSize: '14px' }}
                              />
                            }
                            label={`ODS ${ods.numero}`}
                            sx={{
                              backgroundColor: `${eje.color}10`,
                              color: eje.color,
                              border: `1.5px solid ${eje.color}40`,
                              fontWeight: 600,
                              fontSize: '0.875rem',
                              height: '36px',
                              '& .MuiChip-icon': {
                                color: eje.color,
                              },
                              '&:hover': {
                                backgroundColor: `${eje.color}20`,
                                borderColor: eje.color,
                              },
                            }}
                          />
                        ))}
                      </Stack>
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          mt: 1.5,
                          color: '#999999',
                          fontStyle: 'italic',
                        }}
                      >
                        {eje.ods.map((ods) => `ODS ${ods.numero}: ${ods.nombre}`).join(' • ')}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          );
        })}

        {/* Sección de Información Adicional */}
        <Box
          sx={{
            mt: { xs: 6, md: 12 },
            position: 'relative',
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              backgroundColor: '#f1f8f4',
              border: '2px solid #00bed6',
              borderRadius: 3,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'linear-gradient(90deg, #00bed6, #6abf4b, #07a7ff)',
              },
            }}
          >
            <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: '#009155',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                [LOREM IPSUM] Sobre los Objetivos de Desarrollo Sostenible (ODS)
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#424242',
                  lineHeight: 1.9,
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                }}
              >
                [LOREM IPSUM] Los Objetivos de Desarrollo Sostenible (ODS) son un conjunto de 17
                objetivos globales establecidos por las Naciones Unidas para abordar los desafíos
                sociales, económicos y ambientales. Nuestro trabajo está alineado con estos objetivos
                para contribuir al desarrollo sostenible y crear un futuro mejor para todos.
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default EjesTematicosPage;

