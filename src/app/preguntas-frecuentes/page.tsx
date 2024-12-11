"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FAQS = [
  {
    title: "1. ¿Qué tipo de yoga debo comenzar a practicar?",
    desc: "Para principiantes, se recomienda comenzar con estilos suaves como Hatha o Vinyasa, ya que son accesibles y permiten aprender las posturas básicas. A medida que avanzas, puedes explorar otros estilos según tus necesidades y preferencias.",
  },
  {
    title: "2. ¿Necesito ser flexible para hacer yoga?",
    desc: "No, la flexibilidad no es un requisito previo. El yoga es una práctica que te ayuda a mejorar la flexibilidad con el tiempo. Lo importante es ser constante y tener paciencia contigo mismo.",
  },
  {
    title: "3. ¿Cuánto tiempo debo practicar yoga cada día?",
    desc: "No es necesario practicar durante horas. Incluso 15-30 minutos al día pueden ser suficientes para empezar a notar los beneficios. Lo importante es la consistencia y la calidad de la práctica.",
  },
  {
    title: "4. ¿Es necesario tener experiencia previa en ejercicio físico para hacer yoga?",
    desc: "No, el yoga es accesible para personas de todas las condiciones físicas y niveles de experiencia. Hay variaciones de las posturas que se pueden adaptar a tu capacidad..",
  },
  {
    title: "5. ¿Qué debo llevar para una clase de yoga?",
    desc: "Solo necesitas ropa cómoda que te permita moverte libremente. Es recomendable usar una esterilla de yoga, aunque muchas clases las proporcionan. También puedes llevar agua para mantenerte hidratado.",
  },
  {
    title: "6. ¿Puedo hacer yoga si tengo una lesión o alguna limitación física?",
    desc: "Sí, el yoga puede ser muy beneficioso incluso si tienes lesiones, pero siempre es recomendable consultar con un médico antes de comenzar. Informa a tu instructor sobre cualquier limitación para que pueda guiarte de manera segura.",
  },
  {
    title: "7. ¿Qué beneficios obtengo al practicar yoga?",
    desc: "El yoga mejora la flexibilidad, la fuerza y el equilibrio, además de reducir el estrés y la ansiedad. También mejora la concentración, promueve la relajación y favorece la salud general del cuerpo y la mente.",
  },
  {
    title: "8. ¿Cómo puedo mejorar mi respiración durante la práctica?",
    desc: "La respiración es clave en el yoga. Practica respiración profunda y consciente, como la respiración ujjayi (respiración sonora), para aumentar la concentración y mejorar tu bienestar físico y mental.",
  },
  {
    title: "9. ¿Es necesario meditar mientras practico yoga?",
    desc: "Aunque no es obligatorio, la meditación complementa perfectamente el yoga. La práctica de la atención plena y la meditación ayuda a reducir el estrés, aumentar la autoconciencia y profundizar en los beneficios físicos del yoga.",
  },
  {
    title: "10. ¿Cuánto tiempo tardaré en ver resultados?",
    desc: "Los resultados varían según la frecuencia y la dedicación de la práctica. Muchas personas empiezan a sentir mejoras en su flexibilidad, fuerza y bienestar general en unas pocas semanas, pero los beneficios a largo plazo continúan desarrollándose con el tiempo.",
  },
];

export default function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-16 px-8 lg:py-24 bg-[#FFFFFF]"> {/* Fondo blanco */}
      <div className="container mx-auto lg:max-w-screen-lg lg:px-20">
        <div className="mb-10">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 text-4xl font-bold text-[#F15927] mt-20 text-left"
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
            Bienvenidx a la sección de preguntas frecuentes. Esto es para ayudarte con dudas que normalmente las personas tienen al iniciar en el yoga y el bienestar. Si no encuentras respuesta a lo que buscas aquí, ¡no dudes en contactarme!
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