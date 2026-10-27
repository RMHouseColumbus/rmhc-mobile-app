import { ScrollView } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import type { YourStayStackScreenProps } from "../../types";
import Colors, { cardColors } from "../../constants/Colors";
import { IllustratedCard } from "../../components/IllustratedCard";
import { brandImages } from "../../assets/brand";

const yourStayCards = [
  { route: "Before Your Stay", artwork: brandImages.video.source, colors: cardColors.lavender },
  { route: "During Your Stay", artwork: brandImages.handsHeart.source, colors: cardColors.aqua },
  { route: "After Your Stay", artwork: brandImages.house.source, colors: cardColors.lime },
] as const;

export default function YourStay({
  navigation,
}: YourStayStackScreenProps<"Your Stay">) {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView
      flex={1}
      backgroundColor={Colors.background}
      contentContainerStyle={{ padding: 16, paddingBottom: tabBarHeight + 16, gap: 16 }}
    >
      {yourStayCards.map(({ route, artwork, colors }) => (
        <IllustratedCard
          key={route}
          label={route}
          artwork={artwork}
          colors={colors}
          onPress={() => navigation.navigate(route)}
        />
      ))}
    </ScrollView>
  );
}
