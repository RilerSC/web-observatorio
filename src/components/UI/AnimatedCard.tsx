'use client';

import React from 'react';
import { Card } from '@mui/material';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  sx?: any;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, sx }) => {
  return (
    <Card
      component={motion.div}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      sx={sx}
    >
      {children}
    </Card>
  );
};

export default AnimatedCard;
