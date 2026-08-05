import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { FeatureSection } from "@/components/sections/product/FeatureSection";
import { Cta } from "@/components/sections/home/Cta";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Product",
  description: site.productPage.hero.body,
};

export default function ProductPage() {
  return (
    <>
      <PageHero {...site.productPage.hero} />
      <FeatureSection {...site.productPage.app} tone="light" />
      <FeatureSection {...site.productPage.controller} tone="dim" reverse />
      <Cta />
    </>
  );
}
