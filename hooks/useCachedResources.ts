import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { brandFontAssets, legacyFontAssets } from "../constants/FontAssets";

// Run before React mounts so the splash does not disappear during font loading.
void SplashScreen.preventAutoHideAsync().catch(console.warn);

const fontAssets = { ...FontAwesome.font, ...legacyFontAssets, ...brandFontAssets };

export default function useCachedResources() {
  const [loaded, error] = useFonts(fontAssets);

  useEffect(() => {
    if (error) console.warn("Unable to load application fonts", error);
  }, [error]);

  // Allow an error screen/fallback to render instead of leaving the splash stuck.
  return { ready: loaded || Boolean(error), error };
}
