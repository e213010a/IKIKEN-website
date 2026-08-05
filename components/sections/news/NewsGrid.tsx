import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { type NewsItem } from "@/content/news";

export function NewsGrid({ items }: { items: readonly NewsItem[] }) {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <Reveal className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {items.map((item) => {
            const card = (
              <div className="h-full overflow-hidden rounded-2xl border border-navy-950/8 bg-white transition-colors duration-300 hover:border-teal-500/30">
                <div className="relative aspect-[4/3] bg-paper-dim">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
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

            return (
              <RevealItem key={item.date + item.title}>
                {item.href ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
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
