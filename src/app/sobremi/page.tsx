"use client";

import React from "react";

const instagramPosts = [
  { url: "/image/beneficios-del-yoga-post.webp", link: "https://www.instagram.com/p/DCuSq80PXky/?img_index=1" },
  { url: "/image/dalai-lama-post.webp", link: "https://www.instagram.com/p/DC4nEGiJGlj/" },
  { url: "/image/padelitos-post.webp", link: "https://www.instagram.com/p/DCpv5mTOl4q/" },
  { url: "/image/clases-de-yoga-flyer-post.webp", link: "https://www.instagram.com/p/DC2oZHiPe3A/" },
  { url: "/image/postura-correcta-post.webp", link: "https://www.instagram.com/p/DCFQT-vPXAJ/?img_index=1" },
  { url: "/image/clase-botanico-post.webp", link: "https://www.instagram.com/p/DB9uSJ_PS9k/" },
];

const youtubeVideos = [
  { thumbnail: "/image/yogabeat-bonao.webp", link: "https://www.youtube.com/watch?v=eb4UepoElR0&ab_channel=LorenaLaChill" },
  { thumbnail: "/image/yogabeat-playa-alicia.webp", link: "https://www.youtube.com/watch?v=2ZhJhZ_mXgk&t=2s&ab_channel=LorenaLaChill" },
  { thumbnail: "/image/yogabeat-jarabacoa.webp", link: "https://www.youtube.com/watch?v=XiniMeZSPB0&ab_channel=LorenaLaChill" },
  { thumbnail: "/image/meditacion.webp", link: "https://www.youtube.com/watch?v=OvVq5EVHs98&ab_channel=LorenaLaChill" },
];

export default function SobreMi() {
  return (
    <section className="relative w-full min-h-screen">
      {/* Hero Section */}
      <div className="hero-section relative h-[60vh] w-full">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/image/DSC01323.webp')" }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 h-full w-full bg-gray-900/60"></div>
        {/* Contenido */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Lorena La Chill</h1>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto py-16 px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Profile Picture */}
          <div className="col-span-1 flex items-center justify-center">
            <img
              src="/image/lorena-profile-picture.webp"
              alt="Lorena La Chill"
              className="rounded-full shadow-lg w-64 h-64 object-cover"
            />
          </div>

          {/* Description */}
          <div className="col-span-2 flex flex-col justify-center">
            <h2 className="text-[#F15927] text-3xl font-bold mb-4">Sobre Mí</h2>
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

 {/* Divider Line */}
 <hr className="border-t border-[#F15927] mx-auto w-4/5 my-10" />

      {/* Instagram Section */}
      <div className="container mx-auto py-16 px-8 lg:px-20">
        <h2 className="text-[#F15927] text-3xl font-bold mb-8 text-left">Sígueme en Instagram</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {instagramPosts.map((post, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md aspect-[4/5] group transition-transform duration-300 hover:scale-105"
            >
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={post.url}
                  alt={`Instagram Post ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Ícono de Corazón */}
                <div className="absolute bottom-2 right-2 transition-transform duration-300 group-hover:scale-125">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-6 h-6 opacity-50"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

 {/* Divider Line */}
 <hr className="border-t border-[#F15927] mx-auto w-4/5 my-10" />

{/* YouTube Section */}
<div className="container mx-auto py-16 px-8 lg:px-20">
  <h2 className="text-[#F15927] text-3xl font-bold mb-8 text-left">Suscríbete a mi Canal de YouTube</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {youtubeVideos.map((video, index) => (
      <div
        key={index}
        className="relative overflow-hidden rounded-lg shadow-md cursor-pointer aspect-[16/9] transition-transform duration-300 hover:scale-105"
      >
        <a href={video.link} target="_blank" rel="noopener noreferrer">
          {/* Imagen del video */}
          <img
            src={video.thumbnail}
            alt={`YouTube Video ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Ícono de Play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-16 h-16 opacity-50"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </a>
      </div>
    ))}
  </div>
</div>

 {/* Divider Line */}
 <hr className="border-t border-[#F15927] mx-auto w-4/5 my-10" />

    </section>
  );
}