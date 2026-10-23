# Rebrand working design defaults

On 2026-10-22, the maintainer directed contributors to use best judgment and proceed, treating the open design questions as non-blocking. These are provisional implementation defaults, not final designer approvals. [Follow-up #120](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/120) tracks future feedback and does not block implementation or acceptance (#119).

Source: `App Design Assets/RMH App Design Package/RMH App Design.pdf`, pages 1–7, and the supplied IDML/font package. Keep decisions in shared tokens/components so later adjustments remain small.

| Topic | Implement now | Basis / follow-up |
| --- | --- | --- |
| Palette | Prefer the brand sheet's printed HEX values over colors sampled from mockups: red `#DB0007`, soft white `#FFFDE9`, black `#000000`, lavender `#D0C9FF`, aqua `#8EE7F8`, lime `#9CD83E`, gold `#FFBC0D`. | Brand sheet and layout colors differ. Reconcile if the designer specifies an exception. |
| Card contrast | Keep illustrated artwork intact; use black label text on yellow/gold cards instead of orange. For other pairings follow the mockup using brand tokens and verify readability at actual size. | Orange/yellow is in the mockups; the readability concern came from implementation review. |
| Bottom tabs | Keep the existing five destinations and icons. Use brand red for selected, dark gray for unselected, and cream for the surface; retain accessible names/selection cues. | “Icons” is a placeholder in the supplied designs. Replace artwork later if supplied. |
| Fonts | Audrey Text Regular for body, Text Bold for headings/navigation/cards; supplied italic/bold-italic faces for emphasis. Do not introduce Display styling unless later feedback calls for it. | The supplied layout uses Text Regular/Bold. Additional font faces alone do not require new type styles. |
| Unmocked screens | Extend red headers with light titles/icons, cream page surfaces, black body text, and shared cards/controls to drawer/detail screens. | Consistent extension of the supplied screens; no separate mockups provided. |
| Splash | Center the horizontal Central Ohio logo on cream with safe margins and preserved aspect ratio. | No supplied splash design; provisional composition. |
| Dark appearance | Use the supplied light appearance consistently for this release, including when the device is in dark mode. | Only a light design was supplied; deliberate implementation choice. |
| Launcher name | Retain “RMHC App.” Keep bundle/package IDs, scheme, internal route IDs, and destinations unchanged. | No designer-requested rename. This question was optional scope, not a requirement. |
| Copy | Correct “Vist” to “Visit”; retain content and behavior otherwise. | Typo in the About mockup. |

## When feedback arrives

The maintainer owns collecting and accepting feedback. Add the answer, source, date, and affected default here, then link a focused change ticket from #120 when code needs adjustment. Until an answer arrives, continue with the default; do not invent a new approval gate or silently claim designer approval.

No design feedback has been received yet. Ordinary functional, layout, and accessibility verification still applies to each implementation ticket.
