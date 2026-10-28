# TICKET-004 — Apply the new header and drawer styling

GitHub: [#103](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/103)

## Outcome and context

Edit `navigation/index.tsx`: `blueHeaderStyle`, `nestedHeader`, `getHeaderTitle`, `RootNavigator`, and `AppDrawer`. Header styling currently differs between the root drawer and nested stacks.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-003.

## Acceptance criteria

- [x] Render consistent red headers, light titles/menu/back icons, and Audrey typography; use title case where shown in the mockups.
- [x] Display “Ronald McDonald House” on Home without changing internal route names such as `RMHC Central Ohio`, deep links, or types.
- [x] Apply the agreed drawer treatment to labels, Donate, and social links, retaining their existing destinations.
- [ ] Preserve back navigation and drawer opening on nested screens; fit the long Home title on small phones. (behavior code unchanged; needs device/simulator confirmation — see blocker below)

## Verification

Run shared checks. Open Home, About, Neighborhood, Your Stay, a nested detail, and Facilities PDF; exercise drawer/back navigation and inspect header contrast and title clipping.

## Proposed commit

`feat(navigation): rebrand headers and drawer`

## Implementation notes

PR #126 supplied the Home title and light root-drawer menu icon (already present on `feature/rebrand`). This change completes the remaining scope on `rebrand/103-headers-drawer`, 2026-10-28, touching `navigation/index.tsx` only:

- `nestedHeader` (About/Neighborhood/Hospital/Your Stay stacks) switched from a white background + black text/icons to `Colors.header`/`Colors.onHeader` + `Fonts.Bold`, matching `blueHeaderStyle` — this was the actual root-vs-nested inconsistency the ticket describes.
- `blueHeaderStyle` switched from the legacy `Colors.statusBarBlue`/`Colors.white`/`Fonts.Semibold` aliases to the true semantic tokens `Colors.header`/`Colors.onHeader`/`Fonts.Bold`.
- All nested-stack hamburger icons (`AboutStack`, `NeighborhoodStack`, `HospitalStack`, `YourStayStack`) and `BackButton` (used by Your Stay's sub-pages and `FacilitiesPDF`) switched from `Colors.black` to `Colors.onHeader` for contrast against the new red backgrounds.
- `FacilitiesPDF` (in `BottomTabNavigator`) previously had no explicit `headerStyle`, so it inherited the navigator's default (light) header background — now that its `BackButton` icon is light-colored, left as-is it would have been invisible. Added an explicit red `headerStyle`/cream `headerTitleStyle` there to match, even though it's technically outside the four named locations in this ticket's scope, since leaving it would have been a visible regression.
- `getHeaderTitle`: removed the forced `.toUpperCase()` on the default case so titles display in their existing (already title-cased) route-name form; the explicit `"RMHC Central Ohio"`/`"Home"` → `"Ronald McDonald House"` and `"In Hospital Services"` → `"FAMILY ROOMS"` cases from PR #126 are unchanged.
- `AppDrawer`: added a shared `drawerLabelStyle` (Audrey Regular, `Colors.text`) on every `DrawerItem`, set the scroll view's background to `Colors.background` (cream), and switched the Donate button from `Colors.buttonBlue`/hardcoded `"Raleway-SemiBold"`/`"white"` to `Colors.action`/`Fonts.Bold`/`Colors.onAction`. Left the `navigateTo`/`openLink` drawer-close behavior and social-icon logos (fixed-color official platform brand marks, not brand-colorable) untouched.

Verified on 2026-10-28: `npx tsc --noEmit` reports zero errors (the six baseline errors `CONTRIBUTING.md` documents from 2026-10-22 are no longer present — already fixed by other work merged since). `npx expo export` for `ios`, `android`, and `web` all bundle successfully. `npm test -- --watchAll=false --runInBand` passes (5 suites, 28 tests).

Local environment note: this machine has no iOS/Android simulator or device, so `npm run ios`/`npm run android` device/visual verification (header contrast, Home title clipping on a small phone, drawer/back-nav interaction) could not be performed here, per `CONTRIBUTING.md`'s instruction not to claim a check that wasn't actually run. Needs a contributor with device access to complete that before this moves to `done/`. Separately, local web testing (`npm run web`, not part of this project's documented workflow) required a `config/production.js`/`environment.ts` fallback and an `app.config.js` CommonJS-vs-ESM fix purely to work around this machine's lack of simulator tooling — none of that is committed; see the branch's uncommitted local-only changes.
