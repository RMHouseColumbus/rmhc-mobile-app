# TICKET-014 — Rebrand stay information and About detail pages

GitHub: [#113](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/113)

## Outcome and context

Update `screens/your_stay/components/QACard.tsx`, the Before/During/AfterYourStay screens, and `screens/about/{stay_involved/StayInvolved,family_room/FamilyRoom,care_mobile/CareMobile}.tsx`. These screens share CMS-based reading layouts.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-003, TICKET-011.

## Acceptance criteria

- [ ] Apply consistent cream/content surfaces, Audrey question headings, and shared rich-text styling.
- [ ] Preserve question ordering, CMS entry identifiers, text, links, and existing interactions.
- [ ] Handle long answers and enlarged text without clipping; remove remaining direct Raleway styling within this scope.

## Verification

Run shared checks. Visit the three stay details and three About details; inspect a long Q&A and a rich-text page, exercise links, and confirm scrolling reaches the last content.

## Proposed commit

`feat(details): rebrand stay and About information pages`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
