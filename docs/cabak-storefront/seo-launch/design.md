# Phase A implementation contract

Initial scope: phase A and phase B drafts, 2026-10-22. Phase A did not mutate Admin. The approved continuation below covers the next increment.

## Phase B continuation contract — 2026-10-22

Authorization: the user reviewed the keyword expansion and requested “dale listo ahora si, sigue implementado”. Apply the reviewed category intent to the eight existing collections and Contacto in Shopify Admin. Keep the storefront password enabled; no Git push, theme publication, app installation or indexing request.

### Acceptance criteria

- WHEN an existing category is rendered, it SHALL have its own SEO title, description and short visible introduction, using the reviewed keyword family without unsupported product claims.
- WHEN Contacto is rendered, it SHALL use Spanish page and SEO titles and the approved contact description.
- WHEN an Admin value is changed, its previous value SHALL be recorded and its saved value independently read back.
- WHEN content is updated, handles, collection names, publication state, products, stock, prices, layout and navigation SHALL remain unchanged.
- WHEN a category has no products, the existing empty state SHALL remain visible; copy SHALL not claim stock, complete size guides or verified materials.

### Design and trade-off

Use Shopify Admin as the content source: `collectionUpdate` for `seo` and `descriptionHtml`; `pageUpdate` for Contacto and its documented `global.title_tag` / `global.description_tag` metafields. Both SEO metafields use `single_line_text_field`. Keep the existing Liquid renderers. This avoids parallel hardcoded metadata and adds no runtime JavaScript.

Adjust the draft descriptions to omit promises of populated size/material fields; retain the reviewed category keywords. Do not add misspellings to public copy. Homepage preferences and social-image selection stay pending where the supported API does not expose them; existing theme fallbacks remain.

### Ordered tasks and verification

1. Read current records and preserve `admin-before.json`; prepare exact revised text in `metadata.json` and `metadata.md`.
2. Apply eight targeted collection updates, then Contacto; stop on errors and record partial outcomes.
3. Read back exact values; compare unchanged identifiers and content outside the write scope.
4. Check rendered titles, descriptions, visible introductions, canonicals, product data and layout at 320/390/768/1440px with the existing browser validator.
5. Record completed and blocked work in `validation.md`. Catalog loading and checkout remain dependencies for launch.

### Rollback

Git does not roll back Admin data. Restore collection descriptions and SEO from `admin-before.json`; remove newly created `global.title_tag` and `global.description_tag` metafields to restore their absent state, and restore the Contact page title. Use current API schema and verify readback before marking rollback complete. Do not overwrite later merchant edits without review.

Source: [Shopify storefront SEO API guide](https://shopify.dev/docs/apps/build/marketing/optimize-storefront-seo).

## Evidence-driven decisions

1. The rendered homepage already has a hidden header H1 containing `My Store`. Move ownership of the homepage H1 to its campaign section, not a second heading. Keep existing visible copy verbatim. First campaign owns the H1, other slides stay spans. When the first slide is image-only, keep its heading accessible with `visually-hidden`; provide a heading for an empty campaign. Limit this homepage-only section to one instance. Preserve typography and geometry with explicit resets on its existing class.
2. Search currently uses H3 for its primary heading. Change semantic level to H1 while retaining the configured text-block typography.
3. Admin shop name is still `My Store`. Use one small brand-name snippet that falls back to `CABAK Activewear` only for that placeholder or an empty value; real Admin names remain authoritative. Apply it to SEO and Organization. Renaming the Admin store and correcting product vendor remain merchant tasks.
4. Preserve nonempty Admin titles/descriptions. Only homepage description gets the previously proposed brand description when Admin leaves it blank. Other missing collection/contact metadata remains explicitly listed for approval in metadata.md. Do not silently publish draft collection copy in Liquid.
5. Preserve Shopify canonical_url. Escape title/brand/tag text. Keep existing page_image priority, use HTTPS for social images and provide a bundled CABAK social-card fallback only when page_image is blank. The current global image still wins until the merchant uploads the prepared card.
6. Replace the existing Organization object rather than append another. Use shop.url for a stable primary-domain identity and @id, preserve merchant logo when present with an original CABAK asset fallback, add the supplied public social profiles. Product structured_data remains untouched; vendor My Store and real stock must be corrected from Admin after review.
7. Prepare a 1200x630 social-card composition using the existing wordmark on #F2ECE4, with generous margins. The logo is not regenerated. Provide the original layout and exported PNG for review; do not upload to Admin.

## Verification contract

Run a browser regression before implementation to demonstrate missing main H1 / incorrect brand identity. After implementation validate one main H1, native links, canonical, Organization JSON validity and stable URL, social tags, exact existing product JSON-LD, and typography/geometry at 320/390/768/1440px. Check no-JS and reduced motion. Validate image-only and empty campaign branches with isolated Liquid fixtures; do not modify Admin content to test. Keep screenshots outside the theme and record limitations separately.

## Boundaries

No new storefront JavaScript, dependencies, robots rules, sitemap generation or product claims. All collection copy is a draft for the owner, not published metadata. Search relevance testing and checkout remain later phases. Rollback is a focused Git revert for code; no remote data was changed by this phase. Development-theme sync is only for local preview.
