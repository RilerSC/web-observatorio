'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MuiLink,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#414042',
        color: '#FFFFFF',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Logo y Descripción */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 2 }}>
              <Image
                src="/logos/LOGO_COLOR.svg"
                alt="Logo Observatorio de Sostenibilidad"
                width={200}
                height={70}
                style={{ objectFit: 'contain' }}
              />
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 2, fontFamily: 'Montserrat, sans-serif', lineHeight: 1.7 }}>
              Iniciativa académica y empresarial que monitorea, analiza y promueve el impacto sostenible de las organizaciones en Costa Rica y la región. Transformamos información en acción sostenible mediante ciencia de datos e inteligencia artificial.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <MuiLink href="#" sx={{ color: '#FFFFFF', '&:hover': { color: '#00bed6' } }}>
                <Facebook />
              </MuiLink>
              <MuiLink href="#" sx={{ color: '#FFFFFF', '&:hover': { color: '#00bed6' } }}>
                <Twitter />
              </MuiLink>
              <MuiLink href="#" sx={{ color: '#FFFFFF', '&:hover': { color: '#00bed6' } }}>
                <Instagram />
              </MuiLink>
              <MuiLink href="#" sx={{ color: '#FFFFFF', '&:hover': { color: '#00bed6' } }}>
                <LinkedIn />
              </MuiLink>
            </Box>
          </Grid>

          {/* Logo FUNDEPOS */}
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'flex-start', md: 'center' },
                height: '100%',
                pt: { xs: 0, md: 2 },
              }}
            >
              <MuiLink
                href="https://fundepos.ac.cr"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'block',
                  transition: 'opacity 0.3s ease',
                  '&:hover': {
                    opacity: 0.8,
                  },
                }}
              >
                <Image
                  src="/logos/fundepos-blanco.png"
                  alt="Universidad FUNDEPOS"
                  width={200}
                  height={80}
                  style={{ objectFit: 'contain' }}
                />
              </MuiLink>
            </Box>
          </Grid>

          {/* Enlaces Rápidos */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}>
              Enlaces Rápidos
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink
                component={Link}
                href="/nosotros"
                underline="hover"
                sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Montserrat, sans-serif', '&:hover': { color: '#00bed6' } }}
              >
                Nosotros
              </MuiLink>
              <MuiLink
                component={Link}
                href="/ejes-tematicos"
                underline="hover"
                sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Montserrat, sans-serif', '&:hover': { color: '#00bed6' } }}
              >
                Ejes Temáticos
              </MuiLink>
              <MuiLink
                component={Link}
                href="/noticias"
                underline="hover"
                sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Montserrat, sans-serif', '&:hover': { color: '#00bed6' } }}
              >
                Noticias
              </MuiLink>
              <MuiLink
                component={Link}
                href="/contacto"
                underline="hover"
                sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Montserrat, sans-serif', '&:hover': { color: '#00bed6' } }}
              >
                Contacto
              </MuiLink>
            </Box>
          </Grid>

          {/* Información Legal */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}>
              Información Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink
                href="#"
                underline="hover"
                sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Montserrat, sans-serif', '&:hover': { color: '#00bed6' } }}
              >
                Política de Privacidad
              </MuiLink>
              <MuiLink
                href="#"
                underline="hover"
                sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Montserrat, sans-serif', '&:hover': { color: '#00bed6' } }}
              >
                Términos y Condiciones
              </MuiLink>
              <MuiLink
                href="#"
                underline="hover"
                sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Montserrat, sans-serif', '&:hover': { color: '#00bed6' } }}
              >
                Aviso Legal
              </MuiLink>
            </Box>
          </Grid>

          {/* Contacto */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}>
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ fontSize: 20, color: '#00bed6' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Montserrat, sans-serif' }}>
                  contacto@observatorio.edu
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ fontSize: 20, color: '#00bed6' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Montserrat, sans-serif' }}>
                  +57 (1) 123 4567
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOn sx={{ fontSize: 20, color: '#00bed6', mt: 0.5 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Montserrat, sans-serif' }}>
                  Dirección institucional del Observatorio de Sostenibilidad
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'Montserrat, sans-serif' }}>
            © {new Date().getFullYear()} Observatorio de Sostenibilidad. Todos los derechos
            reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

