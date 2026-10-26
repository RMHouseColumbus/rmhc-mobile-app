export const DEFAULT_ACTIVITY_LINK = "https://linktr.ee/RMHC_FamilyActivities";

// Use a plain-text line: Activity link: https://example.com/signup
export function getActivityLink(description?: string | null): string {
  try {
    const line = description?.split(/\r?\n/).find(line => line.startsWith("Activity link:"));
    const link = line?.slice("Activity link:".length).trim();
    if (!link || !/^https?:\/\/\S+$/i.test(link)) return DEFAULT_ACTIVITY_LINK;

    return new URL(link).href;
  } catch {
    return DEFAULT_ACTIVITY_LINK;
  }
}
