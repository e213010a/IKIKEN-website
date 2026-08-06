import clsx from "clsx";
import { site } from "@/content/site";
import { BrandNameFlip } from "@/components/ui/BrandNameFlip";
import { LogoMark } from "@/components/ui/LogoMark";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  /** 基準サイズ(1.05rem)に対する倍率 */
  scale?: number;
  /** 社名とIKEIKEN.Labを5秒ごとにフリップ表示する */
  animated?: boolean;
  /** 社名の前に小さく「株式会社」を表示する */
  legalPrefix?: boolean;
};

export function Logo({
  variant = "dark",
  className,
  scale = 1,
  animated = false,
  legalPrefix = false,
}: LogoProps) {
  const isLight = variant === "light";
  return (
    <span
      style={{ fontSize: `${1.05 * scale}rem` }}
      className={clsx(
        "inline-flex items-center gap-[0.6em]",
        isLight ? "text-white" : "text-navy-950",
        className,
      )}
    >
      <LogoMark variant={variant} className="h-[1.3em] w-auto" />
      {animated ? (
        <BrandNameFlip />
      ) : (
        <span className="font-serif tracking-[0.08em]">
          {legalPrefix && <span className="mr-2 whitespace-nowrap text-[0.55em]">株式会社</span>}
          <span className="whitespace-nowrap text-[0.95em]">{site.company.brand}</span>
        </span>
      )}
    </span>
  );
}
