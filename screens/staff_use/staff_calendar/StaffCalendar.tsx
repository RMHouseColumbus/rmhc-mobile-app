import { Button, ScrollView, Text } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Linking } from "react-native";

import { useFeed } from "../../../hooks/useFeed";
import CalendarItemCard from "../../../components/CalendarItemCard";
import Colors from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";

export default function StaffCalendar() {
  const tabBarHeight = useBottomTabBarHeight();

  const { data, loading } = useFeed("staff");
  if (loading) {
    return <></>;
  }
  return (
    <ScrollView
      flex={1}
      contentContainerStyle={{ padding: 16, paddingBottom: tabBarHeight + 16 }}
      backgroundColor={Colors.background}
    >
      <Button
        borderRadius={10}
        backgroundColor={Colors.action}
        _pressed={{ backgroundColor: Colors.action, opacity: 0.8 }}
        minHeight={44}
        my={"1"}
        mb={"4"}
        accessibilityRole="link"
        onPress={() =>
          Linking.openURL("https://rmhc-centralohio.org/fsmschedule/")
        }
      >
        <Text fontSize={16} fontFamily={Fonts.Bold} color={Colors.onAction}>
          Open Calendar
        </Text>
      </Button>
      {data.map((meal, idx) => (
        <CalendarItemCard key={idx} {...meal} />
      ))}
    </ScrollView>
  );
}
