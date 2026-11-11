import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Text } from "native-base";
import HomeContent from "../home/components/HomeContent";
import Colors from "../../constants/Colors";

const states = ["Ready", "Loading", "Unavailable"] as const;

export default function HomePreviewScreen() {
  const [state, setState] = useState<typeof states[number]>("Ready");
  return (
    <View style={styles.screen}>
      <View style={styles.controls}>
        <Text>Video test state (no CMS changes)</Text>
        <View style={styles.buttons}>
          {states.map(value => (
            <Button key={value} size="sm" variant={state === value ? "solid" : "outline"}
              accessibilityState={{ selected: state === value }} onPress={() => setState(value)}>
              {value}
            </Button>
          ))}
        </View>
        <Text fontSize="xs">Ready opens the RMHC website. The stay action shows a test confirmation.</Text>
      </View>
      <HomeContent
        loading={state === "Loading"}
        videoLink={state === "Ready" ? "https://rmhc-centralohio.org/" : undefined}
        onManageStay={() => Alert.alert("Stay action worked", "In the app, this opens Your Stay.")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  controls: { padding: 12, gap: 8 },
  buttons: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
});
