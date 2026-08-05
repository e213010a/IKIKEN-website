import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: site.contactPage.hero.body,
};

export default function ContactPage() {
  return (
    <>
      <PageHero {...site.contactPage.hero} />
      <section className="bg-paper py-24 sm:py-32">
        <Container className="max-w-2xl">
          <FadeIn>
            <ContactForm />
            <p className="mt-10 text-sm text-ink-muted">
              直接メールでのお問い合わせは{" "}
              <a
                href={`mailto:${site.footer.contactEmail}`}
                className="font-medium text-teal-600 hover:text-teal-500"
              >
                {site.footer.contactEmail}
              </a>{" "}
              までお願いいたします。
            </p>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
