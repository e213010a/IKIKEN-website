import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

type MissionProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function Mission({ eyebrow, title, body }: MissionProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-28 sm:py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(32,199,181,0.14),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative max-w-3xl">
        <FadeIn>
          <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-teal-300">
            {eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-medium leading-[1.35] tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
            {title}
          </h2>
          <p className="mt-8 text-base leading-loose text-white/70 sm:text-lg">{body}</p>
        </FadeIn>
      </Container>
    </section>
  );
}
