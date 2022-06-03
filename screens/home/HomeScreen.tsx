import { Box, Text } from "native-base";
import { Linking } from "react-native";

import type { RootTabScreenProps } from "../../types";

import Logo from "./components/Logo";
import LandingHenry from "./components/LandingHenry";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"RMHC Central Ohio">) {
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
          onWelcomeClicked={() =>
            Linking.openURL("https://youtu.be/9ypZmfHSiXg")
          }
          onManageClicked={() => navigation.navigate("YourStayHome")}
        />
      </Box>
    </Box>
  );
}
