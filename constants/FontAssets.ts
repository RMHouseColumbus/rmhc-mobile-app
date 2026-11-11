import Fonts from "./Fonts";

export const brandFontAssets = {
  [Fonts.Regular]: require("../assets/fonts/AudreyText-Regular.otf"),
  [Fonts.Bold]: require("../assets/fonts/AudreyText-Bold.otf"),
  [Fonts.Italic]: require("../assets/fonts/AudreyText-Italic.otf"),
  [Fonts.BoldItalic]: require("../assets/fonts/AudreyText-BoldItalic.otf"),
};

// Space Mono remains the theme monospace face.
export const legacyFontAssets = {
  "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
};
