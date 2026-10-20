# CABAK implementation handoff

## Reference correction

The original split campaign/story/newsletter homepage below has been superseded.
The current homepage follows the measured reference: panoramic slide banner,
three horizontal product rails, square category grid and compact footer.
See `reference-layout.md` and the repository `PARITY.md` for current evidence.
No photographs from the reference are included. Merchant image spaces remain
empty as explicitly requested. Header navigation has been adapted to CABAK;
existing Shopify cart, account and search behavior remains native.

The owner approved the plan and explicitly excluded copying reference photos.

## Implemented

- CABAK cream/brown theme settings, Work Sans typography and consistent control radii.
- Editable campaign section with separate desktop/mobile image pickers and up to four real Shopify collections.
- Real-image responsive delivery with eager campaign loading and lazy category images.
- Text-only public campaign fallback when merchant photos are absent; upload instructions only in the theme editor.
- Editable brand story and Spanish homepage/newsletter copy.
- Temporary text brand fallback until the merchant supplies the official logo file.
- Existing Horizon catalogue, product, search, variant and cart functionality retained.
- Public empty-collection state replaces Horizon's fictitious product placeholders.
- Development/documentation files excluded from Shopify uploads.

## Verification

- Shopify Theme Check: no errors; six existing warnings in header/divider, unchanged from baseline.
- Actual Shopify-rendered homepage checked in Chromium at 360, 390, 768 and 1440 CSS pixels: no horizontal overflow.
- Mobile screenshot visually reviewed.
- Development theme upload succeeded: ID 189521953011.
- Public preview redirects to the store password page; authenticated CLI development rendering works at http://127.0.0.1:9393.
- No real product, cart purchase or payment transaction can be certified with the current empty catalogue.
- Campaign photography, populated collection states and physical-device testing remain pending.

## Merchant setup still required

1. Set the Shopify business name to CABAK Activewear and configure Spanish storefront language and navigation.
2. Upload the approved logo and real campaign/product photos in the theme editor.
3. Add products, prices, variants, stock and size information; assign featured collections.
4. Configure shipping, contact, policies and domain.
5. Activate and test Wompi/PSE, Addi and Sistecredito in merchant/provider accounts.
6. Approve the populated preview before publication.

Preview: https://zy7ii3-xp.myshopify.com/?preview_theme_id=189521953011
Editor: https://zy7ii3-xp.myshopify.com/admin/themes/189521953011/editor

The development theme is not the published live theme.
Graphify remains a partial JavaScript-oriented map; it does not certify Liquid coverage.
