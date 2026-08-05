import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import clsx from "clsx";

type Feature = { title: string; body: string };

type FeatureSectionProps = {
  eyebrow: string;
  title: string;
  body: string;
  features: readonly Feature[];
  reverse?: boolean;
  tone?: "light" | "dim";
};

export function FeatureSection({
  eyebrow,
  title,
  body,
  features,
  reverse = false,
  tone = "light",
}: FeatureSectionProps) {
  return (
    <section className={clsx("py-24 sm:py-32", tone === "dim" ? "bg-paper-dim" : "bg-paper")}>
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeIn className={clsx(reverse && "lg:order-2")}>
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
              {eyebrow}
            </p>
            <h2 className="text-balance text-3xl font-medium leading-[1.3] text-navy-950 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">{body}</p>
          </FadeIn>

          <Reveal className={clsx("flex flex-col gap-5", reverse && "lg:order-1")} stagger={0.1}>
            {features.map((feature) => (
              <RevealItem key={feature.title}>
                <div className="rounded-2xl border border-navy-950/8 bg-white p-7">
                  <h3 className="text-base font-semibold text-navy-950">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{feature.body}</p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
