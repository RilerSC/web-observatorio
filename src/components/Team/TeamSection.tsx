'use client';

import React, { useState } from 'react';
import { Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Typography, Box } from '@mui/material';
import { MdClose } from 'react-icons/md';
import { StaggerItem } from '@/components/UI/ScrollReveal';
import TeamMemberCard from '@/components/Team/TeamMemberCard';

interface TeamMember {
  nombre: string;
  cargo: string;
  bio: string;
  bioCompleta: string[];
  foto: string;
}

interface TeamSectionProps {
  equipo: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ equipo }) => {
  const [openModalEquipo, setOpenModalEquipo] = useState<number | null>(null);

  const handleOpenModalEquipo = (index: number) => {
    setOpenModalEquipo(index);
  };

  const handleCloseModalEquipo = () => {
    setOpenModalEquipo(null);
  };

  return (
    <>
      <Grid container spacing={4}>
        {equipo.map((miembro, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StaggerItem>
              <TeamMemberCard
                nombre={miembro.nombre}
                cargo={miembro.cargo}
                bio={miembro.bio}
                foto={miembro.foto}
                onVerPerfil={() => handleOpenModalEquipo(index)}
              />
            </StaggerItem>
          </Grid>
        ))}
      </Grid>

      {/* Modal de Biografía Completa */}
      <Dialog
        open={openModalEquipo !== null}
        onClose={handleCloseModalEquipo}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
          },
        }}
      >
        {openModalEquipo !== null && (
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
                {equipo[openModalEquipo].nombre}
              </Typography>
              <IconButton onClick={handleCloseModalEquipo} sx={{ color: '#ffffff' }}>
                <MdClose />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: 4 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 3,
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  color: '#00bed6',
                }}
              >
                {equipo[openModalEquipo].cargo}
              </Typography>
              {equipo[openModalEquipo].bioCompleta.map((parrafo, idx) => (
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
              ))}
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
              <Button
                onClick={handleCloseModalEquipo}
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
                Cerrar
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default TeamSection;
