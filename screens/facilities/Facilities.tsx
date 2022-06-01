import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Box, Button } from "native-base";

export default function Facilities() {
  return (
    <ImageBackground
      imageStyle={{ resizeMode: "cover", flex: 1 }}
      style={{ flex: 1 }}
      source={require("./assets/floorplan_bckgrd.png")}
    >
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        <View style={styles.floorPlanBackground}>
          <Box>
            <Text style={styles.floorPlanText}>FLOOR PLAN</Text>
          </Box>
          <Box opacity={1}>
            <Button style={styles.floorPlanButton} opacity={1}>
              <Text style={styles.viewPDF}>View PDF</Text>
            </Button>
          </Box>
        </View>
      </Box>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  floorPlanBackground: {
    borderColor: "black",
    borderWidth: 5,
    width: "60%",
    height: "37%",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-evenly",
    opacity: 0.9,
  },
  floorPlanText: {
    fontSize: 35,
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
