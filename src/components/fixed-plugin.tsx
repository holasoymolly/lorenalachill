"use client";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://www.material-tailwind.com" target="_blank" rel="noopener noreferrer">
      <Button
        size="sm"
        className="!fixed bottom-4 right-4 z-50 flex gap-1 pl-6 text-white border border-white transition-transform duration-300 hover:scale-105 py-2 px-5 rounded-full bg-transparent"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        >
        Suscríbete a mi Newsletter
      </Button>
    </a>
  );
}