# TICKET-007 — Rebuild Home to match the new welcome design

GitHub: [#106](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/106)

## Outcome and context

PDF page 3. Edit `screens/home/HomeScreen.tsx` and its `components/Logo.tsx` / `LandingHenry.tsx` integration. The welcome video comes from the Contentful `pageLink` entry whose `pageName` is `welcome-video`.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-002, TICKET-003, TICKET-004, TICKET-005.

## Acceptance criteria

- [ ] Show the cream rounded welcome panel, black welcome text, horizontal logo, “Start Here” video artwork/arrow, and red “Manage your stay with us.” action.
- [ ] Remove Henry from the rendered Home screen. Preserve the configured video destination and navigation to `YourStayHome`.
- [ ] Keep branding and the stay action visible while video content is unavailable; never open an empty video URL. Give the video action a clear unavailable/loading state.
- [ ] Keep both actions reachable on small phones and at enlarged text, with appropriate accessible labels.

## Verification

Run shared checks. Compare to page 3 on iOS/Android; exercise both actions and repeat with the video entry loading/missing using a local fixture or mock, without editing production content.

## Proposed commit

`feat(home): apply the new welcome screen design`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
