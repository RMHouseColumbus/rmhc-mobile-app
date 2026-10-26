import type { Block, Inline } from "@contentful/rich-text-types";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import type { Options } from "@contentful/rich-text-react-renderer";
import React, { createContext, useContext } from "react";
import * as Linking from "expo-linking";
import { Box, Text } from "native-base";
import type { ITextProps } from "native-base";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

const Emphasis = createContext({ bold: false, italic: false });

// Contentful nests marks in either order. Carry both through to the real font face.
function RichText({ bold = false, italic = false, ...props }: ITextProps) {
  const inherited = useContext(Emphasis);
  const emphasis = { bold: bold || inherited.bold, italic: italic || inherited.italic };
  const fontFamily = emphasis.bold
    ? emphasis.italic ? Fonts.BoldItalic : Fonts.Bold
    : emphasis.italic ? Fonts.Italic : Fonts.Regular;

  return (
    <Emphasis.Provider value={emphasis}>
      <Text {...props} fontFamily={fontFamily} />
    </Emphasis.Provider>
  );
}

const heading = (fontSize: number) => (_node: Block | Inline, children: React.ReactNode) => (
  <RichText bold fontSize={fontSize} color={Colors.text} mt={4} mb={1} accessibilityRole="header">
    {children}
  </RichText>
);

const list = (ordered: boolean) => (_node: Block | Inline, children: React.ReactNode) => (
  <Box my={2}>
    {React.Children.map(children, (child, index) => (
      <Box flexDirection="row" alignItems="flex-start">
        <RichText fontSize={14} color={Colors.text} mt={2} mr={2} minW={5}>
          {ordered ? `${index + 1}.` : "\u2022"}
        </RichText>
        <Box flex={1} minW={0}>{child}</Box>
      </Box>
    ))}
  </Box>
);

export const createRichTextRenderOptions = () => {
  const doPress = (node: Block | Inline) => () => {
    const { uri } = node.data;
    return Linking.canOpenURL(uri)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(uri);
        } else {
          console.log(uri);
        }
      })
      .catch((err) => console.log(err));
  };

  const opts: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <RichText bold>{text}</RichText>,
      [MARKS.UNDERLINE]: (text) => <RichText underline>{text}</RichText>,
      [MARKS.ITALIC]: (text) => <RichText italic>{text}</RichText>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: heading(24),
      [BLOCKS.HEADING_2]: heading(22),
      [BLOCKS.HEADING_3]: heading(20),
      [BLOCKS.HEADING_4]: heading(18),
      [BLOCKS.HEADING_5]: heading(16),
      [BLOCKS.HEADING_6]: heading(14),
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <RichText color={Colors.action} underline accessibilityRole="link" onPress={doPress(node)}>
            {children}
          </RichText>
        );
      },
      [BLOCKS.UL_LIST]: list(false),
      [BLOCKS.OL_LIST]: list(true),
      [BLOCKS.LIST_ITEM]: (_node, children) => <Box>{children}</Box>,
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <RichText fontSize={14} color={Colors.text} mt={2}>{children}</RichText>
      ),
    },
  };
  return opts;
};
