import { createClient, type MicroCMSQueries } from "microcms-js-sdk";
import type { Locale } from "@/content/site";

export type NewsCategory = "Company" | "Product" | "Press";

export type NewsItem = {
  id: string;
  date: string;
  category: NewsCategory;
  title: string;
  body?: string;
  image?: string;
};

type NewsContent = {
  id: string;
  publishedAt: string;
  title_JP: string;
  title_EN: string;
  category: NewsCategory;
  image?: { url: string };
  body_JP?: string;
  body_EN?: string;
};

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

const client =
  serviceDomain && apiKey ? createClient({ serviceDomain, apiKey }) : null;

const REVALIDATE_SECONDS = 60;

function toNewsItem(content: NewsContent, locale: Locale): NewsItem {
  return {
    id: content.id,
    date: content.publishedAt.slice(0, 10),
    category: content.category,
    title: locale === "ja" ? content.title_JP : content.title_EN,
    body: locale === "ja" ? content.body_JP : content.body_EN,
    image: content.image?.url,
  };
}

export async function getNewsList(locale: Locale): Promise<NewsItem[]> {
  if (!client) return [];

  try {
    const queries: MicroCMSQueries = {
      orders: "-publishedAt",
      limit: 100,
    };
    const { contents } = await client.getList<NewsContent>({
      endpoint: "news",
      queries,
      customRequestInit: { next: { revalidate: REVALIDATE_SECONDS } },
    });
    return contents.map((c) => toNewsItem(c, locale));
  } catch (error) {
    console.error("[microcms] failed to fetch news list:", error);
    return [];
  }
}

export async function getNewsItem(id: string, locale: Locale): Promise<NewsItem | null> {
  if (!client) return null;

  try {
    const content = await client.getListDetail<NewsContent>({
      endpoint: "news",
      contentId: id,
      customRequestInit: { next: { revalidate: REVALIDATE_SECONDS } },
    });
    return toNewsItem(content, locale);
  } catch (error) {
    console.error(`[microcms] failed to fetch news item "${id}":`, error);
    return null;
  }
}
