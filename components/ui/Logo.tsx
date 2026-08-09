import clsx from "clsx";
import type { Site, Locale } from "@/content/site";
import { BrandNameFlip } from "@/components/ui/BrandNameFlip";
import { LogoMark } from "@/components/ui/LogoMark";

type LogoProps = {
  site: Site;
  locale: Locale;
  variant?: "dark" | "light";
  className?: string;
  /** 基準サイズ(1.05rem)に対する倍率 */
  scale?: number;
  /** 社名とIKEIKEN.Labを5秒ごとにフリップ表示する(日本語ロケールのみ有効) */
  animated?: boolean;
  /** 社名の前に小さく「株式会社」を表示する */
  legalPrefix?: boolean;
};

export function Logo({
  site,
  locale,
  variant = "dark",
  className,
  scale = 1,
  animated = false,
  legalPrefix = false,
}: LogoProps) {
  const isLight = variant === "light";
  const fullSize = 1.05 * scale;
  const fontSize = legalPrefix
    ? `clamp(1.4rem, 4.5vw, ${fullSize}rem)`
    : `clamp(1.1rem, 5.5vw, ${fullSize}rem)`;
  const showFlip = animated && locale === "ja";
  return (
    <span
      style={{ fontSize }}
      className={clsx(
        "inline-flex items-center gap-[0.6em]",
        isLight ? "text-white" : "text-navy-950",
        className,
      )}
    >
      <LogoMark variant={variant} className="h-[1.3em] w-auto shrink-0" />
      {showFlip ? (
        <BrandNameFlip site={site} />
      ) : (
        <span
          className={clsx(
            "whitespace-nowrap tracking-[0.08em]",
            locale === "ja" ? "font-serif" : "font-heading",
            animated && "font-bold",
          )}
        >
          {legalPrefix && site.company.legalPrefix && (
            <span className="mr-2 text-[0.55em]">{site.company.legalPrefix}</span>
          )}
          <span className="text-[0.95em]">{site.company.brand}</span>
        </span>
      )}
    </span>
  );
}
