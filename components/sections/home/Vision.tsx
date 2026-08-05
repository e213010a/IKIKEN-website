import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/content/site";

export function Vision() {
  return (
    <section className="relative overflow-hidden bg-white py-36 sm:py-44">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(32,199,181,0.12),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative text-center">
        <FadeIn>
          <p className="mb-8 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">
            {site.vision.eyebrow}
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto max-w-3xl text-balance break-keep font-heading text-xl font-bold leading-[1.8] tracking-[0.15em] text-navy-950 sm:text-2xl lg:text-[1.75rem]">
            {site.vision.quote}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
