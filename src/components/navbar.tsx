import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react"; // Importación del componente Iconify
import { Navbar as MTNavbar, IconButton, Typography } from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium text-white transition-colors duration-300 hover:text-[#F15927]"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  { name: "Sobre mí", href: "/sobremi" },
  { name: "Calendario", href: "/calendario" },
  { name: "Preguntas Frecuentes", href: "/preguntasfrecuentes" },
  { name: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color="transparent"
      className={`fixed top-0 z-50 border-0 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      style={{
        height: "6rem",
        overflow: "hidden",
      }}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      >
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="flex items-center h-full">
          <Link href="/" className="relative group block hover:scale-105">
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
              className="absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </Link>
        </div>
        <ul className="ml-10 hidden items-center gap-6 lg:flex text-white h-full">
          {NAV_MENU.map(({ name, href }) => (
            <NavItem key={name} href={href}>
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex h-full">
          {/* Redes sociales con Iconify */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-transform duration-300 hover:text-[#F15927]"
          >
            <Icon icon="mdi:instagram" className="text-xl" />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-transform duration-300 hover:text-[#F15927]"
          >
            <Icon icon="ic:baseline-tiktok" className="text-xl" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-transform duration-300 hover:text-[#F15927]"
          >
            <Icon icon="mdi:youtube" className="text-xl" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-transform duration-300 hover:text-[#F15927]"
          >
            <Icon icon="mdi:facebook" className="text-xl" />
          </a>
        </div>
        <IconButton
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
    </MTNavbar>
  );
}

export default Navbar;