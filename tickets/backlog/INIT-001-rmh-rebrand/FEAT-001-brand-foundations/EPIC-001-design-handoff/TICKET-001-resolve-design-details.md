# TICKET-001 — Record the implementation design decisions

GitHub: [#100](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/100)

## Outcome and context

Read PDF pages 1–7 and the InDesign package; page 8 is blank. Create `tickets/DECISIONS.md` as the shared handoff. This is a documentation ticket, not UI implementation.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

None.

## Acceptance criteria

- [ ] Record the chosen digital palette: the brand sheet and mockups differ, especially gold/yellow and some aqua/text colors. Identify which reference wins.
- [ ] Resolve bottom-tab artwork/states, drawer and detail-screen treatment, splash composition, system dark-mode behavior, and whether the launcher display name changes. Existing route IDs and application identifiers stay stable.
- [ ] Record readable card text/background pairings, particularly orange on yellow, and which Audrey face serves headings/body text. Correct “Vist” to “Visit.”
- [ ] Mark decisions as confirmed or proposed, name the decision owner, and list unresolved items explicitly. Do not invent approval; only the affected downstream tickets remain blocked.

## Verification

Cross-check each decision against the PDF and supplied files. Review unresolved choices with the project/design owner; record the answer rather than copying assumptions into code.

## Proposed commit

`docs(rebrand): record design implementation decisions`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
