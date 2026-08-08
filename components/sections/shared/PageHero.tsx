import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { WavyDivider } from "@/components/ui/WavyDivider";
import { WaveTransition } from "@/components/ui/WaveTransition";
import clsx from "clsx";

/** タイトル中の「‖」をスマホ幅のみで改行するbrに変換する(それ以外はtext-balanceに任せる) */
function renderTitle(title: string) {
  return title.split("‖").flatMap((part, i) =>
    i === 0 ? [part] : [<br key={i} className="sm:hidden" />, part],
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body?: string;
  image?: string;
  /** 波の下を塗りつぶし、次のセクションの背景色とシームレスにつなげる(Tailwindのfill-*クラス) */
  transitionFillClassName?: string;
  /** 次のセクションと同じradial-gradientの雰囲気を波の塗りつぶしに重ねる */
  transitionGradient?: boolean;
  /** 本文をmax-widthで絞らず、コンテナの横幅いっぱいに表示する */
  bodyWide?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  transitionFillClassName,
  transitionGradient,
  bodyWide,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-paper pb-0 pt-40 sm:pt-48">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,143,77,0.16),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rotate-12 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-teal-300/40 to-coral-300/30"
        aria-hidden
      />
      <Container className="relative">
        <div className={clsx("grid items-center gap-14", image && "lg:grid-cols-[5fr_3fr] lg:gap-16")}>
          <FadeIn>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">
              {eyebrow}
            </p>
            <h1
              className={clsx(
                "whitespace-pre-line text-balance text-3xl font-bold leading-[1.2] tracking-[0.15em] text-navy-950 sm:text-4xl lg:text-5xl",
                !image && "max-w-3xl",
              )}
            >
              {renderTitle(title)}
            </h1>
            {body && (
              <p
                className={clsx(
                  "mt-7 whitespace-pre-line text-sm leading-relaxed tracking-[0.15em] text-ink-muted sm:text-base",
                  image ? "max-w-[40rem]" : bodyWide ? "max-w-none" : "max-w-xl",
                )}
              >
                {body}
              </p>
            )}
          </FadeIn>

          {image && (
            <FadeIn delay={0.1}>
              <div className="overflow-hidden border border-navy-950/8 bg-white shadow-[0_20px_60px_-15px_rgba(32,199,181,0.25)]">
                <Image
                  src={image}
                  alt=""
                  width={1470}
                  height={980}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </FadeIn>
          )}
        </div>

        {transitionFillClassName ? (
          <WaveTransition
            fullBleed
            className="mt-4"
            fillClassName={transitionFillClassName}
            gradientOverlay={transitionGradient}
          />
        ) : (
          <WavyDivider fullBleed className="mt-4 text-teal-500/40" />
        )}
      </Container>
    </section>
  );
}
