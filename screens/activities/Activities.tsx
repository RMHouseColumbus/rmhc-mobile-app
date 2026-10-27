import { Pressable, ScrollView } from "native-base";
import React from "react";
import { Linking } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { useFeed } from "../../hooks/useFeed";
import CalendarItemCard from "../../components/CalendarItemCard";
import Colors from "../../constants/Colors";
import { getActivityLink } from "./activityLink";

export default function Activities() {
  const tabBarHeight = useBottomTabBarHeight();

  const { data, loading } = useFeed("activity");
  if (loading) {
    return <></>;
  }
  return (
    <ScrollView
      flex={1}
      contentContainerStyle={{ padding: 16, paddingBottom: tabBarHeight + 16 }}
      backgroundColor={Colors.background}
    >
      {data.map((activity, idx) => (
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
