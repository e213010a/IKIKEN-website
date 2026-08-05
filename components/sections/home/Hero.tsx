import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { Parallax } from "@/components/motion/Parallax";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-paper pt-28 pb-20">
      {/* ポップな装飾ビジュアル: 実写差し替え前提のプレースホルダー */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-40 -top-40 h-[620px] w-[620px] rotate-6 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-teal-300/50 to-coral-300/40 blur-[2px] sm:-right-20 sm:-top-24" />
        <div className="absolute left-[8%] top-[22%] h-3 w-3 rotate-45 rounded-sm bg-coral-400/70" />
        <div className="absolute left-[18%] top-[65%] h-2 w-2 rounded-full bg-teal-500/60" />
        <div className="absolute right-[30%] top-[15%] h-2.5 w-2.5 rotate-45 rounded-sm bg-teal-400/60" />
        <div className="absolute bottom-[18%] right-[12%] h-4 w-4 rotate-12 rounded-sm bg-coral-300/60" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <FadeIn>
              <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">
                {site.hero.eyebrow}
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="text-balance break-keep font-sans text-4xl font-medium leading-[1.15] tracking-[0.15em] text-navy-950 sm:text-5xl lg:text-6xl">
                {site.hero.headline}
              </h1>
            </FadeIn>
            <FadeIn delay={0.18}>
              <p className="mt-8 max-w-lg text-sm leading-relaxed tracking-[0.15em] text-ink-muted sm:text-base">
                {site.hero.body}
              </p>
            </FadeIn>
            <FadeIn delay={0.28}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href={site.hero.cta.href} variant="primary">
                  {site.hero.cta.label}
                </Button>
                <Button href="/contact" variant="ghost" className="text-navy-950">
                  お問い合わせ
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="hidden lg:block">
            <Parallax offset={40}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] border border-navy-950/8 bg-white shadow-[0_20px_60px_-15px_rgba(32,199,181,0.25)]">
                <div className="absolute inset-6 rounded-[1.5rem] border border-teal-500/20" />
                <div className="absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />
                <div className="absolute inset-x-10 bottom-10 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted/70">
                  <span>{site.product.name}</span>
                  <span>Controller</span>
                </div>
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-teal-300/40 to-coral-300/40 blur-2xl" />
              </div>
            </Parallax>
          </FadeIn>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-navy-950/20 p-1.5">
          <span className="h-1.5 w-px animate-bounce bg-navy-950/50" />
        </div>
      </div>
    </section>
  );
}
