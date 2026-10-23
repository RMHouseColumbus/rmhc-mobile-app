import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text as NativeText, View } from "react-native";
import { Heading, Text } from "native-base";
import { isLoaded } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import { brandImages, BrandImage } from "../../assets/brand";
import { brandFontAssets } from "../../constants/FontAssets";
import Colors, { cardColors } from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

const images: [string, BrandImage][] = Object.entries(brandImages);
const fonts = Object.keys(brandFontAssets);
const pairs = Object.values(cardColors);

export default function BrandPreviewScreen({ fontError }: { fontError?: Error | null }) {
  const [imageResults, setImageResults] = useState<Record<string, string>>({});
  const loadedImages = Object.values(imageResults).filter((result) => result === "Loaded").length;
  const loadedFonts = fonts.filter(isLoaded).length;
  useEffect(() => {
    console.info(`[Brand preview] Fonts loaded: ${loadedFonts}/${fonts.length}`);
  }, [loadedFonts]);
  useEffect(() => {
    if (loadedImages === images.length) {
      console.info(`[Brand preview] Images loaded: ${loadedImages}/${images.length}`);
    }
  }, [loadedImages]);
  const recordImage = (name: string, result: string) => {
    setImageResults((previous) => previous[name] === result ? previous : { ...previous, [name]: result });
  };

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView contentContainerStyle={styles.content}>
        <Heading accessibilityRole="header">Brand preview</Heading>
        <Text>Offline check for #101 and #102. Scroll to inspect every image and font.</Text>
        <Text accessibilityLiveRegion="polite" fontWeight="bold">
          Fonts {loadedFonts}/{fonts.length} · Images {loadedImages}/{images.length}
        </Text>
        {fontError && <NativeText style={styles.error}>Font load failed: {fontError.message}</NativeText>}

        <Heading size="md">Audrey font files</Heading>
        {fonts.map((font) => (
          <View key={font} style={styles.fontSample}>
            <Text fontSize="xs">{font} · {isLoaded(font) ? "Loaded" : "NOT LOADED"}</Text>
            <NativeText style={{ fontFamily: font, fontSize: 22 }}>
              Welcome to Ronald McDonald House. Aa Bb 0123456789
            </NativeText>
          </View>
        ))}

        <Heading size="md">NativeBase defaults</Heading>
        <Text>Regular body: Your family is welcome here.</Text>
        <Text fontWeight="bold">Bold: Your family is welcome here.</Text>
        <Text italic>Italic: Your family is welcome here.</Text>
        <Text bold italic>Bold italic: Your family is welcome here.</Text>
        <Heading size="sm">Default heading: Manage your stay</Heading>
        <View style={styles.headerSample}>
          <NativeText style={styles.headerText}>Navigation title · Audrey Bold</NativeText>
        </View>

        <Heading size="md">Card colors</Heading>
        {Object.entries(cardColors).map(([name, pair]) => (
          <View key={name} style={[styles.card, { backgroundColor: pair.background }]}>
            <NativeText style={{ color: pair.text, fontFamily: Fonts.Bold, fontSize: 22 }}>{name} · Manage your stay</NativeText>
            <Text color={pair.text}>{pair.background} / {pair.text}</Text>
          </View>
        ))}

        <Heading size="md">Logos and illustrations</Heading>
        <Text>Transparent artwork is shown on colored surfaces. Look for white boxes, clipping, or fuzzy edges.</Text>
        {images.map(([name, asset], index) => {
          const logo = name.includes("Logo");
          return (
            <View key={name} style={styles.asset}>
              <Text fontWeight="bold">{asset.label}</Text>
              <View style={[styles.imageSurface, {
                backgroundColor: asset.reversed ? Colors.text : pairs[index % pairs.length].background,
              }]}>
                <Image
                  source={asset.source}
                  accessibilityLabel={asset.label}
                  resizeMode="contain"
                  style={logo ? styles.logo : styles.illustration}
                  onLoad={() => recordImage(name, "Loaded")}
                  onError={(event) => recordImage(name, `FAILED: ${event.nativeEvent.error}`)}
                />
              </View>
              <Text fontSize="xs">{name} · {imageResults[name] ?? "Loading…"}</Text>
            </View>
          );
        })}
        <Text>Cold-start again with device dark mode and larger text enabled. The preview should stay light and readable.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: Colors.background },
  content: { padding: 20, gap: 16 },
  fontSample: { gap: 6 },
  headerSample: { padding: 16, backgroundColor: Colors.header, borderRadius: 12 },
  headerText: { fontFamily: Fonts.Bold, color: Colors.onHeader, fontSize: 22 },
  card: { padding: 16, gap: 8, borderRadius: 20 },
  asset: { gap: 8 },
  imageSurface: { padding: 16, alignItems: "center", borderRadius: 20 },
  illustration: { width: 112, height: 112 },
  logo: { width: "100%", height: 210 },
  error: { color: Colors.action, fontSize: 16 },
});
