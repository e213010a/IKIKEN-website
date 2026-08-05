"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-navy-950/85 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
        <Link href="/" onClick={() => setOpen(false)} aria-label="IKEIKEN.lab ホーム">
          <Logo variant="light" />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary" className="px-6 py-2.5 text-sm">
            お問い合わせ
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={clsx(
                "absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={clsx(
                "absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition-opacity duration-300",
                open && "opacity-0",
              )}
            />
            <span
              className={clsx(
                "absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-300",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-6 pb-6 pt-2 md:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-white/90"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" className="mt-3 w-full">
            お問い合わせ
          </Button>
        </nav>
      )}
    </header>
  );
}
