"use client";

import { Button, Typography } from "@material-tailwind/react";

function Hero() {
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
            variant="h3"
            color="white"
            className="mb-2"
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
            variant="h6"
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
              className="text-[#F15927] hover:bg-[#F15927] hover:text-white text-lg py-3 px-6 rounded-full mb-40 mt-0"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Inscríbete aquí
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;