import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { type NewsItem } from "@/lib/microcms";
import { localizeHref, type Locale } from "@/content/site";

type NewsListProps = {
  items: readonly NewsItem[];
  locale: Locale;
  tone?: "light" | "dark";
  showImage?: boolean;
};

export function NewsList({ items, locale, tone = "light", showImage = false }: NewsListProps) {
  const isDark = tone === "dark";

  return (
    <Reveal
      className={
        isDark
          ? "divide-y divide-white/10 border-t border-white/10"
          : "divide-y divide-navy-950/10 border-t border-navy-950/10"
      }
      stagger={0.06}
    >
      {items.map((item) => {
        const row = (
          <div className="flex items-center gap-5 py-6">
            {showImage && (
              <div
                className={
                  "relative h-14 w-24 shrink-0 overflow-hidden rounded-lg lg:h-20 lg:w-36 " +
                  (isDark ? "bg-white/5" : "bg-paper-dim")
                }
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 144px, 80px"
                  />
                ) : (
                  <div
                    className={
                      "flex h-full items-center justify-center text-[0.65rem] " +
                      (isDark ? "text-white/30" : "text-ink-muted/50")
                    }
                  >
                    Photo
                  </div>
                )}
              </div>
            )}
            <div className="flex min-w-0 flex-1 flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-6">
              <time
                dateTime={item.date}
                className={
                  "shrink-0 font-sans text-sm tabular-nums " +
                  (isDark ? "text-white/50" : "text-ink-muted")
                }
              >
                {item.date}
              </time>
              <span
                className={
                  "shrink-0 text-xs font-semibold uppercase tracking-[0.15em] lg:w-40 " +
                  (isDark ? "text-teal-300" : "text-teal-600")
                }
              >
                {item.category}
              </span>
              <p
                className={
                  "min-w-0 flex-1 " +
                  (isDark
                    ? "text-sm text-white/90 sm:text-base lg:text-lg"
                    : "text-sm text-navy-950 sm:text-base lg:text-lg")
                }
              >
                {item.title}
              </p>
            </div>
          </div>
        );

        const internalHref = localizeHref(`/news/${item.id}`, locale);

        return (
          <RevealItem key={item.id}>
            <Link href={internalHref} className="block transition-opacity hover:opacity-70">
              {row}
            </Link>
          </RevealItem>
        );
      })}
    </Reveal>
  );
}
