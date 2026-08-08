import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { NewsGrid } from "@/components/sections/news/NewsGrid";
import { Cta } from "@/components/sections/home/Cta";
import { getSite, resolveLocale } from "@/content/site";
import { getNews } from "@/content/news";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const site = getSite(locale);
  return { title: "News", description: site.newsPage.hero.body };
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const site = getSite(locale);
  const news = getNews(locale);
  const sorted = [...news].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero {...site.newsPage.hero} />
      <NewsGrid items={sorted} />
      <Cta site={site} />
    </>
  );
}
