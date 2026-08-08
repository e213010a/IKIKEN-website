export type NewsCategory = "Company" | "Product" | "Press";

export type NewsItem = {
  date: string;
  category: NewsCategory;
  title: string;
  href?: string;
  image?: string;
};

export const news: NewsItem[] = [
  { date: "2026-08-05", category: "Company", title: "Our corporate website is now live." },
];
