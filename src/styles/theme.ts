import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customColors: {
      footerBackground: string;
    };
  }

  interface ThemeOptions {
    customColors?: {
      footerBackground?: string;
    };
  }
}


const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#ff4081',
        },
        background: {
            default: '#f5f5f5',
        },
    },
    customColors: {
        footerBackground: '#fafaec',
    },
    typography: {
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
        },
    },
    spacing: 8,
});

export default theme;
