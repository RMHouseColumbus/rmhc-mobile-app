# TICKET-021 — Revisit provisional design choices as feedback arrives

GitHub: [#120](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/120)

**Initiative:** INIT-001 RMH rebrand · **Feature:** FEAT-001 Brand foundations · **Epic:** EPIC-001 Design handoff

**Tracker:** #99 · **Project:** https://github.com/orgs/RMHouseColumbus/projects/2

## Outcome and context

Revisit provisional design choices as the maintainer receives feedback. The maintainer explicitly directed contributors to use best judgment and continue: **this ticket does not block implementation or rebrand acceptance (#119).** Working defaults are recorded in `tickets/DECISIONS.md` on `feature/rebrand`; they are not claims of final designer approval.

| Topic | Reason it was raised | Working default |
| --- | --- | --- |
| Palette discrepancies | PDF brand sheet and editable mockups differ, particularly yellow/gold. | Use the brand sheet's printed HEX values consistently. |
| Orange text on yellow | Present in Neighborhood/About mockups; readability concern identified during review. | Use black text on yellow/gold cards; preserve illustrated artwork. |
| Navigation icons/states | Mockups contain an “Icons” placeholder. | Keep the five destinations and existing icons; red selected, dark gray unselected, cream tab surface. |
| Typography | Multiple Audrey faces supplied; packaged layout uses Audrey Text Regular/Bold. | Text Regular for body, Text Bold for headings/navigation/cards; supplied italic faces for emphasis. |
| Unmocked screens | Drawer and most detail screens are not designed in the package. | Extend red headers, cream backgrounds, Audrey type and shared controls. |
| Splash | No splash mockup supplied. | Horizontal Central Ohio logo centered on cream, with safe margins. |
| Dark appearance | Existing app declares automatic appearance; supplied design is light only. | Use the supplied light appearance consistently for this release. |
| Launcher display name | Optional implementation question; no rename requested by the designer. | Keep “RMHC App”; revisit only if a rename is requested. |

Reference: `App Design Assets/RMH App Design Package/RMH App Design.pdf` (pages 1–7). Preserve application identifiers, routes, behavior, and existing destinations. Correct the “Vist” typo to “Visit.”

## Dependencies

None. Review answers as they arrive; other tickets do not depend on this follow-up.

## Acceptance criteria

- [ ] Record each received answer, its source/date, and whether it confirms or changes the working default in `tickets/DECISIONS.md`.
- [ ] For any changed default, link a focused implementation ticket identifying affected components/screens and verification; do not reopen unrelated completed work.
- [ ] Close this follow-up when the maintainer has resolved the remaining items or explicitly elects to retain their defaults. No answer yet means keep the default and continue.

## Verification

Cross-check the decision log against maintainer feedback and linked change tickets. Verify that the tracker and contributor guide still describe this as non-blocking. UI changes are verified in their own implementation tickets.

## Proposed commit

`docs(rebrand): reconcile design feedback with working defaults`

## Implementation notes

Awaiting future feedback; no designer decisions are implied by the defaults.

