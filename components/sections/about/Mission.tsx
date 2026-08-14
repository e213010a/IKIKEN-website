import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

type MissionProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function Mission({ eyebrow, title, body }: MissionProps) {
  return (
    <section className="relative overflow-hidden bg-paper-dim py-32 sm:py-40">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(32,199,181,0.14),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative max-w-3xl">
        <FadeIn>
          <p className="mb-6 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-teal-600">
            {eyebrow}
          </p>
          <h2 className="text-balance text-2xl font-bold leading-[1.4] tracking-[0.15em] text-navy-950 sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-8 text-sm leading-loose tracking-[0.15em] text-ink-muted sm:text-base lg:text-lg">{body}</p>
        </FadeIn>
      </Container>
    </section>
  );
}
