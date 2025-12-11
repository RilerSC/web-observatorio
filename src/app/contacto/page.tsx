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
            Contacto
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '800px', mx: 'auto', fontFamily: 'Montserrat, sans-serif' }}>
            Estamos aquí para ayudarte. Contáctanos para más información sobre el
            Observatorio de Sostenibilidad.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Información de Contacto */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
              Información de Contacto
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
                    lgomez@fundepos.ac.cr
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#999999', mt: 0.5 }}>
                    Para consultas generales
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
                  +506 4001 9254                  </Typography>
                  <Typography variant="body2" sx={{ color: '#999999', mt: 0.5 }}>
                    Lunes a Viernes, 8:00 AM - 5:00 PM
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
                  Torre Mercedes, Piso 2, San José, San Bosco, 10105
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
                  <Typography variant="body2" sx={{ color: '#999999', mt: 0.5 }}>
                    Cerrado los sabados, domingos y días festivos
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

        {/* Mapa de Ubicación */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 3,
              fontFamily: 'Montserrat, sans-serif',
              color: '#0a1623',
            }}
          >
            Ubicación
          </Typography>
          <Paper
            elevation={2}
            sx={{
              height: { xs: '300px', md: '450px' },
              overflow: 'hidden',
              borderRadius: 2,
            }}
          >
            <Box
              component="iframe"
              src={`https://www.google.com/maps?q=9.9349941,-84.0914604&z=18&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sx={{
                display: 'block',
              }}
            />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactoPage;

