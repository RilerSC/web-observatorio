'use client';

import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';
import { ScrollReveal } from './ScrollReveal';
import {
  Business,
  Public,
  TrendingUp,
  Groups,
} from '@mui/icons-material';

const impactData = [
  {
    value: 150,
    suffix: '+',
    title: 'Organizaciones',
    subtitle: 'analizadas en la región',
    color: '#00bed6',
    icon: <Business />,
  },
  {
    value: 7,
    suffix: '',
    title: 'Países',
    subtitle: 'con presencia activa',
    color: '#6abf4b',
    icon: <Public />,
  },
  {
    value: 500,
    suffix: '+',
    title: 'Indicadores',
    subtitle: 'de sostenibilidad monitoreados',
    color: '#00bed6',
    icon: <TrendingUp />,
  },
  {
    value: 25,
    suffix: '+',
    title: 'Alianzas',
    subtitle: 'estratégicas activas',
    color: '#6abf4b',
    icon: <Groups />,
  },
];

export const ImpactSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
        // Fondo con gradiente orgánico
        background: `
          linear-gradient(135deg, rgba(10, 22, 35, 0.97) 0%, rgba(10, 22, 35, 0.95) 100%),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300bed6' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
        `,
        backgroundColor: '#0a1623',
      }}
    >
      {/* Elementos decorativos animados */}
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
          top: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 190, 214, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
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
          bottom: '-20%',
          left: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(106, 191, 75, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
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
              NUESTRO IMPACTO
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                color: '#FFFFFF',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.75rem', md: '2.5rem' },
              }}
            >
              Transformando datos en acciones sostenibles
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontFamily: 'Montserrat, sans-serif',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Medimos el impacto real de las organizaciones para construir un futuro más sostenible
            </Typography>
          </Box>
        </ScrollReveal>

        <Grid container spacing={4}>
          {impactData.map((item, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box
                sx={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: 3,
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.12)',
                    transform: 'translateY(-8px)',
                    borderColor: item.color,
                    boxShadow: `0 12px 40px rgba(0, 0, 0, 0.4), 0 0 20px ${item.color}40`,
                  },
                }}
              >
                <AnimatedCounter
                  value={item.value}
                  suffix={item.suffix}
                  title={item.title}
                  subtitle={item.subtitle}
                  color={item.color}
                  icon={item.icon}
                  duration={2.5}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ImpactSection;

