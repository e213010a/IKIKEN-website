import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/content/site";

export function Solution() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-28 sm:py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(32,199,181,0.14),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative">
        <FadeIn>
          <SectionHeading
            eyebrow={site.solution.eyebrow}
            title={site.solution.title}
            body={site.solution.body}
            tone="light"
          />
        </FadeIn>

        <Reveal className="mt-16 grid gap-6 lg:grid-cols-2" stagger={0.14}>
          {site.solution.features.map((feature, i) => (
            <RevealItem key={feature.title}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-9 transition-colors duration-300 hover:border-teal-400/30 hover:bg-white/[0.05]">
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-teal-300">
                  {i === 0 ? "App" : "Hardware"}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{feature.body}</p>
                <div className="mt-8 aspect-video w-full rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent" />
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
