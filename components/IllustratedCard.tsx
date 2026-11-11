import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import type { ImageSourcePropType } from "react-native";
import Fonts from "../constants/Fonts";
import Colors from "../constants/Colors";
import { cardSurface } from "../constants/CardStyles";

export interface IllustratedCardProps {
  label: string;
  artwork: ImageSourcePropType;
  colors: { background: string; text: string };
  onPress: () => void;
  accessibilityRole?: "button" | "link";
}

/** Layout-only card; callers own routing. Use actual font scaling, without truncation. */
export function IllustratedCard({
  label,
  artwork,
  colors,
  onPress,
  accessibilityRole = "button",
}: IllustratedCardProps) {
  const { fontScale } = useWindowDimensions();
  const [width, setWidth] = useState<number>();
  // Measure the card itself: it may be narrower than the device in a column.
  const stacked = (width !== undefined && width < 300) || fontScale >= 1.6;

  return (
    <Pressable
      accessible
      accessibilityRole={accessibilityRole}
      accessibilityLabel={label}
      onPress={onPress}
      onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
      style={({ pressed }) => [
        styles.card,
        colors.background === Colors.cardBackground && cardSurface,
        { backgroundColor: colors.background, opacity: pressed ? 0.8 : 1 },
        stacked && styles.stacked,
      ]}
    >
      <Text
        accessible={false}
        allowFontScaling
        style={[styles.label, !stacked && styles.rowLabel, { color: colors.text }]}
      >
        {label}
      </Text>
      <Image
        source={artwork}
        resizeMode="contain"
        accessible={false}
        accessibilityElementsHidden
        importantForAccessibility="no"
        style={[styles.artwork, stacked && styles.stackedArtwork]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 120,
    borderRadius: 20,
    padding: 16,
    gap: 16,
  },
  stacked: { flexDirection: "column", alignItems: "stretch" },
  label: { fontFamily: Fonts.Bold, fontSize: 24, flexShrink: 1, minWidth: 0 },
  rowLabel: { flex: 1 },
  artwork: { width: 88, height: 88, flexShrink: 0 },
  stackedArtwork: { alignSelf: "flex-end" },
});
