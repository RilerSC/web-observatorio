'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Box, IconButton, Typography, CircularProgress } from '@mui/material';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Image from 'next/image';

interface MediaSliderProps {
  media: string[];
  autoPlay?: boolean;
  interval?: number;
  mode?: 'video' | 'image' | 'auto';
}

const kenBurnsEffects = [
  { initial: { scale: 1, x: '0%', y: '0%' }, animate: { scale: 1.15, x: '0%', y: '0%' } },
  { initial: { scale: 1.1, x: '-3%', y: '3%' }, animate: { scale: 1.2, x: '3%', y: '-3%' } },
  { initial: { scale: 1.2, x: '3%', y: '-3%' }, animate: { scale: 1.05, x: '-2%', y: '2%' } },
  { initial: { scale: 1.15, x: '-5%', y: '0%' }, animate: { scale: 1.15, x: '5%', y: '0%' } },
];

const VideoSlider: React.FC<MediaSliderProps> = ({
  media,
  autoPlay = true,
  interval = 6000,
  mode = 'auto',
}) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const resolvedMedia = useMemo(
    () =>
      media.map((src) => {
        if (!src) return src;
        if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//')) {
          return src;
        }
        return `${basePath}${src}`;
      }),
    [media, basePath]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedMedia, setLoadedMedia] = useState<Set<number>>(new Set());
  const [loadingMedia, setLoadingMedia] = useState<Set<number>>(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const playAttemptsRef = useRef<Map<number, number>>(new Map());

  const isVideo = useCallback((src: string) => {
    if (mode === 'video') return true;
    if (mode === 'image') return false;
    return src.match(/\.(mp4|webm|ogg|mov)$/i) !== null;
  }, [mode]);

  const markMediaLoaded = useCallback((index: number) => {
    setLoadedMedia(prev => {
      if (prev.has(index)) return prev;
      return new Set([...prev, index]);
    });
    setLoadingMedia(prev => {
      const next = new Set(prev);
      next.delete(index);
      return next;
    });
  }, []);

  // Función para forzar reproducción de video
  const forcePlayVideo = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    // Si el navegador descartó el buffer, recargar antes de reproducir
    if (video.readyState < 2) {
      video.load();
    }

    const attempts = playAttemptsRef.current.get(index) || 0;
    if (attempts > 5) return; // Evitar loops infinitos

    playAttemptsRef.current.set(index, attempts + 1);

    const tryPlay = () => {
      if (video.paused && video.readyState >= 2) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              playAttemptsRef.current.set(index, 0);
            })
            .catch((error) => {
              console.log('Play failed, retrying...', error);
              setTimeout(tryPlay, 200);
            });
        }
      } else if (video.readyState < 2) {
        setTimeout(tryPlay, 100);
      }
    };

    tryPlay();
  }, []);

  // Cargar video explícitamente
  const loadVideo = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (video && isVideo(resolvedMedia[index])) {
      if (!loadedMedia.has(index) && !loadingMedia.has(index)) {
        setLoadingMedia(prev => new Set([...prev, index]));
        video.load();
      }
    }
  }, [resolvedMedia, isVideo, loadedMedia, loadingMedia]);

  // Cargar el primer video al montar
  useEffect(() => {
    if (resolvedMedia.length > 0 && isVideo(resolvedMedia[0])) {
      const timer = setTimeout(() => {
        loadVideo(0);
        // Forzar reproducción inicial para evitar que quede en pausa
        setTimeout(() => {
          const v0 = videoRefs.current[0];
          if (v0) {
            v0.muted = true;
            v0.playsInline = true;
            v0.currentTime = 0;
            v0.load();
            v0.play().catch(() => {});
          }
        }, 150);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  // Precargar medios adyacentes
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % resolvedMedia.length;
    const prevIndex = (currentIndex - 1 + resolvedMedia.length) % resolvedMedia.length;
    
    if (isVideo(resolvedMedia[nextIndex])) {
      loadVideo(nextIndex);
    }
    if (isVideo(resolvedMedia[prevIndex])) {
      loadVideo(prevIndex);
    }
  }, [currentIndex, resolvedMedia, isVideo, loadVideo]);

  // Reproducir video actual cuando cambia el índice (recarga y autoplay forzado)
  useEffect(() => {
    const currentMedia = resolvedMedia[currentIndex];
    const currentVideo = videoRefs.current[currentIndex];

    // Pausar y resetear otros videos
    videoRefs.current.forEach((video, idx) => {
      if (video && idx !== currentIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });

    if (currentVideo && isVideo(currentMedia)) {
      currentVideo.muted = true;
      currentVideo.playsInline = true;
      currentVideo.currentTime = 0;
      currentVideo.load(); // asegurar buffer fresco
      const tryPlay = () => {
        const p = currentVideo.play();
        if (p && typeof p.catch === 'function') {
          p.catch(() => {
            setTimeout(() => currentVideo.play().catch(() => {}), 150);
          });
        }
      };
      tryPlay();
    }
  }, [currentIndex, resolvedMedia, isVideo]);

  // Reproducir si se marca como cargado (respaldo)
  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo && currentVideo.readyState >= 2) {
      currentVideo.play().catch(() => {});
    }
  }, [loadedMedia, currentIndex]);

  // Auto-avance
  useEffect(() => {
    if (!autoPlay) return;

    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % resolvedMedia.length);
        setAnimationKey(prev => prev + 1);
        setIsTransitioning(false);
      }, 100);
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, interval, resolvedMedia.length]);

  const goToPrevious = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + resolvedMedia.length) % resolvedMedia.length);
      setAnimationKey(prev => prev + 1);
      setIsTransitioning(false);
    }, 100);
  };

  const goToNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % resolvedMedia.length);
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
           index === (currentIndex + 1) % resolvedMedia.length || 
           index === (currentIndex - 1 + resolvedMedia.length) % resolvedMedia.length;
  };

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
        aspectRatio: '16 / 9',
        minHeight: { xs: '260px', md: '520px' },
        maxHeight: '70vh',
        overflow: 'hidden',
        backgroundColor: '#000',
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
        {resolvedMedia.map((src, index) => {
          const shouldRender = shouldRenderMedia(index);
          const isCurrent = index === currentIndex;
          const isLoaded = loadedMedia.has(index);
          
          return (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: isCurrent && isLoaded ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                zIndex: isCurrent ? 1 : 0,
                visibility: shouldRender ? 'visible' : 'hidden',
                overflow: 'hidden',
              }}
            >
              {shouldRender && (
                isVideo(src) ? (
                  <video
                    ref={(el) => { 
                      videoRefs.current[index] = el;
                      if (el && !isLoaded && !loadingMedia.has(index)) {
                        setTimeout(() => {
                          setLoadingMedia(prev => new Set([...prev, index]));
                          el.load();
                        }, 50);
                      }
                    }}
                    src={src}
                    autoPlay={isCurrent}
                    loop
                    muted
                    playsInline
                    preload={isCurrent ? 'auto' : 'metadata'}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    onCanPlay={() => {
                      markMediaLoaded(index);
                      if (index === currentIndex) {
                        forcePlayVideo(index);
                      }
                    }}
                    onCanPlayThrough={() => {
                      markMediaLoaded(index);
                      if (index === currentIndex) {
                        forcePlayVideo(index);
                      }
                    }}
                    onLoadedData={() => {
                      markMediaLoaded(index);
                      if (index === currentIndex) {
                        forcePlayVideo(index);
                      }
                    }}
                    onLoadedMetadata={() => {
                      if (!isLoaded) {
                        setTimeout(() => {
                          markMediaLoaded(index);
                          if (index === currentIndex) {
                            forcePlayVideo(index);
                          }
                        }, 200);
                      }
                    }}
                    onPlay={() => {
                      // Resetear contador de intentos cuando se reproduce exitosamente
                      playAttemptsRef.current.set(index, 0);
                    }}
                    onError={(e) => {
                      console.error('Error loading video:', src, e);
                      markMediaLoaded(index);
                    }}
                  />
                ) : (
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
                  pointerEvents: 'none',
                }}
              />
            </Box>
          );
        })}
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
        <MdChevronLeft size={32} />
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
        <MdChevronRight size={32} />
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
        {resolvedMedia.map((_, index) => (
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
          {currentIndex + 1} / {resolvedMedia.length}
        </Typography>
      </Box>
    </Box>
  );
};

export default VideoSlider;
