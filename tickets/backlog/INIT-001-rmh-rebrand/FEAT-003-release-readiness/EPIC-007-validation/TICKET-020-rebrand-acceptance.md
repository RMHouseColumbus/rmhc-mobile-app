# TICKET-020 — Record the rebrand acceptance results

GitHub: [#119](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/119)

## Outcome and context

Create `tickets/REBRAND-QA.md` with a concise screen/action matrix and links to captured evidence. This ticket produces validation evidence; separately track any substantial fixes it discovers.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-001, TICKET-002, TICKET-003, TICKET-004, TICKET-005, TICKET-006, TICKET-007, TICKET-008, TICKET-009, TICKET-010, TICKET-011, TICKET-012, TICKET-013, TICKET-014, TICKET-015, TICKET-016, TICKET-017, TICKET-018, TICKET-019.

## Acceptance criteria

- [ ] Compare Home, Neighborhood, About (including Staff Use), and Your Stay against PDF pages 3–7; record intentional deviations from TICKET-001.
- [ ] Visit every drawer/tab/detail route on iOS and Android. Check small-phone layout, enlarged text, safe areas, text contrast, accessible labels, dark-mode behavior, and the long Home header.
- [ ] Verify video, maps, contact links, PDF, calendar, and staff-unlock behavior; distinguish verified results, environment blockers, and pre-existing issues.
- [ ] Audit active runtime sources for Raleway, old palette literals, and obsolete logo/Henry imports. Record legitimate retained content imagery; open focused cleanup tickets for unintended remnants.
- [ ] Record typecheck, native bundle, installed icon, and native cold-launch results. All required checks must pass or have an explicit project-owner disposition before completion; no publishing in this ticket.

## Verification

Run shared checks plus the full manual matrix. Use `rg -n "Raleway|#638dc9|#4872ae|#0077B5|LandingHenry|HenryWoof" App.tsx constants hooks components screens navigation contentful` as an audit, not automatic proof of failure. Link defect tickets and evidence.

## Proposed commit

`docs(rebrand): record cross-platform acceptance results`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
