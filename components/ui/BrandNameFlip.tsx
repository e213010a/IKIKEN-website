"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

const FLIP_INTERVAL_MS = 5000;

export function BrandNameFlip() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCount((c) => c + 1), FLIP_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block align-middle text-[0.95em] [perspective:600px]">
      <span className="sr-only">
        {site.company.brand} / {site.company.brandEn}
      </span>
      <span
        aria-hidden
        className="grid transition-transform duration-700 ease-in-out [transform-style:preserve-3d]"
        style={{ transform: `rotateX(${count * 180}deg)` }}
      >
        <span className="col-start-1 row-start-1 whitespace-nowrap font-serif font-bold tracking-[0.08em] [backface-visibility:hidden]">
          {site.company.brand}
        </span>
        <span className="col-start-1 row-start-1 whitespace-nowrap font-heading font-bold tracking-[0.08em] [backface-visibility:hidden] [transform:rotateX(180deg)]">
          {site.company.brandEn}
        </span>
      </span>
    </span>
  );
}
