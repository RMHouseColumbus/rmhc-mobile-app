import { useNavigation } from "@react-navigation/native";
import type { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Linking } from "react-native";
import React from "react";
import { IllustratedCard } from "./IllustratedCard";
import type { IllustratedCardProps } from "./IllustratedCard";

export type IllustratedSVGCardProps = Omit<IllustratedCardProps, "onPress" | "accessibilityRole"> & {
  navType: "navigation" | "link";
  navigationTo: string;
};

export const SVGCard = (props: IllustratedSVGCardProps) => {
  const { navigationTo, navType } = props;
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const isLink = navType === "link";
  const onPress = isLink
    ? () => Linking.openURL(navigationTo)
    : () => navigation.navigate(navigationTo);

  return (
    <IllustratedCard
      label={props.label}
      artwork={props.artwork}
      colors={props.colors}
      onPress={onPress}
      accessibilityRole={isLink ? "link" : "button"}
    />
  );
};
