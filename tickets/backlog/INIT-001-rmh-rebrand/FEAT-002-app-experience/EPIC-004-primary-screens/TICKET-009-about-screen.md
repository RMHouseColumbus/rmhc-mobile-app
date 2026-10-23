# TICKET-009 — Rebrand the About cards including Staff Use

GitHub: [#108](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/108)

## Outcome and context

PDF pages 5–6. Edit `screens/about/About.tsx`; replace legacy `components/AboutCards.tsx` artwork and the reused BeforeYourStay illustration for Staff Use.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-006, TICKET-004.

## Acceptance criteria

- [ ] Render all seven entries in the existing order using the shared card and approved artwork/color pairs.
- [ ] Show “Visit our Website” with correct spelling; use a distinct Staff Use checklist illustration.
- [ ] Treat page 6 as the continuation of the scrollable About list, not a new route. Preserve staff, website, involvement, story, family room, care mobile, and staff-use destinations.

## Verification

Run shared checks. Scroll through all seven cards, compare to pages 5–6, and exercise each destination; verify the final card clears the bottom navigation.

## Proposed commit

`feat(about): rebrand all About menu cards`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
