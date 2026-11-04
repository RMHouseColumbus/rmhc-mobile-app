const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  // Define the babel transformer from react-native-svg
  transformer.babelTransformerPath = require.resolve('react-native-svg-transformer/expo');

// Make SVG a source extension
  resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
  resolver.sourceExts.push('svg');

  // react-native-svg's web build imports the legacy `@react-native/assets-registry`
  // package, which this React Native version (0.88) no longer ships as a separate
  // package - it's exposed as the `react-native/asset-registry` subpath instead.
  // Redirect the stale import so web builds don't fail to resolve it.
  const defaultResolveRequest = resolver.resolveRequest;
  resolver.resolveRequest = (context, moduleName, platform) => {
    if (moduleName === "@react-native/assets-registry/registry") {
      return context.resolveRequest(context, "react-native/asset-registry", platform);
    }
    return defaultResolveRequest
      ? defaultResolveRequest(context, moduleName, platform)
      : context.resolveRequest(context, moduleName, platform);
  };

  return config;
})();
