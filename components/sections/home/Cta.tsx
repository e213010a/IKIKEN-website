import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/content/site";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-paper-dim pb-28 pt-24 sm:pb-36 sm:pt-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,143,77,0.16),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative text-center">
        <FadeIn>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-medium leading-[1.3] text-navy-950 sm:text-4xl lg:text-5xl">
            {site.cta.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-muted">
            {site.cta.body}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-10">
            <Button href={site.cta.button.href} variant="primary">
              {site.cta.button.label}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
