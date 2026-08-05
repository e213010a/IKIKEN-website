import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-coral-400 text-navy-950 hover:bg-coral-500 focus-visible:outline-coral-500",
  secondary:
    "bg-navy-950 text-white hover:bg-navy-800 focus-visible:outline-navy-950",
  ghost:
    "bg-transparent text-inherit border border-current/25 hover:border-current/60 focus-visible:outline-current",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
};

type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", className, children, ...rest } = props;
  const classes = clsx(baseClasses, variantClasses[variant], className);

  if ("href" in rest && rest.href) {
    return (
      <Link href={rest.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
