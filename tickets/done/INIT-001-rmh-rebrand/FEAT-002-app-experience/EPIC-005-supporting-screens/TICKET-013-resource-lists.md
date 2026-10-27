# TICKET-013 — Rebrand updates and resource lists

GitHub: [#112](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/112)

## Outcome and context

Update `screens/updates/Updates.tsx`, `screens/helpful_resources/HelpfulResources.tsx`, and `screens/hospital_services/HospitalServices.tsx`. Apply the documented extension of the brand to these unmocked list screens.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-003, TICKET-011.

## Acceptance criteria

- [x] Use shared fonts, surfaces, spacing, and link colors; remove direct Raleway references in these files.
- [x] Preserve content order, CMS bindings, and link/internal-navigation actions.
- [x] Allow long titles and descriptions to wrap; leave the final item reachable above navigation.

## Verification

Run shared checks. Open all three screens with representative content, exercise their actions, and inspect enlarged text and empty data without modifying production content.

## Proposed commit

`Rebrand resource lists`

## Implementation notes

- Updates and Helpful Resources now use Audrey, shared cream cards, semantic text/link colors, and larger body text. Family Rooms retains its distinct non-clickable aqua information panel, with matching readable typography.
- All three lists use scroll-content padding and bottom-tab clearance. CMS queries, ordering (including Family Rooms information-first grouping), loading/empty behavior, and destinations are preserved.
- Helpful Resources keeps the whole card clickable with one link action; removed its unused required `onPress` type and unsupported `flex` prop, resolving the last baseline TypeScript error.
- TypeScript, all 22 existing tests, and iOS/Android release exports pass (`/tmp/rmhc-112-release-export`). Diff whitespace check passes. Exports verify bundling, not native appearance.
- Maintainer accepted the iOS appearance. Android, enlarged-text/empty-data scenarios, and individual link/navigation checks were not separately reported; retain these in #119. No production CMS content changed.
