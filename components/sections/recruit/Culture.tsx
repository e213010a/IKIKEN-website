import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

type Point = { title: string; body: string };

type CultureProps = {
  eyebrow: string;
  title: string;
  points: readonly Point[];
};

export function Culture({ eyebrow, title, points }: CultureProps) {
  return (
    <section className="bg-paper py-28 sm:py-36">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow={eyebrow} title={title} />
        </FadeIn>

        <Reveal className="mt-16 grid gap-6 sm:grid-cols-3" stagger={0.12}>
          {points.map((point) => (
            <RevealItem key={point.title}>
              <div className="h-full rounded-2xl border border-navy-950/8 bg-white p-8 shadow-[0_1px_2px_rgba(16,16,25,0.04)]">
                <h3 className="text-lg font-bold tracking-[0.15em] text-navy-950">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed tracking-[0.15em] text-ink-muted">
                  {point.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
