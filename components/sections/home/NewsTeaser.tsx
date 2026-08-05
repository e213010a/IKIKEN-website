import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NewsList } from "@/components/sections/news/NewsList";
import { news } from "@/content/news";

export function NewsTeaser() {
  const latest = [...news].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

  if (latest.length === 0) return null;

  return (
    <section className="bg-navy-900 py-10 sm:py-12">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
        <div className="flex shrink-0 items-center justify-between sm:w-40 sm:flex-col sm:items-start sm:gap-3">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-teal-300">
            News
          </span>
          <Link href="/news" className="text-xs text-white/60 underline-offset-4 hover:text-white hover:underline">
            すべて見る
          </Link>
        </div>
        <div className="flex-1">
          <NewsList items={latest} tone="dark" />
        </div>
      </Container>
    </section>
  );
}
