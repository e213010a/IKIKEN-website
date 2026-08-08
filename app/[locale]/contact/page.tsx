import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { getSite, resolveLocale } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const site = getSite(locale);
  return { title: "Contact", description: site.contactPage.hero.body };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const site = getSite(locale);

  return (
    <>
      <PageHero {...site.contactPage.hero} />
      <section className="bg-paper py-24 sm:py-32">
        <Container className="max-w-2xl">
          <FadeIn>
            <ContactForm locale={locale} />
            <p className="mt-10 text-sm text-ink-muted">
              {site.contactPage.directContact.prefix}
              <a
                href={`mailto:${site.footer.contactEmail}`}
                className="font-medium text-teal-600 hover:text-teal-500"
              >
                {site.footer.contactEmail}
              </a>
              {site.contactPage.directContact.suffix}
            </p>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
