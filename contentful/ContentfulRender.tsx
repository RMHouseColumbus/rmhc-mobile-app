import type { Block, Inline } from "@contentful/rich-text-types";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import type { Options } from "@contentful/rich-text-react-renderer";
import React from "react";
import * as Linking from "expo-linking";
import { Box, Text } from "native-base";

export const createRichTextRenderOptions = () => {
  const doPress = (node: Block | Inline) => () => {
    const { uri } = node.data;
    return Linking.canOpenURL(uri)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(uri);
        } else {
        }
      })
      .catch((err) => console.log(err));
  };

  const opts: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Text fontFamily={"Raleway-Bold"}>{text}</Text>,
      [MARKS.UNDERLINE]: (text) => <Text>{text}</Text>,
      [MARKS.ITALIC]: (text) => (
        <Text fontFamily={"Raleway-Italic"}>{text}</Text>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_3]: (_node, children) => (
        <Box>
          <Text>{children}</Text>
        </Box>
      ),
      [BLOCKS.HEADING_2]: (_node, children) => (
        <Box>
          <Text>{children}</Text>
        </Box>
      ),
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <Text color={"#0078d7"} onPress={doPress(node)}>
            {children}
          </Text>
        );
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        return <Box>{children}</Box>;
      },
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <Box flexDirection={"row"} alignItems={"center"}>
          <Text>
            {"\u2022"} {children}
          </Text>
        </Box>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <Text mt={2}>{children}</Text>,
    },
    renderText: (text) => <Text fontSize={12}>{text}</Text>,
  };
  return opts;
};
