# TICKET-003 — Introduce shared brand tokens and load Audrey

GitHub: [#102](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/102)

## Outcome and context

Start in `constants/Colors.ts`, `constants/Fonts.tsx`, `hooks/useCachedResources.ts`, and `App.tsx`. The app uses NativeBase; many screens also specify Raleway directly. Copy selected supplied font files into `assets/fonts/`.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-001.

## Acceptance criteria

- [ ] Define semantic background, header, action, text, and card-pair tokens from the decisions; configure NativeBase default typography.
- [ ] Load the Audrey faces actually used, including regular, bold, italic and bold-italic where required. Keep startup/splash handling working and avoid relying on synthetic font weights.
- [ ] Retain compatible existing exports/font registrations while later tickets migrate callers, so this commit remains buildable. Document the temporary compatibility mapping.
- [ ] Use the chosen light/dark-mode behavior and ensure default text remains readable against the themed background.

## Verification

Run shared checks and cold-start on iOS/Android. Inspect a default NativeBase Text, explicit font styles, and navigation text for missing-font warnings or fallback rendering.

## Proposed commit

`feat(theme): introduce Audrey typography and brand tokens`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
