import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './app/routes';
import './styles/styles.css';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';
import { ThemeProvider } from './components/theme-provider';


const container = document.getElementById('root');

const root = createRoot(container!);


root.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>
);
