import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

export function PageHero({ eyebrow, title, body }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-40 sm:pb-28 sm:pt-48">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(32,199,181,0.16),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative">
        <FadeIn>
          <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-teal-300">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {body && (
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              {body}
            </p>
          )}
        </FadeIn>
      </Container>
    </section>
  );
}
