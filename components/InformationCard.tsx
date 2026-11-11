import React, { type PropsWithChildren } from "react";
import { Box } from "native-base";
import Colors from "../constants/Colors";

export default function InformationCard({ children }: PropsWithChildren) {
  return (
    <Box
      p={4}
      my={1}
      borderRadius={12}
      backgroundColor={Colors.cards.aqua.background}
      borderLeftWidth={4}
      borderLeftColor={Colors.cards.aqua.text}
    >
      {children}
    </Box>
  );
}
