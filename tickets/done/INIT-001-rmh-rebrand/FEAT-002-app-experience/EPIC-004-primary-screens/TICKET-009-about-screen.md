# TICKET-009 — Rebrand the About cards including Staff Use

GitHub: [#108](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/108)

## Outcome and context

PDF pages 5–6. Edit `screens/about/About.tsx`; replace legacy `components/AboutCards.tsx` artwork and the reused BeforeYourStay illustration for Staff Use.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-006, TICKET-004.

## Acceptance criteria

- [x] Render all seven entries in the existing order using the shared card and approved artwork/color pairs.
- [x] Show “Visit our Website” with correct spelling; use a distinct Staff Use checklist illustration.
- [x] Treat page 6 as the continuation of the scrollable About list, not a new route. Preserve staff, website, involvement, story, family room, care mobile, and staff-use destinations.

## Verification

Run shared checks. Scroll through all seven cards, compare to pages 5–6, and exercise each destination; verify the final card clears the bottom navigation.

## Proposed commit

`Rebrand About cards`

## Implementation notes

- Inspected PDF pages 5-6. All seven About entries now use the shared illustrated card, matching supplied artwork and lavender/aqua/lime/gold color pairs; gold uses black text per the working design default.
- Corrected display copy to “Visit our Website”; Staff Use has its own checklist artwork and remains the seventh entry in the same scrollable list.
- Preserved entry order, all URLs, and internal destinations. Cream background, consistent gaps, wrapping labels, and bottom-tab clearance match the other migrated card screens.
- Removed the unused YourStaySVGCard helper after About stopped importing it. Old SVG source files remain unimported; no shared assets or navigation modified.
- TypeScript, all 28 existing tests, and iOS/Android release exports pass (`/tmp/rmhc-108-release-export`); diff whitespace check passes.
- Maintainer accepted implementation and requested merge/closure. Individual destination actions, final-card clearance, narrow/enlarged-text, and Android checks were not separately reported; retained in #119.
