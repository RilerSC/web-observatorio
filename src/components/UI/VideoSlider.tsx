'use client';

import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface VideoSliderProps {
  videos: string[];
  autoPlay?: boolean;
  interval?: number;
}

const VideoSlider: React.FC<VideoSliderProps> = ({
  videos,
  autoPlay = true,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, videos.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '400px', md: '600px' },
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      {/* Video Container */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        {videos.map((video, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === currentIndex ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
              zIndex: index === currentIndex ? 1 : 0,
            }}
          >
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {/* Overlay oscuro para mejor legibilidad */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                zIndex: 1,
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Navigation Arrows */}
      <IconButton
        onClick={goToPrevious}
        sx={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          },
        }}
      >
        <ChevronLeft fontSize="large" />
      </IconButton>

      <IconButton
        onClick={goToNext}
        sx={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          },
        }}
      >
        <ChevronRight fontSize="large" />
      </IconButton>

      {/* Dots Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          gap: 1,
        }}
      >
        {videos.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: '#ffffff',
              },
            }}
          />
        ))}
      </Box>

      {/* Video Counter */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 24,
          right: 24,
          zIndex: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '4px 12px',
          borderRadius: 1,
        }}
      >
        <Typography variant="body2" sx={{ color: '#ffffff' }}>
          {currentIndex + 1} / {videos.length}
        </Typography>
      </Box>
    </Box>
  );
};

export default VideoSlider;




