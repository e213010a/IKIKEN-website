import { createClient, type MicroCMSQueries } from "microcms-js-sdk";
import type { Locale } from "@/content/site";

export type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: string;
  body?: string;
  image?: string;
};

type NewsContent = {
  id: string;
  publishedAt: string;
  date: string;
  title_JP: string;
  title_EN: string;
  category: string[];
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
    date: content.date || content.publishedAt.slice(0, 10),
    category: content.category?.join(", ") ?? "",
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

export async function getNewsItem(
  id: string,
  locale: Locale,
): Promise<NewsItem | null> {
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

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string | null;
  romajiName?: string;
};

type MemberContent = {
  id: string;
  name_JP: string;
  name_EN: string;
  role_JP: string;
  role_EN: string;
  bio_JP?: string;
  bio_EN?: string;
  photo?: { url: string };
};

function toTeamMember(content: MemberContent, locale: Locale): TeamMember {
  return {
    id: content.id,
    name: locale === "ja" ? content.name_JP : content.name_EN,
    role: locale === "ja" ? content.role_JP : content.role_EN,
    bio: (locale === "ja" ? content.bio_JP : content.bio_EN) ?? "",
    photo: content.photo?.url ?? null,
    romajiName: locale === "ja" ? content.name_EN : undefined,
  };
}

export async function getMemberList(locale: Locale): Promise<TeamMember[]> {
  if (!client) return [];

  try {
    const queries: MicroCMSQueries = {
      orders: "publishedAt",
      limit: 100,
    };
    const { contents } = await client.getList<MemberContent>({
      endpoint: "member",
      queries,
      customRequestInit: { next: { revalidate: REVALIDATE_SECONDS } },
    });
    return contents.map((c) => toTeamMember(c, locale));
  } catch (error) {
    console.error("[microcms] failed to fetch member list:", error);
    return [];
  }
}

export type HistoryItem = {
  id: string;
  date: string;
  title: string;
};

type HistoryContent = {
  id: string;
  date: string;
  title_JP: string;
  title_EN: string;
};

function toHistoryItem(content: HistoryContent, locale: Locale): HistoryItem {
  return {
    id: content.id,
    date: content.date,
    title: locale === "ja" ? content.title_JP : content.title_EN,
  };
}

export async function getHistoryList(locale: Locale): Promise<HistoryItem[]> {
  if (!client) return [];

  try {
    const queries: MicroCMSQueries = { limit: 100 };
    const { contents } = await client.getList<HistoryContent>({
      endpoint: "history",
      queries,
      customRequestInit: { next: { revalidate: REVALIDATE_SECONDS } },
    });
    return contents
      .map((c) => toHistoryItem(c, locale))
      .sort((a, b) => (a.date < b.date ? -1 : 1));
  } catch (error) {
    console.error("[microcms] failed to fetch history list:", error);
    return [];
  }
}
