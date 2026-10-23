# Contributing to the RMH rebrand

The integration branch is **`feature/rebrand`**. Start at the [tracker and contributor guide (#99)](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/99); [issues #100–#119](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues?q=is%3Aissue+%5BRebrand%5D) mirror the local `tickets/` board. [Issue #120](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/120) tracks non-blocking design feedback. The [Project](https://github.com/orgs/RMHouseColumbus/projects/2) tracks assignment and progress.

## Set up

Use a Node version satisfying the installed React Native requirement (`>=20.19.4`), npm, and the appropriate iOS Simulator or Android emulator tooling. The initial baseline below used Node 25.2.1/npm 11.6.2; these are observations, not a version pin.

```sh
git fetch origin
git switch -c rebrand/105-illustrated-card origin/feature/rebrand
npm ci
cp .env.example .env
```

Ask the maintainer for the values named in `.env.example` and fill `.env`. The app reads them through `app.config.js`: Contentful supplies page content; the five feed URLs supply calendar data; `STAFF_PASSWORD` supports the existing Staff Use flow. Use maintainer-approved test data. Do not commit credentials or use a service-account JSON file as a substitute. Values exposed in Expo config are available to the client app.

Start with `npm run ios` or `npm run android`. Expo automatically loads `.env`; `.env.local` can override it. Both are git-ignored. Restart Expo after changing these values so `app.config.js` is evaluated again. The legacy `ENVIRONMENT=production` script flag does not select credentials. No `config/production.js` import or source-code commenting is needed. Coordinate with the maintainer before changing shared CMS/calendar data.

For EAS builds, configure the same named variables in the appropriate EAS environment; local ignored files are not a substitute for build-service configuration.

## Test brand foundations without credentials

```sh
npm run brand:preview -- --clear
```

Press `i` for an iOS simulator, `a` for an Android emulator, or scan the QR code with Expo Go on a phone on the same network. If the default port is occupied, append `--port 8082`. No `.env.local`, Contentful account, or calendar feeds are needed for this page.

The script sets `EXPO_PUBLIC_BRAND_PREVIEW=1`. `App.tsx` uses it only in development to select `screens/dev/BrandPreviewScreen.tsx`, before importing production clients. Both entry points use the same font loader and NativeBase theme. Stop Metro and start normally to return to the real app; don't persist this flag in `.env.local`.

Check on both iOS and Android:

- Cold-start the preview. Its summary should show **Fonts 4/4 · Images 19/19**; individual failures are displayed. A font error must not leave the splash stuck. Counts confirm loading, not visual correctness.
- Compare the four explicit Audrey samples with the NativeBase regular, bold, italic, bold-italic, and heading samples. Check accented characters/numbers as appropriate and look for fallback or missing-font warnings.
- Scroll through all logos/illustrations. Check aspect ratio, crisp edges, and transparent backgrounds; reversed logos use a dark surface. Preview illustrations are 112 logical pixels, similar to a card placement.
- Repeat with device dark appearance and enlarged text. The page remains cream with readable text and scrolls without cutting off labels.
- In the configured real app, verify navigation titles and ordinary NativeBase text, plus startup after closing/reopening Expo Go. The preview's title sample does not replace checking navigation itself.

Use `constants/Colors.ts` for semantic colors, `constants/Fonts.tsx` for explicit React Native font faces, and the default NativeBase `Text`/`Heading` theme for automatic weight/style selection. NativeBase weights 100–500 map to Audrey Regular/Italic; 600–950 map to Bold/BoldItalic. `Fonts.Semibold` temporarily aliases Bold; old Raleway registrations remain for screens still naming them. The legacy `backgroundBlue`, `statusBarBlue`, and `buttonBlue` exports now map to cream, red, and red respectively. Later screen tickets migrate hard-coded styles.

Asset provenance and export instructions are in `assets/brand/README.md`. Native splash artwork/launcher appearance require native-build checks in #117/#118, beyond this Expo Go preview.

## Work on one issue

1. Claim an unblocked issue and move its Project item to In Progress. Read its acceptance criteria, dependencies, and relevant files before asking a coding assistant to implement it.
2. Branch from the latest `origin/feature/rebrand` using `rebrand/<issue-number>-<short-name>`.
3. Use the [design asset guide](App%20Design%20Assets/README.md). Preserve existing routes, content bindings, and destinations. Use the working defaults in `tickets/DECISIONS.md`. #120 tracks later feedback and does not block implementation or acceptance.
4. Run the relevant checks below and attach screenshots for changed screens, plus a short account of actions exercised. Distinguish existing failures from new ones.
5. Open a PR **targeting `feature/rebrand`**, link the issue, and request maintainer review. Mention the issue with `Refs #...`; close it after acceptance on the integration branch rather than relying on default-branch auto-close behavior.

When using the Markdown board, keep its status and implementation notes aligned with the GitHub issue. Coordinate changes to shared files such as `navigation/index.tsx`, theme tokens, and the card component. Keep unrelated fixes and dependency upgrades out of styling PRs.

## Checks and known baseline

```sh
npx tsc --noEmit
npx expo export --platform ios --output-dir /tmp/rmhc-rebrand-ios
npx expo export --platform android --output-dir /tmp/rmhc-rebrand-android
```

On 2026-10-22, at `e192d9f` before rebranding, TypeScript reported six existing errors:

- `navigation/index.tsx`: four `getParent()?.openDrawer()` type errors (lines 299, 328, 357, 393).
- `screens/helpful_resources/HelpfulResources.tsx`: unsupported `flex` prop (line 51).
- `screens/hospital_services/HospitalServices.tsx`: dynamic navigation string incompatible with typed routes (line 52).

The preparation run successfully exported both iOS and Android bundles with `CI=1 npx expo export --platform ios --platform android --output-dir /tmp/rmhc-rebrand-baseline`. An interactive simulator/device smoke test was not performed.

Record these separately when comparing a PR's results; do not silently suppress them. The maintainer should resolve or explicitly track them before making typecheck a required passing check. Bundling does not verify runtime content or appearance: inspect normal and enlarged text, narrow screens, navigation, and affected actions on iOS/Android. Native launcher and splash changes require an installed native build.

## Maintainer handoff before assignments

- Share `tickets/DECISIONS.md` with contributors. #100 is complete with working defaults; collect later feedback in #120 and update the log as answers arrive. Do not hold implementation or acceptance for these open questions.
- Confirm contributors have repository access and local configuration/test data. Have one contributor complete a clean checkout and app launch.
- Add the rebrand issues to the Project, assign owners, and follow dependency order. Start with assets and shared theme/cards using the recorded defaults.
- Configure a review rule for `feature/rebrand` if desired, with the maintainer reviewing PRs; select required checks only after their baseline passes. Keep the repository default branch unchanged during the rebrand.
- Complete cross-platform acceptance in #119 before merging `feature/rebrand` into `master` or planning a release. This preparation does not publish an app update.
