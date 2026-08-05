import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/content/site";
import { team } from "@/content/team";

export function TeamTeaser() {
  return (
    <section className="bg-paper py-32 sm:py-40">
      <Container className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
        <FadeIn>
          <SectionHeading
            eyebrow={site.team.eyebrow}
            title={site.team.title}
            body={site.team.body}
          />
        </FadeIn>

        <FadeIn delay={0.12} className="flex shrink-0 flex-col items-start gap-6">
          <div className="flex -space-x-3">
            {team.map((member) => (
              <div
                key={member.name + member.role}
                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-paper bg-teal-300 text-sm font-semibold text-navy-950 ring-1 ring-navy-950/10"
              >
                {member.role.slice(0, 1)}
              </div>
            ))}
          </div>
          <Button href={site.team.cta.href} variant="secondary">
            {site.team.cta.label}
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
