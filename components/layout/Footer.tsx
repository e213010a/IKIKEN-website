import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { localizeHref, type Site, type Locale } from "@/content/site";

export function Footer({ site, locale }: { site: Site; locale: Locale }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-white/70">
      <Container className="flex flex-col gap-12 py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-start">
          <div className="max-w-sm">
            <Logo site={site} variant="light" scale={2} legalPrefix />
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Sitemap
              </p>
              <ul className="flex flex-col gap-3">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={localizeHref(item.href, locale)}
                      className="text-sm text-white/70 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Contact
              </p>
              <a
                href={`mailto:${site.footer.contactEmail}`}
                className="text-sm text-white/70 hover:text-white"
              >
                {site.footer.contactEmail}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.company.legalName}</p>
          <p>
            &copy; {year} {site.company.legalName}
            {site.company.legalName.endsWith(".") ? "" : "."} All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
