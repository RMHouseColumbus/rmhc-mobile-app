export default ({ config }) => {
  return {
    ...config,
    extra: require("./config/production"),
  };
};
