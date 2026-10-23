# TICKET-012 — Rebrand calendar cards and feed screens

GitHub: [#111](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/111)

## Outcome and context

Update `components/CalendarItemCard.tsx`, `screens/meals/Meals.tsx`, `screens/activities/Activities.tsx`, `screens/hospital_services/BHP.tsx`, `screens/hospital_services/Riverside.tsx`, and `screens/staff_use/staff_calendar/StaffCalendar.tsx`. These share feed/card styling; there are no dedicated new mockups.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-003.

## Acceptance criteria

- [ ] Apply the agreed cream surface, card treatment, and Audrey typography across all five feed consumers.
- [ ] Preserve feed selection, dates/times, ordering, and existing content; do not alter feed/cache logic.
- [ ] Keep long event descriptions readable and final cards clear of tabs; preserve existing empty/loading behavior.

## Verification

Run shared checks. Inspect each feed consumer with representative events and an empty feed, including long titles/descriptions; verify displayed dates/times match before the styling change.

## Proposed commit

`feat(calendar): rebrand event cards and feed screens`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
