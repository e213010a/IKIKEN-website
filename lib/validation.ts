import { z } from "zod";

export const contactInquiryTypes = [
  "デモ体験・見学のご希望",
  "製品・サービスに関するご質問",
  "取材・広報",
  "採用に関する問い合わせ",
  "その他",
] as const;

export const contactRoles = [
  "医師・医療従事者",
  "学生",
  "企業・法人",
  "その他",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "お名前を入力してください").max(100),
  organization: z.string().trim().max(200).optional().or(z.literal("")),
  inquiryType: z.enum(contactInquiryTypes, { message: "お問い合わせ種別を選択してください" }),
  role: z.enum(contactRoles, { message: "ご所属・お立場を選択してください" }),
  email: z.string().trim().min(1, "メールアドレスを入力してください").email("メールアドレスの形式が正しくありません"),
  message: z.string().trim().min(1, "お問い合わせ内容を入力してください").max(4000),
});

export type ContactInput = z.infer<typeof contactSchema>;
