import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Typography } from "@material-tailwind/react";

const NAV_MENU = [
  { name: "Sobre mí", href: "/sobremi" },
  { name: "Calendario", href: "/calendario" },
  { name: "Preguntas Frecuentes", href: "/preguntasfrecuentes" },
  { name: "Contacto", href: "/contacto" },
];

export function Footer() {
  return (
    <footer className="bg-transparent py-6 mt-10"> {/* Agregado mt-10 para margen superior */}
     {/* Divider Line */}
 <hr className="border-t border-[#F15927] mx-auto w-4/5 my-10" />
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center h-full">
          <Link href="/" className="relative group block">
            <img
              src="/logos/lorena-la-chill-logo-naranja.webp"
              alt="Lorena La Chill Logo"
              className="h-12 w-auto transition-transform duration-300 hover:scale-110" // Logo agrandado a h-12 y efecto de zoom aumentado
            />
          </Link>
        </div>

        {/* Menú */}
        <ul className="flex items-center gap-20 text-[#F15927] h-full">
          {NAV_MENU.map(({ name, href }) => (
            <li key={name}>
              <Typography
                as="a"
                href={href}
                variant="paragraph"
                className="flex items-center gap-1 font-medium text-sm text-[#F15927] transition-all duration-300"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}              >
                {name}
              </Typography>
            </li>
          ))}
        </ul>

        {/* Redes Sociales */}
        <div className="flex items-center gap-3 h-full">
          <a
            href="https://www.instagram.com/lorenalachill"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F15927] transition-all duration-300"
          >
            <Icon icon="mdi:instagram" className="text-xl" />
          </a>
          <a
            href="https://www.tiktok.com/@lorenalachill"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F15927] transition-all duration-300"
          >
            <Icon icon="ic:baseline-tiktok" className="text-xl" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCmCTPMQbZ9PHVa6RPMdcPFw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F15927] transition-all duration-300"
          >
            <Icon icon="mdi:youtube" className="text-xl" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100063971891016"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F15927] transition-all duration-300"
          >
            <Icon icon="mdi:facebook" className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;