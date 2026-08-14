import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { localizeHref, type Site, type Locale } from "@/content/site";
import type { TeamMember } from "@/lib/microcms";

const FOUNDER_ROLE_PATTERN = /共同創業者|co-founder/i;

export function TeamTeaser({
  site,
  team,
  locale,
}: {
  site: Site;
  team: TeamMember[];
  locale: Locale;
}) {
  const founders = team
    .filter((member) => member.category === "Engineer" && FOUNDER_ROLE_PATTERN.test(member.role))
    .slice(0, 3);

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

        <FadeIn delay={0.12} className="flex shrink-0 flex-col items-start gap-8">
          <div className="flex gap-3 sm:gap-6">
            {founders.map((member) => (
              <div key={member.id} className="flex w-20 shrink-0 flex-col items-center text-center sm:w-28 lg:w-36">
                {member.photo ? (
                  <div className="relative h-20 w-20 overflow-hidden rounded-2xl border-2 border-paper ring-1 ring-navy-950/10 sm:h-28 sm:w-28 lg:h-36 lg:w-36">
                    <Image
                      src={member.photo}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 144px, (min-width: 640px) 112px, 80px"
                    />
                  </div>
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-paper bg-teal-300 text-2xl font-semibold text-navy-950 ring-1 ring-navy-950/10 sm:h-28 sm:w-28 lg:h-36 lg:w-36">
                    {member.name.slice(0, 1)}
                  </div>
                )}
                <p className="mt-3 text-sm font-bold text-navy-950">{member.name}</p>
                <p className="text-xs text-ink-muted">{member.role}</p>
              </div>
            ))}
          </div>
          <Button href={localizeHref(site.team.cta.href, locale)} variant="secondary">
            {site.team.cta.label}
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
