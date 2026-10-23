import Fonts from "./Fonts";

export const brandFontAssets = {
  [Fonts.Regular]: require("../assets/fonts/AudreyText-Regular.otf"),
  [Fonts.Bold]: require("../assets/fonts/AudreyText-Bold.otf"),
  [Fonts.Italic]: require("../assets/fonts/AudreyText-Italic.otf"),
  [Fonts.BoldItalic]: require("../assets/fonts/AudreyText-BoldItalic.otf"),
};

// Keep these registrations until the remaining screens stop naming Raleway.
export const legacyFontAssets = {
  "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
  "Raleway-Regular": require("../assets/fonts/Raleway-Regular.ttf"),
  "Raleway-Bold": require("../assets/fonts/Raleway-Bold.ttf"),
  "Raleway-Medium": require("../assets/fonts/Raleway-Medium.ttf"),
  "Raleway-SemiBold": require("../assets/fonts/Raleway-SemiBold.ttf"),
  "Raleway-Italic": require("../assets/fonts/Raleway-Italic.ttf"),
};
