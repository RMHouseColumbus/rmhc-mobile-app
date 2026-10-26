import { Box, Pressable, ScrollView, Text } from "native-base";
import React from "react";
import { Linking } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import { useContentfulEntry } from "../../../hooks/useContentful";
import type { Page } from "../../../contentful/ContenfulTypes";
import { entries } from "../../../contentful/ContenfulTypes";
import { createRichTextRenderOptions } from "../../../contentful/ContentfulRender";
import Colors from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";
import { cardSurface } from "../../../constants/CardStyles";

export default function Delivery() {
  const tabBarHeight = useBottomTabBarHeight();

  const { data } = useContentfulEntry<Page>(entries.pages.delivery);

  const renderOptions = createRichTextRenderOptions();
  renderOptions.renderNode = {
    ...renderOptions.renderNode,
    [BLOCKS.PARAGRAPH]: (node, children) => {
      // A standalone provider link becomes a card; other content keeps its formatting.
      const content = node.content.filter(child => child.nodeType !== "text" || child.value.trim());
      const link = content.length === 1 && content[0].nodeType === INLINES.HYPERLINK ? content[0] : undefined;
      if (!link) return <Text mt={2} mb={4}>{children}</Text>;

      const label = link.content.map(child => child.nodeType === "text" ? child.value : "").join("");
      return (
        <Pressable
          accessibilityRole="link"
          accessibilityLabel={label}
          onPress={() => Linking.openURL(link.data.uri)}
        >
          <Box p={4} my={1} borderRadius={20} style={cardSurface}>
            <Text fontSize={16} fontFamily={Fonts.Bold} color={Colors.text}>{label}</Text>
          </Box>
        </Pressable>
      );
    },
  };

  if (!data) {
    return <></>;
  }

  return (
    <ScrollView flex={1} py={4} px={4} backgroundColor={Colors.background}>
      {documentToReactComponents(data.content, renderOptions)}
      <Box height={tabBarHeight} />
    </ScrollView>
  );
}
