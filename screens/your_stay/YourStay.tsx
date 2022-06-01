import { Box, Pressable, ScrollView, Text } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";

import type { YourStayStackScreenProps } from "../../types";
import type { SVGCardProps } from "../../components/SVGCard";

import {
  AfterYourStaySVG,
  BeforeYourStaySVG,
  DuringYourStaySVG,
} from "./components/YourStayCards";
import HenryWoofSVG from "./components/HenryWoofSVG";

export const YourStaySVGCard = ({
  navigationTo,
  navType,
  textComponent,
  component,
}: SVGCardProps) => {
  const navigation = useNavigation();
  const isLink = navType === "link";
  const onPress = isLink
    ? () => Linking.openURL(navigationTo as string)
    : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      () => navigation.navigate(navigationTo);

  return (
    <Pressable onPress={onPress}>
      <Box
        borderRadius={20}
        backgroundColor={"white"}
        borderColor={"white"}
        py={3}
        mt={4}
        flexDirection={"row"}
      >
        {textComponent}
        <Box flex={1} justifyContent={"center"} alignItems={"center"}>
          {component}
        </Box>
      </Box>
    </Pressable>
  );
};

export const YourStayCardText = ({ text }: { text: string[] }) => {
  return (
    <Box flex={1} justifyContent={"center"} alignItems={"center"}>
      <Box>
        {text.map((t, i) => (
          <Text
            key={i}
            fontFamily={"Raleway-Bold"}
            fontSize={20}
            textAlign={"left"}
          >
            {t}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

const yourStayCards: SVGCardProps[] = [
  {
    textComponent: <YourStayCardText text={["Before", "Your Stay"]} />,
    component: <BeforeYourStaySVG />,
    navigationTo: "Before",
    navType: "navigation",
  },
  {
    textComponent: <YourStayCardText text={["During", "Your Stay"]} />,
    component: <DuringYourStaySVG />,
    navigationTo: "During",
    navType: "navigation",
  },
  {
    textComponent: <YourStayCardText text={["After", "Your Stay"]} />,
    component: <AfterYourStaySVG />,
    navigationTo: "After",
    navType: "navigation",
  },
];

export default function YourStay({
  navigation,
}: YourStayStackScreenProps<"YourStayHome">) {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "space-evenly" }}
    >
      <Box px={3}>
        {yourStayCards.map((data, i) => (
          <YourStaySVGCard key={i} {...data} />
        ))}
      </Box>
      <Box alignItems={"flex-end"}>
        <HenryWoofSVG width={375} height={375} />
      </Box>
    </ScrollView>
  );
}
