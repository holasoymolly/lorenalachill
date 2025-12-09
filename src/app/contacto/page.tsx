"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { Icon } from "@iconify/react";

export default function Contacto() {
  return (
    <section className="pt-28 pb-16 px-8 lg:pt-36 lg:pb-24 bg-[#FFFFFF]">
      <div className="container mx-auto lg:max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Imagen */}
          <div className="col-span-1 flex justify-center">
            <img
              src="/image/lorena-profile-picture.webp"
              alt="Lorena La Chill"
              className="rounded-full shadow-lg w-64 h-64 object-cover"
            />
          </div>

          {/* Información */}
          <div className="col-span-2 text-left">
            {/* Título */}
            <Typography
                          variant="h1"
                          className="text-4xl font-bold text-[#F15927] mb-4"
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                          >
              Contacto
            </Typography>

            {/* Párrafo Introductorio */}
            <Typography
                          variant="lead"
                          className="text-md text-gray-600 mb-6"
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                          >
              Si tienes alguna pregunta, propuesta o simplemente quieres saludar, ¡no dudes en escribirme! Estoy disponible a través del correo electrónico y mis redes sociales.
            </Typography>

            {/* Correo Electrónico */}
            <div className="mb-6">
              <Typography
                              variant="h6"
                              className="text-lg font-medium text-gray-800 mb-2"
                              placeholder={undefined}
                              onPointerEnterCapture={undefined}
                              onPointerLeaveCapture={undefined}
                              >
                Envíame un correo:
              </Typography>
              <a
                href="mailto:lorenalachill@example.com"
                className="text-lg text-[#F15927] hover:underline"
              >
                lorenalachill@gmail.com
              </a>
            </div>

            {/* Redes Sociales */}
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/lorenalachill"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F15927] transition-transform duration-300 hover:scale-110"
              >
                <Icon icon="mdi:instagram" className="text-3xl" />
              </a>
              <a
                href="https://www.tiktok.com/@lorenalachill"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F15927] transition-transform duration-300 hover:scale-110"
              >
                <Icon icon="ic:baseline-tiktok" className="text-3xl" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCmCTPMQbZ9PHVa6RPMdcPFw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F15927] transition-transform duration-300 hover:scale-110"
              >
                <Icon icon="mdi:youtube" className="text-3xl" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063971891016"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F15927] transition-transform duration-300 hover:scale-110"
              >
                <Icon icon="mdi:facebook" className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}