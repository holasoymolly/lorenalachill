"use client";

import React from "react";

export default function SobreMi() {
  return (
    <section className="relative w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('/image/DSC01323.webp')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-5xl font-bold text-white uppercase">Lorena La Chill</h1>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto py-16 px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Profile Picture */}
          <div className="col-span-1 flex items-center justify-center">
            <img
              src="/image/lorena-profile.jpg"
              alt="Lorena La Chill"
              className="rounded-full shadow-lg w-64 h-64 object-cover"
            />
          </div>

          {/* Description */}
          <div className="col-span-2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Sobre Mí</h2>
            <p className="text-gray-700 mb-4">
              Soy instructora de yoga dominicana, diseñadora gráfica y apasionada del baile, radicada en Santo Domingo. Desde 2019, soy profesora certificada de yoga y meditación, enfocándome principalmente en principiantes.
            </p>
            <p className="text-gray-700 mb-4">
              Mi amor por los animales me inspiró a lanzar clases de yoga los domingos en el Jardín Botánico, con aporte voluntario a beneficio de los perros callejeros, apoyando a PADELA, una ONG de la Zona Colonial.
            </p>
            <p className="text-gray-700">
              Con mi trabajo, busco fusionar el arte, el bienestar y la conciencia social. Continúo motivando a otros a encontrar su equilibrio mientras contribuye a una causa noble.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}