'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, IconButton, Typography, CircularProgress } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Image from 'next/image';

interface MediaSliderProps {
  // Acepta videos O imágenes
  media: string[];
  autoPlay?: boolean;
  interval?: number;
  // Nuevo: modo de slider (video o imagen)
  mode?: 'video' | 'image' | 'auto';
}

// Efecto Ken Burns con diferentes variaciones
const kenBurnsEffects = [
  { // Zoom in desde centro
    initial: { scale: 1, x: '0%', y: '0%' },
    animate: { scale: 1.15, x: '0%', y: '0%' },
  },
  { // Zoom in hacia arriba-derecha
    initial: { scale: 1.1, x: '-3%', y: '3%' },
    animate: { scale: 1.2, x: '3%', y: '-3%' },
  },
  { // Zoom out desde arriba-izquierda
    initial: { scale: 1.2, x: '3%', y: '-3%' },
    animate: { scale: 1.05, x: '-2%', y: '2%' },
  },
  { // Pan de izquierda a derecha
    initial: { scale: 1.15, x: '-5%', y: '0%' },
    animate: { scale: 1.15, x: '5%', y: '0%' },
  },
];

const VideoSlider: React.FC<MediaSliderProps> = ({
  media,
  autoPlay = true,
  interval = 6000,
  mode = 'auto',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedMedia, setLoadedMedia] = useState<Set<number>>(new Set());
  const [loadingMedia, setLoadingMedia] = useState<Set<number>>(new Set([0]));
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Detectar si el medio es video o imagen
  const isVideo = useCallback((src: string) => {
    if (mode === 'video') return true;
    if (mode === 'image') return false;
    return src.match(/\.(mp4|webm|ogg|mov)$/i) !== null;
  }, [mode]);

  // Marcar medio como cargado
  const markMediaLoaded = useCallback((index: number) => {
    setLoadedMedia(prev => new Set([...prev, index]));
    setLoadingMedia(prev => {
      const next = new Set(prev);
      next.delete(index);
      return next;
    });
  }, []);

  // Precargar medio
  const preloadMedia = useCallback((index: number) => {
    if (loadedMedia.has(index) || loadingMedia.has(index)) return;
    setLoadingMedia(prev => new Set([...prev, index]));
  }, [loadedMedia, loadingMedia]);

  // Precargar medios adyacentes
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % media.length;
    const prevIndex = (currentIndex - 1 + media.length) % media.length;
    preloadMedia(nextIndex);
    preloadMedia(prevIndex);
  }, [currentIndex, media.length, preloadMedia]);

  // Reproducir video actual
  useEffect(() => {
    const currentMedia = media[currentIndex];
    if (isVideo(currentMedia)) {
      const currentVideo = videoRefs.current[currentIndex];
      if (currentVideo && loadedMedia.has(currentIndex)) {
        currentVideo.currentTime = 0;
        currentVideo.play().catch(() => {});
      }
      
      videoRefs.current.forEach((video, index) => {
        if (video && index !== currentIndex) {
          video.pause();
        }
      });
    }
  }, [currentIndex, loadedMedia, media, isVideo]);

  // Auto-avance
  useEffect(() => {
    if (!autoPlay) return;

    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % media.length);
        setAnimationKey(prev => prev + 1);
        setIsTransitioning(false);
      }, 100);
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, interval, media.length]);

  const goToPrevious = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
      setAnimationKey(prev => prev + 1);
      setIsTransitioning(false);
    }, 100);
  };

  const goToNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
      setAnimationKey(prev => prev + 1);
      setIsTransitioning(false);
    }, 100);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    if (timerRef.current) clearInterval(timerRef.current);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimationKey(prev => prev + 1);
      setIsTransitioning(false);
    }, 100);
  };

  const shouldRenderMedia = (index: number) => {
    return index === currentIndex || 
           index === (currentIndex + 1) % media.length || 
           index === (currentIndex - 1 + media.length) % media.length;
  };

  // Obtener efecto Ken Burns para este slide
  const getKenBurnsStyle = (index: number) => {
    const effect = kenBurnsEffects[index % kenBurnsEffects.length];
    const isActive = index === currentIndex;
    
    return {
      transform: isActive 
        ? `scale(${effect.animate.scale}) translate(${effect.animate.x}, ${effect.animate.y})`
        : `scale(${effect.initial.scale}) translate(${effect.initial.x}, ${effect.initial.y})`,
      transition: isActive ? `transform ${interval}ms ease-out` : 'none',
    };
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
      {loadingMedia.has(currentIndex) && !loadedMedia.has(currentIndex) && (
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
          <CircularProgress size={50} sx={{ color: '#00bed6' }} />
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Cargando...
          </Typography>
        </Box>
      )}

      {/* Media Container */}
      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
        {media.map((src, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === currentIndex && loadedMedia.has(index) ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: index === currentIndex ? 1 : 0,
              visibility: shouldRenderMedia(index) ? 'visible' : 'hidden',
              overflow: 'hidden',
            }}
          >
            {shouldRenderMedia(index) && (
              isVideo(src) ? (
                // VIDEO
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  src={src}
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
                  onCanPlayThrough={() => markMediaLoaded(index)}
                  onLoadedData={() => setTimeout(() => markMediaLoaded(index), 300)}
                  onError={() => markMediaLoaded(index)}
                />
              ) : (
                // IMAGEN con efecto Ken Burns
                <Box
                  key={`${index}-${animationKey}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    ...getKenBurnsStyle(index),
                  }}
                >
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                    quality={75}
                    onLoad={() => markMediaLoaded(index)}
                    onError={() => markMediaLoaded(index)}
                  />
                </Box>
              )
            )}
            
            {/* Overlay oscuro */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)',
                zIndex: 1,
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Gradient background como fallback */}
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
          left: { xs: 8, md: 16 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(4px)',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
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
          right: { xs: 8, md: 16 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(4px)',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
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
          gap: 1.5,
        }}
      >
        {media.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              width: index === currentIndex ? 24 : 10,
              height: 10,
              borderRadius: index === currentIndex ? 5 : '50%',
              backgroundColor: index === currentIndex ? '#00bed6' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: index === currentIndex ? '#00bed6' : 'rgba(255, 255, 255, 0.8)',
              },
            }}
          />
        ))}
      </Box>

      {/* Counter */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 24,
          right: 24,
          zIndex: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(4px)',
          padding: '6px 14px',
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {loadedMedia.has(currentIndex) ? (
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#6abf4b' }} />
        ) : (
          <CircularProgress size={8} sx={{ color: '#00bed6' }} />
        )}
        <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 500 }}>
          {currentIndex + 1} / {media.length}
        </Typography>
      </Box>
    </Box>
  );
};

export default VideoSlider;
