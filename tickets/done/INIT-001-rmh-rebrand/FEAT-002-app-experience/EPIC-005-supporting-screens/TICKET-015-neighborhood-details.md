# TICKET-015 — Rebrand delivery and transportation details

GitHub: [#114](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/114)

## Outcome and context

Update `screens/neighborhood/food_delivery/Delivery.tsx` and `screens/neighborhood/transportation/Transportation.tsx`. Follow the agreed detail-screen style; the PDF specifies the parent menu only.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-003, TICKET-011.

## Acceptance criteria

- [x] Use shared Audrey typography, cream/content surfaces, and readable action/link colors.
- [x] Preserve current providers, content ordering, and all existing contact/link actions.
- [x] Keep long provider names, descriptions, and contact information readable at enlarged text.

## Verification

Run shared checks. Open both screens from Neighborhood, inspect representative long content, and exercise their actions without placing calls or submitting external forms.

## Proposed commit

`feat(neighborhood): rebrand delivery and transport details`

## Implementation notes

Completed by PR #124 (provider/transport cards) and PR #125 (shared Audrey rich text). Both screens use cream surfaces, shared fonts, and preserved Contentful entries, provider ordering, and contact/link destinations. Text wraps without fixed-height cards; both screens retain bottom-tab clearance.

Native exports passed during implementation; rich-text tests cover font combinations and HTTP/phone/email link dispatch. The maintainer reviewed the normal app and larger-text rich-text preview. Screen-specific long provider names and native external actions remain in the #119 acceptance matrix; they were not individually confirmed here.
