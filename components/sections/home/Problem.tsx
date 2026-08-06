import Image from "next/image";
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
          <SectionHeading eyebrow={site.problem.eyebrow} title={site.problem.title} />
          <p className="mt-6 text-sm leading-relaxed tracking-[0.15em] text-ink-muted sm:text-base">
            {site.problem.body}
          </p>
        </FadeIn>

        <Reveal className="mt-16 grid gap-6 sm:grid-cols-3" stagger={0.12}>
          {site.problem.points.map((point) => (
            <RevealItem key={point.title}>
              <div className="h-full rounded-2xl border border-navy-950/8 bg-white p-8 shadow-[0_1px_2px_rgba(16,16,25,0.04)]">
                <h3 className="text-lg font-bold text-navy-950">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{point.body}</p>
                <Image
                  src={point.image}
                  alt=""
                  width={192}
                  height={192}
                  className="mx-auto mt-6 h-32 w-32 object-contain"
                />
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
