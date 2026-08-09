import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { type NewsItem } from "@/lib/microcms";
import { localizeHref, type Locale } from "@/content/site";

export function NewsGrid({ items, locale }: { items: readonly NewsItem[]; locale: Locale }) {
  return (
    <section className="bg-paper py-28 sm:py-36">
      <Container>
        <Reveal className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {items.map((item) => {
            const card = (
              <div className="h-full overflow-hidden rounded-2xl border border-navy-950/8 bg-white transition-colors duration-300 hover:border-teal-500/30">
                <div className="relative aspect-[16/9] bg-paper-dim">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-ink-muted/60">
                      Photo
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <time dateTime={item.date} className="text-xs tabular-nums text-ink-muted">
                      {item.date}
                    </time>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">
                      {item.category}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-navy-950 sm:text-base">
                    {item.title}
                  </p>
                </div>
              </div>
            );

            const internalHref = item.body
              ? localizeHref(`/news/${item.id}`, locale)
              : undefined;

            return (
              <RevealItem key={item.id}>
                {internalHref ? (
                  <Link href={internalHref} className="block h-full">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </RevealItem>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
