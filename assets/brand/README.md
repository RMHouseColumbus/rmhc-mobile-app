# Runtime brand assets

Use the typed `brandImages` registry in `index.ts`. PNGs work with React Native `Image` and preserve transparency; always use `resizeMode="contain"`. Artwork colors and original square illustration bounds are preserved. The set contains 15 illustrations at 512 × 512 and four logos with their longest edge at 1024 px, about 820 KiB total. Illustrations suit cards up to about 170 logical pixels at 3× density; export larger versions for larger placements.

## Source manifest

All sources below are beneath `App Design Assets/`. **Links** means `RMH App Design Package/Links/`. Mappings were compared with PDF pages 3–7.

| Registry key / output | Source | Intended use |
| --- | --- | --- |
| `horizontalLogo` / `logos/horizontal-positive.png` | `Logos/Ronald McDonald House Central Ohio Logo Suite/Horizontal/PNG - transparent background/rmh_centralohio_logo_hrz_color_rgb_pos.png` | Home, drawer; future splash composition |
| `verticalLogo` / `logos/vertical-positive.png` | Same suite, `Vertical/PNG - transparent background/rmh_centralohio_logo_vrt_color_rgb_pos.png` | Alternate vertical lockup |
| `horizontalLogoReversed` / `logos/horizontal-reversed.png` | Horizontal source with `_rev.png` suffix | Dark surfaces |
| `verticalLogoReversed` / `logos/vertical-reversed.png` | Vertical source with `_rev.png` suffix | Dark surfaces |
| `meals` / `illustrations/meals.png` | Links `Home-cooked_meals_icon-RGB.png` | Neighborhood / food delivery |
| `mcdonalds` / `illustrations/mcdonalds.png` | Links `McDonalds-RMH_icon-RGB.png` | Neighborhood / McDonald’s |
| `shopping` / `illustrations/shopping.png` | Links `Shopping_cart-Dollar_icon-RGB.png` | Neighborhood / shopping |
| `city` / `illustrations/city.png` | Links `city_icon-RGB.png` | Neighborhood / transportation |
| `tickets` / `illustrations/tickets.png` | Links `Online_Ticket_icon-RGB.png` | Neighborhood / tickets |
| `team` / `illustrations/team.png` | `App Icons/Team_icon-RGB.ai` | About / Meet the Staff |
| `website` / `illustrations/website.png` | Links `Website_icon-RGB.png` | About / Visit our Website |
| `involvement` / `illustrations/involvement.png` | `App Icons/Volunteers_icon-RGB.ai` | About / Ways to Stay Involved (raised hand) |
| `story` / `illustrations/story.png` | Links `Health_education_icon-RGB.png` | About / Share Your Story |
| `familyRoom` / `illustrations/family-room.png` | Links `Environmental_wellbeing_icon-RGB.png` | About / Family Room |
| `careMobile` / `illustrations/care-mobile.png` | Links `RMH_CareMobile_program_icon-RGB.png` | About / Care Mobile |
| `staffChecklist` / `illustrations/staff-checklist.png` | Links `Get_involved_icon-RGB.png` | About / Staff Use (checklist, despite source name) |
| `video` / `illustrations/video.png` | Links `Video_icon-RGB.png` | Home / Start Here; Before Your Stay |
| `handsHeart` / `illustrations/hands-heart.png` | Links `Hands_forming_heart_icon-RGB.png` | During Your Stay |
| `house` / `illustrations/house.png` | Links `RMH_House-program_icon-RGB.png` | After Your Stay |

The Team and Volunteers Illustrator sources have different colors from the recolored mockups. Their supplied colors remain intact, per `tickets/DECISIONS.md`. Do not recolor exported artwork to match shared UI tokens.

The curved Home “Start Here” arrow has no separate supplied asset; handle its vector treatment in #106 (Home). No card illustration is missing. Launcher and splash compositions belong to #117/#118. Source AI, IDML and PDF documents are never imported into the runtime registry.

## Regenerating exports

On macOS, PNGs were downsampled with `sips` (no crop, recoloring or background flattening). Illustrator files contain a PDF-compatible page and were rendered using Poppler's `pdftocairo`:

```sh
sips -Z 512 "<source illustration.png>" --out "<output.png>"
sips -Z 1024 "<source logo.png>" --out "<output.png>"
pdftocairo -png -transp -singlefile -scale-to 512 "<source.ai>" "<output without .png>"
```

Audrey Text Regular, Bold, Italic and BoldItalic in `assets/fonts/` are byte-for-byte copies from `Audrey Font Family/Desktop Fonts/OTF/`. Display faces remain source-only because the working typography uses Text. Do not use the different layout-package font copies.

Run `npm run brand:preview` to inspect every export and font face in Expo Go. See `CONTRIBUTING.md` for the checklist.
