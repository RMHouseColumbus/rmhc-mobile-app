import React from "react";
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import type { RootTabScreenProps } from "../../types";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import { cardSurface } from "../../constants/CardStyles";

export default function Facilities({ navigation }: RootTabScreenProps<"Facilities">) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.screen}
      source={require("./assets/floorplan_bckgrd.png")}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.panel}>
          <Text style={styles.heading} accessibilityRole="header">Floor Plan</Text>
          <Pressable
            onPress={() => navigation.navigate("FacilitiesPDF")}
            accessibilityRole="button"
            accessibilityLabel="View floor plan PDF"
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          >
            <Text style={styles.buttonLabel}>View PDF</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  content: { flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 24 },
  panel: { ...cardSurface, width: "100%", maxWidth: 400, borderRadius: 20, padding: 24, gap: 24 },
  heading: { fontFamily: Fonts.Bold, fontSize: 24, color: Colors.text, textAlign: "center" },
  button: { backgroundColor: Colors.action, borderRadius: 10, minHeight: 48, padding: 12, justifyContent: "center" },
  buttonLabel: { fontFamily: Fonts.Bold, fontSize: 18, color: Colors.onAction, textAlign: "center" },
  pressed: { opacity: 0.8 },
});
