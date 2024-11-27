"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Título de la página */}
        <title>Lorena La Chill | Profesora de Yoga</title>
        {/* Descripción para motores de búsqueda */}
        <meta
          name="description"
          content="Conoce más sobre Yoga y bienestar"
        />
        {/* Icono para el navegador */}
        <link rel="icon" href="image/favicon.webp" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

export default Layout;