import React, { type PropsWithChildren } from "react";
import { Image, StyleSheet, View, useWindowDimensions, type ImageStyle } from "react-native";
import Colors from "../constants/Colors";
import { heartImages, type HeartColor, type HeartShape } from "../assets/brand/hearts";

type Heart = { shape: HeartShape; color: HeartColor };
type Arrangement = "left" | "right" | "accent";

// Each screen has a fixed composition. Across the set, all five shapes and six colors appear.
const layouts = {
  updates: { arrangement: "left", hearts: [{ shape: 1, color: "aqua" }, { shape: 2, color: "gold" }, { shape: 3, color: "lavender" }] },
  resources: { arrangement: "right", hearts: [{ shape: 2, color: "aqua" }, { shape: 3, color: "gold" }, { shape: 4, color: "lavender" }] },
  familyRooms: { arrangement: "left", hearts: [{ shape: 3, color: "aqua" }, { shape: 4, color: "gold" }, { shape: 5, color: "lavender" }] },
  meals: { arrangement: "right", hearts: [{ shape: 4, color: "aqua" }, { shape: 5, color: "gold" }, { shape: 1, color: "lavender" }] },
  activities: { arrangement: "left", hearts: [{ shape: 5, color: "aqua" }, { shape: 1, color: "gold" }, { shape: 2, color: "lavender" }] },
  about: { arrangement: "accent", hearts: [{ shape: 1, color: "lime" }, { shape: 2, color: "red" }, { shape: 3, color: "softWhite" }] },
  neighborhood: { arrangement: "accent", hearts: [{ shape: 2, color: "lime" }, { shape: 3, color: "red" }, { shape: 4, color: "softWhite" }] },
  yourStay: { arrangement: "accent", hearts: [{ shape: 3, color: "lime" }, { shape: 4, color: "red" }, { shape: 5, color: "softWhite" }] },
  staff: { arrangement: "accent", hearts: [{ shape: 4, color: "lime" }, { shape: 5, color: "red" }, { shape: 1, color: "softWhite" }] },
  information: { arrangement: "accent", hearts: [{ shape: 5, color: "lime" }, { shape: 1, color: "red" }, { shape: 2, color: "softWhite" }] },
} satisfies Record<string, { arrangement: Arrangement; hearts: Heart[] }>;

type Placement = { size: number; position: ImageStyle };
const arrangements: Record<Arrangement, Placement[]> = {
  left: [
    { size: 0.7, position: { top: "22%", left: "-16%", transform: [{ rotate: "-12deg" }] } },
    { size: 0.62, position: { top: "47%", right: "-16%", transform: [{ rotate: "16deg" }] } },
    { size: 0.54, position: { top: "76%", left: "-8%", transform: [{ rotate: "-8deg" }] } },
  ],
  right: [
    { size: 0.65, position: { top: "18%", right: "-20%", transform: [{ rotate: "18deg" }] } },
    { size: 0.72, position: { top: "46%", left: "-18%", transform: [{ rotate: "-16deg" }] } },
    { size: 0.5, position: { top: "78%", right: "-6%", transform: [{ rotate: "10deg" }] } },
  ],
  accent: [
    { size: 0.72, position: { top: "34%", left: "-12%", transform: [{ rotate: "-12deg" }] } },
    { size: 0.58, position: { top: "70%", right: "-14%", transform: [{ rotate: "18deg" }] } },
    // Anchor the small cream heart to the colored heart, independent of screen height.
    { size: 0.28, position: { transform: [{ rotate: "16deg" }] } },
  ],
};

export default function HeartBackground({ children, variant }: PropsWithChildren<{ variant: keyof typeof layouts }>) {
  const { width } = useWindowDimensions();
  const { hearts, arrangement } = layouts[variant];
  const placements = arrangements[arrangement];
  const baseWidth = Math.min(width, 460);
  return (
    <View style={styles.screen}>
      <View style={StyleSheet.absoluteFill} pointerEvents="none" accessibilityElementsHidden importantForAccessibility="no-hide-descendants" aria-hidden>
        {hearts.map(({ shape, color }, index) => {
          const { size, position } = placements[index];
          const heartSize = baseWidth * size;
          const image = (
            <Image source={heartImages[shape][color]} accessible={false} resizeMode="contain"
              style={[styles.heart, { width: heartSize, height: heartSize, opacity: color === "red" ? 0.3 : color === "softWhite" ? 1 : 0.55 }, position]} />
          );
          return color === "softWhite" ? (
            <View key={index} style={[styles.accent, { width: baseWidth * 0.72, height: baseWidth * 0.72 }]}>
              {image}
            </View>
          ) : <React.Fragment key={index}>{image}</React.Fragment>;
        })}
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background, overflow: "hidden" },
  heart: { position: "absolute" },
  accent: { position: "absolute", top: "34%", left: "-12%", alignItems: "center", justifyContent: "center" },
});
