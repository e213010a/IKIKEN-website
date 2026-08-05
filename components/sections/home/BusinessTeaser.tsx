import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/content/site";

export function BusinessTeaser() {
  return (
    <section className="bg-paper py-28 sm:py-36">
      <Container className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
        <FadeIn className="w-full">
          <SectionHeading
            eyebrow={site.businessTeaser.eyebrow}
            title={site.businessTeaser.title}
            body={site.businessTeaser.body}
          />
        </FadeIn>

        <FadeIn delay={0.12} className="shrink-0">
          <Button href={site.businessTeaser.cta.href} variant="secondary">
            {site.businessTeaser.cta.label}
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
