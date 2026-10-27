import { ScrollView } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import type { IllustratedSVGCardProps } from "../../components/SVGCard";
import { SVGCard } from "../../components/SVGCard";
import { brandImages } from "../../assets/brand";
import Colors, { cardColors } from "../../constants/Colors";

const aboutCardProps: IllustratedSVGCardProps[] = [
  {
    label: "Meet the Staff",
    artwork: brandImages.team.source,
    colors: cardColors.lavender,
    navigationTo: "https://rmhc-centralohio.org/about/our-staff/",
    navType: "link",
  },
  {
    label: "Visit our Website",
    artwork: brandImages.website.source,
    colors: cardColors.aqua,
    navType: "link",
    navigationTo: "http://rmhc-centralohio.org/",
  },
  {
    label: "Ways to Stay Involved",
    artwork: brandImages.involvement.source,
    colors: cardColors.lime,
    navType: "navigation",
    navigationTo: "Stay Involved",
  },
  {
    label: "Share Your Story",
    artwork: brandImages.story.source,
    colors: cardColors.gold,
    navType: "link",
    navigationTo:
      "https://docs.google.com/forms/d/e/1FAIpQLSeJ3tFZTZ8QfSintJzB2d2gfHyFZKipkXFFLn7DM00xXQz9fA/viewform?vc=0&c=0&w=1",
  },
  {
    label: "Family Room",
    artwork: brandImages.familyRoom.source,
    colors: cardColors.lavender,
    navType: "navigation",
    navigationTo: "Family Room",
  },
  {
    label: "Care Mobile",
    artwork: brandImages.careMobile.source,
    colors: cardColors.aqua,
    navType: "navigation",
    navigationTo: "Care Mobile",
  },
  {
    label: "Staff Use",
    artwork: brandImages.staffChecklist.source,
    colors: cardColors.lime,
    navType: "navigation",
    navigationTo: "Staff Use",
  },
];

export default function About() {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView
      flex={1}
      backgroundColor={Colors.background}
      contentContainerStyle={{ padding: 16, paddingBottom: tabBarHeight + 16, gap: 16 }}
    >
      {aboutCardProps.map((card) => (
        <SVGCard key={card.label} {...card} />
      ))}
    </ScrollView>
  );
}
