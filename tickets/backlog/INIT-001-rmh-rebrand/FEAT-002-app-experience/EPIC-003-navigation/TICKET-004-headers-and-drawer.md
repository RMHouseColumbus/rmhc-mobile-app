# TICKET-004 — Apply the new header and drawer styling

GitHub: [#103](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/103)

## Outcome and context

Edit `navigation/index.tsx`: `blueHeaderStyle`, `nestedHeader`, `getHeaderTitle`, `RootNavigator`, and `AppDrawer`. Header styling currently differs between the root drawer and nested stacks.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-003.

## Acceptance criteria

- [ ] Render consistent red headers, light titles/menu/back icons, and Audrey typography; use title case where shown in the mockups.
- [x] Display “Ronald McDonald House” on Home without changing internal route names such as `RMHC Central Ohio`, deep links, or types.
- [ ] Apply the agreed drawer treatment to labels, Donate, and social links, retaining their existing destinations.
- [ ] Preserve back navigation and drawer opening on nested screens; fit the long Home title on small phones.

## Verification

Run shared checks. Open Home, About, Neighborhood, Your Stay, a nested detail, and Facilities PDF; exercise drawer/back navigation and inspect header contrast and title clipping.

## Proposed commit

`feat(navigation): rebrand headers and drawer`

## Implementation notes

PR #126 supplies the Home title and light root-drawer menu icon. Nested headers and the drawer treatment still need this ticket; retain the existing route IDs and destinations.
