import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Box, Button, Text } from "native-base";

import type { RootTabScreenProps } from "../../types";

export default function Facilities({
  navigation,
}: RootTabScreenProps<"Facilities">) {
  return (
    <ImageBackground
      imageStyle={{ resizeMode: "cover", flex: 1 }}
      style={{ flex: 1 }}
      source={require("./assets/floorplan_bckgrd.png")}
    >
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        <Box style={styles.floorPlanBackground}>
          <Box flex={1} alignItems={"center"} justifyContent={"center"}>
            <Text style={styles.floorPlanText}>FLOOR PLAN</Text>
          </Box>
          <Box opacity={1} flex={1}>
            <Button
              style={styles.floorPlanButton}
              opacity={1}
              onPress={() => navigation.navigate("FacilitiesPDF")}
            >
              <Text style={styles.viewPDF}>View PDF</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  floorPlanBackground: {
    borderColor: "black",
    borderWidth: 5,
    width: "55%",
    height: "37%",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-evenly",
    opacity: 0.9,
  },
  floorPlanText: {
    fontSize: 20,
    fontFamily: "Raleway-Bold",
    textAlign: "center",
  },
  floorPlanButton: {
    borderRadius: 10,
    backgroundColor: "#FCC300",
    opacity: 1,
  },
  viewPDF: {
    color: "#000000",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Raleway-Regular",
  },
});
