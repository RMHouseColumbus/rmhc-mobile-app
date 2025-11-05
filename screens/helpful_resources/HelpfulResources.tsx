import { Box, Pressable, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import type { HospitalStackScreenProps } from "../../types";
import { useContentfulEntries } from "../../hooks/useContentful";
import type { QuestionAnswer, TransportationEntry } from "../../contentful/ContenfulTypes";
import { entries, HelpfulResource } from "../../contentful/ContenfulTypes";
import { createRichTextRenderOptions } from "../../contentful/ContentfulRender";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Linking } from "react-native";
import Colors from "../../constants/Colors";



const ResourceCard = ({ linkAddress, linkDisplay, title, information }: HelpfulResourceCardProps) => {
  const openLink = () => Linking.openURL(linkAddress)
  return (
    <Pressable onPress={openLink}>
      <Box borderRadius={20} backgroundColor={"white"} my={"1"}>
        <VStack space={"4"}>
          <Box p={"4"}>
            <Text fontSize={16} fontFamily={"Raleway-Bold"} color={"black"}>
              {title}
            </Text>
            <Text fontSize={12} fontFamily={"Raleway-Regular"} mt={"1"}>
              {information}
            </Text>
            <Text fontSize={12} fontFamily={"Raleway-Regular"} mt={"1"} onPress={openLink}>
              {linkDisplay}
            </Text>
          </Box>
        </VStack>
      </Box>
    </Pressable>
  );
};

interface HelpfulResourceCardProps extends HelpfulResource {
  onPress: () => void;
}

export default function HelpfulResources({
  navigation,
}: HospitalStackScreenProps<"Helpful Resources">) {
  const tabBarHeight = useBottomTabBarHeight();
  const { data } = useContentfulEntries<HelpfulResource>(entries.helpfulResources);

  return (
    <ScrollView py={"4"} px={"4"} backgroundColor={Colors.backgroundBlue}>
      {data.map((a, i) => (<ResourceCard key={i} flex={1} {...a} />))}
      <Box height={tabBarHeight} />
    </ScrollView>
  );
}
