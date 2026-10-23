export const palette = {
  red: "#DB0007",
  cream: "#FFFDE9",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#504D4D",
  lavender: "#D0C9FF",
  purple: "#91187D",
  aqua: "#8EE7F8",
  blue: "#1B43B2",
  lime: "#9CD83E",
  green: "#32610A",
  gold: "#FFBC0D",
};

export const cardColors = {
  lavender: { background: palette.lavender, text: palette.purple },
  aqua: { background: palette.aqua, text: palette.blue },
  lime: { background: palette.lime, text: palette.green },
  gold: { background: palette.gold, text: palette.black },
};

const light = {
  text: palette.black,
  background: palette.cream,
  tint: palette.red,
  tabIconDefault: palette.gray,
  tabIconSelected: palette.red,
};

const colors = {
  background: palette.cream,
  header: palette.red,
  onHeader: palette.cream,
  action: palette.red,
  onAction: palette.cream,
  text: palette.black,
  textMuted: palette.gray,
  cards: cardColors,
  // Temporary compatibility aliases for screens migrated in later tickets.
  backgroundBlue: palette.cream,
  statusBarBlue: palette.red,
  buttonBlue: palette.red,
  gray: palette.gray,
  white: palette.white,
  black: palette.black,
  light,
  dark: light, // This release intentionally uses the same light appearance.
};
export default colors;
