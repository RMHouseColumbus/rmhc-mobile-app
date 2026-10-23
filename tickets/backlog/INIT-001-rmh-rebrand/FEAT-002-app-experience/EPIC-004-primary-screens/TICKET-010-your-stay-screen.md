# TICKET-010 — Rebrand the Your Stay menu

GitHub: [#109](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/109)

## Outcome and context

PDF page 7. Edit `screens/your_stay/YourStay.tsx`, migrating its duplicate card implementation to the shared card. The three entries open information pages, including Before Your Stay even though its new artwork is a video icon.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-006, TICKET-004.

## Acceptance criteria

- [ ] Render Before Your Stay, During Your Stay, and After Your Stay with lavender, aqua, and lime variants and the matched illustrations.
- [ ] Remove Henry and the old space-evenly layout; match the top-aligned card list and cream background.
- [ ] Keep all three existing detail routes and accessible whole-card interactions. Remove duplicate card helpers only once About no longer imports them.

## Verification

Run shared checks. Compare to page 7, open and return from every detail page, and verify narrow-screen/large-text behavior. Check About still builds if its migration lands later.

## Proposed commit

`feat(stay): apply the new Your Stay menu design`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
