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

PR #121 is merged into `feature/rebrand`. Returned to the backlog for the remaining checks below while #110 is active; implementation is complete.

Work started on `rebrand/105-illustrated-card` from `feature/rebrand`, at the maintainer's request. #101 is complete; #102 implementation is available, with its remaining verification tracked separately (not marked complete to start this work).

Implemented `components/IllustratedCard.tsx` and a branded option in `SVGCard`. The layout-only component takes label/artwork/colors/onPress; the existing routing adapter preserves navigation and URL handling. Existing props and the separate Your Stay components remain unchanged. Cards have a single accessible name/role, decorative images, unrestricted label wrapping and responsive stacking for narrow containers/enlarged fonts.

The development preview now has a real two-screen navigation stack and a card section with all four colors, short/long labels, a 280-point toggle, a website link, and an original SVG card. Usage and checks are documented in `CONTRIBUTING.md`.

Checks so far: iOS/Android development and release exports pass; TypeScript diagnostics exactly match the six-error baseline. Isolated callback checks verify that both new and legacy variants dispatch the supplied route/URL only on press; these do not verify native rendering or gestures.

Maintainer simulator review: reported “looks fine” after reviewing the preview. This records visual acceptance, not a claim that each interaction or accessibility scenario was exercised.

Pending: confirm navigation/back and website opening, plus the enlarged-text and screen-reader checks not explicitly reported. Keep open until verification is recorded. No screen migration is included.
