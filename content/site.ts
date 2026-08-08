import { site as siteEn } from "./site.en";
import { site as siteJa } from "./site.ja";

export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type Site = typeof siteEn;

const sites: Record<Locale, Site> = {
  en: siteEn,
  ja: siteJa,
};

export function getSite(locale: Locale): Site {
  return sites[locale];
}

export function resolveLocale(value: string): Locale {
  return (locales as readonly string[]).includes(value) ? (value as Locale) : defaultLocale;
}

/** サイト内部の相対パス(content内のhref)にロケールプレフィックスを付与する */
export function localizeHref(href: string, locale: Locale): string {
  if (locale === defaultLocale) return href;
  if (!href.startsWith("/")) return href;
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}
