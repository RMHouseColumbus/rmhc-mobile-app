# TICKET-018 — Prepare and configure the new launcher icon

GitHub: [#117](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/117)

## Outcome and context

PDF page 2 shows the vertical logo on aqua. Edit the relevant image assets and `app.json` icon/adaptiveIcon configuration. Check `app.config.js` for overrides.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-001, TICKET-002.

## Acceptance criteria

- [x] Export platform-appropriate launcher assets from supplied vectors, with deliberate padding and correct opaque/transparent layers; let the platform apply its icon mask.
- [ ] Keep the house, heart, and wordmark legible within Android adaptive masks and the iOS icon shape.
- [x] Preserve bundle/package identifiers, scheme, slug, project IDs and versions. Change the display name only if recorded in TICKET-001.

## Verification

Check dimensions/alpha and Expo asset resolution; inspect square, rounded, and circular mask previews. Verify the installed launcher icon in an iOS and Android native build; Expo Go alone is insufficient.

## Proposed commit

`Update launcher icon`

## Implementation notes

Opaque 1024×1024 iOS icon uses the supplied vertical positive logo on brand aqua. Android uses a transparent 1024×1024 foreground with the same unchanged vector mark, padded inside the 66/108 safe circle. Source vectors are rendered reproducibly with scripts/generate-launch-assets.mjs; no baked corner masks. Display name and application identifiers remain unchanged.

Implemented together at the maintainer’s request for one native build. TypeScript, iOS/Android exports, and both native prebuilds pass. Inspected launcher mask previews, opaque iOS icon output, centered aspect-fit iOS splash, cream background, and Android adaptive/splash safe-area bounds. [iOS production build 1.3.0 (3)](https://expo.dev/accounts/rmhc/projects/RMHCApp/builds/95ee21e0-f76a-4a30-9d90-13561b4bd42d) finished successfully; EAS incremented buildNumber 2→3. Installed launcher/cold-launch/font-transition checks remain pending on both platforms. No OTA or store submission performed for these native changes.

Maintainer approved inclusion in the PR on 2026-10-27. Keep this ticket open until installed icon/cold-launch review is recorded.
