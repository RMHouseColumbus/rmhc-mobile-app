import { Box, ScrollView, Text } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import type { NeighborhoodStackScreenProps } from "../../../types";
import { useContentfulEntry } from "../../../hooks/useContentful";
import type { Page } from "../../../contentful/ContenfulTypes";
import {
  entries,
  TransportationEntry,
} from "../../../contentful/ContenfulTypes";
import { createRichTextRenderOptions } from "../../../contentful/ContentfulRender";

export default function Delivery({
  navigation,
}: NeighborhoodStackScreenProps<"Delivery">) {
  const tabBarHeight = useBottomTabBarHeight();

  const { data } = useContentfulEntry<Page>(entries.pages.delivery);

  const renderOptions = createRichTextRenderOptions();

  const Content = ({ content }: Page) => (
    <>{documentToReactComponents(content, renderOptions)}</>
  );

  if (!data) {
    return <></>;
  }

  return (
    <ScrollView flex={1} py={"4"} px={"4"} backgroundColor={"white"}>
      <Content content={data?.content ?? {}} page={data?.page ?? ""} />
      <Box height={tabBarHeight} />
    </ScrollView>
  );
}
