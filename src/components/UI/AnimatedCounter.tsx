'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Box, Typography } from '@mui/material';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  title: string;
  subtitle?: string;
  color?: string;
  icon?: React.ReactNode;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  title,
  subtitle,
  color = '#00bed6',
  icon,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) =>
    `${prefix}${current.toFixed(decimals)}${suffix}`
  );

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, spring, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Box
        sx={{
          textAlign: 'center',
          p: 3,
        }}
      >
        {icon && (
          <Box
            sx={{
              mb: 2,
              color: color,
              '& svg': {
                fontSize: '2.5rem',
              },
            }}
          >
            {icon}
          </Box>
        )}
        <motion.div>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontFamily: 'Montserrat, sans-serif',
              color: color,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1,
              mb: 1,
            }}
          >
            <motion.span>{display}</motion.span>
          </Typography>
        </motion.div>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontFamily: 'Montserrat, sans-serif',
            color: '#FFFFFF',
            mb: 0.5,
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: '0.9rem',
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </motion.div>
  );
};

export default AnimatedCounter;

