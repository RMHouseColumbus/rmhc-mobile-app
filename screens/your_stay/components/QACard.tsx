import { Box, Text } from "native-base";
import * as React from "react";
import type { Options } from "@contentful/rich-text-react-renderer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import type { QuestionAnswer } from "../../../contentful/ContenfulTypes";
import { cardSurface } from "../../../constants/CardStyles";
import Colors from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";

export interface QACardProps {
  qa: QuestionAnswer;
  options: Options;
}

export const QACard = ({ qa, options }: QACardProps) => {
  const { answer, question } = qa;
  return (
    <Box
      borderRadius={20}
      style={cardSurface}
      my={"1"}
      p={"4"}
    >
      <Text
        fontSize={18}
        fontFamily={Fonts.Bold}
        color={Colors.text}
        accessibilityRole="header"
      >
        {question}
      </Text>
      {documentToReactComponents(answer, options)}
    </Box>
  );
};
