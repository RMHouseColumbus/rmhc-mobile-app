# TICKET-017 — Rebrand location and floor-plan entry screens

GitHub: [#116](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/116)

## Outcome and context

Update `screens/find_us/FindUs.tsx` and `screens/facilities/Facilities.tsx`; inspect `screens/facilities/FacilitiesPDF.tsx` for integration only. These screens are not covered by new mockups.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-003 is complete. TICKET-004 (#103) owns header styling separately.

## Acceptance criteria

- [x] Apply shared typography, surfaces, and action colors to location/contact content and the View PDF panel.
- [x] Retain current map/photo/floor-plan imagery unless a replacement is explicitly recorded; preserve address, contact, map and PDF destinations.
- [x] Keep text readable over imagery and the View PDF action usable at large text; retain PDF loading/back behavior.

## Verification

Run shared checks. Exercise location/contact dispatch and View PDF/back on both platforms; inspect long text and the existing imagery beneath the new panel styling.

## Proposed commit

`Rebrand Find Us and Facilities`

## Implementation notes

Implemented alongside #104/#107 at the maintainer’s direction. Find Us uses a scrollable warm-cream contact card, larger Audrey text, red phone/email links with 44-point touch targets, and the existing map with a Get directions action. Facilities retains its background image with an opaque cream panel and red View PDF button; flexible sizing and scrolling support enlarged text. Addresses, destinations, hooks, and FacilitiesPDF are unchanged.

Simulator review first; do not publish via OTA before maintainer review. TypeScript, 28 tests (5 suites), and iOS/Android exports pass. Both screens visually inspected in the booted iPhone 12 simulator at standard text size via Expo Go. Screenshots: `/tmp/rmhc-116-find-us-ready.png` and `/tmp/rmhc-116-facilities.png`. Pending contact/map taps, PDF/back interaction, enlarged-text/small-screen review, and Android visual checks. No OTA published for #116.

Maintainer accepted the implementation and authorized merge on 2026-10-27. Remaining device scenarios listed above are tracked in #119; approval does not imply every platform/interaction was tested.
