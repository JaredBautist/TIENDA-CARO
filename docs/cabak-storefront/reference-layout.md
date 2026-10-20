# Reference layout correction

Approved scope: reproduce the reference's composition and responsive behavior
using CABAK colors, copy and merchant-owned photos. No reference photos in theme assets.

Measured homepage (390 / 768 / 1440 CSS pixels):
- Announcement: 40px.
- Header: 90px, desktop navigation collapses on tablet/mobile.
- Panoramic campaign: 129 / 253 / 475px, approximately 3.03:1.
- Three consecutive product carousels with centered headings.
- Product images: portrait presentation; mobile reveals the next card.
- Collection-image navigation grid follows the product rails.
- Compact footer with social links and policy navigation.

Correction: remove the split text/image hero and standalone brand-story/newsletter
layout introduced earlier. Implement the reference sequence as configurable
Shopify sections. Product rails read real collection products; empty merchant
content uses clearly labeled non-purchasable placeholders, never invented prices.

Acceptance:
1. At 390/768/1440px the banner ratio, section order, portrait cards and grid structure match the observed patterns.
2. Rails scroll by touch, keyboard and previous/next buttons without document overflow.
3. Campaign images and categories use merchant image pickers; no third-party image requests.
4. Product links resolve to actual Shopify products. Placeholder tiles do not simulate purchasable inventory.
5. Settings and block changes work through Shopify's editor.

This reference adaptation has no pixel parity target because brand assets and
photography intentionally differ. Screenshots live under capture/reference.
