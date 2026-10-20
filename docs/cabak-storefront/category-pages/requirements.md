# CABAK category pages

Scope: create real Shopify collection destinations for the eight requested
categories. Preserve homepage composition, logos, header, footer, colors and fonts.

## Acceptance criteria

- WHEN a shopper selects Enterizos, Sets deportivos, Faldas, Shorts, Licras largas,
  Tops, Bolsos or Medias, the corresponding `/collections/<handle>` SHALL load.
- WHEN Ver todo is selected, `/collections/all` SHALL show the complete catalog.
- Each page SHALL display its own title followed by real Shopify products only.
  The breadcrumb and duplicate horizontal category navigation SHALL be absent.
  Category navigation SHALL remain available through the main header dropdown.
- Product price, availability, images, sorting, filters and pagination SHALL use
  Shopify/Horizon data and components. No invented products or reference photos.
- An empty category SHALL explain that no products are currently available and
  offer navigation back to the full catalog. Empty filtered results SHALL retain
  the existing filter-reset behavior.
- At 320, 390, 768 and 1440px the page SHALL have no document horizontal overflow.
- Keyboard, mouse-hover navigation, mobile tap and reduced-motion behavior SHALL
  remain usable. The global approved light theme SHALL remain unchanged.

## Scope limits

No checkout, payment, product-detail, homepage or global-header redesign.
Creating collections requires authenticated Shopify catalog access. Uploading
theme templates alone is not completion of collection creation.
