import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Culture } from "@/components/sections/recruit/Culture";
import { Positions } from "@/components/sections/recruit/Positions";
import { getSite, resolveLocale } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const site = getSite(locale);
  return { title: "Recruit", description: site.recruitPage.hero.body };
}

export default async function RecruitPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const site = getSite(locale);

  return (
    <>
      <PageHero {...site.recruitPage.hero} bodyWide />
      <Culture {...site.recruitPage.culture} />
      <Positions {...site.recruitPage.positions} />
    </>
  );
}
