import { z } from "zod";

export const contactRoles = [
  "医師",
  "病院関係者",
  "投資家",
  "その他",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "お名前を入力してください").max(100),
  organization: z.string().trim().max(200).optional().or(z.literal("")),
  role: z.enum(contactRoles, { message: "ご所属・お立場を選択してください" }),
  email: z.string().trim().min(1, "メールアドレスを入力してください").email("メールアドレスの形式が正しくありません"),
  message: z.string().trim().min(1, "お問い合わせ内容を入力してください").max(4000),
});

export type ContactInput = z.infer<typeof contactSchema>;
