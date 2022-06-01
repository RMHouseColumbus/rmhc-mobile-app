import { Box, ScrollView } from "native-base";
import React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import type { YourStayStackScreenProps } from "../../../types";
import { useContentfulEntries } from "../../../hooks/useContentful";
import type { QuestionAnswer } from "../../../contentful/ContenfulTypes";
import { entries } from "../../../contentful/ContenfulTypes";
import { createRichTextRenderOptions } from "../../../contentful/ContentfulRender";
import { QACard } from "../components/QACard";

export default function AfterYourStay({
  navigation,
}: YourStayStackScreenProps<"After">) {
  const tabBarHeight = useBottomTabBarHeight();

  const { data } = useContentfulEntries<QuestionAnswer>(entries.afterStay);

  const renderOptions = createRichTextRenderOptions();

  if (!data) {
    return <></>;
  }

  return (
    <ScrollView flex={1} py={"4"} px={"4"}>
      {data.map((qa, i) => (
        <QACard key={i} qa={qa} options={renderOptions} />
      ))}
      <Box height={tabBarHeight} />
    </ScrollView>
  );
}
