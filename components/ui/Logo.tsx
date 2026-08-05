import Image from "next/image";
import clsx from "clsx";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "dark", className }: LogoProps) {
  const isLight = variant === "light";
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2.5 font-sans text-[1.05rem] font-semibold tracking-[0.02em]",
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
        IKEIKEN<span className={isLight ? "text-teal-300" : "text-teal-600"}>.lab</span>
      </span>
    </span>
  );
}
