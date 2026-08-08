"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import type { Site, Locale } from "@/content/site";

function otherLocaleHref(pathname: string, locale: Locale): string {
  if (locale === "en") {
    return `/ja${pathname === "/" ? "" : pathname}`;
  }
  const stripped = pathname.replace(/^\/ja/, "");
  return stripped === "" ? "/" : stripped;
}

export function Header({ site, locale }: { site: Site; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchHref = otherLocaleHref(pathname, locale);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-navy-950/8 bg-paper/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label={`${site.company.brand} ${site.ui.homeAriaSuffix}`}
        >
          <Logo site={site} variant="dark" scale={1.5} animated />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-navy-950/70 transition-colors hover:text-navy-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            href={switchHref}
            className="text-sm font-semibold tracking-wide text-navy-950/70 transition-colors hover:text-navy-950"
          >
            {site.ui.switchLocaleLabel}
          </Link>
          <Button href="/contact" variant="primary" className="px-6 py-2.5 text-sm">
            {site.ui.contactCta}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? site.ui.closeMenu : site.ui.openMenu}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy-950 md:hidden"
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
        <nav className="flex flex-col gap-1 border-t border-navy-950/8 bg-paper px-6 pb-6 pt-2 md:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-navy-950/90"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={switchHref}
            onClick={() => setOpen(false)}
            className="py-3 text-base font-medium text-navy-950/90"
          >
            {site.ui.switchLocaleLabel}
          </Link>
          <Button href="/contact" variant="primary" className="mt-3 w-full">
            {site.ui.contactCta}
          </Button>
        </nav>
      )}
    </header>
  );
}
