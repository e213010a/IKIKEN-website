import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NewsList } from "@/components/sections/news/NewsList";
import type { NewsItem } from "@/lib/microcms";
import { localizeHref, type Site, type Locale } from "@/content/site";

export function NewsTeaser({
  site,
  news,
  locale,
}: {
  site: Site;
  news: NewsItem[];
  locale: Locale;
}) {
  const latest = [...news].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

  if (latest.length === 0) return null;

  return (
    <section className="border-b border-navy-950/8 bg-white py-14 sm:py-16">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
        <div className="flex shrink-0 flex-row items-center justify-between gap-4 sm:w-48 sm:flex-col sm:items-start sm:gap-3">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">
              {site.newsTeaser.eyebrow}
            </p>
            <h2 className="mt-2 text-xl font-bold tracking-[0.15em] text-navy-950">
              {site.newsTeaser.title}
            </h2>
          </div>
          <Link
            href={localizeHref(site.newsTeaser.cta.href, locale)}
            className="text-xs text-ink-muted underline-offset-4 hover:text-navy-950 hover:underline"
          >
            {site.newsTeaser.cta.label}
          </Link>
        </div>
        <div className="flex-1">
          <NewsList items={latest} locale={locale} showImage />
        </div>
      </Container>
    </section>
  );
}
