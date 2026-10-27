import { ScrollView } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import type { AboutStackScreenProps } from "../../../types";
import { useContentfulEntry } from "../../../hooks/useContentful";
import type { Page } from "../../../contentful/ContenfulTypes";
import { entries } from "../../../contentful/ContenfulTypes";
import Colors from "../../../constants/Colors";
import { createRichTextRenderOptions } from "../../../contentful/ContentfulRender";

export default function StayInvolved({
  navigation,
}: AboutStackScreenProps<"Stay Involved">) {
  const tabBarHeight = useBottomTabBarHeight();

  const { data } = useContentfulEntry<Page>(entries.pages["stay-involved"]);

  const renderOptions = createRichTextRenderOptions();

  const Content = ({ content }: Page) => (
    <>{documentToReactComponents(content, renderOptions)}</>
  );

  if (!data) {
    return <></>;
  }

  return (
    <ScrollView
      flex={1}
      contentContainerStyle={{ padding: 16, paddingBottom: tabBarHeight + 16 }}
      backgroundColor={Colors.background}
    >
      <Content content={data?.content ?? {}} page={data?.page ?? ""} />
    </ScrollView>
  );
}
