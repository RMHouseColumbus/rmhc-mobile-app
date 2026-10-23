# TICKET-006 — Support branded illustrated cards in the shared component

GitHub: [#105](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/105)

## Outcome and context

Start in `components/SVGCard.tsx` and compare `YourStaySVGCard` / `YourStayCardText` in `screens/your_stay/YourStay.tsx`. Introduce a reusable card contract while keeping existing callers working until their migration tickets.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-002, TICKET-003.

## Acceptance criteria

- [ ] Support explicit background/text color pairs, a text label, and supplied artwork with consistent rounded corners, padding, and image bounds.
- [ ] Allow labels to wrap and cards to grow for large text; avoid clipping or overlap from fixed heights or forced line breaks.
- [ ] Preserve navigation/link behavior and give the whole card an accessible name and appropriate role.
- [ ] Keep defaults or adapters for existing callers; do not restyle unrelated screens in this commit.

## Verification

Run shared checks. Exercise a navigation card and an external-link card; inspect short/long labels at narrow width and enlarged text. Confirm existing unmigrated callers still render.

## Proposed commit

`feat(cards): support branded illustration card variants`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
