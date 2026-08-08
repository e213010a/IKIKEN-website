import { news as newsEn, type NewsItem, type NewsCategory } from "./news.en";
import { news as newsJa } from "./news.ja";
import type { Locale } from "./site";

export type { NewsItem, NewsCategory };

const newsByLocale: Record<Locale, NewsItem[]> = {
  en: newsEn,
  ja: newsJa,
};

export function getNews(locale: Locale): NewsItem[] {
  return newsByLocale[locale];
}
