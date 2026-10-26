import { Box, Pressable, ScrollView, Text } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import type { HospitalStackScreenProps } from "../../types";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import { cardSurface } from "../../constants/CardStyles";
import { useContentfulEntries } from "../../hooks/useContentful";
import { entries } from "../../contentful/ContenfulTypes";
import type { HospitalService } from "../../contentful/ContenfulTypes";
import { Linking } from "react-native";

const HospitalCard = ({ onPress, content, title, link }: HospitalCardProps) => {
  const card = (
    <Box
      p={4}
      borderRadius={onPress ? 20 : 12}
      style={onPress ? cardSurface : undefined}
      backgroundColor={onPress ? undefined : Colors.cards.aqua.background}
      borderLeftWidth={onPress ? undefined : 4}
      borderLeftColor={onPress ? undefined : Colors.cards.aqua.text}
      my={1}
      mb={onPress ? 1 : 4}
    >
      <Text
        accessibilityRole={onPress ? undefined : "header"}
        fontSize={16}
        fontFamily={Fonts.Bold}
        color={Colors.text}
      >
        {title}
      </Text>
      <Text fontSize={12} fontFamily={Fonts.Regular} mt={1}>
        {content}
      </Text>
    </Box>
  );
  return onPress ? (
    <Pressable onPress={onPress} accessibilityRole={link ? "link" : "button"}>
      {card}
    </Pressable>
  ) : card;
};

interface HospitalCardProps extends HospitalService {
  onPress?: () => void;
}
export default function HospitalServices({
  navigation,
}: HospitalStackScreenProps<"In Hospital Services">) {
  const tabBarHeight = useBottomTabBarHeight();
  const { data } = useContentfulEntries<HospitalService>(entries.hospitalServices);
  const cards = [
    ...data.filter(item => !item.route?.trim()),
    ...data.filter(item => item.route?.trim()),
  ];

  return (
    <ScrollView
      flex={1}
      py={"4"}
      px={"4"}
      backgroundColor={Colors.backgroundBlue}
    >
      {cards.map((card, idx) => {
        const route = card.route?.trim();
        let onPress: (() => void) | undefined;
        if (route && card.link) {
          onPress = () => Linking.openURL(route);
        } else if (route === "BHP Family Rooms" || route === "Riverside Family Room") {
          onPress = () => navigation.navigate(route);
        }
        return <HospitalCard key={idx} {...card} onPress={onPress} />;
      })}
      <Box height={tabBarHeight} />
    </ScrollView>
  );
}
