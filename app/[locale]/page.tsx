import { Hero } from "@/components/sections/home/Hero";
import { NewsTeaser } from "@/components/sections/home/NewsTeaser";
import { BusinessTeaser } from "@/components/sections/home/BusinessTeaser";
import { Vision } from "@/components/sections/home/Vision";
import { TeamTeaser } from "@/components/sections/home/TeamTeaser";
import { Cta } from "@/components/sections/home/Cta";
import { getSite, resolveLocale } from "@/content/site";
import { getNewsList, getMemberList } from "@/lib/microcms";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const site = getSite(locale);
  const team = await getMemberList(locale);
  const news = await getNewsList(locale);

  return (
    <>
      <Hero site={site} />
      <NewsTeaser site={site} news={news} locale={locale} />
      <BusinessTeaser site={site} locale={locale} />
      <Vision eyebrow={site.vision.eyebrow} quote={site.vision.quote} />
      <TeamTeaser site={site} team={team} locale={locale} />
      <Cta site={site} locale={locale} />
    </>
  );
}
