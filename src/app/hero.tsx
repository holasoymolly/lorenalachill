"use client";

import { useEffect, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY === 0); // Oculta el botón si se hace scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-section relative min-h-screen w-full">
      {/* Video de fondo */}
      <video
        src="/videos/lorena-valentina-meditacion.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      {/* Contenido */}
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 mx-auto flex flex-col items-center justify-end text-center pb-20">
          {/* Ajustar posición hacia abajo con padding */}
          <Typography
            variant="h6"
            color="white"
            className="mb-0"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            >
            Taller Presencial
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="lg:max-w-3xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            >
            Yoga Básico <br /> Para La Vida Cotidiana
          </Typography>
          <Typography
            variant="h5"
            color="white"
            className="mt-1 mb-8 w-full md:max-w-full lg:max-w-2xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            >
            21 de Diciembre 2024
          </Typography>
          <div className="flex items-center gap-4">
            <Button
              variant="gradient"
              color="white"
              size="sm"
              className="bg-white text-[#F15927] hover:bg-[#F15927] hover:text-white text-lg px-6 rounded-full mb-40 mt-0 normal-case" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Inscríbete aquí
            </Button>
          </div>
        </div>
      </div>
      {/* Botón flotante */}
      <a
        href="https://www.material-tailwind.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-4 right-4 z-50 transition-transform duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <Button
          size="sm"
          className="flex gap-1 pl-6 text-white border border-white hover:scale-105 py-2 px-5 rounded-full bg-transparent normal-case" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Suscríbete al Newsletter
        </Button>
      </a>
    </div>
  );
}

export default Hero;