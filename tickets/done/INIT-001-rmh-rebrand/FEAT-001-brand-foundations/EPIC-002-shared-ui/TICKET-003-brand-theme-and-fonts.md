# TICKET-003 — Introduce shared brand tokens and load Audrey

GitHub: [#102](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/102)

## Outcome and context

Start in `constants/Colors.ts`, `constants/Fonts.tsx`, `hooks/useCachedResources.ts`, and `App.tsx`. The app uses NativeBase; many screens also specify Raleway directly. Copy selected supplied font files into `assets/fonts/`.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-001.

## Acceptance criteria

- [x] Define semantic background, header, action, text, and card-pair tokens from the decisions; configure NativeBase default typography.
- [x] Load the Audrey faces actually used, including regular, bold, italic and bold-italic where required. Keep startup/splash handling working and avoid relying on synthetic font weights.
- [x] Retain compatible existing exports/font registrations while later tickets migrate callers, so this commit remains buildable. Document the temporary compatibility mapping.
- [x] Use the supplied light appearance only; no separate dark theme is required.

## Verification

Run shared checks and cold-start on iOS/Android. Inspect a default NativeBase Text, explicit font styles, and navigation text for missing-font warnings or fallback rendering.

## Proposed commit

`feat(theme): introduce Audrey typography and brand tokens`

## Implementation notes

Closed at the maintainer’s request: light appearance only. Implementation remains on `feature/rebrand`.

Implementation is ready on `feature/rebrand` (2026-10-22). Shared semantic palette/card pairs, four canonical Audrey Text faces, NativeBase weight/style mappings, and compatibility aliases are in `constants/`. The font hook holds the splash until fonts resolve; the root hides it after content layout, including the error path. Light appearance is configured in both Expo and NativeBase.

`npm run brand:preview -- --clear` launches a development-only, credential-free gallery with real font/image load status, NativeBase samples, card pairs and all artwork. `AppContent.tsx` retains the normal providers/navigation and is not evaluated in preview mode. Instructions and compatibility mappings are in `CONTRIBUTING.md`.

Verified:
- iOS Expo Go 54.0.7 launched on the iPhone 12 simulator; runtime reports Fonts 4/4 and Images 19/19. Maintainer screenshot confirms explicit Regular/Bold/Italic/BoldItalic and all four NativeBase styles; maintainer also confirmed images look good.
- All four OTF files match the canonical source bytes. Native release exports pass for iOS and Android, including with the preview flag set: preview text is absent from the release bundles and the production entry remains. Both development bundles resolve successfully.
- TypeScript has exactly the same six baseline diagnostics; no new errors. Existing Expo dependency-version advisories and NativeBase SSRProvider warning remain; no dependency upgrades performed.

Maintainer disposition: close #102; no dark theme is wanted. Remaining Android cold-start/font rendering, enlarged-text, and full-app typography checks belong to #119 and are not claimed as completed here.
