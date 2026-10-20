# CABAK global typography

## Approved requirements

- WHEN any theme page renders, body text, navigation, controls and prices SHALL use Montserrat (400/500).
- WHEN a heading or campaign/category title renders, it SHALL use Cinzel Regular, including H1–H6.
- Colors, logos, content and existing responsive layout SHALL remain intact.
- Spanish accents SHALL render with the selected fonts; pages SHALL not overflow at mobile or desktop sizes.

## Design and decision

Use Horizon's Shopify font settings for Montserrat. Shopify rejected `cinzel_n4`; serve Cinzel Regular as a local font asset with its OFL license and font-display swap. A theme checkbox enables the Cinzel heading override through the shared heading variables. Map body and accent to Montserrat, heading to Cinzel, and subheading to Montserrat for UI labels/prices; map H5/H6 explicitly to heading. Assign custom non-heading title elements to the heading variable.

Rejected: a universal font override, which would remove the approved title/body distinction; an external Google Fonts stylesheet, which duplicates the existing theme loading mechanism. Checkout and hosted customer accounts are separate Shopify surfaces, outside theme CSS.

## Tasks

- [x] Update global font settings and custom title styles.
- [x] Verify actual font loading, mobile/desktop layout, collection routes and menu/cart interactions.
- [x] Sync the development theme and record validation.

## Validation

Development upload succeeded. Browser checks confirmed Cinzel and Montserrat
loaded successfully, with Cinzel on all sampled homepage titles and Montserrat
on body text. Homepage widths 320, 390, 768, 1100, 1200 and 1440px passed without
horizontal overflow. All nine collection routes passed the updated validation,
including cart interactions. Theme Check: zero errors and six existing warnings.
Screenshots: `capture/typography/storefront-390.png` and `storefront-1440.png`.

## Approved Cormorant trial

Replace title typography with Cormorant Garamond Medium (500), preserving Montserrat,
sizes, colors, text casing and layout. Use the existing shared heading variables,
including custom headings that previously forced weight 400. No animation is warranted.

A compact theme select offers Cormorant, the previous Cinzel trial, or the native
heading font. Only the selected custom font is loaded. This makes comparison and
rollback possible without another code edit. Retain both font licenses.

- [x] Add the font and select Cormorant globally.
- [x] Verify loaded family/weight, Spanish accents, responsive layout and collection routes.
- [x] Upload the development preview.

### Cormorant validation

Confirmed Cormorant Garamond loaded at weight 500 on all sampled homepage titles,
Montserrat retained on body text, and Spanish text font loading succeeded. No
horizontal overflow at 320, 390, 768, 1200 and 1440px. All nine collection routes
and existing cart checks passed. Theme Check: zero errors, six existing warnings.
Screenshots: `capture/typography/cormorant-390.png` and `cormorant-1440.png`.

## Trial rejected

The merchant rejected the Cormorant trial. Restore Cinzel Regular for all titles
through the existing selector; retain Montserrat and all layout/color settings.

## Restrained sans-serif trial

The merchant requested a more sober direction after rejecting Cormorant. Select
Montserrat Medium through the native heading font, retaining Montserrat body text
and the existing custom-font alternatives for reversible comparison.
