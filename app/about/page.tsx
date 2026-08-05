import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Mission } from "@/components/sections/about/Mission";
import { Overview } from "@/components/sections/about/Overview";
import { Cta } from "@/components/sections/home/Cta";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: site.aboutPage.hero.body,
};

export default function AboutPage() {
  return (
    <>
      <PageHero {...site.aboutPage.hero} />
      <Mission {...site.aboutPage.mission} />
      <Overview {...site.aboutPage.overview} />
      <Cta />
    </>
  );
}
