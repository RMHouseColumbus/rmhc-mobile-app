# TICKET-019 — Prepare and configure the branded splash screen

GitHub: [#118](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/118)

## Outcome and context

No splash mockup is supplied; use the recorded composition. Edit splash assets and the existing configuration in `app.json`, considering `app.config.js` and `hooks/useCachedResources.ts`.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-001, TICKET-002, TICKET-003.

## Acceptance criteria

- [ ] Replace old splash artwork with the agreed logo/background composition, preserving aspect ratio and safe margins on phone sizes.
- [ ] Keep the transition to the Audrey-loaded app clean, without clipped logos, old artwork, or an unintended contrasting flash.
- [ ] Use the installed Expo version’s supported configuration; keep application identifiers and release settings unchanged.

## Verification

Run shared checks and inspect cold launches in native iOS/Android builds, including a slower font-load case. Record build/device evidence; development/Expo Go preview does not prove native splash appearance.

## Proposed commit

`feat(branding): update native splash artwork`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
