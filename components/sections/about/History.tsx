import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal, RevealItem } from "@/components/motion/Reveal";

type Milestone = { date: string; title: string };

type HistoryProps = {
  eyebrow: string;
  title: string;
  milestones: readonly Milestone[];
};

export function History({ eyebrow, title, milestones }: HistoryProps) {
  return (
    <section className="bg-paper-dim py-28 sm:py-36">
      <Container className="max-w-3xl">
        <FadeIn>
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">
            {eyebrow}
          </p>
          <h2 className="text-2xl font-medium break-keep tracking-[0.15em] text-navy-950 sm:text-3xl">
            {title}
          </h2>
        </FadeIn>

        <Reveal className="mt-12 divide-y divide-navy-950/10 border-t border-navy-950/10" stagger={0.08}>
          {milestones.map((m) => (
            <RevealItem key={m.date + m.title}>
              <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:gap-6">
                <time className="shrink-0 text-sm tabular-nums tracking-[0.15em] text-ink-muted">
                  {m.date}
                </time>
                <p className="text-sm tracking-[0.15em] text-navy-950 sm:text-base">{m.title}</p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
