import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { TeamGrid } from "@/components/sections/team/TeamGrid";
import { Cta } from "@/components/sections/home/Cta";
import { site } from "@/content/site";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Team",
  description: site.teamPage.hero.body,
};

export default function TeamPage() {
  return (
    <>
      <PageHero {...site.teamPage.hero} />
      <TeamGrid members={team} />
      <Cta />
    </>
  );
}
