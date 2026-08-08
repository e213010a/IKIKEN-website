import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Problem } from "@/components/sections/home/Problem";
import { Solution } from "@/components/sections/home/Solution";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { ValuePillars } from "@/components/sections/home/ValuePillars";
import { FeatureSection } from "@/components/sections/product/FeatureSection";
import { Cta } from "@/components/sections/home/Cta";
import { getSite, resolveLocale } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const site = getSite(locale);
  return { title: "Our Business", description: site.businessPage.hero.body };
}

export default async function OurBusinessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const site = getSite(locale);

  return (
    <>
      <PageHero {...site.businessPage.hero} />
      <Problem site={site} />
      <Solution site={site} />
      <HowItWorks site={site} />
      <ValuePillars site={site} />
      <FeatureSection {...site.businessPage.app} tone="light" />
      <FeatureSection {...site.businessPage.controller} tone="dim" reverse />
      <Cta site={site} />
    </>
  );
}
