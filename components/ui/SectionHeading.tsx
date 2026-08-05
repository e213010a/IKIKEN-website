import { type ReactNode } from "react";
import clsx from "clsx";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const isLight = tone === "light";
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "mb-4 font-sans text-xs font-semibold uppercase tracking-[0.15em]",
            isLight ? "text-teal-300" : "text-teal-600",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "whitespace-pre-line text-balance break-keep text-2xl font-bold leading-[1.4] tracking-[0.15em] sm:text-3xl lg:text-4xl",
          isLight ? "text-white" : "text-navy-950",
        )}
      >
        {title}
      </h2>
      {body && (
        <p
          className={clsx(
            "mt-6 text-sm leading-relaxed tracking-[0.15em] sm:text-base",
            isLight ? "text-white/70" : "text-ink-muted",
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}
