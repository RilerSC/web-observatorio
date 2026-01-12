'use client';

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

export const ReadingProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        backgroundColor: 'rgba(106, 191, 75, 0.2)',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <Box
        sx={{
          height: '100%',
          backgroundColor: '#6abf4b',
          width: `${progress}%`,
          transition: 'width 0.1s ease-out',
          boxShadow: '0 0 10px rgba(106, 191, 75, 0.5)',
        }}
      />
    </Box>
  );
};
