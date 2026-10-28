# TICKET-019 — Prepare and configure the branded splash screen

GitHub: [#118](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/118)

## Outcome and context

No splash mockup is supplied; use the recorded composition. Edit splash assets and the existing configuration in `app.json`, considering `app.config.js` and `hooks/useCachedResources.ts`.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-001, TICKET-002, TICKET-003.

## Acceptance criteria

- [x] Replace old splash artwork with the agreed logo/background composition, preserving aspect ratio and safe margins on phone sizes.
- [x] Keep the transition to the Audrey-loaded app clean, without clipped logos, old artwork, or an unintended contrasting flash.
- [x] Use the installed Expo version’s supported configuration; keep application identifiers and release settings unchanged.

## Verification

Run shared checks and inspect cold launches in native iOS/Android builds, including a slower font-load case. Record build/device evidence; development/Expo Go preview does not prove native splash appearance.

## Proposed commit

`Update splash screen`

## Implementation notes

Horizontal positive logo centered on cream. Expo splash plugin uses contain with imageWidth 280 on iOS and 200 on Android; removed the legacy full-screen cover configuration. Existing font-load gate and hide-on-layout behavior are retained. Source vectors are rendered reproducibly with scripts/generate-launch-assets.mjs.

Implemented together at the maintainer’s request for one native build. TypeScript, iOS/Android exports, and both native prebuilds pass. Inspected launcher mask previews, opaque iOS icon output, centered aspect-fit iOS splash, cream background, and Android adaptive/splash safe-area bounds. [iOS production build 1.3.0 (3)](https://expo.dev/accounts/rmhc/projects/RMHCApp/builds/95ee21e0-f76a-4a30-9d90-13561b4bd42d) finished successfully; EAS incremented buildNumber 2→3. Maintainer reviewed the app installed from TestFlight on their iPhone and accepted the launcher/splash. Android installed appearance and the slower font-load scenario remain in #119; these were not reported as tested.

Maintainer confirmed the installed TestFlight app looks good and requested closure on 2026-10-27. Implementation merged in #135.
