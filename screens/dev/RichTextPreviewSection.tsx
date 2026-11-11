import { useState } from "react";
import { View } from "react-native";
import { Button, Heading, Text } from "native-base";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createRichTextRenderOptions } from "../../contentful/ContentfulRender";
import { richTextFixture } from "./richTextFixture";

export function RichTextPreviewSection() {
  const [narrow, setNarrow] = useState(false);
  return (
    <View style={{ gap: 12 }}>
      <Heading size="md">Rich text · #110</Heading>
      <Text>Check emphasis, lists and links. Repeat with larger device text; links open the RMHC website.</Text>
      <Button onPress={() => setNarrow(!narrow)}>
        {narrow ? "Use full width" : "Use narrow width (280 pt)"}
      </Button>
      <View style={{ width: narrow ? 280 : "100%", maxWidth: "100%" }}>
        {documentToReactComponents(richTextFixture, createRichTextRenderOptions())}
      </View>
    </View>
  );
}
