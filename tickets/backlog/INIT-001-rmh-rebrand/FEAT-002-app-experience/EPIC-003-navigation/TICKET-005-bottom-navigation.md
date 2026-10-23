# TICKET-005 — Apply the agreed bottom navigation design

GitHub: [#104](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/104)

## Outcome and context

Edit `BottomTabNavigator` in `navigation/index.tsx` and the relevant components in `navigation/Icons.tsx`. The PDF uses an “Icons” placeholder rather than final tab artwork. Depend on TICKET-002 if the chosen design uses new supplied artwork.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-001, TICKET-003.

## Acceptance criteria

- [ ] Implement the recorded tab artwork, background, and active/inactive treatments for Home, Find Us, Facilities, Meals, and Updates.
- [ ] Keep hidden routes hidden and preserve all existing destinations and route identifiers.
- [ ] Keep safe-area padding, accessible tab names and selected state, and usable touch areas; do not clip icons at enlarged display settings.

## Verification

Run shared checks. Visit all five tabs, open a hidden nested route from the drawer, and return using back navigation on both platforms. Inspect active/inactive states and the bottom safe area.

## Proposed commit

`feat(navigation): rebrand bottom tabs`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
