import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/content/site";

export function ValuePillars() {
  return (
    <section className="bg-paper-dim py-28 sm:py-36">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={site.values.eyebrow}
            title={site.values.title}
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <Reveal className="mt-16 grid gap-6 sm:grid-cols-2" stagger={0.14}>
          {site.values.pillars.map((pillar) => (
            <RevealItem key={pillar.title}>
              <div className="h-full rounded-2xl bg-white p-10 shadow-[0_1px_2px_rgba(16,16,25,0.04)]">
                <span className="font-sans text-4xl font-semibold tracking-tight text-teal-600">
                  {pillar.title}
                </span>
                <p className="mt-1 text-sm font-medium text-ink-muted">{pillar.titleJa}</p>
                <p className="mt-6 text-sm leading-relaxed text-ink-muted">{pillar.body}</p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
