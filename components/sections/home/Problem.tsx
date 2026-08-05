import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/content/site";

export function Problem() {
  return (
    <section className="bg-paper py-32 sm:py-40">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={site.problem.eyebrow}
            title={site.problem.title}
            body={site.problem.body}
          />
        </FadeIn>

        <Reveal className="mt-16 grid gap-6 sm:grid-cols-3" stagger={0.12}>
          {site.problem.points.map((point) => (
            <RevealItem key={point.title}>
              <div className="h-full rounded-2xl border border-navy-950/8 bg-white p-8 shadow-[0_1px_2px_rgba(16,16,25,0.04)]">
                <h3 className="text-lg font-bold break-keep text-navy-950">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{point.body}</p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
