'use client';

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Chip,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faRecycle,
  faPalette,
  faCity,
  faBriefcase,
  faIndustry,
  faLightbulb,
  faTree,
} from '@fortawesome/free-solid-svg-icons';

const EjesTematicosPage: React.FC = () => {
  const [openModal, setOpenModal] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    setOpenModal(index);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  const ejesTematicos = [
    {
      titulo: 'Modelos de negocio de impacto positivo',
      descripcion:
        'Este eje analiza cómo empresas y organizaciones en Costa Rica integran criterios ambientales, sociales y de gobernanza (ESG) en su estrategia y operación, considerando la medición de impactos humanos y digitales. El Observatorio evalúa su influencia sobre la competitividad, innovación, liderazgo responsable, cadenas de valor sostenibles, economía circular y transparencia.',
      descripcionCorta: 'Análisis de empresas que integran criterios ESG y generan valor económico sin sacrificar el bienestar social ni el equilibrio ecológico.',
      ambitos: [
        'Evaluación del desempeño social y ambiental del ecosistema empresarial.',
        'Gobernanza con propósito y ética corporativa.',
        'Transformación organizacional hacia modelos regenerativos.',
        'Análisis comparativo entre sectores y regiones.',
        'Posicionamiento empresarial y hoja de ruta para la comprensión y gobernanza de la huella de carbono digital, huella hídrica y huella residual (e-waste).',
      ],
      proposito: 'Promover modelos empresariales que generen valor económico sin sacrificar el bienestar social ni el equilibrio ecológico.',
      ods: [
        { numero: 8, nombre: 'Trabajo Decente y Crecimiento Económico', icono: faBriefcase },
        { numero: 12, nombre: 'Producción y Consumo Responsables', icono: faRecycle },
        { numero: 17, nombre: 'Alianzas para Lograr los Objetivos', icono: faChartLine },
      ],
      color: '#07a7ff',
      imagen: '/img/1.jpg',
      iconoPrincipal: faChartLine,
    },
    {
      titulo: 'Nuevos modelos económicos',
      descripcion:
        'Este eje se enfoca en emprendimientos que resuelven retos ambientales y sociales mediante innovación tecnológica, circularidad y uso eficiente de recursos. Se analiza cómo estas iniciativas escalan, acceden a financiamiento y crean empleos en economías verde, azul, naranja y circular, fortaleciendo una economía baja en carbono, consumo de agua y resiliente.',
      descripcionCorta: 'Emprendimientos sostenibles que resuelven retos ambientales y sociales mediante innovación tecnológica y circularidad.',
      ambitos: [
        'Diagnóstico de empresas y ecosistemas emprendedores sostenibles.',
        'Medición del impacto ambiental, social y digital de emprendimientos verdes.',
        'Mapeo de oportunidades de economía circular y sostenibilidad digital en sectores clave.',
        'Identificación de barreras, culturales, financieras, digitales y regulatorias.',
      ],
      proposito: 'Impulsar el emprendimiento sostenible como motor de desarrollo económico, resiliencia y competitividad.',
      ods: [
        { numero: 7, nombre: 'Energía Asequible y No Contaminante', icono: faLightbulb },
        { numero: 9, nombre: 'Industria, Innovación e Infraestructura', icono: faIndustry },
        { numero: 12, nombre: 'Producción y Consumo Responsables', icono: faRecycle },
      ],
      color: '#6abf4b',
      imagen: '/img/2.jpg',
      iconoPrincipal: faRecycle,
    },
    {
      titulo: 'Economía Naranja y Cultura para la Sostenibilidad',
      descripcion:
        'Este eje explora la integración de creatividad, cultura, innovación social y desarrollo sostenible. La economía naranja —que agrupa industrias culturales, creativas y tecnológicas— se considera motor para transformar comportamientos, activar nuevas narrativas y fomentar transiciones sociales hacia la sostenibilidad.',
      descripcionCorta: 'Integración de creatividad, cultura e innovación social como motor para transformar comportamientos hacia la sostenibilidad.',
      ambitos: [
        'Industrias culturales como agentes de sensibilización ambiental.',
        'Innovación creativa con énfasis social y climático.',
        'Mapeo de sectores creativos de impacto económico y ambiental.',
        'Proyectos de educación, comunicación y cambio cultural.',
      ],
      proposito: 'Demostrar que la sostenibilidad también se construye desde la cultura, el arte, la creatividad y la inteligencia colectiva.',
      ods: [
        { numero: 4, nombre: 'Educación de Calidad', icono: faLightbulb },
        { numero: 8, nombre: 'Trabajo Decente y Crecimiento Económico', icono: faBriefcase },
        { numero: 11, nombre: 'Ciudades y Comunidades Sostenibles', icono: faCity },
      ],
      color: '#00bed6',
      imagen: '/img/3.jpg',
      iconoPrincipal: faPalette,
    },
    {
      titulo: 'Estrategias de restauración eco-social y sostenibilidad urbana',
      descripcion:
        'Este eje aborda la planificación urbana sostenible considerando movilidad limpia, infraestructura verde, gestión de residuos, energía, calidad del aire, resiliencia climática y calidad de vida. El Observatorio identifica buenas prácticas, brechas y soluciones para avanzar hacia ciudades inclusivas, inteligentes y bajas en carbono, alineadas con la Nueva Agenda Urbana y el ODS 11.',
      descripcionCorta: 'Planificación urbana sostenible para avanzar hacia ciudades inclusivas, inteligentes y bajas en carbono.',
      ambitos: [
        'Movilidad limpia y transporte sostenible.',
        'Infraestructura verde y espacios públicos.',
        'Gestión integral de residuos y economía circular urbana.',
        'Energía renovable y eficiencia energética en entornos urbanos.',
        'Calidad del aire y resiliencia climática.',
        'Calidad de vida y bienestar urbano.',
      ],
      proposito: 'Identificar buenas prácticas y soluciones para avanzar hacia ciudades inclusivas, inteligentes y bajas en carbono.',
      ods: [
        { numero: 11, nombre: 'Ciudades y Comunidades Sostenibles', icono: faCity },
        { numero: 13, nombre: 'Acción por el Clima', icono: faTree },
        { numero: 15, nombre: 'Vida de Ecosistemas Terrestres', icono: faTree },
      ],
      color: '#009155',
      imagen: '/img/4.jpg',
      iconoPrincipal: faCity,
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
            Ejes Temáticos
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '900px', mx: 'auto', fontFamily: 'Montserrat, sans-serif', lineHeight: 1.7 }}>
            El Observatorio de Sostenibilidad de Costa Rica estructura su trabajo en cuatro ejes estratégicos que incorporan las dinámicas más transformadoras de la economía contemporánea, incluyendo en todos los casos el ámbito digital: modelos de negocio de impacto positivo, nuevos modelos económicos (verde, azul, circular), economía creativa y restauración eco-social.
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
                        icon={eje.iconoPrincipal}
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
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                    >
                      {eje.titulo}
                    </Typography>

                    {/* Descripción corta */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#2d2d2d',
                        lineHeight: 1.8,
                        mb: 3,
                        fontFamily: 'Montserrat, sans-serif',
                        flexGrow: 1,
                      }}
                    >
                      {eje.descripcionCorta}
                    </Typography>

                    {/* ODS Asociados */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          mb: 1.5,
                          color: '#009155',
                          textTransform: 'uppercase',
                          letterSpacing: 0.5,
                          fontSize: '0.8rem',
                          fontFamily: 'Montserrat, sans-serif',
                        }}
                      >
                        ODS Asociados
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {eje.ods.map((ods, odsIndex) => (
                          <Chip
                            key={odsIndex}
                            icon={
                              <FontAwesomeIcon
                                icon={ods.icono}
                                style={{ color: eje.color, fontSize: '12px' }}
                              />
                            }
                            label={`ODS ${ods.numero}`}
                            size="small"
                            sx={{
                              backgroundColor: `${eje.color}10`,
                              color: eje.color,
                              border: `1.5px solid ${eje.color}40`,
                              fontWeight: 600,
                              fontSize: '0.75rem',
                              height: '28px',
                              fontFamily: 'Montserrat, sans-serif',
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
                    </Box>

                    {/* Botón Leer más */}
                    <Button
                      variant="outlined"
                      onClick={() => handleOpenModal(index)}
                      sx={{
                        mt: 'auto',
                        borderColor: eje.color,
                        color: eje.color,
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        textTransform: 'none',
                        px: 3,
                        py: 1,
                        '&:hover': {
                          borderColor: eje.color,
                          backgroundColor: `${eje.color}10`,
                        },
                      }}
                    >
                      Leer más
                    </Button>
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
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Sobre los Objetivos de Desarrollo Sostenible (ODS)
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#424242',
                  lineHeight: 1.9,
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Los Objetivos de Desarrollo Sostenible (ODS) son un conjunto de 17 objetivos globales
                establecidos por las Naciones Unidas para abordar los desafíos sociales, económicos y
                ambientales. Nuestro trabajo está alineado con estos objetivos para contribuir al
                desarrollo sostenible y crear un futuro mejor para todos. Estos ejes permiten
                comprender cómo Costa Rica avanza hacia una economía más inclusiva, regenerativa y
                orientada al propósito.
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/* Modal para contenido completo */}
        {openModal !== null && (
          <Dialog
            open={openModal !== null}
            onClose={handleCloseModal}
            maxWidth="md"
            fullWidth
            PaperProps={{
              sx: {
                borderRadius: 3,
              },
            }}
          >
            <DialogTitle
              sx={{
                backgroundColor: ejesTematicos[openModal].color,
                color: '#ffffff',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pr: 1,
              }}
            >
              {ejesTematicos[openModal].titulo}
              <IconButton
                onClick={handleCloseModal}
                sx={{
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: 4, fontFamily: 'Montserrat, sans-serif' }}>
              {/* Descripción completa */}
              <Typography
                variant="body1"
                sx={{
                  color: '#2d2d2d',
                  lineHeight: 1.9,
                  mb: 4,
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1.05rem',
                }}
              >
                {ejesTematicos[openModal].descripcion}
              </Typography>

              {/* Ámbitos de trabajo */}
              {ejesTematicos[openModal].ambitos && (
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: ejesTematicos[openModal].color,
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '1.1rem',
                    }}
                  >
                    Ámbitos de trabajo:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, m: 0 }}>
                    {ejesTematicos[openModal].ambitos?.map((ambito, ambitoIndex) => (
                      <Typography
                        key={ambitoIndex}
                        component="li"
                        variant="body1"
                        sx={{
                          color: '#414042',
                          lineHeight: 1.9,
                          mb: 1.5,
                          fontFamily: 'Montserrat, sans-serif',
                        }}
                      >
                        {ambito}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              )}

              {/* Propósito */}
              {ejesTematicos[openModal].proposito && (
                <Box
                  sx={{
                    mb: 3,
                    p: 3,
                    backgroundColor: `${ejesTematicos[openModal].color}10`,
                    borderLeft: `4px solid ${ejesTematicos[openModal].color}`,
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      mb: 1.5,
                      color: ejesTematicos[openModal].color,
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '1.1rem',
                    }}
                  >
                    Propósito:
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#2d2d2d',
                      lineHeight: 1.8,
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '1.05rem',
                    }}
                  >
                    {ejesTematicos[openModal].proposito}
                  </Typography>
                </Box>
              )}

              {/* ODS Asociados */}
              <Box sx={{ mt: 4, pt: 3, borderTop: '2px solid #e0e0e0' }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: '#009155',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '1.1rem',
                  }}
                >
                  ODS Asociados:
                </Typography>
                <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                  {ejesTematicos[openModal].ods.map((ods, odsIndex) => (
                    <Chip
                      key={odsIndex}
                      icon={
                        <FontAwesomeIcon
                          icon={ods.icono}
                          style={{ color: ejesTematicos[openModal].color, fontSize: '16px' }}
                        />
                      }
                      label={`ODS ${ods.numero}`}
                      sx={{
                        backgroundColor: `${ejesTematicos[openModal].color}15`,
                        color: ejesTematicos[openModal].color,
                        border: `2px solid ${ejesTematicos[openModal].color}40`,
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        height: '40px',
                        fontFamily: 'Montserrat, sans-serif',
                        '& .MuiChip-icon': {
                          color: ejesTematicos[openModal].color,
                        },
                      }}
                    />
                  ))}
                </Stack>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666666',
                    fontFamily: 'Montserrat, sans-serif',
                    fontStyle: 'italic',
                  }}
                >
                  {ejesTematicos[openModal].ods.map((ods) => `ODS ${ods.numero}: ${ods.nombre}`).join(' • ')}
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 2, px: 3 }}>
              <Button
                onClick={handleCloseModal}
                variant="contained"
                sx={{
                  backgroundColor: ejesTematicos[openModal].color,
                  color: '#ffffff',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: ejesTematicos[openModal].color,
                    opacity: 0.9,
                  },
                }}
              >
                Cerrar
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Container>
    </Box>
  );
};

export default EjesTematicosPage;

