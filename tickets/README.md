# RMH app rebrand ticket board

A dependency-ordered backlog for applying the supplied Ronald McDonald House Central Ohio identity to this Expo / React Native app. Each ticket is intended as one focused, reviewable commit. This board plans the rebrand work. See `CONTRIBUTING.md` for the integration branch, setup steps, and recorded pre-rebrand baseline.

## GitHub tracking

The original 20 tickets are published as GitHub issues #100–#119; non-blocking design feedback is TICKET-021 / #120, with linked dependencies and shared onboarding in [the tracker and contributor guide](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/99). Individual ticket files link to their matching issues.

Project: [RMH App Rebrand](https://github.com/orgs/RMHouseColumbus/projects/2). The issues reference this Project; board membership has not been set by this integration.

## Start here

1. Read this file and the ticket, then inspect its source files and dependencies before editing.
2. Read `tickets/DECISIONS.md` and use its working defaults. TICKET-001 is complete; start implementation with **TICKET-002** (assets) or **TICKET-003** (shared theme). TICKET-021 tracks later feedback and blocks neither implementation nor acceptance.
3. Implement only the selected ticket. Preserve navigation, CMS/feed behavior, and external destinations unless that ticket explicitly calls for a change.
4. Record verification evidence and blockers in the ticket. Do not claim a simulator/build check was run if it was not.

Start task branches from `origin/feature/rebrand` and target PRs to `feature/rebrand`. Preserve unrelated local work. Do not upgrade dependencies or rewrite navigation as part of styling.

## Design references

All paths below are relative to the repository root:

- **Working PDF:** `App Design Assets/RMH App Design Package/RMH App Design.pdf`. Pages: 1 palette/type, 2 logos/launcher icon, 3 Home, 4 Neighborhood, 5–6 About, 7 Your Stay; page 8 is blank.
- The empty top-level PDF was removed during cleanup; use the working package PDF above.
- `App Design Assets/RMH App Design Package/RMH App Design.idml`: editable layout source; its placed images and document fonts are retained.
- `App Design Assets/RMH App Design Package/Links/`: placed PNG illustrations and logos.
- `App Design Assets/App Icons/`: Illustrator sources, including artwork without a corresponding PNG in Links.
- `App Design Assets/Logos/`: horizontal/vertical RGB logos in SVG and transparent PNG formats.
- `App Design Assets/Audrey Font Family/`: the six native-compatible OTF font faces under `Desktop Fonts/OTF/`. Use this family for application fonts; the distinct package copies are retained for opening the original layout.

The new visual direction is red headers, cream backgrounds, Audrey type, and illustrated colored cards. Working defaults for bottom tabs, unmocked screens, splash and color discrepancies are recorded in `tickets/DECISIONS.md`; revisit them through TICKET-021 as feedback arrives. The supplied design changes presentation, not the app’s information architecture.

The curated design package is included on `feature/rebrand`. Read `App Design Assets/README.md` for retained sources and cleanup rationale; copy selected runtime assets into the app’s `assets/` tree during implementation.

## App map for new contributors

| Concern | Where to start |
| --- | --- |
| App providers / theme | `App.tsx`; NativeBase is the UI library |
| Font loading / tokens | `hooks/useCachedResources.ts`, `constants/Fonts.tsx`, `constants/Colors.ts` |
| Drawer, five visible tabs, nested stacks | `navigation/index.tsx`, `navigation/Icons.tsx`, `types.tsx` |
| Link routing | `navigation/LinkingConfiguration.ts` |
| Shared menu cards | `components/SVGCard.tsx`; Your Stay currently duplicates this pattern |
| Content and rich text | `hooks/useContentful.tsx`, `contentful/ContentfulRender.tsx` |
| Calendar feeds | `hooks/useFeed.tsx`, `components/CalendarItemCard.tsx` |
| Native icon / splash | `app.json`, with overrides in `app.config.js` |

Visible tabs are Home, Find Us, Facilities, Meals, and Updates. Other destinations are reached via the drawer or nested screens. Names such as `RMHC Central Ohio`, `YourStayHome`, and `NeighborhoodHome` are internal route identifiers: change displayed titles without renaming those IDs. This app is not an Expo Router project.

## Shared verification

Run commands from the repository root using installed dependencies:

```sh
npx tsc --noEmit
npx expo export --platform ios --output-dir /tmp/rmhc-rebrand-ios
npx expo export --platform android --output-dir /tmp/rmhc-rebrand-android
```

Capture the baseline before implementation. Existing failures are not automatically caused by a ticket; record them and compare results after the change. Native exports verify bundling and asset resolution, not visual correctness. Use a configured development environment and `npm run ios` / `npm run android` for visual checks; these scripts select the production environment, so coordinate credentials/test data with the maintainer. Do not print secrets or change production CMS data for a screenshot. Use local fixtures for missing/long-content cases where needed.

For UI work, inspect normal and enlarged text on a narrow phone as well as a standard phone. Verify each ticket’s interactions and capture screenshots for review. Use targeted tests for changed behavior when useful; avoid tests that merely assert styling literals. If running the existing Jest suite, use `npm test -- --watchAll=false` to avoid watch mode. Native launcher/splash tickets require installed native builds; document unavailable tooling rather than claiming Expo Go verified them. Builds/exports do not authorize deployment or store submission.

## Hierarchy and execution order

**Initiative INIT-001 — RMH rebrand:** deliver a consistent new identity while preserving app behavior.

- **FEAT-001 — Brand foundations:** EPIC-001 design handoff and prepared assets; EPIC-002 shared theme, fonts, and card component.
- **FEAT-002 — App experience:** EPIC-003 navigation; EPIC-004 primary mockup screens; EPIC-005 supporting screens and shared content.
- **FEAT-003 — Release readiness:** EPIC-006 native launch assets; EPIC-007 cross-platform acceptance evidence.

Numbers provide a suggested reading/execution order; each ticket’s dependencies determine readiness. After foundations, individual screen tickets can be assigned independently when ready. Dependencies on TICKET-001 are satisfied by the recorded working defaults. TICKET-021 is a non-blocking follow-up, including for TICKET-020 acceptance. Where multiple tickets edit the same file (especially navigation), integrate one at a time.

| Ticket | Work | Depends on |
| --- | --- | --- |
| [TICKET-001](done/INIT-001-rmh-rebrand/FEAT-001-brand-foundations/EPIC-001-design-handoff/TICKET-001-resolve-design-details.md) | Record the implementation design decisions (done: working defaults) | None |
| [TICKET-002](backlog/INIT-001-rmh-rebrand/FEAT-001-brand-foundations/EPIC-001-design-handoff/TICKET-002-prepare-artwork.md) | Prepare reusable logo and illustration assets | 001 |
| [TICKET-003](backlog/INIT-001-rmh-rebrand/FEAT-001-brand-foundations/EPIC-002-shared-ui/TICKET-003-brand-theme-and-fonts.md) | Introduce shared brand tokens and load Audrey | 001 |
| [TICKET-004](backlog/INIT-001-rmh-rebrand/FEAT-002-app-experience/EPIC-003-navigation/TICKET-004-headers-and-drawer.md) | Apply the new header and drawer styling | 003 |
| [TICKET-005](backlog/INIT-001-rmh-rebrand/FEAT-002-app-experience/EPIC-003-navigation/TICKET-005-bottom-navigation.md) | Apply the agreed bottom navigation design | 001, 003 |
| [TICKET-006](backlog/INIT-001-rmh-rebrand/FEAT-001-brand-foundations/EPIC-002-shared-ui/TICKET-006-shared-illustrated-card.md) | Support branded illustrated cards in the shared component | 002, 003 |
| [TICKET-007](backlog/INIT-001-rmh-rebrand/FEAT-002-app-experience/EPIC-004-primary-screens/TICKET-007-home-screen.md) | Rebuild Home to match the new welcome design | 002, 003, 004, 005 |
| [TICKET-008](backlog/INIT-001-rmh-rebrand/FEAT-002-app-experience/EPIC-004-primary-screens/TICKET-008-neighborhood-screen.md) | Rebrand the Neighborhood cards | 006, 004 |
| [TICKET-009](backlog/INIT-001-rmh-rebrand/FEAT-002-app-experience/EPIC-004-primary-screens/TICKET-009-about-screen.md) | Rebrand the About cards including Staff Use | 006, 004 |
| [TICKET-010](backlog/INIT-001-rmh-rebrand/FEAT-002-app-experience/EPIC-004-primary-screens/TICKET-010-your-stay-screen.md) | Rebrand the Your Stay menu | 006, 004 |
| [TICKET-011](backlog/INIT-001-rmh-rebrand/FEAT-002-app-experience/EPIC-005-supporting-screens/TICKET-011-rich-text-rendering.md) | Apply Audrey typography to Contentful rich text | 003 |
| [TICKET-012](backlog/INIT-001-rmh-rebrand/FEAT-002-app-experience/EPIC-005-supporting-screens/TICKET-012-calendar-screens.md) | Rebrand calendar cards and feed screens | 003 |
| [TICKET-013](backlog/INIT-001-rmh-rebrand/FEAT-002-app-experience/EPIC-005-supporting-screens/TICKET-013-resource-lists.md) | Rebrand updates and resource lists | 003, 011 |
| [TICKET-014](backlog/INIT-001-rmh-rebrand/FEAT-002-app-experience/EPIC-005-supporting-screens/TICKET-014-stay-and-about-details.md) | Rebrand stay information and About detail pages | 003, 011 |
| [TICKET-015](backlog/INIT-001-rmh-rebrand/FEAT-002-app-experience/EPIC-005-supporting-screens/TICKET-015-neighborhood-details.md) | Rebrand delivery and transportation details | 003, 011 |
| [TICKET-016](backlog/INIT-001-rmh-rebrand/FEAT-002-app-experience/EPIC-005-supporting-screens/TICKET-016-staff-unlock.md) | Rebrand the Staff Use unlock form | 003 |
| [TICKET-017](backlog/INIT-001-rmh-rebrand/FEAT-002-app-experience/EPIC-005-supporting-screens/TICKET-017-find-us-and-facilities.md) | Rebrand location and floor-plan entry screens | 003, 004 |
| [TICKET-018](backlog/INIT-001-rmh-rebrand/FEAT-003-release-readiness/EPIC-006-launch-assets/TICKET-018-launcher-icon.md) | Prepare and configure the new launcher icon | 001, 002 |
| [TICKET-019](backlog/INIT-001-rmh-rebrand/FEAT-003-release-readiness/EPIC-006-launch-assets/TICKET-019-splash-screen.md) | Prepare and configure the branded splash screen | 001, 002, 003 |
| [TICKET-020](backlog/INIT-001-rmh-rebrand/FEAT-003-release-readiness/EPIC-007-validation/TICKET-020-rebrand-acceptance.md) | Record the rebrand acceptance results | 001–019 |
| [TICKET-021](backlog/INIT-001-rmh-rebrand/FEAT-001-brand-foundations/EPIC-001-design-handoff/TICKET-021-design-feedback.md) | Revisit design choices as feedback arrives (non-blocking) | None |

## Workflow

Status is the directory: `backlog/`, `in-progress/`, or `done/`. Move the ticket while preserving `INIT-001.../FEAT-.../EPIC-.../TICKET-...md`; create destination directories only when needed and remove empty source directories. Update index links after moving files. Keep one ticket in progress by default; parallel work requires explicit coordination. Do not mark a dependency complete merely to unblock a ticket.

Before moving to `done/`, check every acceptance item and add concise implementation/verification notes. Record a blocker in the ticket if completion is not verifiable. Any new defects or missing scope get small linked tickets under the appropriate epic. Proposed commit subjects are suggestions, not authorization to commit.

**Current selection:** INIT-001 → FEAT-001 → EPIC-001 → TICKET-002. Nothing is in progress. **Next unblocked ticket:** TICKET-002; TICKET-003 is also ready. TICKET-021 is deferred feedback, not a gate.
