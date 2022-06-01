import { Box, Pressable, Text, VStack } from "native-base";
import * as React from "react";
import type { Options } from "@contentful/rich-text-react-renderer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import type { QuestionAnswer } from "../../../contentful/ContenfulTypes";

export interface QACardProps {
  qa: QuestionAnswer;
  options: Options;
}

export const QACard = ({ qa, options }: QACardProps) => {
  const { answer, question } = qa;
  return (
    <Box
      borderRadius={20}
      backgroundColor={"white"}
      my={"1"}
      justifyContent={"center"}
    >
      <VStack>
        <Box px={"4"} py={2}>
          <Text fontSize={16} fontFamily={"Raleway-Bold"} color={"black"}>
            {question}
          </Text>
        </Box>
        <Box px={4} pb={2}>
          {documentToReactComponents(answer, options)}
        </Box>
      </VStack>
    </Box>
  );
};
