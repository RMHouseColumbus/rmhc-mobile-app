# TICKET-008 — Rebrand the Neighborhood cards

GitHub: [#107](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/107)

## Outcome and context

PDF page 4. Edit `screens/neighborhood/Neighborhood.tsx`; replace artwork from `components/NeighborhoodCards.tsx` with prepared brand assets.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-006, TICKET-004.

## Acceptance criteria

- [ ] Render Food Delivery, Area Restaurants, Retail Shopping, Things to do in Columbus, and Transportation in the documented order and color/illustration pairs.
- [ ] Use the shared branded card and cream screen background; retain existing internal routes, map searches, and Columbus link.
- [ ] Keep all five cards reachable without tab-bar overlap or text/image collisions.

## Verification

Run shared checks; compare against page 4 and exercise all five actions. Inspect a narrow phone and enlarged text.

## Proposed commit

`feat(neighborhood): apply branded cards and illustrations`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
