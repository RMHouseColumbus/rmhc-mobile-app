import { Box, Button, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Linking } from "react-native";

import { useFeed } from "../../../hooks/useFeed";
import CalendarItemCard from "../../../components/CalendarItemCard";
import Colors from "../../../constants/Colors";
import { dateRangeString } from "../../../commons/time_helpers";
import { environment } from "../../../environment";

export default function StaffCalendar() {
  const tabBarHeight = useBottomTabBarHeight();

  const { data, loading } = useFeed("staff");
  if (loading) {
    return <></>;
  }
  return (
    <ScrollView
      flex={1}
      py={"4"}
      px={"4"}
      backgroundColor={Colors.backgroundBlue}
    >
      <Box borderRadius={20} backgroundColor={"transparent"} my={"1"}>
        <VStack space={"4"}>
          <Box p={"4"}>
            <Button
              borderRadius={10}
              backgroundColor={"white"}
              onPress={() =>
                Linking.openURL("https://rmhc-centralohio.org/fsmschedule/")
              }
            >
              <Text fontSize={12} fontFamily={"Raleway-Bold"}>
                Open Calendar
              </Text>
            </Button>
            <Text>Ahmad</Text>
          </Box>
        </VStack>
      </Box>
      {data.map((meal, idx) => (
        <CalendarItemCard key={idx} {...meal} />
      ))}
      <Box height={tabBarHeight} />
    </ScrollView>
  );
}
