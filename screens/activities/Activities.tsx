import { Box, Pressable, ScrollView, Text } from "native-base";
import React from "react";
import { Linking } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { useFeed } from "../../hooks/useFeed";
import CalendarItemCard from "../../components/CalendarItemCard";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import { getActivityLink } from "./activityLink";

export default function Activities() {
  const tabBarHeight = useBottomTabBarHeight();

  const { data, loading } = useFeed("activity");
  return (
    <ScrollView
      flex={1}
      contentContainerStyle={{ padding: 16, paddingBottom: tabBarHeight + 16 }}
      backgroundColor={Colors.background}
    >
      <Box
        p={4}
        borderRadius={12}
        backgroundColor={Colors.cards.aqua.background}
        borderLeftWidth={4}
        borderLeftColor={Colors.cards.aqua.text}
        my={1}
        mb={4}
      >
        <Text fontSize={14} fontFamily={Fonts.Regular} color={Colors.text}>
          We often receive tickets for area events. Check the front desk for availability.
        </Text>
      </Box>
      {!loading && data.map((activity, idx) => (
        <Pressable
          key={idx}
          accessibilityRole="link"
          accessibilityHint="Opens activity information in your browser"
          onPress={() => Linking.openURL(getActivityLink(activity.description))}
        >
          <CalendarItemCard {...activity} />
        </Pressable>
      ))}
    </ScrollView>
  );
}
