# TICKET-016 — Rebrand the Staff Use unlock form

GitHub: [#115](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/115)

## Outcome and context

Edit `screens/staff_use/StaffUse.tsx`. Calendar styling is TICKET-012; this ticket covers only the password form and its visual states.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-003.

## Acceptance criteria

- [x] Apply Audrey, shared surfaces, branded input/focus treatment, and enabled/disabled button colors.
- [x] Keep labels and incorrect-password feedback readable; ensure the keyboard does not hide the unlock action.
- [x] Preserve validation, password masking, stored-unlock behavior, and the calendar destination. Do not change or expose credentials.

## Verification

Run shared checks. With an authorized local test configuration, verify empty, invalid, valid, and remembered-unlock states plus enlarged text/keyboard layout.

## Proposed commit

`Rebrand staff unlock`

## Implementation notes

- Audrey label/input/button/error text, cream surface, red focus/error treatment, and red/gray enabled/disabled controls. Password entry disables autocapitalization and autocorrect.
- Scrollable form with iOS automatic keyboard insets, handled keyboard taps, bottom-tab clearance, and a shared full-width form/button container capped at 400 points. No fixed form height.
- Credential comparison, password masking, saved-password key/behavior, and StaffCalendar destination are unchanged. Tests use only a dummy credential and mocked storage/calendar.
- TypeScript, all 26 tests, and iOS/Android release exports pass (`/tmp/rmhc-115-release-export`). New tests cover empty, invalid, valid, remembered matching, and remembered outdated password states.
- Native keyboard/enlarged-text layout, focus/error appearance, and real-device interaction were not visually tested in this pass; recorded in #119. Maintainer authorized the implementation/merge/closure workflow.
