import { ScrollView } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { useContentfulEntry } from "../../../hooks/useContentful";
import type { Page } from "../../../contentful/ContenfulTypes";
import { entries } from "../../../contentful/ContenfulTypes";
import HeartBackground from "../../../components/HeartBackground";
import InformationCard from "../../../components/InformationCard";
import { createRichTextRenderOptions } from "../../../contentful/ContentfulRender";

export default function CareMobile() {
  const tabBarHeight = useBottomTabBarHeight();

  const { data } = useContentfulEntry<Page>(entries.pages["care-mobile"]);

  const renderOptions = createRichTextRenderOptions();

  return (
    <HeartBackground variant="updates">
      <ScrollView
        flex={1}
        contentContainerStyle={{ padding: 16, paddingBottom: tabBarHeight + 16 }}
        backgroundColor="transparent"
      >
        {data && (
          <InformationCard>
            {documentToReactComponents(data.content, renderOptions)}
          </InformationCard>
        )}
      </ScrollView>
    </HeartBackground>
  );
}
