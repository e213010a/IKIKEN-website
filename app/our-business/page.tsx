import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Problem } from "@/components/sections/home/Problem";
import { Solution } from "@/components/sections/home/Solution";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { ValuePillars } from "@/components/sections/home/ValuePillars";
import { FeatureSection } from "@/components/sections/product/FeatureSection";
import { Roadmap } from "@/components/sections/product/Roadmap";
import { Cta } from "@/components/sections/home/Cta";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Business",
  description: site.businessPage.hero.body,
};

export default function OurBusinessPage() {
  return (
    <>
      <PageHero {...site.businessPage.hero} />
      <Problem />
      <Solution />
      <HowItWorks />
      <ValuePillars />
      <FeatureSection {...site.businessPage.app} tone="light" />
      <FeatureSection {...site.businessPage.controller} tone="dim" reverse />
      <Roadmap />
      <Cta />
    </>
  );
}
