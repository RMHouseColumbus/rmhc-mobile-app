import React from 'react';
import { act, create } from 'react-test-renderer';
import { TextInput } from 'react-native';
import { Button, Input, NativeBaseProvider } from 'native-base';
import StaffUse from '../screens/staff_use/StaffUse';
import StaffCalendar from '../screens/staff_use/staff_calendar/StaffCalendar';
import { read, save } from '../storage/Storage';
import { brandTheme } from '../constants/Theme';

jest.mock('../environment', () => ({ environment: { STAFF_PASSWORD: 'test-only-password' } }));
jest.mock('../storage/Storage', () => ({ read: jest.fn(), save: jest.fn() }));
jest.mock('../screens/staff_use/staff_calendar/StaffCalendar', () => jest.fn(() => null));
jest.mock('@react-navigation/bottom-tabs', () => ({ useBottomTabBarHeight: () => 60 }));

let tree;
async function render(savedPassword) {
  read.mockResolvedValue(savedPassword);
  await act(async () => {
    tree = create(
      <NativeBaseProvider theme={brandTheme} initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 390, height: 844 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}>
        <StaffUse />
      </NativeBaseProvider>
    );
  });
}

afterEach(async () => {
  if (tree) await act(async () => tree.unmount());
  tree = undefined;
  jest.clearAllMocks();
});

test('masks the password and disables unlocking until text is entered', async () => {
  await render();
  expect(tree.root.findByType(TextInput).props.secureTextEntry).toBe(true);
  expect(tree.root.findByType(Button).props.isDisabled).toBe(true);
  await act(async () => tree.root.findByType(Input).props.onChangeText('wrong-password'));
  expect(tree.root.findByType(Button).props.isDisabled).toBe(false);
  await act(async () => tree.root.findByType(Button).props.onPress());
  expect(JSON.stringify(tree.toJSON())).toContain('Incorrect Password.');
  expect(StaffCalendar).not.toHaveBeenCalled();
  expect(save).not.toHaveBeenCalled();
});

test('opens the calendar and remembers a correct password', async () => {
  await render();
  await act(async () => tree.root.findByType(Input).props.onChangeText('test-only-password'));
  await act(async () => tree.root.findByType(Button).props.onPress());
  expect(StaffCalendar).toHaveBeenCalled();
  expect(save).toHaveBeenCalledWith('staff_password', 'test-only-password');
  expect(tree.root.findAllByType(Input)).toHaveLength(0);
});

test('opens the calendar for a remembered matching password', async () => {
  await render('test-only-password');
  expect(read).toHaveBeenCalledWith('staff_password');
  expect(StaffCalendar).toHaveBeenCalled();
  expect(tree.root.findAllByType(Input)).toHaveLength(0);
  expect(save).not.toHaveBeenCalled();
});

test('keeps the form locked for a remembered outdated password', async () => {
  await render('outdated-test-password');
  expect(StaffCalendar).not.toHaveBeenCalled();
  expect(tree.root.findByType(Button).props.isDisabled).toBe(true);
  expect(save).not.toHaveBeenCalled();
});
