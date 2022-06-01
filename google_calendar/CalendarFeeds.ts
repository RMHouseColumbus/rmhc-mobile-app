import { environment } from "../environment";

export const Feeds = {
  meals: environment.MEAL_FEED,
  activity: environment.ACTIVITY_FEED,
  bhp: environment.BHP_FEED,
  riverside: environment.RIVERSIDE_FEED,
};

export type FeedType = keyof typeof Feeds;
