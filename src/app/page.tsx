// components
import { Footer } from "@/components";

// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import Faq from "./faq";

export default function Portfolio() {
  return (
    <>
      <Hero />
      <SponsoredBy />
      <AboutEvent />
      <OurStats />
      <Faq />
    </>
  );
}