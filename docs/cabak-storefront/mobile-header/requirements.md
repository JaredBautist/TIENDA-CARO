# Mobile header overlap repair

## Contract
When the header switches to drawer mode on a phone, the CABAK logo shall occupy its own centered row; menu, search, profile and cart shall occupy a separate controls row without intersecting the logo. Controls retain their native behavior and at least 44px touch targets. Desktop appearance remains unchanged.

## Diagnosis and design
The theme drawer selector overrides the existing mobile two-row grid with a single row because of selector specificity. Extend the existing mobile selector to explicitly cover drawer mode. No new dependencies, logo changes or authentication changes.

## Tasks
1. Reproduce overlap using native and forced drawer states in a browser regression test.
2. Correct mobile selector precedence only.
3. Verify phone widths, touch mode and desktop layout.

## Validation
- Initial regression failed on the profile touch target being smaller than 44px.
- Browser regression now passes at 320, 390, 430, 610 and 749px, both native mode and drawer mode with late-inserted section CSS.
- Mobile screenshot reviewed: branding has its own centered row, controls remain visible below it.
- CSS changes are restricted to max-width 749px; desktop rules were not modified.
- A separate pre-existing touch-desktop layout issue was observed at 1440px; outside this phone-only patch.
