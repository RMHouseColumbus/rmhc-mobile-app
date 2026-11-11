// Static imports keep every supplied shape/color available to Metro.
export const heartImages = {
  1: {
    aqua: require("./heart-01-aqua.png"),
    gold: require("./heart-01-gold.png"),
    lavender: require("./heart-01-lavender.png"),
    lime: require("./heart-01-lime.png"),
    red: require("./heart-01-red.png"),
    softWhite: require("./heart-01-softWhite.png"),
  },
  2: {
    aqua: require("./heart-02-aqua.png"),
    gold: require("./heart-02-gold.png"),
    lavender: require("./heart-02-lavender.png"),
    lime: require("./heart-02-lime.png"),
    red: require("./heart-02-red.png"),
    softWhite: require("./heart-02-softWhite.png"),
  },
  3: {
    aqua: require("./heart-03-aqua.png"),
    gold: require("./heart-03-gold.png"),
    lavender: require("./heart-03-lavender.png"),
    lime: require("./heart-03-lime.png"),
    red: require("./heart-03-red.png"),
    softWhite: require("./heart-03-softWhite.png"),
  },
  4: {
    aqua: require("./heart-04-aqua.png"),
    gold: require("./heart-04-gold.png"),
    lavender: require("./heart-04-lavender.png"),
    lime: require("./heart-04-lime.png"),
    red: require("./heart-04-red.png"),
    softWhite: require("./heart-04-softWhite.png"),
  },
  5: {
    aqua: require("./heart-05-aqua.png"),
    gold: require("./heart-05-gold.png"),
    lavender: require("./heart-05-lavender.png"),
    lime: require("./heart-05-lime.png"),
    red: require("./heart-05-red.png"),
    softWhite: require("./heart-05-softWhite.png"),
  },
} as const;

export type HeartShape = keyof typeof heartImages;
export type HeartColor = keyof typeof heartImages[HeartShape];
