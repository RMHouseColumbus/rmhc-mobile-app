import { Box, ScrollView } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { useContentfulEntry } from "../../../hooks/useContentful";
import type { Page } from "../../../contentful/ContenfulTypes";
import { entries } from "../../../contentful/ContenfulTypes";
import HeartBackground from "../../../components/HeartBackground";
import { cardSurface } from "../../../constants/CardStyles";
import { splitRichTextSections } from "../../../contentful/splitRichTextSections";
import { createRichTextRenderOptions } from "../../../contentful/ContentfulRender";

export default function StayInvolved() {
  const tabBarHeight = useBottomTabBarHeight();

  const { data } = useContentfulEntry<Page>(entries.pages["stay-involved"]);

  const renderOptions = createRichTextRenderOptions();

  return (
    <HeartBackground variant="about">
      <ScrollView
        flex={1}
        contentContainerStyle={{ padding: 16, paddingBottom: tabBarHeight + 16 }}
        backgroundColor="transparent"
      >
        {data && splitRichTextSections(data.content).map((section, index) => (
          <Box key={index} p={4} my={1} borderRadius={20} style={cardSurface}>
            {documentToReactComponents(section, renderOptions)}
          </Box>
        ))}
      </ScrollView>
    </HeartBackground>
  );
}
