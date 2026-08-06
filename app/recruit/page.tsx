import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Culture } from "@/components/sections/recruit/Culture";
import { Positions } from "@/components/sections/recruit/Positions";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Recruit",
  description: site.recruitPage.hero.body,
};

export default function RecruitPage() {
  return (
    <>
      <PageHero {...site.recruitPage.hero} bodyWide />
      <Culture {...site.recruitPage.culture} />
      <Positions {...site.recruitPage.positions} />
    </>
  );
}
