import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/content/site";

export function Vision() {
  return (
    <section className="relative overflow-hidden bg-white py-32 sm:py-40">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(32,199,181,0.12),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative text-center">
        <FadeIn>
          <p className="mb-8 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            {site.vision.eyebrow}
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto max-w-3xl text-balance text-2xl font-medium leading-[1.7] text-navy-950 sm:text-3xl lg:text-[2.25rem]">
            {site.vision.quote}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
