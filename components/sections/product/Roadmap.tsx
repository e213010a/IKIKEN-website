import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/content/site";

export function Roadmap() {
  return (
    <section className="relative overflow-hidden bg-white py-32 sm:py-40">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(32,199,181,0.14),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative">
        <FadeIn>
          <SectionHeading
            eyebrow={site.businessPage.roadmap.eyebrow}
            title={site.businessPage.roadmap.title}
            body={site.businessPage.roadmap.body}
            align="center"
            className="mx-auto max-w-2xl"
          />
        </FadeIn>

        <Reveal className="mt-16 grid gap-6 sm:grid-cols-2" stagger={0.12}>
          {site.businessPage.roadmap.steps.map((step) => (
            <RevealItem key={step.step}>
              <div className="h-full rounded-2xl border border-navy-950/8 bg-white p-8 shadow-[0_1px_2px_rgba(16,16,25,0.04)]">
                <span className="font-sans text-sm font-semibold tracking-[0.15em] text-teal-600">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-bold break-keep tracking-[0.15em] text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed tracking-[0.15em] text-ink-muted">
                  {step.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
