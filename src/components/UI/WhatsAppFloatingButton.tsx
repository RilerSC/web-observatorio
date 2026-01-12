'use client';

import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppFloatingButtonProps {
  phoneNumber: string;
  message: string;
  scrollThreshold?: number;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  phoneNumber,
  message,
  scrollThreshold = 400,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Zoom in={isVisible}>
      <Fab
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: { xs: 20, md: 30 },
          right: { xs: 20, md: 30 },
          backgroundColor: '#25D366',
          color: '#ffffff',
          width: { xs: 56, md: 64 },
          height: { xs: 56, md: 64 },
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          zIndex: 9998,
          '&:hover': {
            backgroundColor: '#20BA5A',
            transform: 'scale(1.1)',
            boxShadow: '0 6px 28px rgba(37, 211, 102, 0.6)',
          },
          transition: 'all 0.3s ease',
        }}
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={32} />
      </Fab>
    </Zoom>
  );
};
