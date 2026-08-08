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
