import React, { type PropsWithChildren } from "react";
import { Image, StyleSheet, View, useWindowDimensions, type ImageStyle } from "react-native";
import Colors from "../constants/Colors";

const hearts = [
  require("../rebrand/RMH Hearts/Heart 01/PNG - transparent background/rmh_hrt_01_rgb_aq.png"),
  require("../rebrand/RMH Hearts/Heart 02/PNG - transparent background/rmh_hrt_02_rgb_gd.png"),
  require("../rebrand/RMH Hearts/Heart 03/PNG - transparent background/rmh_hrt_03_rgb_lv.png"),
];

// Fixed, viewport-relative arrangements stay put while content scrolls or reloads.
const layouts = {
  updates: [
    { top: "22%", left: "-16%", transform: [{ rotate: "-12deg" }] },
    { top: "43%", right: "-20%", transform: [{ rotate: "14deg" }] },
    { top: "70%", left: "-12%", transform: [{ rotate: "-8deg" }] },
  ],
  resources: [
    { top: "16%", right: "-24%", transform: [{ rotate: "16deg" }] },
    { top: "48%", left: "-20%", transform: [{ rotate: "-18deg" }] },
    { top: "76%", right: "-12%", transform: [{ rotate: "10deg" }] },
  ],
  familyRooms: [
    { top: "28%", left: "-22%", transform: [{ rotate: "-16deg" }] },
    { top: "52%", right: "-18%", transform: [{ rotate: "12deg" }] },
    { top: "80%", left: "-8%", transform: [{ rotate: "-8deg" }] },
  ],
} satisfies Record<string, ImageStyle[]>;

export default function HeartBackground({
  children,
  variant,
}: PropsWithChildren<{ variant: keyof typeof layouts }>) {
  const { width } = useWindowDimensions();
  const heartSize = Math.min(width * 0.7, 320);
  return (
    <View style={styles.screen}>
      <View
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
        aria-hidden
      >
        {layouts[variant].map((position, index) => (
          <Image
            key={index}
            source={hearts[index]}
            accessible={false}
            resizeMode="contain"
            style={[styles.heart, { width: heartSize, height: heartSize }, position]}
          />
        ))}
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background, overflow: "hidden" },
  heart: {
    position: "absolute",
    opacity: 0.55,
  },
});
