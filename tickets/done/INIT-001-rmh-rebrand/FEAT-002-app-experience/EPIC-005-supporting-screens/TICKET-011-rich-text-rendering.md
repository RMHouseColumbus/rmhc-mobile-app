# TICKET-011 — Apply Audrey typography to Contentful rich text

GitHub: [#110](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/110)

## Outcome and context

Edit `contentful/ContentfulRender.tsx`. This shared renderer supplies paragraphs, headings, lists, emphasis, and hyperlinks on multiple detail screens.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-003.

## Acceptance criteria

- [x] Replace direct Raleway and legacy link-color references with shared typography/color tokens.
- [x] Render body text, headings, bold, italic, combined bold-italic, lists, and links with readable hierarchy and correct font faces.
- [x] Preserve content and link-opening behavior; links remain identifiable and long text wraps without overflow.

## Verification

Run shared checks. Render a representative rich-text fixture with all listed marks/nodes, including nested marks and a long link, at normal and enlarged text. Verify link dispatch without changing CMS data.

## Proposed commit

`Rebrand rich text`

## Implementation notes

Implemented on `rebrand/110-rich-text`, from `feature/rebrand`. The renderer uses Audrey faces, 14-point body text, scaled heading sizes, and underlined brand-red links. Combined emphasis inherits through nested marks/headings/links. Bullet and numbered lists use native layout outside text, including nested lists. Existing URL checks and destinations are preserved.

`npm run brand:preview -- --clear` includes **Rich text · #110** near the top, using a local fixture and a 280-point width toggle. No CMS changes are needed.

Automated tests cover resolved native font faces, both mark orders, link styling/dispatch, line breaks, heading hierarchy, and nested list structure. iOS/Android release and development-preview exports pass. TypeScript matches the baseline: only the existing unsupported `flex` prop in `HelpfulResources.tsx`.

Maintainer accepted the normal app rendering and reported “looks fine” after the iOS simulator narrow-width/enlarged-text check instructions. Link dispatch is covered by the automated tests; Android visual checks remain part of cross-platform acceptance (#119).

Implementation and maintainer review are complete. The maintainer committed the implementation in `d4cd955` and authorized merging into `feature/rebrand`. This completion record accompanies that PR; GitHub #110 closes after the merge.
