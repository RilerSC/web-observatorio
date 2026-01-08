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
import { MdClose } from 'react-icons/md';
import { 
  FaChartLine, 
  FaRecycle, 
  FaPalette, 
  FaCity, 
  FaBriefcase, 
  FaIndustry, 
  FaLightbulb, 
  FaTree 
} from 'react-icons/fa';
import Image from 'next/image';

interface ODS {
  numero: number;
  nombre: string;
}

interface EjeTematico {
  titulo: string;
  descripcion: string;
  descripcionCorta: string;
  ambitos: string[];
  proposito: string;
  ods: ODS[];
  color: string;
  imagen: string;
}

interface EjesContentProps {
  ejesTematicos: EjeTematico[];
}

export const EjesContent: React.FC<EjesContentProps> = ({ ejesTematicos }) => {
  const [openModal, setOpenModal] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    setOpenModal(index);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  // Mapeo de iconos para ODS (basado en el número del ODS)
  const odsIconMap: { [key: number]: React.ComponentType<any> } = {
    4: FaLightbulb,
    7: FaLightbulb,
    8: FaBriefcase,
    9: FaIndustry,
    11: FaCity,
    12: FaRecycle,
    13: FaTree,
    15: FaTree,
    17: FaChartLine,
  };

  // Mapeo de iconos principales por índice de eje
  const iconosPrincipales = [FaChartLine, FaRecycle, FaPalette, FaCity];

  // Mapear iconos a los ejes
  const ejesConIconos = ejesTematicos.map((eje, index) => ({
    ...eje,
    iconoPrincipal: iconosPrincipales[index],
    ods: eje.ods.map(o => ({
      ...o,
      icono: odsIconMap[o.numero] || FaLightbulb,
    })),
  }));

  return (
    <>
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        {/* Lista de Ejes Temáticos con diseño alternado */}
        {ejesConIconos.map((eje, index) => {
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
                    <Image
                      src={eje.imagen}
                      alt={eje.titulo}
                      fill
                      style={{
                        objectFit: 'cover',
                      }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                      priority={index === 0}
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
                      <eje.iconoPrincipal
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
                        mb: 3,
                        lineHeight: 1.7,
                        fontFamily: 'Montserrat, sans-serif',
                        flexGrow: 1,
                      }}
                    >
                      {eje.descripcionCorta}
                    </Typography>

                    {/* Botón Ver más */}
                    <Button
                      variant="contained"
                      onClick={() => handleOpenModal(index)}
                      sx={{
                        backgroundColor: eje.color,
                        color: '#ffffff',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        alignSelf: 'flex-start',
                        '&:hover': {
                          backgroundColor: eje.color,
                          filter: 'brightness(0.9)',
                        },
                      }}
                    >
                      Ver detalles
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Container>

      {/* Modal de detalles */}
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
        {openModal !== null && (
          <>
            <DialogTitle
              sx={{
                backgroundColor: ejesConIconos[openModal].color,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 3,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {React.createElement(ejesConIconos[openModal].iconoPrincipal, {
                    style: { fontSize: '24px', color: '#ffffff' },
                  })}
                </Box>
                <Typography variant="h5" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  {ejesConIconos[openModal].titulo}
                </Typography>
              </Box>
              <IconButton onClick={handleCloseModal} sx={{ color: '#ffffff' }}>
                <MdClose />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: 4 }}>
              {/* Descripción completa */}
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: '#2d2d2d',
                  fontFamily: 'Montserrat, sans-serif',
                  lineHeight: 1.8,
                  textAlign: 'justify',
                }}
              >
                {ejesConIconos[openModal].descripcion}
              </Typography>

              {/* Ámbitos */}
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  color: ejesConIconos[openModal].color,
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Ámbitos de trabajo:
              </Typography>
              <Box component="ul" sx={{ mb: 3, pl: 2 }}>
                {ejesConIconos[openModal].ambitos.map((ambito, idx) => (
                  <Typography
                    component="li"
                    key={idx}
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: '#2d2d2d',
                      fontFamily: 'Montserrat, sans-serif',
                      lineHeight: 1.7,
                    }}
                  >
                    {ambito}
                  </Typography>
                ))}
              </Box>

              {/* Propósito */}
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  color: ejesConIconos[openModal].color,
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Propósito:
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: '#2d2d2d',
                  fontFamily: 'Montserrat, sans-serif',
                  lineHeight: 1.8,
                  textAlign: 'justify',
                }}
              >
                {ejesConIconos[openModal].proposito}
              </Typography>

              {/* ODS Relacionados */}
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  color: ejesConIconos[openModal].color,
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                ODS Relacionados:
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                {ejesConIconos[openModal].ods.map((objetivo, idx) => (
                  <Chip
                    key={idx}
                    icon={React.createElement(objetivo.icono as React.ComponentType<any>, {
                      style: { fontSize: '18px' },
                    })}
                    label={`ODS ${objetivo.numero}: ${objetivo.nombre}`}
                    sx={{
                      backgroundColor: `${ejesConIconos[openModal].color}20`,
                      color: ejesConIconos[openModal].color,
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      py: 2.5,
                    }}
                  />
                ))}
              </Stack>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
              <Button
                onClick={handleCloseModal}
                variant="contained"
                sx={{
                  backgroundColor: ejesConIconos[openModal].color,
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: ejesConIconos[openModal].color,
                    filter: 'brightness(0.9)',
                  },
                }}
              >
                Cerrar
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default EjesContent;
