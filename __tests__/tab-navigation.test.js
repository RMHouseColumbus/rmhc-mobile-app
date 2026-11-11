import React from 'react';
import { act, create } from 'react-test-renderer';
import { Text } from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tabs = createBottomTabNavigator();
const Screen = () => <Text>Page</Text>;

// Exercise the library's tab press handler, where the deprecated navigate call lived.
test('tab presses avoid deprecated navigation and back returns to the previous section', async () => {
  const navigation = createNavigationContainerRef();
  const warn = jest.spyOn(console, 'warn');
  let tree;
  try {
    await act(async () => {
      tree = create(
        <SafeAreaProvider initialMetrics={{
          frame: { x: 0, y: 0, width: 390, height: 844 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}>
          <NavigationContainer ref={navigation}>
            <Tabs.Navigator backBehavior="history" screenOptions={{ headerShown: false }}>
              <Tabs.Screen name="Home" component={Screen} />
              <Tabs.Screen name="Meals" component={Screen} options={{ tabBarButtonTestID: 'meals-tab' }} />
              <Tabs.Screen name="Staff Use" component={Screen} options={{ tabBarButtonTestID: 'staff-tab' }} />
            </Tabs.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      );
    });
    const pressTab = async (testID) => {
      await act(async () => {
        tree.root.findAll(node => node.props.testID === testID && typeof node.props.onPress === 'function')[0].props.onPress();
      });
    };
    await pressTab('meals-tab');
    expect(navigation.getCurrentRoute().name).toBe('Meals');
    await pressTab('staff-tab');
    expect(navigation.getCurrentRoute().name).toBe('Staff Use');
    await act(async () => navigation.goBack());
    expect(navigation.getCurrentRoute().name).toBe('Meals');
    expect(warn).not.toHaveBeenCalledWith(expect.stringContaining("Passing an object as the argument to 'navigate'"));
  } finally {
    if (tree) await act(async () => tree.unmount());
    warn.mockRestore();
  }
});
