# TICKET-013 — Rebrand updates and resource lists

GitHub: [#112](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/112)

## Outcome and context

Update `screens/updates/Updates.tsx`, `screens/helpful_resources/HelpfulResources.tsx`, and `screens/hospital_services/HospitalServices.tsx`. Apply the documented extension of the brand to these unmocked list screens.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-003, TICKET-011.

## Acceptance criteria

- [ ] Use shared fonts, surfaces, spacing, and link colors; remove direct Raleway references in these files.
- [ ] Preserve content order, CMS bindings, and link/internal-navigation actions.
- [ ] Allow long titles and descriptions to wrap; leave the final item reachable above navigation.

## Verification

Run shared checks. Open all three screens with representative content, exercise their actions, and inspect enlarged text and empty data without modifying production content.

## Proposed commit

`feat(resources): rebrand updates and resource lists`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
