# TICKET-002 — Prepare reusable logo and illustration assets

GitHub: [#101](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/101)

## Outcome and context

Sources: `App Design Assets/Logos/`, `App Design Assets/App Icons/`, and the package `Links/` folder. Add app-ready files under `assets/brand/` and a short source-to-output manifest. Launcher and splash compositions belong to TICKET-018/019.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-001.

## Acceptance criteria

- [ ] Include the horizontal/vertical logos and illustrations needed by Home, Neighborhood, About, and Your Stay; preserve original artwork and transparency.
- [ ] Document each screen/card mapping. Expected mappings include meals, McDonalds-RMH, cart, city, ticket, team, website, involvement, story/education, family room, care mobile, staff checklist, video, hands-heart, and house. Confirm ambiguous mappings against the mockups.
- [ ] Export Illustrator-only artwork where needed, including Team; use consistent bounds and sensible mobile dimensions. Do not bundle InDesign/Illustrator source documents as runtime imports.
- [ ] Provide static, typed asset references using the existing PNG/SVG support; list missing artwork instead of substituting unrelated icons.

## Verification

Inspect every output beside its source/mockup, check transparent padding and legibility at intended card size, then perform the shared TypeScript and native bundle checks.

## Proposed commit

`feat(brand): add prepared logos and illustrations`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
