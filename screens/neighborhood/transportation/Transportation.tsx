import { Box, ScrollView, Text } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import type { NeighborhoodStackScreenProps } from "../../../types";
import { useContentfulEntries } from "../../../hooks/useContentful";
import type {
  Update,
  TransportationEntry,
} from "../../../contentful/ContenfulTypes";
import { entries } from "../../../contentful/ContenfulTypes";
import { createRichTextRenderOptions } from "../../../contentful/ContentfulRender";

export default function Transportation({
  navigation,
}: NeighborhoodStackScreenProps<"Transportation">) {
  const tabBarHeight = useBottomTabBarHeight();

  const { loading, data } = useContentfulEntries<TransportationEntry>(
    entries.transportation
  );

  const renderOptions = createRichTextRenderOptions();

  const Content = ({ content }: TransportationEntry) => (
    <>{documentToReactComponents(content, renderOptions)}</>
  );

  return (
    <ScrollView py={"4"} px={"4"} backgroundColor={"white"}>
      {data
        .sort((a, b) => a.ordinal - b.ordinal)
        .map((a, i) => (
          <Box key={i} flex={1} marginBottom={"10"}>
            <Text fontFamily={"Raleway-Bold"}>{a.name}</Text>
            <Content {...a} />
          </Box>
        ))}
      <Box height={tabBarHeight} />
    </ScrollView>
  );
}
