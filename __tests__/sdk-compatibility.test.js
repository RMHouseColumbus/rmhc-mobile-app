import React from 'react';
import { act, create } from 'react-test-renderer';
import { StyleSheet, View } from 'react-native';
import { AspectRatio, NativeBaseProvider, Text } from 'native-base';
import { brandTheme } from '../constants/Theme';

// Exercise NativeBase against the installed React/RN versions, including the
// absolute-fill compatibility patch. Native device testing is still required.
test('renders branded NativeBase content and aspect-ratio artwork', async () => {
  let tree;
  const metrics = {
    frame: { x: 0, y: 0, width: 390, height: 844 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };
  await act(async () => {
    tree = create(
      <NativeBaseProvider theme={brandTheme} initialWindowMetrics={metrics}>
        <Text>Welcome to Ronald McDonald House</Text>
        <AspectRatio ratio={2}>
          <View testID="artwork" />
        </AspectRatio>
      </NativeBaseProvider>
    );
  });
  expect(JSON.stringify(tree.toJSON())).toContain('Welcome to Ronald McDonald House');
  const artwork = tree.root.findByProps({ testID: 'artwork' });
  expect(StyleSheet.flatten(artwork.props.style)).toMatchObject({
    position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
  });
  await act(async () => tree.unmount());
});
