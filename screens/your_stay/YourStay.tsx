import { Box, Pressable, ScrollView } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";

import type { YourStayStackScreenProps } from "../../types";
import type { SVGCardProps } from "../../components/SVGCard";
import Colors, { cardColors } from "../../constants/Colors";
import { IllustratedCard } from "../../components/IllustratedCard";
import { brandImages } from "../../assets/brand";
import { cardSurface } from "../../constants/CardStyles";

export const YourStaySVGCard = ({
  navigationTo,
  navType,
  textComponent,
  component,
}: SVGCardProps) => {
  const navigation = useNavigation();
  const isLink = navType === "link";
  const onPress = isLink
    ? () => Linking.openURL(navigationTo as string)
    : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      () => navigation.navigate(navigationTo);

  return (
    <Pressable onPress={onPress}>
      <Box
        borderRadius={20}
        style={cardSurface}
        py={3}
        mt={4}
        flexDirection={"row"}
      >
        {textComponent}
        <Box flex={1} justifyContent={"center"} alignItems={"center"}>
          {component}
        </Box>
      </Box>
    </Pressable>
  );
};

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
