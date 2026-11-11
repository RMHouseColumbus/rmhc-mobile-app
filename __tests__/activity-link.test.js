import { DEFAULT_ACTIVITY_LINK, getActivityLink } from '../screens/activities/activityLink';

test('reads the activity link from its own plain-text line', () => {
  expect(getActivityLink('Join us for crafts.\n\nActivity link: https://example.com/signup'))
    .toBe('https://example.com/signup');
});

test.each([
  undefined,
  'Join us for crafts.',
  'Activity link:\nhttps://example.com/signup',
  'Activity link: https://',
  'Activity link: https://example.com/broken url',
  'Activity link: javascript:alert(1)',
])('falls back when the line is missing or invalid: %s', (description) => {
  expect(getActivityLink(description)).toBe(DEFAULT_ACTIVITY_LINK);
});
