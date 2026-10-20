# Category page validation

- Created eight native manual collections and verified Online Store publication.
  Resource IDs and handles are recorded in `collections.json`.
- Browser tests passed for all eight routes plus `/collections/all`, each at
  390 and 1440px, with additional 320 and 768px coverage for Enterizos.
- Verified a single correct h1, active category, ordered navigation, real empty
  state, no document overflow, Work Sans, no reference photos, and cart dismissal.
- Hover, submenu traversal, focus retention, Escape and mobile taps passed the
  existing menu regression test.
- Empty collections suppress unusable filtering/sorting controls; populated
  collections retain native Horizon filtering, sorting, cards and pagination.
- Shopify Theme Check: zero errors, six existing warnings.
- Lighthouse on the local development proxy: accessibility 100, performance 59,
  CLS 0.019. The run hit its loading time limit and warns results may be incomplete.
  This is not a valid production-speed certification. Hosted performance should
  be measured again with actual inventory and the final published theme.
- The store currently has zero products. Populated product filtering, sorting,
  pagination and purchase flows could not be validated against real inventory.
  No synthetic products were created.
- Theme changes uploaded to development theme 189521953011 only. Collection
  resources are store-wide; the live Horizon theme was not replaced/published.
- Homepage sections, colors, typography, logos and footer were preserved.

To populate a page, add products to its manual collection in Shopify Admin.
New products do not automatically join manual collections by product type.

## Compact header refinement

Removed the breadcrumb and duplicate category strip at the merchant request.
Preserved the title, description, main category dropdown and catalog layout.
Validated all nine collection routes at 390/1440px and Enterizos additionally at
320/768px: HTTP 200, correct titles and dropdown destinations, no horizontal
overflow or browser errors. Cart interaction checks passed. Theme Check: zero
errors, six existing warnings. Synced the two theme files to development theme
189521953011; the live theme was not published.
