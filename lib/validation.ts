import { z } from "zod";
import type { Locale } from "@/content/site";

export const contactInquiryTypeKeys = ["demo", "product", "press", "recruiting", "other"] as const;
export type ContactInquiryType = (typeof contactInquiryTypeKeys)[number];

export const contactRoleKeys = ["clinician", "student", "organization", "other"] as const;
export type ContactRole = (typeof contactRoleKeys)[number];

export const contactInquiryTypeLabels: Record<Locale, Record<ContactInquiryType, string>> = {
  en: {
    demo: "Demo request / visit",
    product: "Product or service question",
    press: "Press / media inquiry",
    recruiting: "Recruiting inquiry",
    other: "Other",
  },
  ja: {
    demo: "デモ体験・見学のご希望",
    product: "製品・サービスに関するご質問",
    press: "取材・広報",
    recruiting: "採用に関する問い合わせ",
    other: "その他",
  },
};

export const contactRoleLabels: Record<Locale, Record<ContactRole, string>> = {
  en: {
    clinician: "Physician / medical professional",
    student: "Student",
    organization: "Company / organization",
    other: "Other",
  },
  ja: {
    clinician: "医師・医療従事者",
    student: "学生",
    organization: "企業・法人",
    other: "その他",
  },
};

const validationMessages: Record<
  Locale,
  {
    name: string;
    inquiryType: string;
    role: string;
    emailRequired: string;
    emailInvalid: string;
    message: string;
  }
> = {
  en: {
    name: "Please enter your name.",
    inquiryType: "Please select an inquiry type.",
    role: "Please select your role.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Please enter a valid email address.",
    message: "Please enter your message.",
  },
  ja: {
    name: "お名前を入力してください",
    inquiryType: "お問い合わせ種別を選択してください",
    role: "ご職業を選択してください",
    emailRequired: "メールアドレスを入力してください",
    emailInvalid: "メールアドレスの形式が正しくありません",
    message: "お問い合わせ内容を入力してください",
  },
};

export function createContactSchema(locale: Locale) {
  const t = validationMessages[locale];
  return z.object({
    name: z.string().trim().min(1, t.name).max(100),
    organization: z.string().trim().max(200).optional().or(z.literal("")),
    inquiryType: z.enum(contactInquiryTypeKeys, { message: t.inquiryType }),
    role: z.enum(contactRoleKeys, { message: t.role }),
    email: z.string().trim().min(1, t.emailRequired).email(t.emailInvalid),
    message: z.string().trim().min(1, t.message).max(4000),
    locale: z.enum(["en", "ja"]).optional(),
  });
}

export type ContactInput = z.infer<ReturnType<typeof createContactSchema>>;
