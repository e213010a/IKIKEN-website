import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { NewsList } from "@/components/sections/news/NewsList";
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
      <section className="bg-paper py-24 sm:py-32">
        <Container className="max-w-3xl">
          <NewsList items={sorted} />
        </Container>
      </section>
      <Cta />
    </>
  );
}
