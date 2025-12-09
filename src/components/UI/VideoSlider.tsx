'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, IconButton, Typography, CircularProgress } from '@mui/material';
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
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set([0]));
  const [loadingVideos, setLoadingVideos] = useState<Set<number>>(new Set([0]));
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Marcar video como cargado
  const markVideoLoaded = useCallback((index: number) => {
    setLoadedVideos(prev => new Set([...prev, index]));
    setLoadingVideos(prev => {
      const next = new Set(prev);
      next.delete(index);
      return next;
    });
  }, []);

  // Precargar un video específico
  const preloadVideo = useCallback((index: number) => {
    if (loadedVideos.has(index) || loadingVideos.has(index)) return;
    
    setLoadingVideos(prev => new Set([...prev, index]));
    
    const video = videoRefs.current[index];
    if (video) {
      video.load();
    }
  }, [loadedVideos, loadingVideos]);

  // Precargar videos adyacentes cuando cambia el índice
  useEffect(() => {
    // Precargar el siguiente video
    const nextIndex = (currentIndex + 1) % videos.length;
    preloadVideo(nextIndex);
    
    // Precargar el anterior también
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    preloadVideo(prevIndex);
  }, [currentIndex, videos.length, preloadVideo]);

  // Reproducir el video actual cuando está listo
  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo && loadedVideos.has(currentIndex)) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(() => {
        // Ignorar errores de autoplay
      });
    }
    
    // Pausar otros videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause();
      }
    });
  }, [currentIndex, loadedVideos]);

  // Auto-avance del slider
  useEffect(() => {
    if (!autoPlay) return;

    const startTimer = () => {
      timerRef.current = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
          setIsTransitioning(false);
        }, 100);
      }, interval);
    };

    startTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoPlay, interval, videos.length]);

  const goToPrevious = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
      setIsTransitioning(false);
    }, 100);
  };

  const goToNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setIsTransitioning(false);
    }, 100);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    if (timerRef.current) clearInterval(timerRef.current);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 100);
  };

  // Determinar si un video debe estar visible (cargado en el DOM)
  const shouldRenderVideo = (index: number) => {
    return index === currentIndex || 
           index === (currentIndex + 1) % videos.length || 
           index === (currentIndex - 1 + videos.length) % videos.length;
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '400px', md: '600px' },
        overflow: 'hidden',
        backgroundColor: '#0a1623',
      }}
    >
      {/* Loading indicator */}
      {loadingVideos.has(currentIndex) && !loadedVideos.has(currentIndex) && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <CircularProgress 
            size={50} 
            sx={{ color: '#00bed6' }} 
          />
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Cargando video...
          </Typography>
        </Box>
      )}

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
              opacity: index === currentIndex && loadedVideos.has(index) ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
              zIndex: index === currentIndex ? 1 : 0,
              visibility: shouldRenderVideo(index) ? 'visible' : 'hidden',
            }}
          >
            {shouldRenderVideo(index) && (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={video}
                autoPlay={false}
                loop
                muted
                playsInline
                preload={index === currentIndex ? 'auto' : 'metadata'}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onCanPlayThrough={() => {
                  markVideoLoaded(index);
                }}
                onLoadedData={() => {
                  // Fallback para browsers que no disparan canPlayThrough
                  setTimeout(() => {
                    markVideoLoaded(index);
                  }, 500);
                }}
                onError={() => {
                  // En caso de error, marcar como cargado para evitar loop
                  markVideoLoaded(index);
                }}
              />
            )}
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

      {/* Gradient background como fallback visual */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0a1623 0%, #1a3a52 50%, #0a1623 100%)',
          zIndex: 0,
        }}
      />

      {/* Navigation Arrows */}
      <IconButton
        onClick={goToPrevious}
        disabled={isTransitioning}
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
          '&:disabled': {
            opacity: 0.5,
          },
        }}
      >
        <ChevronLeft fontSize="large" />
      </IconButton>

      <IconButton
        onClick={goToNext}
        disabled={isTransitioning}
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
          '&:disabled': {
            opacity: 0.5,
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
              position: 'relative',
              '&:hover': {
                backgroundColor: '#ffffff',
              },
              // Indicador de carga en cada dot
              '&::after': loadingVideos.has(index) && !loadedVideos.has(index) ? {
                content: '""',
                position: 'absolute',
                top: -2,
                left: -2,
                right: -2,
                bottom: -2,
                border: '2px solid #00bed6',
                borderTopColor: 'transparent',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              } : {},
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
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {loadedVideos.has(currentIndex) ? (
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#6abf4b',
            }}
          />
        ) : (
          <CircularProgress size={8} sx={{ color: '#00bed6' }} />
        )}
        <Typography variant="body2" sx={{ color: '#ffffff' }}>
          {currentIndex + 1} / {videos.length}
        </Typography>
      </Box>

      {/* CSS for spin animation */}
      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Box>
  );
};

export default VideoSlider;
