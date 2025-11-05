const { getDefaultConfig } = require("@expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  // Define the babel transformer from react-native-svg
  transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

// Make SVG a source extension
  resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
  resolver.sourceExts.push('svg');

  return config;
})();