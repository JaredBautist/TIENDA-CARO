# Centered symbol trial

## Requirements

- WHEN the desktop header has sufficient space, the circular CK symbol SHALL sit at the horizontal center of the header.
- The wordmark SHALL remain on the left and navigation on the right.
- Existing images, colors, typography and image sizes SHALL remain unchanged.
- Smaller viewports SHALL retain the existing responsive arrangement without overlaps.

## Design

Use a scoped CSS positioning override from 1200px. The existing logo link and image remain intact; the header columns provide the positioning context. Below that breakpoint retain the combined brand layout. This reversible visual trial needs no new components or animation.

## Tasks

- [x] Apply the scoped desktop positioning override.
- [x] Check centering, separation and overflow across desktop and mobile viewports.
- [x] Sync the development preview.

## Validation

Confirmed CK center alignment and no overlap with the wordmark or navigation at
1200, 1280, 1440 and 1864px. No horizontal overflow at those widths or at 320,
390, 768 and 1100px. Development theme updated; no live-theme publication.
