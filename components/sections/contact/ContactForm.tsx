"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { contactRoles } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "送信に失敗しました。時間をおいて再度お試しください。");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "送信に失敗しました。");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-teal-500/30 bg-teal-500/5 p-10 text-center"
      >
        <p className="text-lg font-semibold text-navy-950">お問い合わせを受け付けました。</p>
        <p className="mt-2 text-sm text-ink-muted">
          担当者よりご連絡いたします。今しばらくお待ちください。
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="お名前" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </Field>
        <Field label="ご所属（任意）" htmlFor="organization">
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="メールアドレス" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </Field>
        <Field label="ご所属・お立場" htmlFor="role">
          <select id="role" name="role" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              選択してください
            </option>
            {contactRoles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="お問い合わせ内容" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={inputClass}
        />
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
          {status === "submitting" ? "送信中..." : "送信する"}
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
      <label htmlFor={htmlFor} className="text-sm font-medium text-navy-950">
        {label}
      </label>
      {children}
    </div>
  );
}
