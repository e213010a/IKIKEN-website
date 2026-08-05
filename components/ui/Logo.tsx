import Image from "next/image";
import clsx from "clsx";
import { site } from "@/content/site";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  /** 基準サイズ(1.05rem)に対する倍率 */
  scale?: number;
};

const dotIndex = site.company.brand.indexOf(".");
const brandName = site.company.brand.slice(0, dotIndex);
const brandSuffix = site.company.brand.slice(dotIndex);

export function Logo({ variant = "dark", className, scale = 1 }: LogoProps) {
  const isLight = variant === "light";
  return (
    <span
      style={{ fontSize: `${1.05 * scale}rem` }}
      className={clsx(
        "inline-flex items-center gap-[0.6em] font-sans font-semibold tracking-[0.02em]",
        isLight ? "text-white" : "text-navy-950",
        className,
      )}
    >
      <Image
        src={isLight ? "/brand/mark-white.png" : "/brand/mark.png"}
        alt=""
        width={22}
        height={24}
        priority
        className="h-[1.3em] w-auto"
      />
      <span className="whitespace-nowrap">
        {brandName}
        <span className={isLight ? "text-teal-300" : "text-teal-600"}>{brandSuffix}</span>
      </span>
    </span>
  );
}
