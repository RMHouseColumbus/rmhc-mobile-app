# TICKET-017 — Rebrand location and floor-plan entry screens

GitHub: [#116](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/116)

## Outcome and context

Update `screens/find_us/FindUs.tsx` and `screens/facilities/Facilities.tsx`; inspect `screens/facilities/FacilitiesPDF.tsx` for integration only. These screens are not covered by new mockups.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-003, TICKET-004.

## Acceptance criteria

- [ ] Apply shared typography, surfaces, and action colors to location/contact content and the View PDF panel.
- [ ] Retain current map/photo/floor-plan imagery unless a replacement is explicitly recorded; preserve address, contact, map and PDF destinations.
- [ ] Keep text readable over imagery and the View PDF action usable at large text; retain PDF loading/back behavior.

## Verification

Run shared checks. Exercise location/contact dispatch and View PDF/back on both platforms; inspect long text and the existing imagery beneath the new panel styling.

## Proposed commit

`feat(facilities): rebrand location and floor-plan entry screens`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
