import { Box, Pressable, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import type { HospitalStackList, HospitalStackScreenProps } from "../../types";
import Colors from "../../constants/Colors";

const HospitalCard = ({ onPress, content, title }: HospitalCardProps) => {
  return (
    <Pressable onPress={onPress}>
      <Box borderRadius={20} backgroundColor={"white"} my={"1"}>
        <VStack space={"4"}>
          <Box p={"4"}>
            <Text fontSize={16} fontFamily={"Raleway-Bold"} color={"black"}>
              {title}
            </Text>
            <Text fontSize={12} fontFamily={"Raleway-Regular"} mt={"1"}>
              {content}
            </Text>
          </Box>
        </VStack>
      </Box>
    </Pressable>
  );
};

interface HospitalCardProps extends HospitalCardData {
  onPress: () => void;
}

interface HospitalCardData {
  title: string;
  content: string;
  route: keyof HospitalStackList;
}

const hospitalCards: HospitalCardData[] = [
  {
    title: "OhioHealth Riverside Methodist Hospital",
    route: "Riverside Family Room",
    content:
      "Ronald McDonald Family Rooms at the OhioHealth Riverside Methodist Hospital",
  },
  {
    title: "Nationwide Children’s Hospital Big Lots Behavioral Health Pavilion",
    route: "BHP Family Rooms",
    content:
      "Ronald McDonald Family Rooms at the Nationwide Children’s Hospital Big Lots Behavioral Health Pavilion",
  },
];

export default function HospitalServices({
  navigation,
}: HospitalStackScreenProps<"In Hospital Services">) {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView
      flex={1}
      py={"4"}
      px={"4"}
      backgroundColor={Colors.backgroundBlue}
    >
      {hospitalCards.map((data, idx) => (
        <HospitalCard
          key={idx}
          {...data}
          onPress={() => navigation.navigate(data.route)}
        />
      ))}
      <Box height={tabBarHeight} />
    </ScrollView>
  );
}
