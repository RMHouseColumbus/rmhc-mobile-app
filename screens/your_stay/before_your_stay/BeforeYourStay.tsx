import { ScrollView } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import type { YourStayStackScreenProps } from "../../../types";
import {
  useContentfulEntries,
  useContentfulEntry,
} from "../../../hooks/useContentful";
import type { Page, QuestionAnswer } from "../../../contentful/ContenfulTypes";
import { entries } from "../../../contentful/ContenfulTypes";
import HeartBackground from "../../../components/HeartBackground";
import { createRichTextRenderOptions } from "../../../contentful/ContentfulRender";
import { QACard } from "../components/QACard";

export default function BeforeYourStay({
  navigation,
}: YourStayStackScreenProps<"Before Your Stay">) {
  const tabBarHeight = useBottomTabBarHeight();

  const { data } = useContentfulEntries<QuestionAnswer>(entries.beforeStay);

  const renderOptions = createRichTextRenderOptions();

  if (!data) {
    return <></>;
  }

  return (
    <HeartBackground variant="updates">
      <ScrollView
        flex={1}
        contentContainerStyle={{ padding: 16, paddingBottom: tabBarHeight + 16 }}
        backgroundColor="transparent"
      >
        {data
          .sort((a, b) => a.ordinal - b.ordinal)
          .map((qa, i) => (
            <QACard key={i} qa={qa} options={renderOptions} />
          ))}
      </ScrollView>
    </HeartBackground>
  );
}
