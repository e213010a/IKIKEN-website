import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import type { Site } from "@/content/site";

export function Solution({ site }: { site: Site }) {
  return (
    <section className="relative overflow-hidden bg-paper-dim py-32 sm:py-40">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(255,143,77,0.14),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative">
        <FadeIn>
          <SectionHeading eyebrow={site.solution.eyebrow} title={site.solution.title} />
        </FadeIn>

        <Reveal className="mt-16 grid gap-6 lg:grid-cols-2" stagger={0.14}>
          {site.solution.features.map((feature, i) => (
            <RevealItem key={feature.title}>
              <div className="group h-full rounded-2xl border border-navy-950/8 bg-white p-9 transition-colors duration-300 hover:border-teal-500/30 hover:shadow-[0_12px_30px_-12px_rgba(32,199,181,0.25)]">
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">
                  {i === 0 ? "Courseware" : "AI"}
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{feature.body}</p>
                <div className="mt-8 aspect-video w-full rounded-xl border border-navy-950/8 bg-gradient-to-br from-teal-300/15 to-coral-300/15" />
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
