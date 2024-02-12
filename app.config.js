export default ({ config }) => {
  return {
    ...config,
    extra: {
      MEAL_FEED: process.env.MEAL_FEED,
      ACTIVITY_FEED: process.env.ACTIVITY_FEED,
      BHP_FEED: process.env.BHP_FEED,
      RIVERSIDE_FEED: process.env.RIVERSIDE_FEED,
      STAFF_FEED: process.env.STAFF_FEED,
      STAFF_PASSWORD: process.env.STAFF_PASSWORD,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
      CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
      CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
      // uncomment for local dev
      // ...require("./config/production"),
    },
  };
};
