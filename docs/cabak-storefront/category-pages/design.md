# Category page design

## Existing contract

Shopify Horizon Liquid theme. CABAK background #F2ECE4, lighter header #F8F4EE,
brown #735238, ink #35271F, Work Sans, existing transparent brand assets.
Design variance 3, motion 2, density 4: preserve the approved restrained storefront.
The skill's generic green SaaS design-system result is rejected as inappropriate;
its empty-state guidance applies, but existing CABAK tokens remain authoritative.

## Structure

- `snippets/cabak-category-links.liquid`: shared ordered collection navigation.
- `sections/cabak-collection-header.liquid`: native title/description only.
  The approved compact refinement removes the breadcrumb and duplicate category strip.
- `templates/collection.json`: existing native product grid plus the new header.
- `assets/cabak-collection.css`: page-scoped styles using current brand tokens.
- `snippets/product-grid.liquid`: category empty-state branch only, leaving search
  and filtered-result behavior intact.
- `docs/cabak-storefront/category-pages/`: requirements, decisions and validation.

## ADR: Native collections over static pages

Use eight native manual Shopify collections with handles enterizos,
sets-deportivos, faldas, shorts, licras-largas, tops, bolsos and medias. Existing
matching collections are reused, never replaced. Manual membership avoids making
unverified assumptions about product tags/types. The merchant assigns products.

One shared collection template keeps filters, sorting and product cards native.
Rejected: eight copied static pages, client-side filtering of all products,
or search results presented as completed category pages.

Create missing resources, make them available to the Online Store channel, and
verify actual routes. The live theme is not published by this operation. Collection
resources themselves are store-wide and use whichever theme is being viewed.

## Presentation and interaction

Compact heading, 40px desktop/28px phone, one short merchant-provided description
when present. Category navigation remains in the existing header dropdown.
Removing both page-level navigation rows also removes their margins and borders,
reclaiming vertical space without changing typography, colors or product layout.
Native product cards retain portrait imagery and mobile two-column behavior.
No entrance animation; native links and sorting are immediate. Empty states use
plain Spanish and a single catalog link. No new photography or dark-mode toggle.
