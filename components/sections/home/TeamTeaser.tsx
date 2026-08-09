import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { localizeHref, type Site, type Locale } from "@/content/site";
import type { TeamMember } from "@/lib/microcms";

export function TeamTeaser({
  site,
  team,
  locale,
}: {
  site: Site;
  team: TeamMember[];
  locale: Locale;
}) {
  return (
    <section className="bg-paper py-32 sm:py-40">
      <Container className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
        <FadeIn className="w-full">
          <SectionHeading
            eyebrow={site.team.eyebrow}
            title={site.team.title}
            body={site.team.body}
          />
        </FadeIn>

        <FadeIn delay={0.12} className="flex shrink-0 flex-col items-start gap-6">
          <div className="flex gap-3">
            {team.map((member) =>
              member.photo ? (
                <div
                  key={member.id}
                  className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-2 border-paper ring-1 ring-navy-950/10"
                >
                  <Image src={member.photo} alt="" fill className="object-cover object-center" sizes="96px" />
                </div>
              ) : (
                <div
                  key={member.id}
                  className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border-2 border-paper bg-teal-300 text-xl font-semibold text-navy-950 ring-1 ring-navy-950/10"
                >
                  {member.name.slice(0, 1)}
                </div>
              ),
            )}
          </div>
          <Button href={localizeHref(site.team.cta.href, locale)} variant="secondary">
            {site.team.cta.label}
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
