import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Navbar as MTNavbar, Typography, IconButton } from "@material-tailwind/react";
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
        target="_self"
        variant="paragraph"
        className="flex items-center gap-2 font-medium text-white transition-colors duration-300 hover:text-[#F15927]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  { name: "Inicio", href: "/" },
  { name: "Sobre mí", href: "/sobremi" },
  { name: "Calendario", href: "/calendario" },
  { name: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color="transparent"
      className="fixed top-0 z-50 bg-black/80 backdrop-blur-lg"
      style={{ height: "6rem", overflow: "hidden" }} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logos/lorena-la-chill-logo-blanco.webp"
              alt="Lorena La Chill Logo"
              style={{ height: "3.80rem", width: "auto" }}
            />
          </Link>
        </div>
        <ul className="ml-10 hidden items-center gap-6 lg:flex text-white">
          {NAV_MENU.map(({ name, href }) => (
            <NavItem key={name} href={href}>
              {name}
            </NavItem>
          ))}
        </ul>
        <IconButton
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto lg:hidden" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </IconButton>
      </div>
    </MTNavbar>
  );
}

export default Navbar;