import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { FloatIn } from "@/components/motion/FloatIn";
import { WaveTransition } from "@/components/ui/WaveTransition";
import type { Site } from "@/content/site";

export function Hero({ site }: { site: Site }) {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100 pt-28 pb-20">
      {/* 大空を意識した装飾ビジュアル: 雲と光のグラデーション */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-40 -top-40 h-[620px] w-[620px] rotate-6 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-sky-200/70 to-teal-200/40 blur-[2px] sm:-right-20 sm:-top-24" />
        <div className="absolute left-[6%] top-[18%] h-16 w-28 rounded-full bg-white/80 blur-[1px]" />
        <div className="absolute left-[10%] top-[24%] h-10 w-20 rounded-full bg-white/70 blur-[1px]" />
        <div className="absolute left-[22%] top-[60%] h-12 w-24 rounded-full bg-white/70 blur-[1px]" />
        <div className="absolute left-[26%] top-[65%] h-8 w-16 rounded-full bg-white/60 blur-[1px]" />
        <div className="absolute right-[8%] top-[12%] h-10 w-20 rounded-full bg-white/70 blur-[1px]" />
        <div className="absolute bottom-[20%] right-[6%] h-9 w-16 rounded-full bg-white/60 blur-[1px]" />
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
          className="relative mx-auto mt-10 w-full max-w-[16rem] sm:max-w-[20rem] lg:pointer-events-none lg:absolute lg:right-[4%] lg:top-[42%] lg:mt-0 lg:w-[46rem] lg:max-w-[42vw] lg:-translate-y-1/2"
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

      <WaveTransition className="absolute inset-x-0 bottom-0" fillClassName="fill-white" />
    </section>
  );
}
