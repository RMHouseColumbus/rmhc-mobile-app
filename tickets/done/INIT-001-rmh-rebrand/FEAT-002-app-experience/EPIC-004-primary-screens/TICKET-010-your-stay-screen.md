# TICKET-010 — Rebrand the Your Stay menu

GitHub: [#109](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/109)

## Outcome and context

PDF page 7. Edit `screens/your_stay/YourStay.tsx`, migrating its duplicate card implementation to the shared card. The three entries open information pages, including Before Your Stay even though its new artwork is a video icon.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-006, TICKET-004.

## Acceptance criteria

- [x] Render Before Your Stay, During Your Stay, and After Your Stay with lavender, aqua, and lime variants and the matched illustrations.
- [x] Remove Henry and the old space-evenly layout; match the top-aligned card list and cream background.
- [x] Keep all three existing detail routes and accessible whole-card interactions. Remove duplicate card helpers only once About no longer imports them.

## Verification

Run shared checks. Compare to page 7, open and return from every detail page, and verify narrow-screen/large-text behavior. Check About still builds if its migration lands later.

## Proposed commit

`Rebrand Your Stay cards`

## Implementation notes

- Inspected PDF page 7. Your Stay now uses the shared IllustratedCard with video/lavender, hands-heart/aqua, and house/lime artwork and color pairs.
- Cream background, top-aligned list, consistent gaps, and bottom-tab clearance replace the space-evenly layout and Henry illustration. Shared cards retain wrapping, enlarged-text layout, and accessible whole-card actions.
- All three typed detail destinations remain unchanged; Before Your Stay still opens its information page. Kept YourStaySVGCard and legacy SVG artwork because About still imports them; removed only the unused YourStayCardText helper.
- Header changes remain scoped to #103. TypeScript, all 28 existing tests, and iOS/Android release exports pass (`/tmp/rmhc-109-release-export`), including About's retained imports. Diff whitespace check passes.
- Maintainer accepted the visual result. Individual tap/back, narrow/enlarged-text, and Android checks were not separately reported; retained in #119.
