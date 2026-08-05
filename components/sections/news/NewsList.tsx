import Link from "next/link";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { type NewsItem } from "@/content/news";

type NewsListProps = {
  items: readonly NewsItem[];
  tone?: "light" | "dark";
};

export function NewsList({ items, tone = "light" }: NewsListProps) {
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
          <div className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-6">
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
                "shrink-0 text-xs font-semibold uppercase tracking-[0.15em] " +
                (isDark ? "text-teal-300" : "text-teal-600")
              }
            >
              {item.category}
            </span>
            <p className={isDark ? "text-sm text-white/90 sm:text-base" : "text-sm text-navy-950 sm:text-base"}>
              {item.title}
            </p>
          </div>
        );

        return (
          <RevealItem key={item.date + item.title}>
            {item.href ? (
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-opacity hover:opacity-70"
              >
                {row}
              </Link>
            ) : (
              row
            )}
          </RevealItem>
        );
      })}
    </Reveal>
  );
}
