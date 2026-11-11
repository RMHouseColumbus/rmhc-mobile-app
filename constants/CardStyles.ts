import type { ViewStyle } from "react-native";
import Colors from "./Colors";

export const cardSurface: ViewStyle = {
  backgroundColor: Colors.cardBackground,
  borderColor: Colors.cardBorder,
  borderWidth: 1,
  shadowColor: Colors.black,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.07,
  shadowRadius: 4,
  elevation: 2,
};
