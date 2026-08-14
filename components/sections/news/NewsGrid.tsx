"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { type NewsItem } from "@/lib/microcms";
import { localizeHref, type Locale } from "@/content/site";

export function NewsGrid({ items, locale }: { items: readonly NewsItem[]; locale: Locale }) {
  const [activeTab, setActiveTab] = useState<string>(
    locale === "ja" ? "すべて" : "All",
  );

  const categories = useMemo(() => {
    const set = new Set<string>();
    items.forEach((it) => {
      it.category?.split(",").map((c) => c.trim()).forEach((c) => c && set.add(c));
    });
    return Array.from(set);
  }, [items]);

  const tabs = useMemo(() => [locale === "ja" ? "すべて" : "All", ...categories], [categories, locale]);

  const filtered = useMemo(() => {
    if (activeTab === (locale === "ja" ? "すべて" : "All")) return items;
    return items.filter((it) => it.category && it.category.includes(activeTab));
  }, [items, activeTab, locale]);

  return (
    <section className="bg-paper py-28 sm:py-36">
      <Container>
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {tabs.map((t) => {
            const isActive = t === activeTab;
            return (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-teal-600 text-white"
                    : "bg-white/40 text-ink-muted hover:bg-white/60"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        <Reveal key={activeTab} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {filtered.map((item) => {
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
                  <p className="mt-3 text-sm leading-relaxed text-navy-950 sm:text-base lg:text-lg">
                    {item.title}
                  </p>
                </div>
              </div>
            );

            const internalHref = localizeHref(`/news/${item.id}`, locale);

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
