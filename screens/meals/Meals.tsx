import { ScrollView } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { useFeed } from "../../hooks/useFeed";
import CalendarItemCard from "../../components/CalendarItemCard";
import Colors from "../../constants/Colors";

export default function Meals() {
  const tabBarHeight = useBottomTabBarHeight();

  const { data, loading } = useFeed("meals");
  if (loading) {
    return <></>;
  }
  return (
    <ScrollView
      flex={1}
      contentContainerStyle={{ padding: 16, paddingBottom: tabBarHeight + 16 }}
      backgroundColor={Colors.background}
    >
      {data.map((meal, idx) => (
        <CalendarItemCard key={idx} {...meal} />
      ))}
    </ScrollView>
  );
}
