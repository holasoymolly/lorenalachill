"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Personalizadas",
    description:
      "Diseñadas específicamente para ti, teniendo en cuenta tus necesidades, nivel de experiencia y objetivos.  Es una experiencia única que te permite avanzar a tu propio ritmo, recibir atención individualizada y obtener los máximos beneficios para tu bienestar físico y mental.",
    subTitle: "Clases",
    link: "https://example.com/personalizadas",
  },
  {
    title: "Grupales",
    description:
      "Una clase grupal de yoga te permite armar tu propio grupo, ya sea con amigos, compañeros de trabajo o cualquier grupo que elijas. Es una oportunidad perfecta para fortalecer la conexión grupal, relajarse y mejorar el bienestar físico y mental en un ambiente cómodo y personalizado.",
    subTitle: "Clases",
    link: "https://example.com/workshops",
  },
  {
    title: "Corporativos",
    description:
      "Los paquetes corporativos de yoga y bienestar están diseñados para mejorar la salud física y mental de tus empleados, fortaleciendo positivamente el ambiente laboral. A través de clases personalizadas de yoga, meditación y técnicas de relajación, ayudamos a reducir el estrés, mejorar la concentración y promover el bienestar general. Al invertir en el bienestar de tu equipo, estarás contribuyendo a una mayor productividad, motivación y cohesión, sacando lo mejor de cada miembro y creando un ambiente de trabajo más saludable y positivo.",
    subTitle: "Paquetes",
    link: "https://example.com/community",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      {/* Texto sobre Yoga */}
      <Typography
        variant="h3"
        className="text-center text-[#F15927]"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        >
        ¿Por qué es bueno practicar Yoga?
      </Typography>
      <Typography
        variant="h6"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-700"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        >
        Hacer yoga de manera constante no solo mejora la flexibilidad y fuerza física, sino que también promueve un equilibrio mental y emocional. La práctica regular ayuda a reducir el estrés, aumenta la concentración y fomenta una conexión más profunda entre el cuerpo y la mente, lo que mejora la calidad de vida y el bienestar general. Además, el yoga permite cultivar la paciencia y la autoaceptación, creando una sensación de paz interior.
      </Typography>

      {/* Cards en orden especificado */}
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Clases */}
        <AboutCard {...EVENT_INFO[0]} />
        {/* Workshops */}
        <AboutCard {...EVENT_INFO[1]} />
        {/* Community */}
        <div className="md:col-span-2">
          <AboutCard {...EVENT_INFO[2]} />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;