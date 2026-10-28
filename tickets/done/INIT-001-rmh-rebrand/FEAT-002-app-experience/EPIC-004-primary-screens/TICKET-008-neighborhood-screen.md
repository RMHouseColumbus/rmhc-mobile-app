# TICKET-008 — Rebrand the Neighborhood cards

GitHub: [#107](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/107)

## Outcome and context

PDF page 4. Edit `screens/neighborhood/Neighborhood.tsx`; replace artwork from `components/NeighborhoodCards.tsx` with prepared brand assets.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-006 is complete. TICKET-004 (#103) owns header styling separately; this ticket changes only the card content.

## Acceptance criteria

- [x] Render Food Delivery, Area Restaurants, Retail Shopping, Things to do in Columbus, Tickets, and Transportation in the documented order and color/illustration pairs.
- [x] Use the shared branded card and cream screen background; retain existing internal routes and map searches. Retain both the Columbus website card and the existing Tickets destination.
- [x] Keep all six cards reachable without tab-bar overlap or text/image collisions.

## Verification

Run shared checks; compare against page 4 and exercise all six actions. Inspect a narrow phone and enlarged text.

## Proposed commit

`Rebrand Neighborhood cards`

## Implementation notes

Maintainer direction (2026-10-27): retain both Things to do in Columbus and Tickets, leaving six cards in their original order. Columbus uses gold/black with city artwork; Tickets uses aqua with ticket artwork; Transportation keeps the lavender/ticket artwork shown on PDF page 4. Header work remains in #103.

TypeScript, 28 tests (5 suites), and iOS/Android exports pass. The iOS fingerprint matches TestFlight builds 1.3.0 (1) and (2). Awaiting device review of all six actions, scrolling/tab clearance, and narrow/enlarged-text layout; Android visual review remains pending.


Initial five-card [iOS OTA](https://expo.dev/accounts/rmhc/projects/RMHCApp/updates/5935b337-2edc-4111-8d50-cd976c9451a2).

Six-card follow-up: TypeScript and iOS OTA bundling pass; runtime remains compatible with TestFlight. [Updated iOS OTA](https://expo.dev/accounts/rmhc/projects/RMHCApp/updates/ade70312-b6e4-4f1d-8582-8383f94263a9). Awaiting device review.

Maintainer accepted the implementation and authorized merge on 2026-10-27. Remaining device scenarios listed above are tracked in #119; approval does not imply every platform/interaction was tested.
