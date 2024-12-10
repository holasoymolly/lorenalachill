import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Navbar as MTNavbar, IconButton, Typography } from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}

function NavItem({ children, href, external }: NavItemProps) {
  return (
    <li>
      {external ? (
        <Typography
          as="a"
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          variant="paragraph"
          className="flex items-center gap-2 font-medium text-white transition-all duration-300 hover:text-[#F15927]"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}        >
          {children}
        </Typography>
      ) : (
        <Typography
            as="a"
            href={href || "#"}
            variant="paragraph"
            className="flex items-center gap-2 font-medium text-white transition-all duration-300 hover:text-[#F15927]"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            >
          {children}
        </Typography>
      )}
    </li>
  );
}

const NAV_MENU = [
  { name: "Sobre mí", href: "/sobremi" },
  { name: "Calendario", href: "https://www.google.com/calendar", external: true },
  { name: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
  { name: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      if (heroSection) {
        const { top, bottom } = heroSection.getBoundingClientRect();
        setIsHeroVisible(top < window.innerHeight && bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color="transparent"
      className={`fixed top-0 z-50 border-0 transition-transform duration-500 ${isHeroVisible ? "translate-y-0" : "-translate-y-full"}`}
      style={{
        height: "6rem",
        overflow: "hidden",
      }}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center h-full">
          <Link href="/" className="relative group block">
            <img
              src="/logos/lorena-la-chill-logo-blanco.webp"
              alt="Lorena La Chill Logo"
              style={{ height: "3.80rem", width: "auto" }}
              className="transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src="/logos/lorena-la-chill-logo-naranja.webp"
              alt="Lorena La Chill Logo Hover"
              style={{ height: "3.80rem", width: "auto" }}
              className="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 hover:scale-105"
            />
          </Link>
        </div>

        {/* Menú */}
        <ul className="ml-10 hidden items-center gap-6 lg:flex text-white h-full">
          {NAV_MENU.map(({ name, href, external }) => (
            <NavItem key={name} href={href} external={external}>
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>

        {/* Redes Sociales */}
        <div className="hidden items-center gap-4 lg:flex h-full">
          <a
            href="https://www.instagram.com/lorenalachill"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-all duration-300 hover:text-[#F15927]"
          >
            <Icon icon="mdi:instagram" className="text-2xl" />
          </a>
          <a
            href="https://www.tiktok.com/@lorenalachill"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-all duration-300 hover:text-[#F15927]"
          >
            <Icon icon="ic:baseline-tiktok" className="text-2xl" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCmCTPMQbZ9PHVa6RPMdcPFw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-all duration-300 hover:text-[#F15927]"
          >
            <Icon icon="mdi:youtube" className="text-2xl" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100063971891016"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-all duration-300 hover:text-[#F15927]"
          >
            <Icon icon="mdi:facebook" className="text-2xl" />
          </a>
        </div>

        {/* Botón del menú móvil */}
        <IconButton variant="text" color="white" className="ml-auto inline-block lg:hidden"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}>
          <Bars3Icon strokeWidth={2} className="h-6 w-6" />
        </IconButton>
      </div>
    </MTNavbar>
  );
}

export default Navbar;