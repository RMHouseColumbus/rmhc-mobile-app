import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { splitRichTextSections } from '../contentful/splitRichTextSections';

const text = (value, bold = false) => ({ nodeType: 'text', value, marks: bold ? [{ type: MARKS.BOLD }] : [], data: {} });
const paragraph = (...content) => ({ nodeType: BLOCKS.PARAGRAPH, data: {}, content });
const document = (...content) => ({ nodeType: BLOCKS.DOCUMENT, data: {}, content });

test('groups CMS bold titles with all following paragraphs and preserves links', () => {
  const link = { nodeType: INLINES.HYPERLINK, data: { uri: 'https://example.org' }, content: [text('Sign up')] };
  const source = document(
    paragraph(text('Wish List', true)), paragraph(text('Donate items.')),
    paragraph(text('Family Champions', true)), paragraph(text('Share your story.')),
    paragraph(link), paragraph(text('')),
  );
  const before = JSON.stringify(source);
  const sections = splitRichTextSections(source);
  expect(sections.map(section => section.content.length)).toEqual([2, 3]);
  expect(sections[0].content[0].nodeType).toBe(BLOCKS.HEADING_3);
  expect(sections[1].content[2].content[0]).toBe(link);
  expect(JSON.stringify(source)).toBe(before);
});

test('preserves introductory text, mixed emphasis, lists, and real headings', () => {
  const intro = paragraph(text('Welcome'));
  const mixed = paragraph(text('Some ', true), text('regular text'));
  const heading = { nodeType: BLOCKS.HEADING_2, data: {}, content: [text('Volunteer')] };
  const list = { nodeType: BLOCKS.UL_LIST, data: {}, content: [{ nodeType: BLOCKS.LIST_ITEM, data: {}, content: [paragraph(text('Help'))] }] };
  const sections = splitRichTextSections(document(intro, mixed, heading, list));
  expect(sections.map(section => section.content)).toEqual([[intro, mixed], [heading, list]]);
  expect(splitRichTextSections(document(paragraph(text('  '))))).toEqual([]);
});
