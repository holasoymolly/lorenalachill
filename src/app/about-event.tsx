"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Cutting-Edge Insights!",
    description:
      "Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. ",
    subTitle: "Presentation",
  },
  {
    title: "Practical Knowledge!",
    description:
      "Attend workshops and hands-on sessions to acquire practical skills that you can apply immediately.",
    subTitle: "Workshops",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h3"
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
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Networking!"
            subTitle="Community"
            description="Connect with industry leaders, AI experts, and fellow enthusiasts to build valuable professional relationships."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
