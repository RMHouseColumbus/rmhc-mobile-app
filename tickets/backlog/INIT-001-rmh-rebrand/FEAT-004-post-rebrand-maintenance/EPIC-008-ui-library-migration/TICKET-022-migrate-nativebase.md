# TICKET-022 — Migrate NativeBase to gluestack after the rebrand

GitHub: [#123](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/123)

**Initiative:** INIT-001 RMH rebrand · **Feature:** FEAT-004 Post-rebrand maintenance · **Epic:** EPIC-008 UI library migration

## Timing
Deferred until rebrand implementation and acceptance (#119) are complete. Does not block the rebrand or Expo 58 PR #122.

## Context
The app uses NativeBase 3.4.28 (deprecated) for layouts, text, buttons, navigation controls, and the staff password form. Expo 58 currently needs compatibility fixes in `patches/native-base+3.4.28.patch`. Migrate to gluestack-ui while preserving the finished rebrand.

## Scope
- Set up gluestack styling/providers and map existing brand colors and Audrey font weights/italics.
- Replace NativeBase usage in shared components, screens, navigation controls, and Contentful rendering.
- Remove NativeBase, its patch, and obsolete compatibility tests once migration is complete. Keep the unrelated drawer-layout patch unless independently resolved.
- Preserve routes, CMS/feed behavior, external links, and staff unlock behavior.

Start with `App.tsx`, `constants/Theme.ts`, `components/`, `screens/`, `navigation/index.tsx`, and `contentful/ContentfulRender.tsx`. Use `rg 'native-base' --glob '!package-lock.json'` to inventory usage. Split this tracking issue into small implementation tickets before starting.

## Acceptance / verification
- [ ] No NativeBase dependency, imports, or patch remain.
- [ ] Brand typography, layout, and interaction states match the accepted rebrand.
- [ ] Staff form validation, drawer/tabs, links, scrolling, and enlarged text work on iOS and Android.
- [ ] Tests and both platform exports pass; TypeScript introduces no new errors against the recorded baseline.
- [ ] Record simulator/device checks and any limitations.

Tracker: #99 · [Rebrand project](https://github.com/orgs/RMHouseColumbus/projects/2)
Local tracking: TICKET-022.

## Dependencies

TICKET-020 / #119 acceptance and Expo 58 PR #122 integration. This is a deferred tracking item; split into commit-sized implementation tickets before starting.

## Proposed commit

`Migrate UI to gluestack` (use focused subjects for the implementation tickets).

