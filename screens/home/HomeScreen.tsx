import { Box, Text } from "native-base";
import { Linking } from "react-native";

import type { RootTabScreenProps } from "../../types";

import Logo from "./components/Logo";
import LandingHenry from "./components/LandingHenry";
import { useContentfulEntries, useContentfulEntry } from "../../hooks/useContentful";
import type { PageLink, QuestionAnswer } from "../../contentful/ContenfulTypes";
import { entries } from "../../contentful/ContenfulTypes";
import React from "react";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"RMHC Central Ohio">) {

  const { data } = useContentfulEntries<PageLink>(entries.pageLink)
  if (!data) {
    return <></>;
  }

  const welcomeVideo = data.find(p => p.pageName === "welcome-video")
  const welcomeVideoLink = welcomeVideo ? welcomeVideo.link : ""

  return (
    <Box backgroundColor={"#FFFFFF"} flex={1}>
      <Box flex={1} alignItems={"center"} justifyContent={"center"}>
        <Text fontFamily={"Raleway-SemiBold"} color={"#da291c"} fontSize={26}>
          Welcome To
        </Text>
      </Box>
      <Box alignItems={"center"} justifyContent={"flex-start"} flex={1}>
        <Logo />
      </Box>
      <Box alignItems={"center"}>
        <LandingHenry
          onWelcomeClicked={() => Linking.openURL(welcomeVideoLink)}
          onManageClicked={() => navigation.navigate("YourStayHome")}
          welcomeVideo={welcomeVideoLink}
        />
      </Box>
    </Box>
  );
}
