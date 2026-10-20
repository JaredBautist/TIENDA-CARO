# Collection dropdown

## Requirements

On desktop and mobile, the Collections dropdown shall list Enterizos, Sets
deportivos, Faldas, Shorts, Licras largas, Tops, Bolsos and Medias in that order,
then Ver todo. Change no homepage sections, imagery or styling.

## Design

Keep the shared navigation snippet. Use a fixed ordered label list. Resolve
published collections by the label's handle; when unavailable, use Shopify's
native product search constrained by `product_type` rather than an uncreated collection URL.
Ver todo uses `routes.all_products_collection_url`.
Products must have matching product types until the actual collections exist.
Currently only the initial frontpage collection is publicly available.

Reference: https://shopify.dev/docs/api/liquid/objects/collection

Validation found that `link_to_type` returns 404 while that product type has no
products. The search fallback provides a valid empty-results page in that state.

## Tasks and acceptance checks

1. Replace the generic category link and dynamic collection enumeration.
2. Verify exact labels and order in both menus, with Ver todo last.
3. Verify fallback and catalog destinations render without a 404.
4. Run Theme Check and sync only the changed snippet to development.
