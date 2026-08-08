import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/resend";
import {
  createContactSchema,
  contactInquiryTypeLabels,
  contactRoleLabels,
} from "@/lib/validation";
import { getSite, locales, defaultLocale, type Locale } from "@/content/site";

const badRequestMessages: Record<Locale, string> = {
  en: "The request is invalid.",
  ja: "リクエストが不正です。",
};

const invalidInputMessages: Record<Locale, string> = {
  en: "Please check your input.",
  ja: "入力内容をご確認ください。",
};

const sendFailedMessages: Record<Locale, string> = {
  en: "Failed to send. Please try again later.",
  ja: "送信に失敗しました。時間をおいて再度お試しください。",
};

function resolveLocale(value: unknown): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const locale = resolveLocale((body as { locale?: unknown } | null)?.locale);

  if (!body) {
    return NextResponse.json({ error: badRequestMessages[locale] }, { status: 400 });
  }

  const parsed = createContactSchema(locale).safeParse(body);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? invalidInputMessages[locale];
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { name, organization, inquiryType, role, email, message } = parsed.data;
  const site = getSite("ja");
  const to = site.footer.contactEmail;

  const resend = getResendClient();

  if (!resend) {
    // RESEND_API_KEY 未設定時はログ出力のみ(開発環境向けフォールバック)
    console.info("[contact] RESEND_API_KEY is not set. Submission:", {
      name,
      organization,
      inquiryType,
      role,
      email,
      message,
      locale,
    });
    return NextResponse.json({ ok: true, mode: "logged" });
  }

  const inquiryTypeLabel = contactInquiryTypeLabels.ja[inquiryType];
  const roleLabel = contactRoleLabels.ja[role];

  const { error } = await resend.emails.send({
    from: `${site.company.brand} <onboarding@resend.dev>`,
    to,
    replyTo: email,
    subject: `【お問い合わせ】${name}様（${inquiryTypeLabel}）より`,
    text: [
      `お名前: ${name}`,
      `ご所属: ${organization || "未入力"}`,
      `お問い合わせ種別: ${inquiryTypeLabel}`,
      `ご職業: ${roleLabel}`,
      `メールアドレス: ${email}`,
      `言語: ${locale}`,
      "",
      "お問い合わせ内容:",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json({ error: sendFailedMessages[locale] }, { status: 502 });
  }

  return NextResponse.json({ ok: true, mode: "sent" });
}
