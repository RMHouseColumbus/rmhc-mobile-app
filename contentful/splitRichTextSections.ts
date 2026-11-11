import { BLOCKS, MARKS, type Document } from "@contentful/rich-text-types";

// The CMS uses bold-only paragraphs as section titles as well as real headings.
export function splitRichTextSections(document: Document): Document[] {
  const sections: Document[] = [];
  for (const block of document.content) {
    const content = block.content.filter(node => node.nodeType !== "text" || node.value.trim());
    if (block.nodeType === BLOCKS.PARAGRAPH && content.length === 0) continue;
    const boldTitle = block.nodeType === BLOCKS.PARAGRAPH && content.length > 0 &&
      content.every(node => node.nodeType === "text" && node.marks.some(mark => mark.type === MARKS.BOLD));
    if (!sections.length || block.nodeType.startsWith("heading-") || boldTitle) {
      sections.push({ nodeType: BLOCKS.DOCUMENT, data: {}, content: [] });
    }
    sections[sections.length - 1].content.push(
      boldTitle ? { ...block, nodeType: BLOCKS.HEADING_3 } : block
    );
  }
  return sections;
}
