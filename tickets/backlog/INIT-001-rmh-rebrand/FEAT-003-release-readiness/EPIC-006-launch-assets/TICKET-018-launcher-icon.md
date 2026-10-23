# TICKET-018 — Prepare and configure the new launcher icon

GitHub: [#117](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/117)

## Outcome and context

PDF page 2 shows the vertical logo on aqua. Edit the relevant image assets and `app.json` icon/adaptiveIcon configuration. Check `app.config.js` for overrides.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-001, TICKET-002.

## Acceptance criteria

- [ ] Export platform-appropriate launcher assets from supplied vectors, with deliberate padding and correct opaque/transparent layers; let the platform apply its icon mask.
- [ ] Keep the house, heart, and wordmark legible within Android adaptive masks and the iOS icon shape.
- [ ] Preserve bundle/package identifiers, scheme, slug, project IDs and versions. Change the display name only if recorded in TICKET-001.

## Verification

Check dimensions/alpha and Expo asset resolution; inspect square, rounded, and circular mask previews. Verify the installed launcher icon in an iOS and Android native build; Expo Go alone is insufficient.

## Proposed commit

`feat(branding): update native launcher icons`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
