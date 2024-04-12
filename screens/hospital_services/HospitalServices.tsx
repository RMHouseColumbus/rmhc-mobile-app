import { Box, Pressable, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import type { HospitalStackScreenProps } from "../../types";
import Colors from "../../constants/Colors";
import { useContentfulEntries } from "../../hooks/useContentful";
import { entries, HospitalService } from "../../contentful/ContenfulTypes";
import { Linking } from "react-native";

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

interface HospitalCardProps extends HospitalService {
  onPress: () => void;
}


export default function HospitalServices({
                                           navigation
                                         }: HospitalStackScreenProps<"In Hospital Services">) {
  const tabBarHeight = useBottomTabBarHeight();
  const { data } = useContentfulEntries<HospitalService>(entries.hospitalServices);

  return (
    <ScrollView
      flex={1}
      py={"4"}
      px={"4"}
      backgroundColor={Colors.backgroundBlue}
    >
      {data.map((data, idx) => {

          const onPress = data.link
            ? () => Linking.openURL(data.route)
            : () => navigation.navigate(data.route);
          return (
            <HospitalCard key={idx}{...data} onPress={onPress} />
          );
        }
      )}
      <Box height={tabBarHeight} />
    </ScrollView>
  );
}
