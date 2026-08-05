export type NewsCategory = "Company" | "Product" | "Press";

export type NewsItem = {
  date: string; // YYYY-MM-DD
  category: NewsCategory;
  title: string;
  href?: string; // 外部リンク（プレスリリース等）がある場合のみ
};

// 新しいお知らせは配列の先頭に追加してください（日付降順で表示されます）
export const news: NewsItem[] = [
  {
    date: "2026-08-05",
    category: "Company",
    title: "コーポレートサイトを公開しました。",
  },
];
