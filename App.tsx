import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import useCachedResources from "./hooks/useCachedResources";
import { brandTheme } from "./constants/Theme";
import Colors from "./constants/Colors";

// Conditional require avoids initializing CMS/feed clients in the offline preview.
// __DEV__ prevents enabling this entry point in a production bundle.
const preview = __DEV__ && process.env.EXPO_PUBLIC_BRAND_PREVIEW === "1";
const Content = preview
  ? require("./screens/dev/BrandPreviewScreen").default
  : require("./AppContent").default;

export default function App() {
  const { ready, error } = useCachedResources();
  if (!ready) return null;

  return (
    <NativeBaseProvider theme={brandTheme}>
      <View
        style={{ flex: 1, backgroundColor: Colors.background }}
        onLayout={() => { void SplashScreen.hideAsync().catch(console.warn); }}
      >
        <Content fontError={error} />
        <StatusBar style={preview ? "dark" : "light"} />
      </View>
    </NativeBaseProvider>
  );
}
