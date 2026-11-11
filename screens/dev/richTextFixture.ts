import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import type { Document, Hyperlink, ListItem, Paragraph, Text } from "@contentful/rich-text-types";

const text = (value: string, ...marks: MARKS[]): Text => ({
  nodeType: "text", value, marks: marks.map(type => ({ type })), data: {},
});
const paragraph = (...content: Paragraph["content"]): Paragraph => ({
  nodeType: BLOCKS.PARAGRAPH, data: {}, content,
});
const item = (...content: ListItem["content"]): ListItem => ({
  nodeType: BLOCKS.LIST_ITEM, data: {}, content,
});
const link = (uri: string, ...content: Hyperlink["content"]): Hyperlink => ({
  nodeType: INLINES.HYPERLINK, data: { uri }, content,
});

// Local Contentful document: the preview and tests never change CMS content.
export const richTextFixture: Document = {
  nodeType: BLOCKS.DOCUMENT,
  data: {},
  content: [
    { nodeType: BLOCKS.HEADING_2, data: {}, content: [text("Welcome to your stay")] },
    paragraph(
      text("Regular body. "), text("Bold. ", MARKS.BOLD),
      text("Italic. ", MARKS.ITALIC), text("Bold italic. ", MARKS.BOLD, MARKS.ITALIC),
      text("Italic bold. ", MARKS.ITALIC, MARKS.BOLD),
      text("Underlined emphasis.", MARKS.UNDERLINE, MARKS.BOLD, MARKS.ITALIC),
    ),
    {
      nodeType: BLOCKS.HEADING_3, data: {},
      content: [text("Helpful information with "), text("italic emphasis", MARKS.ITALIC)],
    },
    paragraph(
      text("A link can include "),
      link("https://rmhc-centralohio.org/", text("regular, "), text("bold ", MARKS.BOLD),
        text("and bold italic", MARKS.BOLD, MARKS.ITALIC)),
      text(" text. These links open the RMHC website."),
    ),
    {
      nodeType: BLOCKS.UL_LIST, data: {}, content: [
        item(paragraph(text("Ask the front desk for help."))),
        item(
          paragraph(text("Long list items should wrap beside their marker, including when the device uses larger text.")),
          {
            nodeType: BLOCKS.OL_LIST, data: {}, content: [
              item(paragraph(text("Nested first step."))),
              item(paragraph(text("Nested second step."))),
            ],
          },
        ),
      ],
    },
    {
      nodeType: BLOCKS.OL_LIST, data: {}, content: [
        item(paragraph(text("First step."))),
        item(paragraph(text("Second step, with a second paragraph below.")), paragraph(text("Additional details stay with this item."))),
      ],
    },
    paragraph(text("Line breaks are preserved.\nThis is the next line.\n\nThis follows a blank line.")),
    paragraph(link("https://rmhc-centralohio.org/#family-resources-and-information-for-your-stay",
      text("https://rmhc-centralohio.org/#family-resources-and-information-for-your-stay"))),
  ],
};
