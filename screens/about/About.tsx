import { Box, ScrollView } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import type { AboutStackScreenProps } from "../../types";
import type { SVGCardProps } from "../../components/SVGCard";
import { SVGCard, SVGCardText } from "../../components/SVGCard";

import {
  CareMobileSVG,
  FamilyRoomSVG,
  MeetStaffSVG,
  ShareStorySVG,
  StayInvolvedSVG,
  VisitGlobeSVG,
} from "./components/AboutCards";

const aboutCardProps: SVGCardProps[] = [
  {
    textComponent: <SVGCardText text={["Meet the", "Staff"]} />,
    component: <MeetStaffSVG />,
    navigationTo: "http://rmhc-centralohio.org/who-we-are/staff/",
    navType: "link",
  },
  {
    textComponent: <SVGCardText text={["Visit Our", "Website"]} />,
    component: <VisitGlobeSVG />,
    navType: "link",
    navigationTo: "http://rmhc-centralohio.org/",
  },
  {
    textComponent: <SVGCardText text={["Ways To Stay", "Involved"]} />,
    component: <StayInvolvedSVG />,
    navType: "navigation",
    navigationTo: "Stay Involved",
  },
  {
    textComponent: <SVGCardText text={["Share Your", "Story"]} />,
    component: <ShareStorySVG />,
    navType: "link",
    navigationTo:
      "https://docs.google.com/forms/d/e/1FAIpQLSeJ3tFZTZ8QfSintJzB2d2gfHyFZKipkXFFLn7DM00xXQz9fA/viewform?vc=0&c=0&w=1",
  },
  {
    textComponent: <SVGCardText text={["Family Room"]} />,
    component: <FamilyRoomSVG />,
    navType: "navigation",
    navigationTo: "Family Room",
  },
  {
    textComponent: <SVGCardText text={["Care", "Mobile"]} />,
    component: <CareMobileSVG />,
    navType: "navigation",
    navigationTo: "Care Mobile",
  },
];

export default function About({
  navigation,
}: AboutStackScreenProps<"AboutHome">) {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView flex={1} py={"4"} px={"4"}>
      {aboutCardProps.map((data, i) => (
        <SVGCard key={i} {...data} />
      ))}
      <Box height={tabBarHeight} />
    </ScrollView>
  );
}
