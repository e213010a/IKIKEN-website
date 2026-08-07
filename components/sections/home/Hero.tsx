import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { FloatIn } from "@/components/motion/FloatIn";
import { WaveTransition } from "@/components/ui/WaveTransition";
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
        <div className="max-w-2xl">
          <FadeIn>
            <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">
              {site.hero.eyebrow}
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1
              className="text-balance text-4xl font-extrabold leading-[1.15] tracking-[0.15em] text-navy-950 sm:text-5xl lg:text-6xl"
              style={{ fontFamily: '"Nunito Sans", var(--font-sans)' }}
            >
              {site.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.18}>
            <p className="mt-14 max-w-lg text-sm leading-relaxed tracking-[0.15em] text-ink-muted sm:text-base">
              {site.hero.body}
            </p>
          </FadeIn>
        </div>

        <FloatIn
          className="relative mx-auto mt-10 w-full max-w-[16rem] sm:max-w-xs lg:pointer-events-none lg:absolute lg:right-[-4%] lg:top-1/2 lg:mt-0 lg:w-[52rem] lg:max-w-[60vw] lg:-translate-y-1/2"
          delay={0.2}
        >
          <Image
            src="/illustrations/hero-doctor.png"
            alt=""
            width={1620}
            height={2160}
            priority
            className="h-auto w-full"
          />
        </FloatIn>
      </Container>

      <WaveTransition
        className="absolute inset-x-0 bottom-0"
        fillClassName="fill-white"
        strokeClassName="text-teal-500/50"
      />
    </section>
  );
}
