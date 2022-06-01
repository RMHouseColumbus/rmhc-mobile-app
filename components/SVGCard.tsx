import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";
import { Box, Pressable, Text } from "native-base";
import React from "react";

export interface SVGCardProps {
  textComponent: React.ReactNode;
  component: React.ReactNode;
  navType: "navigation" | "link";
  navigationTo: string;
}

export const SVGCard = ({
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
        my={"2"}
        flexDirection={"row"}
      >
        {textComponent}
        <Box flex={1} alignItems={"flex-end"}>
          {component}
        </Box>
      </Box>
    </Pressable>
  );
};

export const SVGCardText = ({ text }: { text: string[] }) => {
  return (
    <Box flex={2} pl={5} pt={2} zIndex={100}>
      {text.map((t, i) => (
        <Text key={i} fontFamily={"Raleway-SemiBold"} fontSize={20}>
          {t}
        </Text>
      ))}
    </Box>
  );
};
