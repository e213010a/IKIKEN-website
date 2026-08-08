import { team as teamEn, type TeamMember } from "./team.en";
import { team as teamJa } from "./team.ja";
import type { Locale } from "./site";

export type { TeamMember };

const teams: Record<Locale, TeamMember[]> = {
  en: teamEn,
  ja: teamJa,
};

export function getTeam(locale: Locale): TeamMember[] {
  return teams[locale];
}
