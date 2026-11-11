# NativeBase to gluestack migration plan

Saved 2026-10-29 from the 2026-10-28 scope assessment.

Replace NativeBase while preserving the accepted RMH rebrand, navigation and content behavior. This is a planning document for later work; no new GitHub issues were created.

Existing tracker: [#123 — Migrate NativeBase to gluestack](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/123). The prerequisite [rebrand acceptance #119](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/119) is closed. Recheck package versions and the repository baseline when implementation starts.

**Size:** medium migration; budget roughly **4–7 focused developer days**, including iOS/Android verification, assuming the initial compatibility check succeeds. This is an estimate, not a commitment; styling-engine integration could add time. The sequence below describes proposed work phases, not newly created issues.

## Current footprint

- **31 application files** import NativeBase, including four offline-preview files; **three test files** also depend on it.
- Main imports: ScrollView (21 files), Text (16), Box (11), Button (7), Pressable (5). The remaining work includes headings, menu/back icons, one spinner, and the staff form wrapper.
- `App.tsx` installs NativeBaseProvider; `constants/Theme.ts` supplies Audrey face selection and the light theme. The provider also supplies safe-area context, which must survive removal.
- `contentful/ContentfulRender.tsx` depends on NativeBase Text types and nested bold/italic styling.
- HomeContent, IllustratedCard, Find Us, and Facilities already use native components. Preserve them; they need regression checks, not a rewrite.

## Recommended approach

Use gluestack for the shared controls that benefit from it; use React Native View/ScrollView for simple layout. Keep brand tokens in `constants/Colors.ts`, `Fonts.tsx`, and `CardStyles.ts` authoritative. Do not introduce dark mode or alter the accepted design.

Current gluestack documentation targets v5 and offers NativeWind v5 or UniWind. Choose and pin an exact compatible combination during the first step; do not blindly run an unpinned CLI over the app. At scoping time the published NativeWind `latest` tag is still 4.2.7, despite the v5-focused documentation, so version selection needs an actual smoke test. Keep React Navigation; an Expo Router migration is out of scope.

NativeBase and gluestack can remain together during staged migration, subject to the first step's provider/Metro checks. Each change should leave the app runnable. Do not build a general NativeBase-prop compatibility layer.

## Proposed implementation sequence

| Step | Deliverable and main files | Acceptance for that step |
| --- | --- | --- |
| 1. Compatibility and preview proof | Pin gluestack/styling engine; compose Metro configuration with the existing SVG transformer; add a minimal offline preview control. Touch package/config files and `App.tsx` only as required. | Expo 58 / React 19.3 / RN 0.88 boots on both platforms; SVGs, Audrey fonts, preview and normal entry points still load. Record selected versions and runtime hashes. |
| 2. Brand text and controls | Add only required local text/heading, button, icon-button and loading components. Bridge existing brand tokens into styling. | Regular, bold, italic, combined emphasis, disabled/pressed states and font scaling match the rebrand. No default gluestack colors or fonts leak through. |
| 3. Contentful rich text | Replace NativeBase types/layout in `contentful/ContentfulRender.tsx`; migrate `QACard.tsx` and rich-text preview. Update the existing rich-text tests. | Nested emphasis in either order, headings, lists, long links and line breaks retain layout and behavior. |
| 4. Calendar cards and feeds | Migrate `CalendarItemCard.tsx` and Activities, Meals, Updates, BHP, Riverside and StaffCalendar. | All feeds retain data/date rendering, scrolling/insets, links and activity-link fallback; staff calendar button still works. |
| 5. CMS resource cards | Migrate Delivery, Transportation, Tickets, HelpfulResources and HospitalServices. | Loading/empty states, optional links, informational-only cards, sorting and card spacing remain intact. |
| 6. Remaining screen wrappers | Replace simple NativeBase ScrollViews in About, Neighborhood, YourStay and their remaining detail screens. | Content remains reachable on small screens and with enlarged text; navigation destinations stay unchanged. |
| 7. Navigation controls | Replace NativeBase controls in `navigation/index.tsx`, including Donate and menu/back icons. | Preserve red headers, cream icons, active red/underlined drawer labels, press feedback, Staff Use history, and iOS 26 background suppression. |
| 8. Staff form | Replace FormControl, Button, Text and warning icon in `StaffUse.tsx`; adapt staff tests to the new controls. | Keep the native TextInput mounted through focus/typing; preserve masking, validation, disabled state, stored-password behavior and keyboard handling. |
| 9. Provider and dependency removal | Finish the four preview files; replace NativeBaseProvider with required gluestack/safe-area providers; remove the old theme, dependency and NativeBase patch. | No NativeBase imports remain; no NativeBase-origin SSRProvider warning. Replace obsolete compatibility tests while retaining meaningful font/icon/form coverage. Keep the drawer-layout patch and patch-package. |
| 10. Release verification | Run the regression matrix and compare runtime fingerprints. | TypeScript, tests and both exports pass; record real iOS/Android checks. If the runtime changes, ship a matching native build before relying on OTA. |

Steps 3–8 follow the brand primitives; remove NativeBase only after every consumer has migrated. Split a step further if it cannot fit a focused commit. Suggested short subjects: `Add gluestack foundation`, `Migrate rich text`, `Migrate calendar cards`, `Migrate staff form`, `Remove NativeBase`.

## Main regression risks

- **Spacing conversion:** NativeBase `p={4}` resolves to a spacing token, not four React Native points. Preserve resolved padding, margins, line heights and minimum touch sizes; do not mechanically copy numeric props.
- **Typography:** Preserve all four bundled Audrey faces and nested Contentful emphasis. Gluestack defaults may change wrapping and line height even when the font family is correct.
- **Provider removal:** Retain safe-area support, font-load splash gating and credential-free preview startup. Do not reintroduce dark appearance.
- **Native headers and input focus:** Preserve the recent iOS 26 header-button fixes and the stable native staff input; these need actual device/simulator checks.
- **Tooling:** Preserve SVG transforms, existing Reanimated setup and Expo-compatible native dependency versions. Do not downgrade packages to match an older documentation example.

## Verification / boundaries

Retain the current 29-test behavior coverage; adjust NativeBase-specific queries rather than deleting staff or rich-text assertions. Retire only the compatibility tests whose patched code no longer exists. Check preview fonts/images, rich text, every drawer section, nested Back, Staff Use entry/return/unlock, links and long scrolling content. Test iOS and Android at normal/enlarged text sizes; do not claim device checks from successful exports alone.

No changes to CMS models, calendar parsing, routes, authentication/storage policy, content or artwork. No new features, dark mode, navigation-framework migration or bulk dependency upgrades. Rebrand acceptance #119 is closed. Implementation has not started.

Sources: [gluestack installation](https://gluestack.io/ui/docs/home/getting-started/installation), [v5 release](https://gluestack.io/blogs/gluestack-ui-v5-stable-release). Package versions were checked against the npm registry during this assessment.
