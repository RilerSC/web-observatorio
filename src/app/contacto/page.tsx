'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Divider,
} from '@mui/material';
import { Email, Phone, LocationOn, Schedule } from '@mui/icons-material';
import ContactForm from '@/components/UI/ContactForm';

const ContactoPage: React.FC = () => {
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
            [LOREM IPSUM] Contacto
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '800px', mx: 'auto', fontFamily: 'Montserrat, sans-serif' }}>
            [LOREM IPSUM] Estamos aquí para ayudarte. Contáctanos para más información sobre el
            Observatorio de Sostenibilidad.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Información de Contacto */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
              [LOREM IPSUM] Información de Contacto
            </Typography>

            <Paper elevation={2} sx={{ p: 4, mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <Email
                  sx={{
                    fontSize: 28,
                    color: '#00bed6',
                    mr: 2,
                    mt: 0.5,
                  }}
                />
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Correo Electrónico
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#2d2d2d', fontFamily: 'Montserrat, sans-serif' }}>
                    contacto@observatorio.edu
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#999999', mt: 0.5 }}>
                    [LOREM IPSUM] Para consultas generales
                  </Typography>
                </Box>
              </Box>
            </Paper>

            <Paper elevation={2} sx={{ p: 4, mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <Phone
                  sx={{
                    fontSize: 28,
                    color: '#00bed6',
                    mr: 2,
                    mt: 0.5,
                  }}
                />
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Teléfono
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#2d2d2d', fontFamily: 'Montserrat, sans-serif' }}>
                    +57 (1) 123 4567
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#999999', mt: 0.5 }}>
                    [LOREM IPSUM] Lunes a Viernes, 8:00 AM - 5:00 PM
                  </Typography>
                </Box>
              </Box>
            </Paper>

            <Paper elevation={2} sx={{ p: 4, mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <LocationOn
                  sx={{
                    fontSize: 28,
                    color: '#00bed6',
                    mr: 2,
                    mt: 0.5,
                  }}
                />
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Dirección
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#2d2d2d', fontFamily: 'Montserrat, sans-serif' }}>
                    [LOREM IPSUM] Dirección institucional del Observatorio de Sostenibilidad
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#999999', mt: 0.5 }}>
                    [LOREM IPSUM] Ciudad, País
                  </Typography>
                </Box>
              </Box>
            </Paper>

            <Paper elevation={2} sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Schedule
                  sx={{
                    fontSize: 28,
                    color: '#00bed6',
                    mr: 2,
                    mt: 0.5,
                  }}
                />
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Horario de Atención
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#2d2d2d', fontFamily: 'Montserrat, sans-serif' }}>
                    Lunes a Viernes: 8:00 AM - 5:00 PM
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#2d2d2d', fontFamily: 'Montserrat, sans-serif' }}>
                    Sábados: 9:00 AM - 1:00 PM
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#999999', mt: 0.5 }}>
                    [LOREM IPSUM] Cerrado los domingos y días festivos
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Formulario de Contacto */}
          <Grid item xs={12} md={7}>
            <ContactForm />
          </Grid>
        </Grid>

        <Divider sx={{ my: 8 }} />

        {/* Mapa o Información Adicional (Placeholder) */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            [LOREM IPSUM] Ubicación
          </Typography>
          <Paper
            elevation={2}
            sx={{
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f5f5f5',
            }}
          >
            <Typography variant="body1" sx={{ color: '#999999' }}>
              [LOREM IPSUM] Mapa de ubicación del Observatorio de Sostenibilidad
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactoPage;

