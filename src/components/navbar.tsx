"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { Navbar as MTNavbar, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
}

function NavItem({ children, href, external, onClick }: NavItemProps) {
  return (
    <li>
      {external ? (
        <a
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className="flex items-center gap-2 font-medium text-white transition-all duration-300"
        >
          {children}
        </a>
      ) : (
        <Link
          href={href || "#"}
          onClick={onClick}
          className="flex items-center gap-2 font-medium text-white transition-all duration-300"
        >
          {children}
        </Link>
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isSpecialPage = ["/preguntas-frecuentes", "/contacto"].includes(pathname);
  const isHomepage = pathname === "/";

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color="transparent"
      className={`fixed top-0 z-50 border-0 transition-transform duration-500 ${isSpecialPage ? "bg-[#F15927]" : "bg-transparent"}`}
      style={{
        height: "6rem",
        overflow: "hidden",
      }}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      >
      <div className="container mx-auto flex items-center justify-between h-full px-4 lg:px-0">
        {/* Logo */}
        <div className="flex items-center h-full">
          <Link href="/" className="relative group block">
            <img
              src="/logos/lorena-la-chill-logo-blanco.webp"
              alt="Lorena La Chill Logo"
              style={{ height: "3.80rem", width: "auto" }}
              className={`transition-opacity duration-300 ${
                isSpecialPage ? "hover:scale-110" : isHomepage ? "group-hover:opacity-0" : ""
              }`}
            />
            {!isSpecialPage && (
              <img
                src="/logos/lorena-la-chill-logo-naranja.webp"
                alt="Lorena La Chill Logo Hover"
                style={{ height: "3.80rem", width: "auto" }}
                className={`absolute top-0 left-0 transition-opacity duration-300 opacity-0 ${
                  isHomepage ? "group-hover:opacity-100 hover:scale-105" : ""
                }`}
              />
            )}
          </Link>
        </div>

        {/* Menú de escritorio */}
        <ul className="hidden lg:flex items-center gap-6 text-white">
          {NAV_MENU.map(({ name, href, external }) => (
            <NavItem key={name} href={href} external={external}>
              <span
                className={`transition-transform duration-300 ${
                  isSpecialPage ? "hover:scale-110" : "hover:text-[#F15927]"
                }`}
              >
                {name}
              </span>
            </NavItem>
          ))}
        </ul>

        {/* Redes sociales de escritorio */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://www.instagram.com/lorenalachill"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white transition-all duration-300 ${
              isSpecialPage ? "hover:scale-110" : "hover:text-[#F15927]"
            }`}
          >
            <Icon icon="mdi:instagram" className="text-2xl" />
          </a>
          <a
            href="https://www.tiktok.com/@lorenalachill"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white transition-all duration-300 ${
              isSpecialPage ? "hover:scale-110" : "hover:text-[#F15927]"
            }`}
          >
            <Icon icon="ic:baseline-tiktok" className="text-2xl" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCmCTPMQbZ9PHVa6RPMdcPFw"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white transition-all duration-300 ${
              isSpecialPage ? "hover:scale-110" : "hover:text-[#F15927]"
            }`}
          >
            <Icon icon="mdi:youtube" className="text-2xl" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100063971891016"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white transition-all duration-300 ${
              isSpecialPage ? "hover:scale-110" : "hover:text-[#F15927]"
            }`}
          >
            <Icon icon="mdi:facebook" className="text-2xl" />
          </a>
        </div>

        {/* Botón y Menú Móvil */}
<div className="lg:hidden">
  <button
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    aria-label="Toggle navigation"
  >
    {isMobileMenuOpen ? (
      <XMarkIcon className="h-6 w-6 text-[#F15927]" />
    ) : (
      <Bars3Icon className="h-6 w-6 text-white" />
    )}
  </button>
</div>

{isMobileMenuOpen && (
  <div className="fixed top-0 left-0 w-full h-screen bg-white z-50">
    <button
      onClick={() => setIsMobileMenuOpen(false)}
      aria-label="Close menu"
      className="absolute top-6 right-6"
    >
      <XMarkIcon className="h-8 w-8 text-[#F15927]" />
    </button>
    <ul className="flex flex-col items-center gap-4 pt-20">
      {NAV_MENU.map(({ name, href, external }) => (
        <NavItem
          key={name}
          href={href}
          external={external}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="text-[#F15927] hover:scale-110 transition-transform duration-300">
            {name}
          </span>
        </NavItem>
      ))}
    </ul>

    {/* Redes sociales en móvil */}
    <div className="flex justify-center gap-4 mt-8">
      <a
        href="https://www.instagram.com/lorenalachill"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="mdi:instagram" className="text-[#F15927] text-2xl" />
      </a>
      <a
        href="https://www.tiktok.com/@lorenalachill"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="ic:baseline-tiktok" className="text-[#F15927] text-2xl" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCmCTPMQbZ9PHVa6RPMdcPFw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="mdi:youtube" className="text-[#F15927] text-2xl" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100063971891016"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="mdi:facebook" className="text-[#F15927] text-2xl" />
      </a>
    </div>
  </div>
)}
      </div>
    </MTNavbar>
  );
}

export default Navbar;