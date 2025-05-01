import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#4791db',
      dark: '#115293',
    },
    secondary: {
      main: '#dc004e',
      light: '#e33371',
      dark: '#9a0036',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    // Set DB Helvethaica X as default font for all typography
    fontFamily: '"DB Helvethaica X", "Roboto", "Helvetica Neue", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
        },
      },
    },
    // Override Typography component specifically
    MuiTypography: {
      defaultProps: {
        fontFamily: '"DB Helvethaica X", sans-serif',
      },
      styleOverrides: {
        root: {
          fontFamily: '"DB Helvethaica X", sans-serif',
        },
      },
    },
  },
});

export default theme;