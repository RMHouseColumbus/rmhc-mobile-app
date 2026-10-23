import type { ImageSourcePropType } from "react-native";

export interface BrandImage {
  source: ImageSourcePropType;
  label: string;
  reversed?: boolean;
}

// Static requires let Metro discover and bundle every asset on both platforms.
export const brandImages = {
  horizontalLogo: { source: require("./logos/horizontal-positive.png"), label: "Horizontal logo · Home / drawer" },
  verticalLogo: { source: require("./logos/vertical-positive.png"), label: "Vertical logo · alternate lockup" },
  horizontalLogoReversed: { source: require("./logos/horizontal-reversed.png"), label: "Horizontal reversed logo", reversed: true },
  verticalLogoReversed: { source: require("./logos/vertical-reversed.png"), label: "Vertical reversed logo", reversed: true },
  meals: { source: require("./illustrations/meals.png"), label: "Neighborhood · Meals" },
  mcdonalds: { source: require("./illustrations/mcdonalds.png"), label: "Neighborhood · McDonald’s" },
  shopping: { source: require("./illustrations/shopping.png"), label: "Neighborhood · Shopping" },
  city: { source: require("./illustrations/city.png"), label: "Neighborhood · City" },
  tickets: { source: require("./illustrations/tickets.png"), label: "Neighborhood · Tickets" },
  team: { source: require("./illustrations/team.png"), label: "About · Meet the Staff" },
  website: { source: require("./illustrations/website.png"), label: "About · Visit our Website" },
  involvement: { source: require("./illustrations/involvement.png"), label: "About · Ways to Stay Involved" },
  story: { source: require("./illustrations/story.png"), label: "About · Share Your Story" },
  familyRoom: { source: require("./illustrations/family-room.png"), label: "About · Family Room" },
  careMobile: { source: require("./illustrations/care-mobile.png"), label: "About · Care Mobile" },
  staffChecklist: { source: require("./illustrations/staff-checklist.png"), label: "About · Staff Use" },
  video: { source: require("./illustrations/video.png"), label: "Home / Before Your Stay · Video" },
  handsHeart: { source: require("./illustrations/hands-heart.png"), label: "Your Stay · During Your Stay" },
  house: { source: require("./illustrations/house.png"), label: "Your Stay · After Your Stay" },
} satisfies Record<string, BrandImage>;

export type BrandImageName = keyof typeof brandImages;
