import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './app/routes';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';


const container = document.getElementById('root');

const root = createRoot(container!);


root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />   
    </ThemeProvider>
  </React.StrictMode>
);
