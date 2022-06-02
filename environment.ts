import Constants from "expo-constants";

export const environment = {
  ...Constants.manifest?.extra,
} as EnvironmentValues;

export interface EnvironmentValues {
  env: string;
  MEAL_FEED: string;
  ACTIVITY_FEED: string;
  BHP_FEED: string;
  RIVERSIDE_FEED: string;
  STAFF_FEED: string;
  STAFF_PASSWORD: string;
  CONTENTFUL_ACCESS_TOKEN: string;
  CONTENTFUL_SPACE: string;
  CONTENTFUL_ENVIRONMENT: string;
}
