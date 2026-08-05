import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StickyPin } from "@/components/motion/StickyPin";
import { site } from "@/content/site";

export function HowItWorks() {
  return (
    <section className="bg-paper py-32 sm:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <StickyPin>
            <FadeIn>
              <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">
                {site.howItWorks.eyebrow}
              </p>
              <h2 className="text-balance break-keep text-2xl font-medium leading-[1.4] tracking-[0.15em] text-navy-950 sm:text-3xl">
                {site.howItWorks.title}
              </h2>
            </FadeIn>
          </StickyPin>

          <div className="flex flex-col gap-14 sm:gap-20">
            {site.howItWorks.steps.map((step) => (
              <FadeIn key={step.step}>
                <div className="flex gap-6 border-t border-navy-950/10 pt-8">
                  <span className="font-sans text-sm font-semibold tracking-[0.15em] text-teal-600">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium tracking-[0.15em] text-navy-950">{step.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed tracking-[0.15em] text-ink-muted">
                      {step.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
