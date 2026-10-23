# Contributing to the RMH rebrand

The integration branch is **`feature/rebrand`**. Start at the [tracker and contributor guide (#99)](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/99); [issues #100–#119](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues?q=is%3Aissue+%5BRebrand%5D) mirror the local `tickets/` board. The [Project](https://github.com/orgs/RMHouseColumbus/projects/2) tracks assignment and progress.

## Set up

Use a Node version satisfying the installed React Native requirement (`>=20.19.4`), npm, and the appropriate iOS Simulator or Android emulator tooling. The initial baseline below used Node 25.2.1/npm 11.6.2; these are observations, not a version pin.

```sh
git fetch origin
git switch -c rebrand/100-design-decisions origin/feature/rebrand
npm ci
cp .env.example .env.local
```

Ask the maintainer for the values named in `.env.example` and fill `.env.local`. The app reads them through `app.config.js`: Contentful supplies page content; the five feed URLs supply calendar data; `STAFF_PASSWORD` supports the existing Staff Use flow. Use maintainer-approved test data. Do not commit credentials or use a service-account JSON file as a substitute. Values exposed in Expo config are available to the client app.

Start with `npm run ios` or `npm run android`. These scripts set `ENVIRONMENT=production`; that flag alone does not supply credentials. Expo loads `.env.local`. Coordinate with the maintainer before changing shared CMS/calendar data.

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
