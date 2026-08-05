import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

type Row = { label: string; value: string };

type OverviewProps = {
  eyebrow: string;
  title: string;
  rows: readonly Row[];
};

export function Overview({ eyebrow, title, rows }: OverviewProps) {
  return (
    <section className="bg-paper py-28 sm:py-36">
      <Container className="max-w-3xl">
        <FadeIn>
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-medium text-navy-950 sm:text-4xl">{title}</h2>

          <dl className="mt-12 divide-y divide-navy-950/10 border-t border-navy-950/10">
            {rows.map((row) => (
              <div key={row.label} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr] sm:gap-6">
                <dt className="text-sm font-medium text-ink-muted">{row.label}</dt>
                <dd className="text-sm text-navy-950 sm:text-base">{row.value}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </Container>
    </section>
  );
}
