import type { ConfirmedSponsor } from "./confirmed-sponsors";
import { CONFIRMED_SPONSORS } from "./confirmed-sponsors";

export const CONTRIBUTION_IDS = [
  "venue",
  "food",
  "dinner",
  "night-snacks",
  "breakfast",
  "beverages",
  "prizes",
  "branding",
  "tech-av",
  "marketing",
  "media",
  "workshop",
] as const;

export type ContributionId = (typeof CONTRIBUTION_IDS)[number];

function sponsor(name: string): ConfirmedSponsor {
  const match = CONFIRMED_SPONSORS.find((s) => s.name === name);
  if (!match) throw new Error(`Sponsor not found: ${name}`);
  return match;
}

export const FULFILLED_CONTRIBUTIONS: Partial<
  Record<ContributionId, ConfirmedSponsor>
> = {
  venue: sponsor("Plaza 11-11"),
  "night-snacks": sponsor("Enrique Salinas"),
  "tech-av": sponsor("Enrique Salinas"),
};
