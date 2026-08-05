import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

export function PageHero({ eyebrow, title, body }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-paper pb-24 pt-40 sm:pb-32 sm:pt-48">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,143,77,0.16),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rotate-12 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-teal-300/40 to-coral-300/30"
        aria-hidden
      />
      <Container className="relative">
        <FadeIn>
          <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-balance text-3xl font-medium leading-[1.2] tracking-[0.15em] text-navy-950 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {body && (
            <p className="mt-7 max-w-xl text-sm leading-relaxed tracking-[0.15em] text-ink-muted sm:text-base">
              {body}
            </p>
          )}
        </FadeIn>
      </Container>
    </section>
  );
}
