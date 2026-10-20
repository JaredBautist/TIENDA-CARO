# Mobile storefront refinement

Scope: the requested phone responsive polish, retaining CABAK branding, homepage
section order, native Shopify commerce and merchant-supplied photography only.

## Requirements

- WHEN viewed at 320–749 CSS pixels, the storefront SHALL have no document horizontal overflow.
- WHEN a campaign is displayed on a phone, its text SHALL have readable spacing inside a taller 1.6:1 banner, with height allowed to grow for long text.
- WHEN product controls are displayed on a phone, they SHALL occupy their own row, outside headings and product media, with 44px targets and 8px gaps.
- WHEN categories or merchant navigation labels wrap, their text SHALL remain inside the available width.
- WHEN the mobile menu exceeds the available screen height, it SHALL scroll internally.
- WHEN motion is reduced, rail controls SHALL retain their instant scrolling behavior.
- WHEN viewed on desktop, the existing banner ratio and four-column categories SHALL remain.

## Design

Use the existing Liquid sections and CSS media query boundary at 749px.
Keep native scrolling and existing custom-element controls; no new dependency,
data layer or commerce logic is warranted. Mobile cards retain the 2:3 media
ratio and a partially visible following card to indicate horizontal scrolling.
Use 16px gutters, 16px card gaps, balanced headings, and explicit pressed feedback.
Keep the supplied light brand palette; do not introduce a new dark theme.

Decision: CSS adaptation over new mobile markup avoids duplicated navigation,
content and editor settings. Taller mobile campaign media trades exact reference
proportions for readable content. Desktop remains 3.03:1.

## Tasks and validation

1. Extend browser checks for 320, 375, 430px and landscape; assert control separation.
2. Refine mobile CSS and image size hints.
3. Run browser checks, inspect screenshots and run Shopify Theme Check.
4. Sync the development theme; do not publish the live theme.

## Verification

- Browser suite passed at 320, 360, 375, 390, 430, 667, 768, 1024 and 1440px;
  667px used a 375px landscape height. Report: `capture/rebuild/validation.json`.
- Verified rail buttons, keyboard scrolling, navigation, cart open/close,
  control separation, no document overflow and no reference-site requests.
- Enlarged 48px multiline campaign text remains within its growing slide.
- Chromium touch emulation confirmed swipe scrolling at 375px.
- Visually reviewed the 390px full-page capture.
- Theme Check: zero errors, six existing warnings.
- Graphify refreshed its supported source graph. Liquid is not supported by its
  current extractor; the graph is not proof of Liquid rendering.
- These are browser-emulation checks, not physical iOS/Android device tests.
