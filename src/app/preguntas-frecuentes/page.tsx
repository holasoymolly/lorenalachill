"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FAQS = [
  {
    title: "1. How do I register for the AI Conference 2023?",
    desc: "You can register for the AI Conference 2023 by visiting our registration page. Follow the simple steps to complete your registration and secure your spot at the conference.",
  },
  {
    title: "2. What are the registration fees, and what is included?",
    desc: "It really matters and then like it really doesn't matter...",
  },
  {
    title: "3. Can I get a refund if I need to cancel my registration?",
    desc: "The time is now for it to be okay to be great...",
  },
  {
    title: "4. Will there be on-site registration available?",
    desc: "I always felt like I could do anything...",
  },
  {
    title: "5. What is the dress code for the conference?",
    desc: "There's nothing I really wanted to do in life...",
  },
];

export default function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-16 px-8 lg:py-24">
      <div className="container mx-auto lg:max-w-screen-lg lg:px-20">
        <div className="mb-10">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 text-4xl font-bold text-[#F15927] mt-8 text-left"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            >
            Preguntas Frecuentes
          </Typography>
          <Typography
            variant="lead"
            className="mb-8 !text-gray-600 text-md text-left"
            placeholder={undefined}
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined}
            >
            Bienvenido a la sección de preguntas frecuentes. Esto es para ayudarte con dudas que normalmente las personas tienen al iniciar en el yoga y el bienestar. Si no encuentras respuesta a lo que buscas aquí, ¡no dudes en contactarme!
          </Typography>
        </div>

        <div>
          {FAQS.map(({ title, desc }, key) => (
            <div key={key} className="border-b border-[#F15927] py-6">
              <Accordion
                open={open === key + 1}
                onClick={() => handleOpen(key + 1)}
                className="!shadow-none !border-none"
                placeholder={undefined}
                onPointerEnterCapture={undefined} 
                onPointerLeaveCapture={undefined}
                >
                <AccordionHeader
                  className="flex justify-between items-center text-left text-lg font-semibold text-gray-700 !border-none"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  >
                  <span className="flex-1">{title}</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-[#F15927] transition-transform duration-300 ${
                      open === key + 1 ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </AccordionHeader>
                <AccordionBody>
                  <Typography
                    color="blue-gray"
                    className="font-normal text-gray-600 mt-4"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    >
                    {desc}
                  </Typography>
                </AccordionBody>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}