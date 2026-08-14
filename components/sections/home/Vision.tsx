import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

type VisionProps = {
  eyebrow: string;
  quote: string;
  tone?: "light" | "dim";
};

export function Vision({ eyebrow, quote, tone = "light" }: VisionProps) {
  return (
    <section
      className={`relative overflow-hidden py-36 sm:py-44 ${tone === "dim" ? "bg-paper-dim" : "bg-white"}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(32,199,181,0.12),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative text-center">
        <FadeIn>
          <p className="mb-8 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-teal-600">
            {eyebrow}
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto max-w-3xl text-balance font-heading text-2xl font-bold leading-[1.8] tracking-[0.15em] text-navy-950 sm:text-3xl lg:text-[2rem]">
            {quote}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
