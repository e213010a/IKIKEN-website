import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import type { Locale } from "@/content/site";
import { type TeamMember } from "@/lib/microcms";

type TeamGridProps = {
  members: TeamMember[];
  locale?: Locale;
  id?: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  tone?: "teal" | "coral" | "navy";
};

const toneStyles: Record<NonNullable<TeamGridProps["tone"]>, { bg: string; glow: string }> = {
  teal: {
    bg: "bg-paper",
    glow: "bg-[radial-gradient(ellipse_at_50%_0%,rgba(32,199,181,0.14),transparent_60%)]",
  },
  coral: {
    bg: "bg-paper",
    glow: "bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,143,77,0.16),transparent_60%)]",
  },
  navy: {
    bg: "bg-paper-dim",
    glow: "bg-[radial-gradient(ellipse_at_50%_0%,rgba(47,47,130,0.12),transparent_60%)]",
  },
};

export function TeamGrid({
  members,
  locale,
  id,
  eyebrow,
  title,
  body,
  tone = "teal",
}: TeamGridProps) {
  const { bg, glow } = toneStyles[tone];
  return (
    <section id={id} className={`relative overflow-hidden ${bg} py-28 sm:py-36`}>
      <div className={`pointer-events-none absolute inset-0 ${glow}`} aria-hidden />
      <Container className="relative">
        {title && (
          <FadeIn>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              body={body}
              className="mb-16"
            />
          </FadeIn>
        )}
        <Reveal
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {members.map((member) => (
            <RevealItem key={member.id}>
              <div className="overflow-hidden rounded-2xl border border-navy-950/8 bg-white">
                <div className="relative aspect-[4/3] bg-paper-dim">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-ink-muted/60">
                      Photo
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-lg font-bold text-navy-950 lg:text-xl">
                      {member.name}
                    </h3>
                    {locale === "ja" && member.romajiName ? (
                      <span className="text-[0.7rem] font-medium tracking-[0.2em] text-ink-muted/70">
                        {member.romajiName}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm font-medium text-teal-600">
                    {member.role}
                  </p>
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink-muted sm:text-base lg:text-lg">
                    {member.bio}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
