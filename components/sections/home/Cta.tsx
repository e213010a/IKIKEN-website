import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/content/site";

export function Cta() {
  return (
    <section className="bg-navy-950 pb-28 pt-24 sm:pb-36 sm:pt-32">
      <Container className="text-center">
        <FadeIn>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-medium leading-[1.3] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {site.cta.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/65">
            {site.cta.body}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-10">
            <Button href={site.cta.button.href} variant="primary">
              {site.cta.button.label}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
