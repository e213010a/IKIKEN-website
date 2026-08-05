import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { Parallax } from "@/components/motion/Parallax";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pt-28 pb-20">
      {/* 抽象シミュレーター空間ビジュアル: 実写差し替え前提のプレースホルダー */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[140vw] w-[140vw] -translate-x-1/2 -translate-y-1/2 sm:h-[900px] sm:w-[900px]">
          <div className="absolute inset-0 rounded-full border border-teal-400/10" />
          <div className="absolute inset-[12%] rounded-full border border-teal-400/10" />
          <div className="absolute inset-[24%] rounded-full border border-teal-400/15" />
          <div className="absolute inset-[36%] rounded-full bg-teal-400/10 blur-2xl" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(32,199,181,0.16),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(8,8,31,0.6)_75%,rgba(8,8,31,1)_100%)]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <FadeIn>
              <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-teal-300">
                {site.hero.eyebrow}
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="whitespace-pre-line font-sans text-[2.75rem] font-semibold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
                {site.hero.headline}
              </h1>
            </FadeIn>
            <FadeIn delay={0.18}>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
                {site.hero.body}
              </p>
            </FadeIn>
            <FadeIn delay={0.28}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href={site.hero.cta.href} variant="primary">
                  {site.hero.cta.label}
                </Button>
                <Button href="/contact" variant="ghost" className="text-white">
                  お問い合わせ
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="hidden lg:block">
            <Parallax offset={40}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <div className="absolute inset-6 rounded-[1.5rem] border border-teal-400/20" />
                <div className="absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />
                <div className="absolute inset-x-10 bottom-10 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
                  <span>{site.product.name}</span>
                  <span>Controller</span>
                </div>
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/20 blur-2xl" />
              </div>
            </Parallax>
          </FadeIn>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
          <span className="h-1.5 w-px animate-bounce bg-white/60" />
        </div>
      </div>
    </section>
  );
}
