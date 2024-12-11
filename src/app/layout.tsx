import "./globals.css";
import { Roboto } from "next/font/google";
import { Navbar, Layout, Footer } from "@/components"; // Importa Navbar
import { useState } from "react";
import Hero from "@/app/hero";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Lorena La Chill | Profesora de Yoga",
  description: "Sígueme y conoce más sobre Yoga y bienestar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/image/favicon.webp" type="image/webp" />
      </head>
      <body className={roboto.className}>
        {/* Navbar siempre visible */}
        <Navbar />
        <Layout>
          {children}
        </Layout>
        <Footer />
      </body>
    </html>
  );
}