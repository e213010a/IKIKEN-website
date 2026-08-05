import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { type TeamMember } from "@/content/team";

type TeamGridProps = {
  members: TeamMember[];
  id?: string;
  eyebrow?: string;
  title?: string;
  body?: string;
};

export function TeamGrid({ members, id, eyebrow, title, body }: TeamGridProps) {
  return (
    <section id={id} className="bg-paper py-28 sm:py-36">
      <Container>
        {title && (
          <FadeIn>
            <SectionHeading eyebrow={eyebrow} title={title} body={body} className="mb-16" />
          </FadeIn>
        )}
        <Reveal className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {members.map((member) => (
            <RevealItem key={member.name + member.role}>
              <div className="overflow-hidden rounded-2xl border border-navy-950/8 bg-white">
                <div className="flex aspect-[4/3] items-center justify-center bg-paper-dim text-sm text-ink-muted/60">
                  Photo
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold break-keep text-navy-950">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-teal-600">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{member.bio}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
