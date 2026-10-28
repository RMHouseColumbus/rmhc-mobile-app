# TICKET-005 — Apply the agreed bottom navigation design

GitHub: [#104](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/104)

## Outcome and context

Edit `BottomTabNavigator` in `navigation/index.tsx` and the relevant components in `navigation/Icons.tsx`. The PDF uses an “Icons” placeholder rather than final tab artwork. Depend on TICKET-002 if the chosen design uses new supplied artwork.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-001, TICKET-003.

## Acceptance criteria

- [x] Implement the recorded tab artwork, background, and active/inactive treatments for Home, Find Us, Facilities, Meals, and Updates.
- [x] Keep hidden routes hidden and preserve all existing destinations and route identifiers.
- [x] Keep safe-area padding, accessible tab names and selected state, and usable touch areas; do not clip icons at enlarged display settings.

## Verification

Run shared checks. Visit all five tabs, open a hidden nested route from the drawer, and return using back navigation on both platforms. Inspect active/inactive states and the bottom safe area.

## Proposed commit

`Rebrand bottom tabs`

## Implementation notes

Implementing alongside #107 on `feature/rebrand-neighborhood` at the maintainer’s direction. Cream surface, brand red/gray icon states, explicit accessible tab names, navigator-sized icons, and vertically centered icon containers. Meals uses a wider box for its wide artwork. Existing safe-area handling, hidden routes, and tab/back behavior are retained. Header styling remains with #103.

TypeScript, 28 tests (5 suites), and iOS/Android exports pass. iOS fingerprint matches TestFlight 1.3.0 builds 1 and 2. Native visual/interaction review remains: all five tabs and selected state, hidden drawer destinations/back, safe areas and enlarged display, VoiceOver/TalkBack. No device interaction checks claimed.


Published [iOS OTA for review](https://expo.dev/accounts/rmhc/projects/RMHCApp/updates/69abb81f-8bc3-4e9f-b834-e79d3c073579).

Maintainer accepted the implementation and authorized merge on 2026-10-27. Remaining device scenarios listed above are tracked in #119; approval does not imply every platform/interaction was tested.
