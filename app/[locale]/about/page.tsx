import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Mission } from "@/components/sections/about/Mission";
import { Overview } from "@/components/sections/about/Overview";
import { TeamGrid } from "@/components/sections/team/TeamGrid";
import { Cta } from "@/components/sections/home/Cta";
import { getSite, resolveLocale } from "@/content/site";
import { getMemberList } from "@/lib/microcms";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const site = getSite(locale);
  return { title: "About", description: site.aboutPage.hero.body };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const site = getSite(locale);
  const team = await getMemberList(locale);
  const engineers = team.filter((member) => member.category === "Engineer");
  const collaborators = team.filter((member) => member.category === "Collaborator");
  const advisors = team.filter((member) => member.category === "Advisor");

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
      <TeamGrid
        id="team"
        members={engineers}
        locale={locale}
        tone="teal"
        {...site.aboutPage.team}
      />
      <TeamGrid
        id="collaborators"
        members={collaborators}
        locale={locale}
        tone="coral"
        {...site.aboutPage.collaborators}
      />
      <TeamGrid
        id="advisors"
        members={advisors}
        locale={locale}
        tone="navy"
        {...site.aboutPage.advisors}
      />
      <Cta site={site} locale={locale} />
    </>
  );
}
