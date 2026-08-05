import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/content/site";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-paper-dim pb-32 pt-28 sm:pb-40 sm:pt-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,143,77,0.16),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative text-center">
        <FadeIn>
          <h2 className="mx-auto max-w-2xl text-balance break-keep text-2xl font-bold leading-[1.35] tracking-[0.15em] text-navy-950 sm:text-3xl lg:text-4xl">
            {site.cta.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed tracking-[0.15em] text-ink-muted">
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
