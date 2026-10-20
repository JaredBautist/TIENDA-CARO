# Header brand refinement

## Current correction: retain both brand assets

The user requires the circular CK logo to remain. Render the original circular
asset beside the supplied horizontal wordmark, with no typed replacement.
Reserve a full logo row on phones/tablets; fit both assets within 320px screens.
Use one accessible home-link name and treat the accompanying symbol as decorative.
Validate loading of both images, navigation separation and the cart, then sync
the development theme. This supersedes the removal of the circle below.

## Approved horizontal logo update

Replace the circular mark and typed wordmark with the supplied
`../image copy.png`, unchanged. Render the complete image with its intrinsic
aspect ratio, an accessible home-link name and no duplicate brand text.
Use a 260px desktop width and a 220px phone width. On phones reserve a full
header row for the logo and retain native controls below it, avoiding a tiny
logo squeezed between four touch targets. Verify 320–1440px layouts and image
loading, then sync only the development theme. This supersedes the earlier
circle-plus-text treatment below.

Horizontal-logo validation: image loading, no horizontal overflow, no overlap
with visible navigation, and cart open/Escape close passed at 320, 390, 768,
1024 and 1440px. At tablet widths the navigation occupies a separate row below
the logo. Theme Check: zero errors and six existing warnings.

## Requirements

- WHEN the header renders, CABAK SHALL be more prominent: 32px desktop and
  28px on phones, reducing to 25px on the narrowest screens.
- WHEN the homepage renders, campaign and announcement copy SHALL clearly
  identify women's sportswear as the core product.
- WHEN the original logo file is available, the header SHALL use that supplied
  asset without recreating or substituting the mark.
- WHEN viewed at 320px or wider, navigation and cart SHALL remain accessible.

## Design and tasks

Keep the existing Shopify logo image setting and native header structure.
Adjust the text fallback and storefront copy first, then integrate the original
asset once its accessible path is supplied. Validate phone and desktop geometry
and the existing navigation/cart smoke suite. Sync development only.

The original asset is now supplied as `../image.png`. Copy it unchanged into
theme assets. Display it alongside the enlarged wordmark on desktop and above
the wordmark on phones, preserving room for native search and cart controls.
Keep the merchant-selected Shopify logo override available. Reserve image
dimensions and use an empty image alternative because adjacent text names CABAK.

## Validation

The original PNG loads successfully at 320, 390, 768 and 1440px viewport widths,
with no document overflow. Mobile and desktop screenshots were visually checked.
Theme Check reports zero errors and six existing warnings. The original asset
is preserved unchanged; CSS fits its surrounding whitespace into a circular
display area. The live theme remains unpublished.
