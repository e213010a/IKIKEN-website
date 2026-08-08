import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import type { Site } from "@/content/site";

export function ValuePillars({ site }: { site: Site }) {
  return (
    <section className="bg-paper-dim py-32 sm:py-40">
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
                <span className="block font-heading text-3xl font-bold tracking-[0.15em] text-teal-600">
                  {pillar.title}
                </span>
                <p className="mt-1 text-sm font-medium tracking-[0.15em] text-ink-muted">
                  {pillar.titleJa}
                </p>
                <p className="mt-6 text-sm leading-relaxed tracking-[0.15em] text-ink-muted">
                  {pillar.body}
                </p>
                <Image
                  src={pillar.image}
                  alt=""
                  width={400}
                  height={400}
                  className="mx-auto mt-6 h-64 w-64 object-contain"
                />
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
