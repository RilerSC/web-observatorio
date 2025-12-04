'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00bed6', // Cian principal
      dark: '#0099b3',
      light: '#33c9dd',
    },
    secondary: {
      main: '#6abf4b', // Verde principal
      dark: '#54993c',
      light: '#87cc6f',
    },
    success: {
      main: '#009155', // Verde oscuro destacado
    },
    warning: {
      main: '#d1bd00', // Amarillo destacado
    },
    info: {
      main: '#07a7ff', // Azul brillante destacado
    },
    text: {
      primary: '#2d2d2d', // Negro puro para texto
      secondary: '#414042', // Gris oscuro para texto secundario
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontFamily: 'Montserrat, sans-serif',
    },
    h2: {
      fontWeight: 700,
      fontFamily: 'Montserrat, sans-serif',
    },
    h3: {
      fontWeight: 600,
      fontFamily: 'Montserrat, sans-serif',
    },
    h4: {
      fontWeight: 600,
      fontFamily: 'Montserrat, sans-serif',
    },
    h5: {
      fontWeight: 600,
      fontFamily: 'Montserrat, sans-serif',
    },
    h6: {
      fontWeight: 600,
      fontFamily: 'Montserrat, sans-serif',
    },
    body1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 400,
    },
    button: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
          fontFamily: 'Montserrat, sans-serif',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat, sans-serif',
        },
      },
    },
  },
});

