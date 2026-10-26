import React from 'react';
import { act, create } from 'react-test-renderer';
import { Alert, Linking } from 'react-native';
import HomeScreen from '../screens/home/HomeScreen';
import { DataContext } from '../context/DataContext';
import { useContentfulEntries } from '../hooks/useContentful';

// Keep the real hook, replacing only its client boundary to avoid CMS access.
jest.mock('../context/DataContext', () => ({ DataContext: require('react').createContext(null) }));

const navigation = { navigate: jest.fn() };
const client = { getEntries: jest.fn() };
let tree;
let openURL;

const collection = (...pages) => ({ items: pages.map(fields => ({ fields })) });
const button = role => tree.root.findAll(node => node.props.accessibilityRole === role && typeof node.props.onPress === 'function')[0];
const videoButton = () => button('link');
const stayButton = () => button('button');
const content = () => JSON.stringify(tree.toJSON());

async function render() {
  await act(async () => {
    tree = create(<DataContext.Provider value={{ client }}><HomeScreen navigation={navigation} /></DataContext.Provider>);
  });
}

beforeEach(() => {
  openURL = jest.spyOn(Linking, 'openURL').mockResolvedValue(true);
});
afterEach(async () => {
  if (tree) await act(async () => tree.unmount());
  tree = undefined;
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

test('keeps Home and Your Stay available while loading, then opens the configured welcome video', async () => {
  let resolve;
  client.getEntries.mockReturnValueOnce(new Promise(done => { resolve = done; }));
  await render();
  expect(content()).toContain('Ronald McDonald House Central Ohio');
  expect(content()).toContain('Loading welcome video');
  expect(videoButton().props.accessibilityState).toEqual({ disabled: true, busy: true });
  await act(async () => videoButton().props.onPress());
  expect(openURL).not.toHaveBeenCalled();
  await act(async () => stayButton().props.onPress());
  expect(navigation.navigate).toHaveBeenCalledWith('YourStayHome');

  await act(async () => resolve(collection(
    { pageName: 'other-page', link: 'https://example.com/other' },
    { pageName: 'welcome-video', link: 'https://example.com/welcome' },
  )));
  expect(videoButton().props.disabled).toBe(false);
  await act(async () => videoButton().props.onPress());
  expect(openURL).toHaveBeenCalledWith('https://example.com/welcome');
  expect(client.getEntries).toHaveBeenCalledWith({ contentType: 'pageLink' });
});

test.each([
  collection(), collection({ pageName: 'welcome-video', link: '' }),
  collection({ pageName: 'welcome-video', link: '   ' }),
])('keeps branding and the stay action when the video entry is missing or blank', async (data) => {
  client.getEntries.mockResolvedValueOnce(data);
  await render();
  expect(content()).toContain('Ronald McDonald House Central Ohio');
  expect(content()).toContain('Welcome video unavailable.');
  expect(videoButton().props.disabled).toBe(true);
  await act(async () => videoButton().props.onPress());
  expect(openURL).not.toHaveBeenCalled();
  await act(async () => stayButton().props.onPress());
  expect(navigation.navigate).toHaveBeenCalledWith('YourStayHome');
});

test('a failed Contentful request finishes loading and leaves Home usable', async () => {
  client.getEntries.mockRejectedValueOnce(new Error('Offline'));
  await render();
  expect(content()).toContain('Welcome video unavailable.');
  expect(videoButton().props.accessibilityState).toEqual({ disabled: true, busy: false });
  await act(async () => stayButton().props.onPress());
  expect(navigation.navigate).toHaveBeenCalledWith('YourStayHome');
  expect(openURL).not.toHaveBeenCalled();
});

test('shows a useful message if the configured video cannot open', async () => {
  const alert = jest.spyOn(Alert, 'alert').mockImplementation(() => {});
  client.getEntries.mockResolvedValueOnce(collection({ pageName: 'welcome-video', link: 'https://example.com/welcome' }));
  openURL.mockRejectedValueOnce(new Error('Cannot open'));
  await render();
  await act(async () => videoButton().props.onPress());
  expect(alert).toHaveBeenCalledWith('Video unavailable', 'Please try again later.');
});

test('the shared entries hook ignores an old request after the collection changes', async () => {
  let resolveOld;
  let result;
  const oldEntries = { contentType: 'old' };
  const newEntries = { contentType: 'new' };
  function Probe({ entries }) {
    result = useContentfulEntries(entries);
    return null;
  }
  client.getEntries.mockReturnValueOnce(new Promise(done => { resolveOld = done; }))
    .mockResolvedValueOnce(collection({ title: 'Current entry' }));
  await act(async () => {
    tree = create(<DataContext.Provider value={{ client }}><Probe entries={oldEntries} /></DataContext.Provider>);
  });
  await act(async () => {
    tree.update(<DataContext.Provider value={{ client }}><Probe entries={newEntries} /></DataContext.Provider>);
  });
  await act(async () => resolveOld(collection({ title: 'Outdated entry' })));
  expect(result).toMatchObject({ data: [{ title: 'Current entry' }], loading: false, error: undefined });
});
