"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import type { Site } from "@/content/site";

const FLIP_INTERVAL_MS = 5000;

export function BrandNameFlip({ site }: { site: Site }) {
  const [showEn, setShowEn] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setShowEn((v) => !v), FLIP_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-grid align-middle text-[0.95em]">
      <span className="sr-only">
        {site.company.brand} / {site.company.brandEn}
      </span>
      <span
        aria-hidden
        className={clsx(
          "col-start-1 row-start-1 whitespace-nowrap font-serif font-bold tracking-[0.08em] transition-opacity duration-700 ease-in-out",
          showEn ? "opacity-0" : "opacity-100",
        )}
      >
        {site.company.brand}
      </span>
      <span
        aria-hidden
        className={clsx(
          "col-start-1 row-start-1 whitespace-nowrap font-heading font-bold tracking-[0.08em] transition-opacity duration-700 ease-in-out",
          showEn ? "opacity-100" : "opacity-0",
        )}
      >
        {site.company.brandEn}
      </span>
    </span>
  );
}
