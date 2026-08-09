import Link from "next/link";
import clsx from "clsx";
import type { Locale } from "@/content/site";

function pathForLocale(pathname: string, currentLocale: Locale, targetLocale: Locale): string {
  const bare = currentLocale === "ja" ? pathname.replace(/^\/ja/, "") || "/" : pathname;
  if (targetLocale === "en") return bare;
  return bare === "/" ? "/ja" : `/ja${bare}`;
}

export function LocaleSwitch({
  locale,
  pathname,
  className,
}: {
  locale: Locale;
  pathname: string;
  className?: string;
}) {
  const isJa = locale === "ja";

  return (
    <div
      className={clsx(
        "relative inline-flex items-center rounded-full border border-navy-950/15 p-0.5 text-xs font-semibold",
        className,
      )}
    >
      <span
        className={clsx(
          "absolute inset-y-0.5 left-0.5 w-[calc(50%-0.125rem)] rounded-full bg-navy-950 transition-transform duration-300 ease-out",
          isJa && "translate-x-full",
        )}
        aria-hidden
      />
      <Link
        href={pathForLocale(pathname, locale, "en")}
        aria-current={!isJa ? "page" : undefined}
        className={clsx(
          "relative z-10 w-7 rounded-full py-1 text-center transition-colors duration-300 sm:w-8",
          isJa ? "text-navy-950/50 hover:text-navy-950" : "text-white",
        )}
      >
        EN
      </Link>
      <Link
        href={pathForLocale(pathname, locale, "ja")}
        aria-current={isJa ? "page" : undefined}
        className={clsx(
          "relative z-10 w-7 rounded-full py-1 text-center transition-colors duration-300 sm:w-8",
          isJa ? "text-white" : "text-navy-950/50 hover:text-navy-950",
        )}
      >
        JP
      </Link>
    </div>
  );
}
