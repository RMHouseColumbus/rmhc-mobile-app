import { ScrollView } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { useFeed } from "../../hooks/useFeed";
import CalendarItemCard from "../../components/CalendarItemCard";
import HeartBackground from "../../components/HeartBackground";

export default function Meals() {
  const tabBarHeight = useBottomTabBarHeight();

  const { data, loading } = useFeed("meals");
  return (
    <HeartBackground variant="resources">
      <ScrollView
        flex={1}
        contentContainerStyle={{ padding: 16, paddingBottom: tabBarHeight + 16 }}
        backgroundColor="transparent"
      >
        {!loading && data.map((meal, idx) => (
          <CalendarItemCard key={idx} {...meal} />
        ))}
      </ScrollView>
    </HeartBackground>
  );
}
