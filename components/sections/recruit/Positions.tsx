import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { localizeHref, type Locale } from "@/content/site";

type PositionsProps = {
  eyebrow: string;
  title: string;
  body: string;
  contactCta: string;
  locale: Locale;
};

export function Positions({ eyebrow, title, body, contactCta, locale }: PositionsProps) {
  return (
    <section className="bg-paper-dim py-28 sm:py-36">
      <Container className="max-w-2xl text-center">
        <FadeIn>
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-teal-600">
            {eyebrow}
          </p>
          <h2 className="text-2xl font-bold tracking-[0.15em] text-navy-950 sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-sm leading-relaxed tracking-[0.15em] text-ink-muted sm:text-base lg:text-lg">
            {body}
          </p>
          <div className="mt-10">
            <Button href={localizeHref("/contact", locale)} variant="primary">
              {contactCta}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
