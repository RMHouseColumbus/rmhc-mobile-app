import HeartBackground from "../../components/HeartBackground";
import React from "react";
import { Box, ScrollView, Text } from "native-base";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { useContentfulEntries } from "../../hooks/useContentful";
import type { Update } from "../../contentful/ContenfulTypes";
import { entries } from "../../contentful/ContenfulTypes";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import { cardSurface } from "../../constants/CardStyles";

const UpdateCard = ({ title, type }: Update) => {
  return (
    <Box borderRadius={20} style={cardSurface} my={"1"} p={"4"}>
      <Text fontSize={14} fontFamily={Fonts.Regular} color={Colors.textMuted}>
        {type}
      </Text>
      <Text fontSize={20} fontFamily={Fonts.Bold} color={Colors.text} mt={"1"}>
        {title}
      </Text>
    </Box>
  );
};

export default function Updates() {
  const tabBarHeight = useBottomTabBarHeight();
  const { loading, data } = useContentfulEntries<Update>(entries.updates);

  return (
    <HeartBackground variant="updates">
      <ScrollView
        flex={1}
        contentContainerStyle={{ padding: 16, paddingBottom: tabBarHeight + 16 }}
        backgroundColor="transparent"
      >
        {!loading && data.map((update, idx) => (
          <UpdateCard key={idx} {...update} />
        ))}
      </ScrollView>
    </HeartBackground>
  );
}
