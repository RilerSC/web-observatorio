'use client';

import React from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  endIcon?: React.ReactNode;
  sx?: any;
  fullWidth?: boolean;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  variant = 'contained',
  endIcon,
  sx,
  fullWidth
}) => {
  return (
    <Button
      component={Link}
      href={href}
      variant={variant}
      endIcon={endIcon}
      sx={sx}
      fullWidth={fullWidth}
    >
      {children}
    </Button>
  );
};

export default LinkButton;
