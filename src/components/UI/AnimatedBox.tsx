'use client';

import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

interface AnimatedBoxProps {
  children: React.ReactNode;
  sx?: any;
  whileHover?: any;
  initial?: any;
  animate?: any;
  transition?: any;
}

export const AnimatedBox: React.FC<AnimatedBoxProps> = ({ 
  children, 
  sx, 
  whileHover,
  initial,
  animate,
  transition 
}) => {
  return (
    <Box
      component={motion.div}
      whileHover={whileHover}
      initial={initial}
      animate={animate}
      transition={transition}
      sx={sx}
    >
      {children}
    </Box>
  );
};

export default AnimatedBox;
