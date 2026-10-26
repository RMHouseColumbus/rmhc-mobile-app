import { Box, ScrollView, Text } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { useContentfulEntries } from "../../../hooks/useContentful";
import type { TransportationEntry } from "../../../contentful/ContenfulTypes";
import { entries } from "../../../contentful/ContenfulTypes";
import { createRichTextRenderOptions } from "../../../contentful/ContentfulRender";
import Colors from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";
import { cardSurface } from "../../../constants/CardStyles";

export default function Transportation() {
  const tabBarHeight = useBottomTabBarHeight();

  const { data } = useContentfulEntries<TransportationEntry>(
    entries.transportation
  );

  const renderOptions = createRichTextRenderOptions();

  return (
    <ScrollView py={4} px={4} backgroundColor={Colors.background}>
      {[...data]
        .sort((a, b) => a.ordinal - b.ordinal)
        .map((a, i) => (
          <Box key={i} p={4} my={1} borderRadius={20} style={cardSurface}>
            <Text fontSize={16} fontFamily={Fonts.Bold} color={Colors.text}>{a.name}</Text>
            {documentToReactComponents(a.content, renderOptions)}
          </Box>
        ))}
      <Box height={tabBarHeight} />
    </ScrollView>
  );
}
