import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { NewsGrid } from "@/components/sections/news/NewsGrid";
import { Cta } from "@/components/sections/home/Cta";
import { site } from "@/content/site";
import { news } from "@/content/news";

export const metadata: Metadata = {
  title: "News",
  description: site.newsPage.hero.body,
};

export default function NewsPage() {
  const sorted = [...news].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero {...site.newsPage.hero} />
      <NewsGrid items={sorted} />
      <Cta />
    </>
  );
}
