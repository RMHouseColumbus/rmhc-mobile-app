import { ScrollView } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import type { YourStayStackScreenProps } from "../../../types";
import { useContentfulEntries } from "../../../hooks/useContentful";
import type { QuestionAnswer } from "../../../contentful/ContenfulTypes";
import { entries } from "../../../contentful/ContenfulTypes";
import HeartBackground from "../../../components/HeartBackground";
import { createRichTextRenderOptions } from "../../../contentful/ContentfulRender";
import { QACard } from "../components/QACard";

export default function DuringYourStay({
  navigation,
}: YourStayStackScreenProps<"During Your Stay">) {
  const tabBarHeight = useBottomTabBarHeight();

  const { data } = useContentfulEntries<QuestionAnswer>(entries.duringStay);

  const renderOptions = createRichTextRenderOptions();

  if (!data) {
    return <></>;
  }

  return (
    <HeartBackground variant="resources">
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
