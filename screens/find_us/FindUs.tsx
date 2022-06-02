import { Image, Linking, StyleSheet, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box, Text } from "native-base";

import useMapLink from "../../hooks/useMapLink";
import useCallNumber from "../../hooks/useOpenPhone";
import useOpenEmail from "../../hooks/useOpenEmail";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export default function FindUs() {
  const { openMap } = useMapLink({
    street: "711 E Livingston Ave.",
    zip: "43205",
    city: "Columbus",
  });

  const { openPhone } = useCallNumber({ number: "+16132273700" });
  const { openEmail } = useOpenEmail({
    email: "rmhccommunications@rmhc-centralohio.org",
  });

  return (
    <Box flex={1} backgroundColor={Colors.white}>
      <Box flex={1} px={6} justifyContent={"space-evenly"}>
        <Box>
          <Text color={Colors.black} fontFamily={Fonts.Semibold}>
            Ronald McDonald House
          </Text>
          <Text color={Colors.black} fontFamily={Fonts.Semibold}>
            Charities Central OH
          </Text>
        </Box>
        <Box>
          <Text color={"#999999"} fontFamily={Fonts.Bold} fontSize={12}>
            711 E Livingston Ave.
          </Text>
          <Text color={"#999999"} fontFamily={Fonts.Bold} fontSize={12}>
            Columbus, OH 43205
          </Text>
        </Box>
        <Box>
          <Text
            color={"#0078d7"}
            fontSize={12}
            fontFamily={Fonts.Regular}
            onPress={openPhone}
          >
            614-227-3700
          </Text>
          <Text
            color={"#0078d7"}
            fontSize={12}
            fontFamily={Fonts.Regular}
            onPress={openEmail}
          >
            rmhccommunications@rmhc-centralohio.org
          </Text>
        </Box>
      </Box>
      <View style={{ flex: 2, alignItems: "center" }}>
        <TouchableOpacity onPress={openMap}>
          <Image
            source={require("../../assets/images/find_us.png")}
            resizeMode={"contain"}
            style={{ flex: 1, aspectRatio: 1.08 }}
          />
        </TouchableOpacity>
      </View>
    </Box>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, backgroundColor: "#FFFFFF" },
  locationTextMain: {
    fontFamily: "Raleway-SemiBold",
    fontSize: 16,
    color: "#000000",
  },
  locationTextSub: {
    fontFamily: "Raleway-Bold",
    fontSize: 12,
    color: "#999999",
  },
  locationLinkStyle: {
    fontFamily: "Raleway-Regular",
    fontSize: 12,
    color: "#0078d7",
    lineHeight: 24,
  },
});
