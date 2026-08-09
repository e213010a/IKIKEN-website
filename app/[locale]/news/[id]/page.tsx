import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { getSite, localizeHref, resolveLocale } from "@/content/site";
import { getNewsItem } from "@/lib/microcms";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, id } = await params;
  const locale = resolveLocale(rawLocale);
  const item = await getNewsItem(id, locale);
  return { title: item?.title ?? "News" };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale: rawLocale, id } = await params;
  const locale = resolveLocale(rawLocale);
  const site = getSite(locale);
  const item = await getNewsItem(id, locale);

  if (!item) notFound();

  return (
    <section className="relative overflow-hidden bg-paper pb-24 pt-40 sm:pt-48">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,143,77,0.16),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative max-w-3xl">
        <FadeIn>
          <Link
            href={localizeHref("/news", locale)}
            className="text-xs text-ink-muted underline-offset-4 hover:text-navy-950 hover:underline"
          >
            ← {site.nav.find((navItem) => navItem.href === "/news")?.label ?? "News"}
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <time dateTime={item.date} className="text-xs tabular-nums text-ink-muted">
              {item.date}
            </time>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">
              {item.category}
            </span>
          </div>

          <h1 className="mt-4 text-balance text-2xl font-bold leading-[1.35] tracking-[0.15em] text-navy-950 sm:text-3xl lg:text-4xl">
            {item.title}
          </h1>

          {item.image && (
            <div className="mt-10 overflow-hidden rounded-2xl border border-navy-950/8 bg-white">
              <Image
                src={item.image}
                alt=""
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          )}

          {item.body && (
            <div
              className="prose prose-sm sm:prose-base mt-10 max-w-none text-ink-muted prose-headings:text-navy-950 prose-a:text-teal-600"
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          )}
        </FadeIn>
      </Container>
    </section>
  );
}
