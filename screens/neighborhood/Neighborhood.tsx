import { Box, Pressable, ScrollView, Text } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type {
  NeighborhoodStackList,
  NeighborhoodStackScreenProps,
} from "../../types";
import { createGeoLink } from "../../hooks/useMapLink";
import { RMHC_LAT_LONG } from "../../constants/Shared";
import type { SVGCardProps } from "../../components/SVGCard";
import { SVGCard, SVGCardText } from "../../components/SVGCard";

import {
  AreaRestaurantsSVG,
  FoodDeliverySVG,
  RetailShoppingSVG,
  ThingsToDoSVG,
  TransportationSVG,
} from "./components/NeighborhoodCards";

const neighborhoodCardPops: SVGCardProps[] = [
  {
    textComponent: <SVGCardText text={["Food", "Delivery"]} />,
    component: <FoodDeliverySVG />,
    navigationTo: "Delivery",
    navType: "navigation",
  },
  {
    textComponent: <SVGCardText text={["Area", "Restaurants"]} />,
    component: <AreaRestaurantsSVG />,
    navType: "link",
    navigationTo: createGeoLink({
      q: "restaurants",
      lat: RMHC_LAT_LONG.latitude,
      long: RMHC_LAT_LONG.longitude,
      z: 10,
    }),
  },
  {
    textComponent: <SVGCardText text={["Retail", "Shopping"]} />,
    component: <RetailShoppingSVG />,
    navType: "link",
    navigationTo: createGeoLink({
      q: "shopping",
      lat: RMHC_LAT_LONG.latitude,
      long: RMHC_LAT_LONG.longitude,
      z: 10,
    }),
  },
  {
    textComponent: <SVGCardText text={["Things to do", "In Columbus"]} />,
    component: <ThingsToDoSVG />,
    navType: "link",
    navigationTo: "https://www.experiencecolumbus.com/",
  },
  {
    textComponent: <SVGCardText text={["Transportation"]} />,
    component: <TransportationSVG />,
    navType: "navigation",
    navigationTo: "Transportation",
  },
];

export default function Neighborhood({
  navigation,
}: NeighborhoodStackScreenProps<"NeighborhoodHome">) {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView flex={1} py={"4"} px={"4"}>
      {neighborhoodCardPops.map((data, i) => (
        <SVGCard key={i} {...data} />
      ))}
      <Box height={tabBarHeight} />
    </ScrollView>
  );
}
