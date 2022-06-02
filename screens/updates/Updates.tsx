import React from "react";
import { Box, ScrollView, Text, VStack } from "native-base";

import { useContentfulEntries } from "../../hooks/useContentful";
import type { Update } from "../../contentful/ContenfulTypes";
import { entries } from "../../contentful/ContenfulTypes";
import Colors from "../../constants/Colors";

const UpdateCard = ({ title, type }: Update) => {
  return (
    <Box borderRadius={20} backgroundColor={"white"} my={"1"}>
      <VStack space={"4"}>
        <Box p={"4"}>
          <Text fontSize={12} fontFamily={"Raleway-Regular"} color={"black"}>
            {type}
          </Text>
          <Text fontSize={20} fontFamily={"Raleway-Bold"}>
            {title}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default function Updates() {
  const { loading, data } = useContentfulEntries<Update>(entries.updates);

  if (loading) {
    return <></>;
  }

  return (
    <ScrollView
      flex={1}
      py={"4"}
      px={"4"}
      backgroundColor={Colors.backgroundBlue}
    >
      {data.map((update, idx) => (
        <UpdateCard key={idx} {...update} />
      ))}
    </ScrollView>
  );
}
