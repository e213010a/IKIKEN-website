import { Hero } from "@/components/sections/home/Hero";
import { NewsTeaser } from "@/components/sections/home/NewsTeaser";
import { BusinessTeaser } from "@/components/sections/home/BusinessTeaser";
import { Vision } from "@/components/sections/home/Vision";
import { TeamTeaser } from "@/components/sections/home/TeamTeaser";
import { Cta } from "@/components/sections/home/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <NewsTeaser />
      <BusinessTeaser />
      <Vision />
      <TeamTeaser />
      <Cta />
    </>
  );
}
