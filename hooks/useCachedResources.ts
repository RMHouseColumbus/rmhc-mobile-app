import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  // const [fontLoaded, error] = useFonts({
  //   ...FontAwesome.font,
  //   "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
  //   "Raleway-Regular": require("../assets/fonts/Raleway-Regular.ttf"),
  //   "Raleway-Bold": require("../assets/fonts/Raleway-Bold.ttf"),
  //   "Raleway-Medium": require("../assets/fonts/Raleway-Medium.ttf"),
  //   "Raleway-SemiBold": require("../assets/fonts/Raleway-SemiBold.ttf"),
  //   "Raleway-Italic": require("../assets/fonts/Raleway-Italic.ttf"),
  // });

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
          "Raleway-Regular": require("../assets/fonts/Raleway-Regular.ttf"),
          "Raleway-Bold": require("../assets/fonts/Raleway-Bold.ttf"),
          "Raleway-Medium": require("../assets/fonts/Raleway-Medium.ttf"),
          "Raleway-SemiBold": require("../assets/fonts/Raleway-SemiBold.ttf"),
          "Raleway-Italic": require("../assets/fonts/Raleway-Italic.ttf"),
        });

      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
