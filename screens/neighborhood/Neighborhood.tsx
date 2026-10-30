import { ScrollView } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { createGeoLink } from "../../hooks/useMapLink";
import { RMHC_LAT_LONG } from "../../constants/Shared";
import type { IllustratedSVGCardProps } from "../../components/SVGCard";
import { SVGCard } from "../../components/SVGCard";
import { brandImages } from "../../assets/brand";
import Colors, { cardColors } from "../../constants/Colors";

const neighborhoodCardProps: IllustratedSVGCardProps[] = [
  {
    label: "Food Delivery",
    artwork: brandImages.meals.source,
    colors: cardColors.lavender,
    navigationTo: "Delivery",
    navType: "navigation",
  },
  {
    label: "Area Restaurants",
    artwork: brandImages.mcdonalds.source,
    colors: cardColors.aqua,
    navType: "link",
    navigationTo: createGeoLink({
      q: "restaurants",
      lat: RMHC_LAT_LONG.latitude,
      long: RMHC_LAT_LONG.longitude,
      z: 10,
    }),
  },
  {
    label: "Retail Shopping",
    artwork: brandImages.shopping.source,
    colors: cardColors.lime,
    navType: "link",
    navigationTo: createGeoLink({
      q: "shopping",
      lat: RMHC_LAT_LONG.latitude,
      long: RMHC_LAT_LONG.longitude,
      z: 10,
    }),
  },
  {
    label: "Things to do in Columbus",
    artwork: brandImages.city.source,
    colors: cardColors.gold,
    navType: "link",
    navigationTo: "https://www.experiencecolumbus.com/",
  },
  {
    label: "Transportation",
    artwork: brandImages.tickets.source,
    colors: cardColors.lavender,
    navType: "navigation",
    navigationTo: "Transportation",
  },
];

export default function Neighborhood() {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView
      flex={1}
      backgroundColor={Colors.background}
      contentContainerStyle={{ padding: 16, paddingBottom: tabBarHeight + 16, gap: 16 }}
    >
      {neighborhoodCardProps.map((card) => (
        <SVGCard key={card.label} {...card} />
      ))}
    </ScrollView>
  );
}
