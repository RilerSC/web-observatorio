'use client';

import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Box } from '@mui/material';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import { StaggerItem } from '@/components/UI/ScrollReveal';
import Image from 'next/image';

interface Alianza {
  nombre: string;
  logo: string;
  descripcion: string;
  url: string;
  textoCompleto?: string[];
}

interface AlliancesSectionProps {
  alianzas: Alianza[];
}

export const AlliancesSection: React.FC<AlliancesSectionProps> = ({ alianzas }) => {
  const [openModalAlianza, setOpenModalAlianza] = useState<number | null>(null);

  const handleOpenModalAlianza = (index: number) => {
    setOpenModalAlianza(index);
  };

  const handleCloseModalAlianza = () => {
    setOpenModalAlianza(null);
  };

  return (
    <>
      <Grid container spacing={4}>
        {alianzas.map((alianza, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StaggerItem>
              <Card
                component={motion.div}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleOpenModalAlianza(index)}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  '&:hover': {
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 180,
                    backgroundColor: '#f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3,
                  }}
                >
                  <Image
                    src={alianza.logo}
                    alt={alianza.nombre}
                    fill
                    style={{
                      objectFit: 'contain',
                      padding: '20px',
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      color: '#0a1623',
                      mb: 1,
                    }}
                  >
                    {alianza.nombre}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      fontFamily: 'Montserrat, sans-serif',
                      lineHeight: 1.6,
                    }}
                  >
                    {alianza.descripcion}
                  </Typography>
                </CardContent>
              </Card>
            </StaggerItem>
          </Grid>
        ))}
      </Grid>

      {/* Modal de Información Completa de Alianza */}
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
        {openModalAlianza !== null && (
          <>
            <DialogTitle
              sx={{
                backgroundColor: '#0a1623',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                {alianzas[openModalAlianza].nombre}
              </Typography>
              <IconButton onClick={handleCloseModalAlianza} sx={{ color: '#ffffff' }}>
                <MdClose />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: 4 }}>
              {alianzas[openModalAlianza].textoCompleto ? (
                alianzas[openModalAlianza].textoCompleto!.map((parrafo, idx) => (
                  <Typography
                    key={idx}
                    variant="body1"
                    sx={{
                      mb: 2,
                      color: '#2d2d2d',
                      fontFamily: 'Montserrat, sans-serif',
                      lineHeight: 1.8,
                      textAlign: 'justify',
                    }}
                  >
                    {parrafo}
                  </Typography>
                ))
              ) : (
                <Typography
                  variant="body1"
                  sx={{
                    color: '#2d2d2d',
                    fontFamily: 'Montserrat, sans-serif',
                    lineHeight: 1.8,
                  }}
                >
                  {alianzas[openModalAlianza].descripcion}
                </Typography>
              )}
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
              <Button
                onClick={handleCloseModalAlianza}
                variant="outlined"
                sx={{
                  borderColor: '#00bed6',
                  color: '#00bed6',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  mr: 1,
                  '&:hover': {
                    borderColor: '#009bb0',
                    color: '#009bb0',
                  },
                }}
              >
                Cerrar
              </Button>
              <Button
                href={alianzas[openModalAlianza].url}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  backgroundColor: '#00bed6',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#009bb0',
                  },
                }}
              >
                Visitar sitio web
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default AlliancesSection;
