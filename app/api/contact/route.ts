import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/resend";
import { contactSchema } from "@/lib/validation";
import { site } from "@/content/site";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "リクエストが不正です。" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "入力内容をご確認ください。";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { name, organization, role, email, message } = parsed.data;
  const to = site.footer.contactEmail;

  const resend = getResendClient();

  if (!resend) {
    // RESEND_API_KEY 未設定時はログ出力のみ(開発環境向けフォールバック)
    console.info("[contact] RESEND_API_KEY is not set. Submission:", {
      name,
      organization,
      role,
      email,
      message,
    });
    return NextResponse.json({ ok: true, mode: "logged" });
  }

  const { error } = await resend.emails.send({
    from: `${site.company.brand} <onboarding@resend.dev>`,
    to,
    replyTo: email,
    subject: `【お問い合わせ】${name}様（${role}）より`,
    text: [
      `お名前: ${name}`,
      `ご所属: ${organization || "未入力"}`,
      `お立場: ${role}`,
      `メールアドレス: ${email}`,
      "",
      "お問い合わせ内容:",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, mode: "sent" });
}
