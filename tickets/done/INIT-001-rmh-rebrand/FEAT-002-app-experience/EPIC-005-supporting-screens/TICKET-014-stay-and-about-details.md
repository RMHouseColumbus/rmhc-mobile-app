# TICKET-014 — Rebrand stay information and About detail pages

GitHub: [#113](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/113)

## Outcome and context

Update `screens/your_stay/components/QACard.tsx`, the Before/During/AfterYourStay screens, and `screens/about/{stay_involved/StayInvolved,family_room/FamilyRoom,care_mobile/CareMobile}.tsx`. These screens share CMS-based reading layouts.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-003, TICKET-011.

## Acceptance criteria

- [x] Apply consistent cream/content surfaces, Audrey question headings, and shared rich-text styling.
- [x] Preserve question ordering, CMS entry identifiers, text, links, and existing interactions.
- [x] Handle long answers and enlarged text without clipping; remove remaining direct Raleway styling within this scope.

## Verification

Run shared checks. Visit the three stay details and three About details; inspect a long Q&A and a rich-text page, exercise links, and confirm scrolling reaches the last content.

## Proposed commit

`Rebrand detail pages`

## Implementation notes

- All six detail screens now use the cream background and scroll-content padding with bottom-tab clearance.
- Shared Q&A cards retain the warm cream surface and use Audrey Bold question headings, 16-point card padding, and the existing shared rich-text renderer for answers. Questions are exposed as accessibility headings.
- CMS entry identifiers, question ordering, rich-text content/links, and missing-data behavior are unchanged. No fixed heights or text truncation added.
- TypeScript, all 22 existing tests, and iOS/Android release exports pass (`/tmp/rmhc-113-release-export`). Diff whitespace check passes.
- Maintainer accepted the implementation and requested merge/closure. Individual device, long-answer, enlarged-text, link, and final-content scrolling checks were not separately reported; retain these in #119. Exports verify bundling, not appearance.
