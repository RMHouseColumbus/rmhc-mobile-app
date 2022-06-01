import { Image, Linking, StyleSheet, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Text } from "../../components/Themed";
import useMapLink from "../../hooks/useMapLink";
import useCallNumber from "../../hooks/useOpenPhone";
import useOpenEmail from "../../hooks/useOpenEmail";

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
    <View style={styles.container}>
      <View style={{ paddingVertical: 16, flex: 1 }}>
        <Text style={styles.locationTextMain}>Ronald McDonald House</Text>
        <Text style={styles.locationTextMain}>Charities Central OH</Text>
        <Text style={styles.locationTextSub}>711 E Livingston Ave.</Text>
        <Text style={styles.locationTextSub}>Columbus, OH 43205</Text>
        <Text style={styles.locationLinkStyle} onPress={openPhone}>
          614-227-3700
        </Text>
        <Text style={styles.locationLinkStyle} onPress={openEmail}>
          rmhccommunications@rmhc-centralohio.org
        </Text>
      </View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <TouchableOpacity onPress={openMap}>
          <Image
            source={require("../../assets/images/find_us.png")}
            resizeMode={"contain"}
            style={{ flex: 1, aspectRatio: 1.08 }}
          />
        </TouchableOpacity>
      </View>
    </View>
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
