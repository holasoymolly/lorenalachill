import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
  link: string; // Nueva prop para el enlace
}

export function AboutCard({ title, description, subTitle, link }: AboutCardProp) {
  return (
    <Card shadow={false}
    placeholder={undefined}
    onPointerEnterCapture={undefined}
    onPointerLeaveCapture={undefined}>
      <CardBody className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-gray-900"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}>
        <Typography
          variant="h6"
          className="mb-4 text-center"
          color="white"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          >
          {subTitle}
        </Typography>
        <Typography
          variant="h4"
          className="text-center"
          color="white"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          >
          {title}
        </Typography>
        <Typography
          color="white"
          className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          >
          {description}
        </Typography>
        {/* Botón personalizado */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full bg-[#F15927] text-white font-medium hover:bg-[#d04c22] transition duration-300"
        >
          Cotiza aquí
        </a>
      </CardBody>
    </Card>
  );
}

export default AboutCard;