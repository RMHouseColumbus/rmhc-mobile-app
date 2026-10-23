# TICKET-016 — Rebrand the Staff Use unlock form

GitHub: [#115](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/115)

## Outcome and context

Edit `screens/staff_use/StaffUse.tsx`. Calendar styling is TICKET-012; this ticket covers only the password form and its visual states.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-003.

## Acceptance criteria

- [ ] Apply Audrey, shared surfaces, branded input/focus treatment, and enabled/disabled button colors.
- [ ] Keep labels and incorrect-password feedback readable; ensure the keyboard does not hide the unlock action.
- [ ] Preserve validation, password masking, stored-unlock behavior, and the calendar destination. Do not change or expose credentials.

## Verification

Run shared checks. With an authorized local test configuration, verify empty, invalid, valid, and remembered-unlock states plus enlarged text/keyboard layout.

## Proposed commit

`feat(staff): rebrand the unlock form`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
