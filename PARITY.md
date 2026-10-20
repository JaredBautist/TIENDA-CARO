# CABAK reference-layout validation

Mode: reference adaptation using CABAK branding. No reference photographs,
product data, payment promises or tracking identifiers are shipped in the theme.
The owner explicitly requested empty photo spaces.

## Homepage composition

| Section | Reference pattern | CABAK implementation | Validation |
| --- | --- | --- | --- |
| Header | Announcement, wordmark, shopping links and actions | Brown announcement, CABAK name, collection disclosure and native account/search/cart | Mobile menu and Escape; desktop disclosure and Escape |
| Campaign | Full-width 3.03:1 banner with arrow controls | Configurable slide blocks and independent mobile image pickers | 129px at 390; 253px at 768; 475px at 1440 |
| Product rows | Three horizontal rails with centered headings and portrait images | Three collection-driven rails, 2:3 cards, partial next card | Previous/next controls and keyboard scrolling |
| Categories | Square image tiles, 4 desktop columns and 2 mobile columns | Eight configurable women's apparel/accessory categories | Column counts and no overflow |
| Footer | Compact centered social/policy navigation | Existing Shopify social block and actual store policies | No invented profiles or policies |

Widths tested: 360, 390, 768, 1024 and 1440 CSS pixels, rendered by Shopify's
development server. All passed document overflow, banner ratio, rail controls,
keyboard scrolling, navigation and cart open/Escape-close checks.
Browser error list and requests to the reference domain: both empty.

Theme Check: zero errors, six existing Horizon warnings.
Evidence: `capture/rebuild/validation.json`, screenshots in `capture/rebuild/`.
Because Horizon uses a desktop scroll container, full-page browser captures may
show only the viewport; use `desktop-top.png` and the separate section captures.

## Deliberate differences and remaining content

- CABAK brown/cream palette and brand copy replace reference branding.
- Photos remain blank until the owner supplies them.
- Missing collection products are clearly marked as preparation spaces with no
  invented prices, product links or add-to-cart buttons.
- Men's merchandise categories are omitted for this women's activewear store.
- Header is more compact, and carousel buttons retain 44px touch targets.
- The merchant's existing account, policies and contact page remain Shopify-owned.
- Payment processing and populated product purchase flows are not certified here.
- No pixel-diff equality is claimed for a reference adaptation with different media.

## Reproduce

```sh
shopify theme dev --store zy7ii3-xp.myshopify.com --port 9393
PLAYWRIGHT_MODULE=/path/to/playwright node capture/validate-cabak.cjs
shopify theme check
```

Development preview: https://zy7ii3-xp.myshopify.com/?preview_theme_id=189521953011
Editor: https://zy7ii3-xp.myshopify.com/admin/themes/189521953011/editor
