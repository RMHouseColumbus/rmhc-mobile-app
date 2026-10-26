# TICKET-007 — Rebuild Home to match the new welcome design

GitHub: [#106](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/106)

## Outcome and context

PDF page 3. Edit `screens/home/HomeScreen.tsx` and its `components/Logo.tsx` / `LandingHenry.tsx` integration. The welcome video comes from the Contentful `pageLink` entry whose `pageName` is `welcome-video`.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-002, TICKET-003, TICKET-004, TICKET-005.

## Acceptance criteria

- [x] Show the cream welcome panel, black welcome text, horizontal logo, “Start Here” video artwork/arrow, and red “Manage your stay with us.” action. Use square corners per maintainer feedback.
- [x] Remove Henry from the rendered Home screen. Preserve the configured video destination and navigation to `YourStayHome`.
- [x] Keep branding and the stay action visible while video content is unavailable; never open an empty video URL. Give the video action a clear unavailable/loading state.
- [x] Keep both actions reachable on small phones and at enlarged text, with appropriate accessible labels. Scrollable implementation accepted by the maintainer; full device coverage remains in #119.

## Verification

Run shared checks. Compare to page 3 on iOS/Android; exercise both actions and repeat with the video entry loading/missing using a local fixture or mock, without editing production content.

## Proposed commit

`homescreen rebrand`

## Implementation notes

Implemented on `rebrand/106-home-screen`, from `feature/rebrand`. Home uses bundled brand artwork, a curved SVG arrow, a cream panel, and a red stay action. The maintainer requested square panel corners, overriding the rounded treatment in PDF page 3. The page scrolls when content exceeds the available height. Henry and the legacy logo are no longer imported.

At the maintainer's request, Home now displays “Ronald McDonald House” without renaming routes; the root drawer menu icon uses the light header color. Remaining header/tab work stays in #103/#104, which are still open. Theme implementation is available; #102 retains separate verification.

Video loading/missing states disable the link while keeping branding and Your Stay available. Failed URL opening shows a message. The shared entries hook now finishes loading on request failure and ignores stale responses. The brand preview's **Home screen · #106** offers ready/loading/unavailable local fixtures; it never changes Contentful.

Verified: all 22 tests pass (seven Home/request tests); iOS/Android release and development-preview exports pass. TypeScript has only the existing unsupported `flex` prop in `HelpfulResources.tsx`. Inspected normal-size iPhone 12 simulator screenshots and corrected the logo's intrinsic-height layout issue. Final corner/menu-icon adjustments are styling only.

The maintainer accepted the final design and requested completion, commit, and merge. Native video/stay taps, small-screen/enlarged-text scrolling, and Android visual checks were not individually confirmed; retain these in cross-platform acceptance #119. Close GitHub #106 after this PR merges into `feature/rebrand`.
