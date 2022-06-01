import { Platform } from "react-native";

const platform = Platform.OS;

export const isAndroid = platform === "android";
export const isIOS = platform === "ios";
