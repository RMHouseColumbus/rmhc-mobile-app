import { useNavigation } from "@react-navigation/native";
import type { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Linking } from "react-native";
import { Box, Pressable, Text } from "native-base";
import React from "react";
import { IllustratedCard } from "./IllustratedCard";
import type { IllustratedCardProps } from "./IllustratedCard";
import { cardSurface } from "../constants/CardStyles";

export interface SVGCardProps {
  textComponent: React.ReactNode;
  component: React.ReactNode;
  navType: "navigation" | "link";
  navigationTo: string;
}

// Keep the legacy props exported for YourStaySVGCard and unmigrated callers.
export type IllustratedSVGCardProps = Omit<IllustratedCardProps, "onPress" | "accessibilityRole"> &
  Pick<SVGCardProps, "navType" | "navigationTo">;

export const SVGCard = (props: SVGCardProps | IllustratedSVGCardProps) => {
  const { navigationTo, navType } = props;
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const isLink = navType === "link";
  const onPress = isLink
    ? () => Linking.openURL(navigationTo)
    : () => navigation.navigate(navigationTo);

  if ("label" in props) {
    return (
      <IllustratedCard
        label={props.label}
        artwork={props.artwork}
        colors={props.colors}
        onPress={onPress}
        accessibilityRole={isLink ? "link" : "button"}
      />
    );
  }

  const { textComponent, component } = props;

  return (
    <Pressable onPress={onPress}>
      <Box
        borderRadius={20}
        style={cardSurface}
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
