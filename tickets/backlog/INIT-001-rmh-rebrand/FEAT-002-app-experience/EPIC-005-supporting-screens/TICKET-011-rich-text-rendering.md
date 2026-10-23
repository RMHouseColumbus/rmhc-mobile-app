# TICKET-011 — Apply Audrey typography to Contentful rich text

GitHub: [#110](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/110)

## Outcome and context

Edit `contentful/ContentfulRender.tsx`. This shared renderer supplies paragraphs, headings, lists, emphasis, and hyperlinks on multiple detail screens.

Read `tickets/README.md` for the design source, app map, and shared verification steps. Paths above are relative to the repository root.

## Dependencies

TICKET-003.

## Acceptance criteria

- [ ] Replace direct Raleway and legacy link-color references with shared typography/color tokens.
- [ ] Render body text, headings, bold, italic, combined bold-italic, lists, and links with readable hierarchy and correct font faces.
- [ ] Preserve content and link-opening behavior; links remain identifiable and long text wraps without overflow.

## Verification

Run shared checks. Render a representative rich-text fixture with all listed marks/nodes, including nested marks and a long link, at normal and enlarged text. Verify link dispatch without changing CMS data.

## Proposed commit

`feat(content): apply brand typography to rich text`

## Implementation notes

_Record changed files, verification results, and any remaining blockers when implementing._
