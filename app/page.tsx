import { Hero } from "@/components/sections/home/Hero";
import { NewsTeaser } from "@/components/sections/home/NewsTeaser";
import { Problem } from "@/components/sections/home/Problem";
import { Solution } from "@/components/sections/home/Solution";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { ValuePillars } from "@/components/sections/home/ValuePillars";
import { Vision } from "@/components/sections/home/Vision";
import { TeamTeaser } from "@/components/sections/home/TeamTeaser";
import { Cta } from "@/components/sections/home/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <NewsTeaser />
      <Problem />
      <Solution />
      <HowItWorks />
      <ValuePillars />
      <Vision />
      <TeamTeaser />
      <Cta />
    </>
  );
}
