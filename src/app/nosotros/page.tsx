'use client';

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from '@mui/material';
import { MdClose } from 'react-icons/md';
import { 
  FaLightbulb, 
  FaHandshake, 
  FaShieldAlt, 
  FaBalanceScale, 
  FaFlask, 
  FaLeaf, 
  FaEye 
} from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import TeamMemberCard from '@/components/Team/TeamMemberCard';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/UI/ScrollReveal';
import equipoData from '@/data/equipo.json';
import alianzasData from '@/data/alianzas.json';

const NosotrosPage: React.FC = () => {
  const [openModalEquipo, setOpenModalEquipo] = useState<number | null>(null);
  const [openModalAlianza, setOpenModalAlianza] = useState<number | null>(null);

  const handleOpenModalEquipo = (index: number) => {
    setOpenModalEquipo(index);
  };

  const handleCloseModalEquipo = () => {
    setOpenModalEquipo(null);
  };

  const handleOpenModalAlianza = (index: number) => {
    setOpenModalAlianza(index);
  };

  const handleCloseModalAlianza = () => {
    setOpenModalAlianza(null);
  };

  const valores = [
    {
      titulo: 'Transparencia',
      descripcion:
        'Compromiso con la honestidad y la claridad en todas nuestras investigaciones, comunicaciones y decisiones.',
      icono: FaEye,
      color: '#00bed6',
    },
    {
      titulo: 'Innovación',
      descripcion:
        'Fomento de la creatividad y el desarrollo de soluciones novedosas para los desafíos asociados al cumplimiento de los objetivos de desarrollo sostenible.',
      icono: FaLightbulb,
      color: '#6abf4b',
    },
    {
      titulo: 'Colaboración',
      descripcion:
        'Promoción del trabajo conjunto entre comunidades, sectores públicos y privados y organizaciones internacionales.',
      icono: FaHandshake,
      color: '#00bed6',
    },
    {
      titulo: 'Responsabilidad',
      descripcion:
        'Compromiso con la responsabilidad social, económica y ambiental en todas nuestras acciones y recomendaciones.',
      icono: FaShieldAlt,
      color: '#6abf4b',
    },
    {
      titulo: 'Equidad',
      descripcion:
        'Asegurar que nuestras iniciativas y propuestas beneficien equitativamente a todas las partes, especialmente a las comunidades más vulnerables.',
      icono: FaBalanceScale,
      color: '#00bed6',
    },
    {
      titulo: 'Ciencia y evidencia',
      descripcion:
        'Basar nuestras decisiones y políticas en datos científicos sólidos y en evidencia comprobada.',
      icono: FaFlask,
      color: '#6abf4b',
    },
    {
      titulo: 'Resiliencia',
      descripcion:
        'Promoción de prácticas que fortalezcan la capacidad de adaptación y recuperación ante cambios y desafíos futuros relacionados a la sostenibilidad.',
      icono: FaLeaf,
      color: '#00bed6',
    },
  ];

  const equipo = equipoData;
  const alianzas = alianzasData;

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          color: '#ffffff',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          overflow: 'hidden',
          background: `
            linear-gradient(135deg, #0a1623 0%, #0d2137 50%, #0a1623 100%)
          `,
        }}
      >
        {/* Elementos decorativos */}
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
            top: '-30%',
            right: '-10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(106, 191, 75, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          sx={{
            position: 'absolute',
            bottom: '-30%',
            left: '-10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 190, 214, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
              CONÓCENOS
            </Typography>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 3, fontFamily: 'Montserrat, sans-serif' }}>
              Nosotros
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '900px', mx: 'auto', fontFamily: 'Montserrat, sans-serif', lineHeight: 1.8 }}>
              El Observatorio de Sostenibilidad surge como una iniciativa académica, empresarial y colaborativa orientada a monitorear, analizar y promover el impacto ambiental, social, económico, humano y digital de las organizaciones en Costa Rica y la región.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Box
        sx={{
          position: 'relative',
          py: { xs: 6, md: 8 },
          background: 'linear-gradient(180deg, #FFFFFF 0%, #f8fdf6 100%)',
        }}
      >
        <Container maxWidth="lg">
        {/* Sección Sobre el Observatorio */}
        <Box sx={{ mb: 10 }}>
          <ScrollReveal>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                textAlign: 'center',
                mb: 4,
                fontWeight: 700,
                color: '#0a1623',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Sobre el Observatorio
            </Typography>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 5 },
                background: 'linear-gradient(135deg, #f8fffe 0%, #f0f9f4 100%)',
                border: '1px solid rgba(106, 191, 75, 0.2)',
                borderRadius: 4,
                mb: 6,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decoración sutil */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0, 190, 214, 0.1) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: '#2d2d2d',
                  lineHeight: 1.9,
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1.05rem',
                  mb: 3,
                  position: 'relative',
                }}
              >
                El Observatorio de Sostenibilidad surge como una iniciativa académica, empresarial y
                colaborativa orientada a monitorear, analizar y promover el impacto ambiental, social,
                económico, humano y digital de las organizaciones en Costa Rica y la región,
                apoyándose en la ciencia de datos y la inteligencia artificial.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#2d2d2d',
                  lineHeight: 1.9,
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1.05rem',
                  mb: 3,
                }}
              >
                Nuestro propósito es ofrecer información confiable y herramientas de análisis que
                impulsen la mejora continua, la innovación sostenible y la toma de decisiones
                estratégicas basadas en evidencia.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#2d2d2d',
                  lineHeight: 1.9,
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1.05rem',
                }}
              >
                En alianza con la Universidad FUNDEPOS, Tactik Global Marketing Services, la Red GCE
                (Red Internacional de Investigación en Gestión del Conocimiento Empresarial) y
                Naturally Digital, el Observatorio consolida un espacio de cooperación
                interinstitucional que fomenta la investigación aplicada, la innovación responsable y
                la articulación entre academia, empresa y sociedad.
              </Typography>
            </Paper>
          </ScrollReveal>

          {/* Beneficios */}
          <ScrollReveal delay={0.2}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{
                textAlign: 'center',
                mb: 4,
                fontWeight: 700,
                color: '#009155',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Beneficios
            </Typography>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1}>
            <Grid container spacing={3}>
              {[
                {
                  titulo: 'Proyección institucional',
                  descripcion:
                    'Fortalece la imagen local e internacional en las dimensiones económica, ambiental, social, humana, digital y de gobernanza.',
                  color: '#07a7ff',
                },
                {
                  titulo: 'Investigación e innovación',
                  descripcion:
                    'Impulsa proyectos sostenibles y facilita la atracción de fondos y colaboraciones externas.',
                  color: '#6abf4b',
                },
                {
                  titulo: 'Formación de talento',
                  descripcion:
                    'Inspira a nuevas generaciones comprometidas con la sostenibilidad y la transformación organizacional.',
                  color: '#00bed6',
                },
                {
                  titulo: 'Liderazgo regional',
                  descripcion: 'Posicionarse como referente en sostenibilidad.',
                  color: '#009155',
                },
              ].map((beneficio, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <StaggerItem>
                    <Card
                      component={motion.div}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      sx={{
                        height: '100%',
                        textAlign: 'center',
                        p: 3,
                        borderRadius: 3,
                        borderTop: `4px solid ${beneficio.color}`,
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                        '&:hover': {
                          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontWeight: 700,
                          fontFamily: 'Montserrat, sans-serif',
                          color: beneficio.color,
                          mb: 2,
                        }}
                      >
                        {beneficio.titulo}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#414042',
                          fontFamily: 'Montserrat, sans-serif',
                          lineHeight: 1.7,
                        }}
                      >
                        {beneficio.descripcion}
                      </Typography>
                    </Card>
                  </StaggerItem>
                </Grid>
              ))}
            </Grid>
          </StaggerContainer>
        </Box>

        {/* Sección de Misión y Visión */}
        <Box sx={{ mb: 10 }}>
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {/* Misión */}
            <Grid item xs={12} md={6}>
              <ScrollReveal direction="left">
                <Paper
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  elevation={0}
                  sx={{
                    p: 5,
                    height: '100%',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #f8fdf6 100%)',
                    borderLeft: '4px solid #6abf4b',
                    borderRadius: 3,
                    boxShadow: '0 4px 25px rgba(0, 0, 0, 0.06)',
                    '&:hover': {
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: '#07a7ff',
                      fontFamily: 'Montserrat, sans-serif',
                      mb: 3,
                    }}
                  >
                    Misión
                  </Typography>
                  <Divider sx={{ mb: 3, borderColor: '#6abf4b' }} />
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#2d2d2d',
                      lineHeight: 1.8,
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '1.05rem',
                    }}
                  >
                    Monitorear el desarrollo sostenible mediante la investigación, el análisis y la
                    difusión de prácticas que equilibren la protección ambiental, el bienestar social
                    y el crecimiento económico, proponiendo acciones que aseguren un futuro próspero y
                    justo para todas las generaciones.
                  </Typography>
                </Paper>
              </ScrollReveal>
            </Grid>

            {/* Visión */}
            <Grid item xs={12} md={6}>
              <ScrollReveal direction="right" delay={0.1}>
                <Paper
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  elevation={0}
                  sx={{
                    p: 5,
                    height: '100%',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #f0f9ff 100%)',
                    borderLeft: '4px solid #00bed6',
                    borderRadius: 3,
                    boxShadow: '0 4px 25px rgba(0, 0, 0, 0.06)',
                    '&:hover': {
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: '#07a7ff',
                      fontFamily: 'Montserrat, sans-serif',
                      mb: 3,
                    }}
                  >
                    Visión
                  </Typography>
                  <Divider sx={{ mb: 3, borderColor: '#00bed6' }} />
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#2d2d2d',
                      lineHeight: 1.8,
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '1.05rem',
                    }}
                  >
                    Aspiramos a proponer e informar sobre las formas en que la sociedad aborda el
                    desarrollo sostenible, inspirando a todas las partes interesadas a colaborar en la
                    construcción de un mundo más equilibrado y resiliente.
                  </Typography>
                </Paper>
              </ScrollReveal>
            </Grid>
          </Grid>

          {/* Valores */}
          <ScrollReveal>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                textAlign: 'center',
                mb: 6,
                fontWeight: 700,
                color: '#0a1623',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Nuestros Valores Fundamentales
            </Typography>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.08}>
            <Grid container spacing={4}>
              {valores.map((valor, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <StaggerItem>
                    <Card
                      component={motion.div}
                      whileHover={{ y: -10, scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      sx={{
                        height: '100%',
                        textAlign: 'center',
                        p: 3,
                        borderRadius: 3,
                        borderTop: `3px solid ${valor.color}`,
                        background: 'linear-gradient(180deg, #FFFFFF 0%, #fafafa 100%)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                        '&:hover': {
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                        },
                      }}
                    >
                      <Box
                        component={motion.div}
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}
                      >
                        <valor.icono
                          style={{ fontSize: '40px', color: valor.color }}
                        />
                      </Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontWeight: 700,
                          fontFamily: 'Montserrat, sans-serif',
                          color: '#2d2d2d',
                          mb: 2,
                        }}
                      >
                        {valor.titulo}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#414042',
                          fontFamily: 'Montserrat, sans-serif',
                          lineHeight: 1.7,
                        }}
                      >
                        {valor.descripcion}
                      </Typography>
                    </Card>
                  </StaggerItem>
                </Grid>
              ))}
            </Grid>
          </StaggerContainer>
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
              background: 'linear-gradient(135deg, rgba(0, 190, 214, 0.05) 0%, rgba(106, 191, 75, 0.05) 100%)',
              borderRadius: 4,
              zIndex: 0,
            }}
          />

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            {/* Título con decoración */}
            <ScrollReveal>
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
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 60 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: '3px',
                        background: 'linear-gradient(90deg, transparent, #00bed6)',
                        borderRadius: 2,
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <Box
                      sx={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#6abf4b',
                        borderRadius: '50%',
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 60 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: '3px',
                        background: 'linear-gradient(90deg, #6abf4b, transparent)',
                        borderRadius: 2,
                      }}
                    />
                  </motion.div>
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
                  Conoce a los profesionales que lideran nuestras iniciativas en
                  sostenibilidad y desarrollo sostenible.
                </Typography>
              </Box>
            </ScrollReveal>

            {/* Grid de miembros */}
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {equipo.map((miembro, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <TeamMemberCard
                    nombre={miembro.nombre}
                    cargo={miembro.cargo}
                    bio={miembro.bio}
                    foto={miembro.foto}
                    onVerPerfil={() => handleOpenModalEquipo(index)}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Modal para perfil completo del equipo */}
        {openModalEquipo !== null && (
          <Dialog
            open={openModalEquipo !== null}
            onClose={handleCloseModalEquipo}
            maxWidth="md"
            fullWidth
            PaperProps={{
              sx:{
                borderRadius: 3,
              },
            }}
          >
            <DialogTitle
              sx={{
                backgroundColor: '#0a1623',
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
              {equipo[openModalEquipo].nombre}
              <IconButton
                onClick={handleCloseModalEquipo}
                sx={{
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <MdClose />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: 0 }}>
              {/* Imagen */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '400px',
                  overflow: 'hidden',
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={equipo[openModalEquipo].foto}
                  alt={equipo[openModalEquipo].nombre}
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                  sizes="(max-width: 768px) 100vw, 800px"
                  quality={90}
                />
              </Box>

              {/* Contenido */}
              <Box sx={{ p: 4 }}>
                {/* Cargo */}
                <Typography
                  variant="h6"
                  sx={{
                    color: '#07a7ff',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    mb: 3,
                    fontSize: '1.1rem',
                  }}
                >
                  {equipo[openModalEquipo].cargo}
                </Typography>

                {/* Biografía completa */}
                {equipo[openModalEquipo].bioCompleta?.map((parrafo, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{
                      color: '#2d2d2d',
                      lineHeight: 1.9,
                      mb: 2.5,
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '1rem',
                      textAlign: 'justify',
                    }}
                  >
                    {parrafo}
                  </Typography>
                ))}
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 2, px: 3 }}>
              <Button
                onClick={handleCloseModalEquipo}
                variant="contained"
                sx={{
                  backgroundColor: '#00bed6',
                  color: '#ffffff',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#0099b3',
                  },
                }}
              >
                Cerrar
              </Button>
            </DialogActions>
          </Dialog>
        )}

        {/* Sección de Alianzas */}
        <Box>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 3,
              fontWeight: 700,
              color: '#0a1623',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Alianzas Estratégicas
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: '#414042',
              maxWidth: '800px',
              mx: 'auto',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            A través de estas alianzas, el Observatorio proporciona datos y análisis que orienten
            políticas, estrategias y modelos de gestión sostenibles, con propósito y visión de
            futuro.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 3,
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              justifyContent: 'center',
              alignItems: 'stretch',
            }}
          >
            {alianzas.map((alianza, index) => (
              <Box
                key={index}
                sx={{
                  flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)', md: '1 1 0' },
                  minWidth: { xs: '100%', sm: 'calc(50% - 12px)', md: '200px' },
                  maxWidth: { xs: '100%', sm: 'calc(50% - 12px)', md: '240px' },
                }}
              >
                <Paper
                  elevation={2}
                  onClick={() => {
                    if (alianza.textoCompleto) {
                      handleOpenModalAlianza(index);
                    } else if (alianza.url) {
                      window.open(alianza.url, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    borderRadius: 2,
                    cursor: alianza.textoCompleto || alianza.url ? 'pointer' : 'default',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 4,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '100px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      backgroundColor: alianza.nombre === 'Red GCE' ? '#FFFFFF' : 'transparent',
                      padding: alianza.nombre === 'Red GCE' ? '8px' : '0',
                      borderRadius: alianza.nombre === 'Red GCE' ? '4px' : '0',
                    }}
                  >
                    <Image
                      src={alianza.logo}
                      alt={alianza.nombre}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                      sizes="240px"
                      quality={90}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      textAlign: 'center',
                      color: '#0a1623',
                      fontFamily: 'Montserrat, sans-serif',
                      mb: 1,
                      fontSize: '1rem',
                    }}
                  >
                    {alianza.nombre}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: 'center',
                      color: '#414042',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.875rem',
                    }}
                  >
                    {alianza.descripcion}
                  </Typography>
                  {alianza.textoCompleto && (
                    <Button
                      size="small"
                      sx={{
                        mt: 2,
                        color: '#00bed6',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: '0.8125rem',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 190, 214, 0.08)',
                        },
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModalAlianza(index);
                      }}
                    >
                      Leer más
                    </Button>
                  )}
                  {!alianza.textoCompleto && alianza.url && (
                    <Button
                      size="small"
                      sx={{
                        mt: 2,
                        color: '#00bed6',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: '0.8125rem',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 190, 214, 0.08)',
                        },
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(alianza.url, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      Visitar sitio web
                    </Button>
                  )}
                </Paper>
              </Box>
            ))}
          </Box>

          {/* Modal para alianzas con texto completo */}
          {openModalAlianza !== null && alianzas[openModalAlianza].textoCompleto && (
            <Dialog
              open={openModalAlianza !== null}
              onClose={handleCloseModalAlianza}
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
                  backgroundColor: '#0a1623',
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
                {alianzas[openModalAlianza].nombre}
                <IconButton
                  onClick={handleCloseModalAlianza}
                  sx={{
                    color: '#ffffff',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <MdClose />
                </IconButton>
              </DialogTitle>
              <DialogContent sx={{ p: 4, fontFamily: 'Montserrat, sans-serif' }}>
                {/* Logo */}
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 4,
                    height: '100px',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '200px',
                      height: '100px',
                      backgroundColor: alianzas[openModalAlianza].nombre === 'Red GCE' ? '#FFFFFF' : 'transparent',
                      padding: alianzas[openModalAlianza].nombre === 'Red GCE' ? '12px' : '0',
                      borderRadius: alianzas[openModalAlianza].nombre === 'Red GCE' ? '4px' : '0',
                    }}
                  >
                    <Image
                      src={alianzas[openModalAlianza].logo}
                      alt={alianzas[openModalAlianza].nombre}
                      fill
                      style={{
                        objectFit: 'contain',
                      }}
                      sizes="200px"
                      quality={90}
                  />
                  </Box>
                </Box>

                {/* Texto completo */}
                {alianzas[openModalAlianza].textoCompleto?.map((parrafo, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{
                      color: '#2d2d2d',
                      lineHeight: 1.9,
                      mb: 2.5,
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '1rem',
                      textAlign: 'justify',
                    }}
                  >
                    {parrafo}
                  </Typography>
                ))}
              </DialogContent>
              <DialogActions sx={{ p: 2, px: 3, gap: 1 }}>
                {alianzas[openModalAlianza].url && (
                  <Button
                    onClick={() => {
                      window.open(alianzas[openModalAlianza].url, '_blank', 'noopener,noreferrer');
                    }}
                    variant="outlined"
                    sx={{
                      borderColor: '#00bed6',
                      color: '#00bed6',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: '#00bed6',
                        backgroundColor: 'rgba(0, 190, 214, 0.08)',
                      },
                    }}
                  >
                    Visitar sitio web
                  </Button>
                )}
                <Button
                  onClick={handleCloseModalAlianza}
                  variant="contained"
                  sx={{
                    backgroundColor: '#00bed6',
                    color: '#ffffff',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#0099b3',
                    },
                  }}
                >
                  Cerrar
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default NosotrosPage;

