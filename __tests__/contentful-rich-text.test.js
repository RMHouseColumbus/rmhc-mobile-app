import React from 'react';
import { act, create } from 'react-test-renderer';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import * as Linking from 'expo-linking';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { createRichTextRenderOptions } from '../contentful/ContentfulRender';
import { brandTheme } from '../constants/Theme';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import { richTextFixture } from '../screens/dev/richTextFixture';

jest.mock('expo-linking', () => ({ canOpenURL: jest.fn(), openURL: jest.fn() }));

let tree;
async function render(document = richTextFixture) {
  await act(async () => {
    tree = create(
      <NativeBaseProvider theme={brandTheme} initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 390, height: 844 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}>
        {documentToReactComponents(document, createRichTextRenderOptions())}
      </NativeBaseProvider>
    );
  });
}

// Inspect inherited native text styles, including the font that wins at each leaf.
function textRuns(node, inherited = {}) {
  if (typeof node === 'string') return [{ value: node, style: inherited }];
  if (!node) return [];
  if (Array.isArray(node)) return node.flatMap(child => textRuns(child, inherited));
  // Unset nested text properties inherit their parent's native style.
  const ownStyle = Object.fromEntries(Object.entries(StyleSheet.flatten(node.props.style) ?? {})
    .filter(([, value]) => value !== undefined));
  const style = { ...inherited, ...ownStyle };
  return textRuns(node.children, style);
}

afterEach(async () => {
  if (tree) await act(async () => tree.unmount());
  tree = undefined;
  jest.resetAllMocks();
});

test('selects real font faces for combined marks in either order and inside headings and links', async () => {
  await render();
  const runs = textRuns(tree.toJSON());
  const cases = [
    ['Regular body. ', Fonts.Regular], ['Bold. ', Fonts.Bold], ['Italic. ', Fonts.Italic],
    ['Bold italic. ', Fonts.BoldItalic], ['Italic bold. ', Fonts.BoldItalic],
    ['Underlined emphasis.', Fonts.BoldItalic], ['italic emphasis', Fonts.BoldItalic],
    ['regular, ', Fonts.Regular], ['bold ', Fonts.Bold], ['and bold italic', Fonts.BoldItalic],
  ];
  for (const [value, fontFamily] of cases) {
    expect(runs.find(run => run.value === value)?.style.fontFamily).toBe(fontFamily);
  }
  expect(runs.find(run => run.value === 'Underlined emphasis.').style.textDecorationLine).toBe('underline');
  for (const value of ['regular, ', 'bold ', 'and bold italic']) {
    expect(runs.find(run => run.value === value).style).toMatchObject({
      color: Colors.action, textDecorationLine: 'underline',
    });
  }
  expect(runs.find(run => run.value.startsWith('Line breaks')).value)
    .toBe('Line breaks are preserved.\nThis is the next line.\n\nThis follows a blank line.');
});

test('renders headings and nested numbered/bulleted lists with native layout outside text', async () => {
  const headings = [BLOCKS.HEADING_1, BLOCKS.HEADING_2, BLOCKS.HEADING_3,
    BLOCKS.HEADING_4, BLOCKS.HEADING_5, BLOCKS.HEADING_6];
  await render({ ...richTextFixture, content: [
    ...headings.map((nodeType, index) => ({
      nodeType, data: {}, content: [{ nodeType: 'text', value: `Heading ${index + 1}`, marks: [], data: {} }],
    })),
    ...richTextFixture.content,
  ] });
  const json = tree.toJSON();
  const runs = textRuns(json);
  expect(runs.filter(run => run.value === '•')).toHaveLength(2);
  expect(runs.filter(run => run.value === '1.')).toHaveLength(2);
  expect(runs.filter(run => run.value === '2.')).toHaveLength(2);
  const headingSizes = headings.map((_, index) => runs.find(run => run.value === `Heading ${index + 1}`).style.fontSize);
  expect(headingSizes.every((size, index) => index === 0 || size < headingSizes[index - 1])).toBe(true);
  function checkLayout(node, inText = false) {
    if (!node || typeof node === 'string') return;
    if (Array.isArray(node)) return node.forEach(child => checkLayout(child, inText));
    expect(node.type).not.toMatch(/^(h[1-6]|p|ul|ol|li|br)$/);
    if (inText) expect(node.type).not.toBe('View');
    checkLayout(node.children, inText || node.type === 'Text');
  }
  checkLayout(json);
});

test.each([
  'https://rmhc-centralohio.org/', 'tel:6142273700', 'mailto:info@example.com',
])('opens supported links without changing the destination: %s', async (uri) => {
  Linking.canOpenURL.mockResolvedValue(true);
  Linking.openURL.mockResolvedValue(true);
  const link = createRichTextRenderOptions().renderNode.hyperlink({ data: { uri } }, 'Contact');
  expect(link.props.accessibilityRole).toBe('link');
  await link.props.onPress();
  expect(Linking.canOpenURL).toHaveBeenCalledWith(uri);
  expect(Linking.openURL).toHaveBeenCalledWith(uri);
});

test('does not open unsupported links and handles lookup failures', async () => {
  const log = jest.spyOn(console, 'log').mockImplementation(() => {});
  try {
    const link = createRichTextRenderOptions().renderNode.hyperlink({ data: { uri: 'unknown:resource' } }, 'Link');
    Linking.canOpenURL.mockResolvedValueOnce(false).mockRejectedValueOnce(new Error('Unavailable'));
    await expect(link.props.onPress()).resolves.toBeUndefined();
    await expect(link.props.onPress()).resolves.toBeUndefined();
    expect(Linking.openURL).not.toHaveBeenCalled();
  } finally {
    log.mockRestore();
  }
});
