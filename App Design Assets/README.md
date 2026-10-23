# Rebrand design sources

Start with **RMH App Design Package/RMH App Design.pdf**: page 1 is the brand palette and typography, page 2 logos/app icon, page 3 Home, page 4 Neighborhood, pages 5–6 About, and page 7 Your Stay. Page 8 is blank.

## What is retained

- `RMH App Design Package/RMH App Design.idml`: editable interchange source. Its supplied `Links/` images and `Document fonts/` are retained together. The placed screenshots include reference material used by the layout.
- `App Icons/`: original RGB Illustrator illustrations. Keep these for faithful exports, especially Team and Volunteers, which have no matching PNG in the package.
- `Logos/`: horizontal and vertical SVG and transparent PNG logos, in positive and reversed variants.
- `Audrey Font Family/Desktop Fonts/OTF/`: the six canonical application font faces. Package `Document fonts/` copies differ and are retained for the original layout; use the complete OTF family for app implementation.

This folder is the reference/source package. Copy only selected runtime-ready exports into `assets/brand/` and selected fonts into `assets/fonts/` when implementing the corresponding tickets. Keep source artwork unchanged and record source-to-export mappings.

The original IDML has two pre-existing relink issues: four screenshot references use a narrow no-break space before `AM`, while supplied filenames use a regular space; relink those to the matching files in `Links/`. It also references `rmh_rec_1_1_rgb_sw.png`, which was not supplied in the original package. Use the complete PDF as the visual reference and obtain that missing file from the designer if editing the layout requires it. Cleanup did not remove it.

## Cleanup

Removed print-oriented EPS/CMYK/spot logo exports, redundant Illustrator/JPEG logo versions, alternate TTF/WOFF font formats, the native INDD duplicate (IDML retained), historical screenshots, temporary/cache files, and the empty top-level PDF. The actual screen reference remains at the package path above.

The supplied payload was reduced from 70.6 MiB to 14.7 MiB before this README. A complete original archive was retained outside the repository on the maintainer's machine during cleanup.

Decisions about palette differences, navigation states, and unmocked screens belong to [issue #100](https://github.com/RMHouseColumbus/rmhc-mobile-app/issues/100). See [CONTRIBUTING.md](../CONTRIBUTING.md) for branch and setup instructions.
