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

Home (#106) was accepted by the maintainer with square panel corners. Include native video/stay taps, small-screen/enlarged-text scrolling, and Android visual review in the acceptance matrix; these were not individually confirmed during implementation. Automated Home/request tests and iOS/Android exports passed.

Shared cards (#105): record native navigation/back, website opening, enlarged text, and VoiceOver/TalkBack checks. Delivery/transport (#114): record long provider content at enlarged text and external link/contact dispatch. Their implementations are complete; these device scenarios were not individually reported.

Calendar feeds (#111): maintainer accepted the styling. Record all five feeds with long descriptions, narrow/enlarged text, empty/loading states, bottom-card clearance, activity/staff links, and Android appearance; these scenarios were not individually reported. Existing tests and both native exports passed.

Resource lists (#112): maintainer accepted iOS appearance. Record Android, enlarged text, empty data, final-item clearance, resource links, and internal Family Rooms navigation; these scenarios were not individually reported. TypeScript, 22 tests, and both platform exports pass.

Stay/About details (#113): maintainer accepted implementation. Record the six detail screens on iOS/Android with long answers, enlarged text, links, and final-content scrolling; these device scenarios were not individually reported. TypeScript, 22 tests, and both platform exports pass.

Staff unlock (#115): verify native keyboard/enlarged-text layout and focus/error/disabled appearance on iOS and Android, plus unlock and remembered unlock with authorized local credentials. Automated tests with dummy credentials cover empty, invalid, valid, matching-saved, and outdated-saved passwords; native visual review remains pending. TypeScript, 26 tests, and both platform exports pass.

Staff unlock follow-up: compact controls verified in iOS simulator; maintainer confirmed phone focus/keyboard fix after using native TextInput. Retain enlarged-text, Android keyboard, and real-credential unlock/remembered-unlock checks. TypeScript and 28 tests pass.

Your Stay cards (#109): maintainer accepted the visuals. Record all three detail tap/back actions, narrow/enlarged-text layout, and Android appearance; these scenarios were not individually reported. TypeScript, 28 tests, and both platform exports pass.

About cards (#108): maintainer accepted implementation. Record all seven destinations, final Staff Use card clearance, narrow/enlarged-text layout, and Android appearance; these checks were not individually reported. TypeScript, 28 tests, and both platform exports pass.
