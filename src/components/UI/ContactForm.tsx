'use client';

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'El correo no es válido';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Simulación de envío (aquí iría la lógica real de envío)
    try {
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      setSubmitStatus('success');
      setFormData({ nombre: '', correo: '', mensaje: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
        [LOREM IPSUM] Formulario de Contacto
      </Typography>

      {submitStatus === 'success' && (
        <Alert severity="success" sx={{ mb: 3 }}>
          ¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.
        </Alert>
      )}

      {submitStatus === 'error' && (
        <Alert severity="error" sx={{ mb: 3 }}>
          Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Nombre Completo"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          error={!!errors.nombre}
          helperText={errors.nombre}
          fullWidth
          required
          variant="outlined"
        />

        <TextField
          label="Correo Electrónico"
          name="correo"
          type="email"
          value={formData.correo}
          onChange={handleChange}
          error={!!errors.correo}
          helperText={errors.correo}
          fullWidth
          required
          variant="outlined"
        />

        <TextField
          label="Mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          error={!!errors.mensaje}
          helperText={errors.mensaje}
          fullWidth
          required
          multiline
          rows={6}
          variant="outlined"
          placeholder="[LOREM IPSUM] Escribe tu mensaje aquí..."
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          endIcon={<SendIcon />}
            sx={{
              mt: 2,
              py: 1.5,
              backgroundColor: '#00bed6',
              fontFamily: 'Montserrat, sans-serif',
              '&:hover': {
                backgroundColor: '#0099b3',
              },
            }}
        >
          Enviar Mensaje
        </Button>
      </Box>
    </Paper>
  );
};

export default ContactForm;

