export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string | null;
};

// TODO: 実データに差し替え（氏名・役職・経歴・写真）
export const team: TeamMember[] = [
  {
    name: "氏名未定",
    role: "代表取締役 / CEO",
    bio: "プロフィール準備中です。",
    photo: null,
  },
  {
    name: "氏名未定",
    role: "CTO",
    bio: "プロフィール準備中です。",
    photo: null,
  },
  {
    name: "氏名未定",
    role: "Product Lead",
    bio: "プロフィール準備中です。",
    photo: null,
  },
];
