import { Alert, Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { brandImages } from "../../../assets/brand";
import Colors from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";

interface HomeContentProps {
  videoLink?: string;
  loading: boolean;
  onManageStay: () => void;
}

export default function HomeContent({ videoLink, loading, onManageStay }: HomeContentProps) {
  const url = videoLink?.trim();
  const videoAvailable = !loading && !!url;
  const videoStatus = loading ? "Loading welcome video…" : "Welcome video unavailable.";
  const openVideo = () => {
    if (!videoAvailable) return;
    void Linking.openURL(url).catch(() => {
      Alert.alert("Video unavailable", "Please try again later.");
    });
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.welcomePanel}>
        <Text style={styles.welcome} accessibilityRole="header">Welcome to</Text>
        <Image
          source={brandImages.horizontalLogo.source}
          resizeMode="contain"
          style={styles.logo}
          accessibilityLabel="Ronald McDonald House Central Ohio"
        />
        <Pressable
          accessibilityRole="link"
          accessibilityLabel={videoAvailable ? "Start here: Watch the welcome video" : videoStatus}
          accessibilityState={{ disabled: !videoAvailable, busy: loading }}
          disabled={!videoAvailable}
          onPress={openVideo}
          style={({ pressed }) => [styles.videoAction, pressed && styles.pressed]}
        >
          <Text style={styles.startHere}>Start Here:</Text>
          <View style={[styles.videoArtwork, !videoAvailable && styles.unavailable]} accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
            <Image source={brandImages.video.source} resizeMode="contain" style={styles.videoImage} />
            <Svg width={64} height={90} viewBox="0 0 64 90" style={styles.arrow}>
              <Path d="M8 5 C58 14 61 55 12 79 M16 64 L12 79 L29 75" fill="none" stroke={Colors.action} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            </Svg>
          </View>
          {!videoAvailable && <Text style={styles.videoStatus} accessibilityLiveRegion="polite">{videoStatus}</Text>}
        </Pressable>
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Manage your stay with us"
        onPress={onManageStay}
        style={({ pressed }) => [styles.manageAction, pressed && styles.pressed]}
      >
        <Text style={styles.manageLabel}>Manage your stay with us.</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.white },
  content: { flexGrow: 1 },
  welcomePanel: {
    flexGrow: 1, alignItems: "center", justifyContent: "space-evenly",
    backgroundColor: Colors.background,
    paddingHorizontal: 24, paddingVertical: 24, gap: 20,
  },
  welcome: { fontFamily: Fonts.Bold, color: Colors.text, fontSize: 26, textAlign: "center" },
  logo: { width: "100%", maxWidth: 320, height: undefined, aspectRatio: 1024 / 644 },
  videoAction: { alignItems: "center", gap: 24, width: "100%", paddingVertical: 8 },
  startHere: { fontFamily: Fonts.Regular, fontSize: 22, color: Colors.text, textAlign: "center" },
  videoArtwork: { width: 240, maxWidth: "100%", height: 120, alignItems: "center" },
  videoImage: { width: 104, height: 104 },
  arrow: { position: "absolute", top: -20, right: 0 },
  videoStatus: { fontFamily: Fonts.Regular, fontSize: 14, color: Colors.textMuted, textAlign: "center" },
  manageAction: { backgroundColor: Colors.action, alignItems: "center", justifyContent: "center", paddingHorizontal: 32, paddingVertical: 28, minHeight: 132 },
  manageLabel: { fontFamily: Fonts.Bold, fontSize: 32, color: Colors.onAction, textAlign: "center", maxWidth: 240 },
  pressed: { opacity: 0.75 },
  unavailable: { opacity: 0.4 },
});
