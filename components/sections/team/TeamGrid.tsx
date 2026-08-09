import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { type TeamMember } from "@/lib/microcms";

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
                  <h3 className="text-lg font-bold text-navy-950">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-teal-600">{member.role}</p>
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink-muted">
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
