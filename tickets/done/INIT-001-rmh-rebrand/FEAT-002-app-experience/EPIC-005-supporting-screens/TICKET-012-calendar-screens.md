# TICKET-012 — Rebrand calendar cards and feed screens

GitHub: [#111](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/111)

## Outcome and context

Update `components/CalendarItemCard.tsx`, `screens/meals/Meals.tsx`, `screens/activities/Activities.tsx`, `screens/hospital_services/BHP.tsx`, `screens/hospital_services/Riverside.tsx`, and `screens/staff_use/staff_calendar/StaffCalendar.tsx`. These share feed/card styling; there are no dedicated new mockups.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-003.

## Acceptance criteria

- [x] Apply the agreed cream surface, card treatment, and Audrey typography across all five feed consumers.
- [x] Preserve feed selection, dates/times, ordering, and existing content; do not alter feed/cache logic.
- [x] Keep long event descriptions readable and final cards clear of tabs; preserve existing empty/loading behavior.

## Verification

Run shared checks. Inspect each feed consumer with representative events and an empty feed, including long titles/descriptions; verify displayed dates/times match before the styling change.

## Proposed commit

`Rebrand calendar cards`

## Implementation notes

- Shared event cards now use Audrey, larger body/date text, and semantic text colors; retain the existing warm cream surface, border, and shadow.
- All five feed screens use cream backgrounds and scroll-content padding with bottom-tab clearance. The staff calendar action uses brand red/cream.
- Feed keys, event ordering/content, date formatting, activity-link fallback, staff URL, and loading/empty branches are unchanged.
- iOS and Android release exports passed (`/tmp/rmhc-111-release-export`); bundling does not verify native appearance.
- Existing Jest suite: 22 tests passed. TypeScript still reports only the pre-existing unsupported `flex` prop in `screens/helpful_resources/HelpfulResources.tsx:52`.
- Maintainer reviewed the app and accepted the result on 2026-10-26. Individual narrow/enlarged-text, empty/loading, link-action, and Android scenarios were not separately reported; retain those checks in #119.
