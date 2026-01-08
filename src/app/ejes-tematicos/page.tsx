import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import EjesContent from '@/components/Ejes/EjesContent';
import ejesTematicosData from '@/data/ejes-tematicos.json';

const EjesTematicosPage = () => {
  // Los datos se cargan en el servidor
  const ejesTematicos = ejesTematicosData;

  return (
    <Box>
      {/* Hero Section - Server Component */}
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

      {/* Contenido interactivo - Client Component */}
      <EjesContent ejesTematicos={ejesTematicos} />
    </Box>
  );
};

export default EjesTematicosPage;
