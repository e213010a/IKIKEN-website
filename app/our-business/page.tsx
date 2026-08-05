import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { FeatureSection } from "@/components/sections/product/FeatureSection";
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
      <FeatureSection {...site.businessPage.app} tone="light" />
      <FeatureSection {...site.businessPage.controller} tone="dim" reverse />
      <Cta />
    </>
  );
}
