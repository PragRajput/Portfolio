import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Renders elapsed time since `since` as a rounded label that eases toward
 * the next whole year: "N+" fresh into year N, "N.5" mid-year, then "~N+1"
 * in the last couple months before the next anniversary.
 */
export function getExperienceLabel(since: Date): string {
  const now = new Date();
  let totalMonths = (now.getFullYear() - since.getFullYear()) * 12 + (now.getMonth() - since.getMonth());
  if (now.getDate() < since.getDate()) totalMonths -= 1;

  const years = Math.floor(totalMonths / 12);
  const monthInYear = totalMonths % 12;

  if (monthInYear <= 4) return `${years}+`;
  if (monthInYear <= 9) return `${years}.5`;
  return `~${years + 1}`;
}
