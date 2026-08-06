import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Mission } from "@/components/sections/about/Mission";
import { Overview } from "@/components/sections/about/Overview";
import { History } from "@/components/sections/about/History";
import { TeamGrid } from "@/components/sections/team/TeamGrid";
import { Cta } from "@/components/sections/home/Cta";
import { site } from "@/content/site";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "About",
  description: site.aboutPage.hero.body,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        {...site.aboutPage.hero}
        transitionFillClassName="fill-paper-dim"
        transitionGradient
        bodyWide
      />
      <Mission {...site.aboutPage.mission} />
      <Overview {...site.aboutPage.overview} />
      <TeamGrid id="team" members={team} {...site.aboutPage.team} />
      <Mission {...site.aboutPage.advisors} />
      <History {...site.aboutPage.history} />
      <Cta />
    </>
  );
}
