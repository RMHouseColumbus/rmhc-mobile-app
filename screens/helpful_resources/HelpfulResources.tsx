import { Box, Pressable, ScrollView, Text } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { useContentfulEntries } from "../../hooks/useContentful";
import type { HelpfulResource } from "../../contentful/ContenfulTypes";
import { entries } from "../../contentful/ContenfulTypes";
import { Linking } from "react-native";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import { cardSurface } from "../../constants/CardStyles";

const ResourceCard = ({ linkAddress, linkDisplay, title, information }: HelpfulResource) => {
  const openLink = () => Linking.openURL(linkAddress);
  return (
    <Pressable onPress={openLink} accessibilityRole="link">
      <Box borderRadius={20} style={cardSurface} my={"1"} p={"4"}>
        <Text fontSize={18} fontFamily={Fonts.Bold} color={Colors.text}>
          {title}
        </Text>
        <Text fontSize={14} fontFamily={Fonts.Regular} color={Colors.text} mt={"2"}>
          {information}
        </Text>
        <Text
          fontSize={14}
          fontFamily={Fonts.Regular}
          color={Colors.action}
          textDecorationLine="underline"
          mt={"2"}
        >
          {linkDisplay}
        </Text>
      </Box>
    </Pressable>
  );
};

export default function HelpfulResources() {
  const tabBarHeight = useBottomTabBarHeight();
  const { data } = useContentfulEntries<HelpfulResource>(entries.helpfulResources);

  return (
    <ScrollView
      flex={1}
      contentContainerStyle={{ padding: 16, paddingBottom: tabBarHeight + 16 }}
      backgroundColor={Colors.background}
    >
      {data.map((resource, idx) => (
        <ResourceCard key={idx} {...resource} />
      ))}
    </ScrollView>
  );
}
