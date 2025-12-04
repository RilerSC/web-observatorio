'use client';

import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Divider } from '@mui/material';
import Image from 'next/image';

interface TeamMemberCardProps {
  nombre: string;
  cargo: string;
  bio: string;
  foto: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  nombre,
  cargo,
  bio,
  foto,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      {/* Imagen con efecto blanco y negro */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '280px', md: '320px' },
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
            transition: 'filter 0.4s ease',
          }}
        >
          <Image
            src={foto}
            alt={nombre}
            fill
            style={{
              objectFit: 'cover',
            }}
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw"
          />
        </Box>
      </Box>

      {/* Contenido centrado */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          p: { xs: 3, md: 4 },
          textAlign: 'center',
        }}
      >
        {/* Nombre en mayúsculas */}
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 700,
            color: '#2d2d2d',
            fontFamily: 'Montserrat, sans-serif',
            mb: 2,
            fontSize: { xs: '1rem', md: '1.125rem' },
            lineHeight: 1.4,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {nombre}
        </Typography>

        {/* Línea separadora */}
        <Divider
          sx={{
            mb: 2.5,
            borderColor: '#00bed6',
            borderWidth: '2px',
            width: '60px',
            mx: 'auto',
          }}
        />

        {/* Cargo destacado */}
        <Typography
          variant="subtitle2"
          sx={{
            color: '#07a7ff',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            fontSize: { xs: '0.875rem', md: '0.9375rem' },
            lineHeight: 1.5,
            mb: 2.5,
          }}
        >
          {cargo}
        </Typography>

        {/* Bio resumida (máximo 3 líneas) */}
        <Typography
          variant="body2"
          sx={{
            color: '#414042',
            fontFamily: 'Montserrat, sans-serif',
            lineHeight: 1.6,
            fontSize: { xs: '0.8125rem', md: '0.875rem' },
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {bio}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;

