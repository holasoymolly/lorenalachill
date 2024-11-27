"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    const heroElement = document.querySelector(".hero-section");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 1.0 } // Asegura que el hero esté completamente visible
    );

    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  return (
    <a
      href="https://www.material-tailwind.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        size="sm"
        className={`!fixed bottom-4 right-4 z-50 flex gap-1 pl-6 text-white border border-white transition-all duration-500 ease-in-out transform ${
          isHeroVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        } py-2 px-5 rounded-full bg-transparent hover:scale-105`}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Suscríbete a mi Newsletter
      </Button>
    </a>
  );
}