import { Box, ScrollView } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { useFeed } from "../../hooks/useFeed";
import CalendarItemCard from "../../components/CalendarItemCard";

export default function BHP() {
  const tabBarHeight = useBottomTabBarHeight();

  const { data, loading } = useFeed("bhp");
  if (loading) {
    return <></>;
  }
  return (
    <ScrollView flex={1} py={"4"} px={"4"} backgroundColor={"blue.300"}>
      {data.map((meal, idx) => (
        <CalendarItemCard key={idx} {...meal} />
      ))}
      <Box height={tabBarHeight} />
    </ScrollView>
  );
}
