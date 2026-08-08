"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import {
  contactInquiryTypeKeys,
  contactInquiryTypeLabels,
  contactRoleKeys,
  contactRoleLabels,
} from "@/lib/validation";
import type { Locale } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";

const copy: Record<
  Locale,
  {
    name: string;
    email: string;
    inquiryType: string;
    role: string;
    organization: string;
    message: string;
    selectPlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    genericError: string;
  }
> = {
  en: {
    name: "Name",
    email: "Email",
    inquiryType: "Inquiry type",
    role: "Your role",
    organization: "Organization (optional)",
    message: "Message",
    selectPlaceholder: "Please select",
    submit: "Send",
    submitting: "Sending...",
    successTitle: "Your message has been sent.",
    successBody: "A member of our team will be in touch shortly.",
    genericError: "Something went wrong. Please try again later.",
  },
  ja: {
    name: "お名前",
    email: "メールアドレス",
    inquiryType: "お問い合わせ種別",
    role: "ご職業",
    organization: "ご所属（任意）",
    message: "お問い合わせ内容",
    selectPlaceholder: "選択してください",
    submit: "送信する",
    submitting: "送信中...",
    successTitle: "お問い合わせを受け付けました。",
    successBody: "担当者よりご連絡いたします。今しばらくお待ちください。",
    genericError: "送信に失敗しました。時間をおいて再度お試しください。",
  },
};

export function ContactForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = { ...Object.fromEntries(formData.entries()), locale };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? t.genericError);
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : t.genericError);
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-teal-500/30 bg-teal-500/5 p-10 text-center"
      >
        <p className="text-lg font-semibold text-navy-950">{t.successTitle}</p>
        <p className="mt-2 text-sm text-ink-muted">{t.successBody}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t.name} htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </Field>
        <Field label={t.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t.inquiryType} htmlFor="inquiryType">
          <select id="inquiryType" name="inquiryType" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              {t.selectPlaceholder}
            </option>
            {contactInquiryTypeKeys.map((key) => (
              <option key={key} value={key}>
                {contactInquiryTypeLabels[locale][key]}
              </option>
            ))}
          </select>
        </Field>
        <Field label={t.role} htmlFor="role">
          <select id="role" name="role" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              {t.selectPlaceholder}
            </option>
            {contactRoleKeys.map((key) => (
              <option key={key} value={key}>
                {contactRoleLabels[locale][key]}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label={t.organization} htmlFor="organization">
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          className={inputClass}
        />
      </Field>

      <Field label={t.message} htmlFor="message">
        <textarea id="message" name="message" required rows={6} className={inputClass} />
      </Field>

      <AnimatePresence>
        {status === "error" && errorMessage && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-red-600"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>

      <div>
        <Button type="submit" disabled={status === "submitting"} className="disabled:opacity-60">
          {status === "submitting" ? t.submitting : t.submit}
        </Button>
      </div>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-navy-950/15 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition-colors placeholder:text-ink-muted/50 focus:border-teal-500";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="font-heading text-sm font-medium text-navy-950">
        {label}
      </label>
      {children}
    </div>
  );
}
