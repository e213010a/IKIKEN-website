import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

type PositionsProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function Positions({ eyebrow, title, body }: PositionsProps) {
  return (
    <section className="bg-paper-dim py-28 sm:py-36">
      <Container className="max-w-2xl text-center">
        <FadeIn>
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">
            {eyebrow}
          </p>
          <h2 className="text-2xl font-bold tracking-[0.15em] text-navy-950 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-6 text-sm leading-relaxed tracking-[0.15em] text-ink-muted sm:text-base">
            {body}
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary">
              お問い合わせ
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
