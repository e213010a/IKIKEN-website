import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import clsx from "clsx";

type Feature = { title: string; body: string };

type FeatureSectionProps = {
  eyebrow: string;
  title: string;
  body: string;
  image?: string;
  features: readonly Feature[];
  reverse?: boolean;
  tone?: "light" | "dim";
};

export function FeatureSection({
  eyebrow,
  title,
  image,
  features,
  reverse = false,
  tone = "light",
}: FeatureSectionProps) {
  return (
    <section className={clsx("py-28 sm:py-36", tone === "dim" ? "bg-paper-dim" : "bg-paper")}>
      <Container>
        <FadeIn>
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-teal-600">
            {eyebrow}
          </p>
          <h2 className="text-balance text-2xl font-bold leading-[1.35] tracking-[0.15em] text-navy-950 sm:text-3xl lg:text-4xl">
            {title}
          </h2>
        </FadeIn>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {image && (
            <FadeIn className={clsx(reverse && "lg:order-2")}>
              <div className="overflow-hidden rounded-2xl border border-navy-950/8 bg-white shadow-[0_1px_2px_rgba(16,16,25,0.04)]">
                <Image
                  src={image}
                  alt=""
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            </FadeIn>
          )}

          <Reveal className={clsx("flex flex-col gap-5", reverse && "lg:order-1")} stagger={0.1}>
            {features.map((feature) => (
              <RevealItem key={feature.title}>
                <div className="rounded-2xl border border-navy-950/8 bg-white p-7">
                  <h3 className="text-base font-bold tracking-[0.15em] text-navy-950 lg:text-lg">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed tracking-[0.15em] text-ink-muted sm:text-base lg:text-lg">{feature.body}</p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
