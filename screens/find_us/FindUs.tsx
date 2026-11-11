import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import useMapLink from "../../hooks/useMapLink";
import useCallNumber from "../../hooks/useOpenPhone";
import useOpenEmail from "../../hooks/useOpenEmail";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import { cardSurface } from "../../constants/CardStyles";

export default function FindUs() {
  const { openMap } = useMapLink({
    street: "711 E Livingston Ave.",
    zip: "43205",
    city: "Columbus",
  });
  const { openPhone } = useCallNumber({ number: "+16142273700" });
  const { openEmail } = useOpenEmail({
    email: "rmhccommunications@rmhc-centralohio.org",
  });

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.contactCard}>
        <Text style={styles.heading} accessibilityRole="header">
          Ronald McDonald House{"\n"}Charities Central OH
        </Text>
        <Text style={styles.address}>711 E Livingston Ave.{"\n"}Columbus, OH 43205</Text>
        <View>
          <Pressable
            onPress={openPhone}
            accessibilityRole="link"
            accessibilityLabel="Call 614-227-3700"
            style={({ pressed }) => [styles.contactLink, pressed && styles.pressed]}
          >
            <Text style={styles.link}>614-227-3700</Text>
          </Pressable>
          <Pressable
            onPress={openEmail}
            accessibilityRole="link"
            accessibilityLabel="Email rmhccommunications@rmhc-centralohio.org"
            style={({ pressed }) => [styles.contactLink, pressed && styles.pressed]}
          >
            <Text style={styles.link}>rmhccommunications@rmhc-centralohio.org</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        onPress={openMap}
        accessibilityRole="link"
        accessibilityLabel="Get directions to Ronald McDonald House"
        style={({ pressed }) => [styles.mapCard, pressed && styles.pressed]}
      >
        <Image
          source={require("../../assets/images/find_us.png")}
          resizeMode="contain"
          style={styles.map}
          accessible={false}
        />
        <View style={styles.directions}>
          <Text style={styles.directionsLabel}>Get directions</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  content: { padding: 16, gap: 16 },
  contactCard: { ...cardSurface, borderRadius: 20, padding: 16, gap: 16 },
  heading: { fontFamily: Fonts.Bold, fontSize: 20, color: Colors.text },
  address: { fontFamily: Fonts.Regular, fontSize: 16, color: Colors.textMuted },
  contactLink: { minHeight: 44, justifyContent: "center", paddingVertical: 8 },
  link: { fontFamily: Fonts.Regular, fontSize: 16, color: Colors.action, textDecorationLine: "underline" },
  mapCard: { borderRadius: 20, overflow: "hidden", borderWidth: 1, borderColor: Colors.cardBorder },
  map: { width: "100%", height: undefined, aspectRatio: 1350 / 1242 },
  directions: { backgroundColor: Colors.action, padding: 12, minHeight: 48, justifyContent: "center" },
  directionsLabel: { fontFamily: Fonts.Bold, fontSize: 16, color: Colors.onAction, textAlign: "center" },
  pressed: { opacity: 0.8 },
});
