# CABAK storefront design

Status: Approved. See IMPLEMENTATION.md for delivered scope and merchant setup dependencies.

## Existing baseline

The repository contains Horizon 4.3.0, native Liquid templates and JavaScript
custom elements. Current settings use a white/black palette, Inter and a cart
drawer. The homepage still contains default English copy. No storefront
behavior is changed by this specification.

## Visual direction

Warm, restrained activewear commerce. Preserve the supplied CABAK logo artwork.
Suggested tokens below are approximations from the supplied boards, not measured
brand specifications:

| Role | Proposed color |
| --- | --- |
| Main background | #F2ECE4 |
| Secondary surface | #E5D8CA |
| Primary accent | #735238 |
| Body text | #35271F |

DESIGN_VARIANCE: 6, MOTION_INTENSITY: 3, VISUAL_DENSITY: 4.
The explicit cream-background brief takes precedence over generic dark-mode
defaults. The logo retains its supplied lettering; interface copy uses a readable
sans-serif from Shopify's available fonts, selected during preview.
Product images remain unaltered representations of actual merchandise.
Generated campaign concepts, if requested later, are not substitutes for catalogue photos.

Use a consistent small radius for controls, square product photography, generous
but practical spacing, and short Spanish copy. Touch targets and contrast are
verified during implementation. Use CSS feedback of approximately 120-200ms,
respect reduced motion, and restrict hover motion to fine pointers.

## Proposed information architecture

Homepage: compact navigation; campaign image and one shopping CTA; category
navigation; featured collection; CABAK brand content; verified service/payment
information; contact and policy footer.

Proposed navigation: Inicio, Tienda, Colecciones, Guía de tallas, Contacto.
Category names remain provisional until the actual catalogue arrives.
Also cover collection, product, search, cart, contact and policy surfaces.

## Data and integration boundaries

- Shopify owns Product -> Variant -> Inventory, Collection, Cart and Order.
- Native section schemas own presentation settings, not commercial records.
- Liquid renders server-side content; existing JavaScript components provide
  variant/cart interactions.
- Shopify checkout and provider apps own payment authorization and reconciliation.
- Theme payment badges are informational and must match verified availability.

Sequence: collection -> product -> variant selection -> cart -> Shopify checkout
-> provider authorization -> Shopify order state. A return URL alone is not proof
of successful payment.

## ADR-001: Extend Horizon

Options: extend Horizon; replace it with a custom theme; build headless storefront.
Decision: extend Horizon with native settings and scoped sections/assets.
Reason: retain editor support and established cart/product behavior without
introducing a second commerce application.
Consequences: use Liquid/CSS/JavaScript; React, Next.js and Polaris are not needed.

## ADR-002: Provider-managed payments

Options: official Shopify integrations; custom payment processing in theme.
Decision: provider integrations configured through Shopify and merchant accounts.
Reason: theme code is not an appropriate boundary for private payment credentials
or authoritative transaction state.
Consequences: activation and transaction testing require merchant access.
Wompi documents PSE support. Addi and Sistecredito onboarding and exact setup must
be confirmed for this store before claiming readiness.

Sources:
- https://docs.wompi.co/docs/colombia/wompi-shopify-plugin/
- https://comunidad.addi.com/eventos/62-utilizas-shopify-estas-registrado-y-no-lo-has-integrado-con-addi
- https://www.sistecredito.com/category/ecommerce/

## Proposed repository organization

Keep Shopify's required theme folders. Add scoped `cabak-*` sections or assets only
where existing Horizon settings cannot satisfy the approved design.
`docs/cabak-storefront/` holds requirements, design and tasks.
`capture/` holds reference observations and later visual validation evidence.
Development artifacts must be excluded from theme upload packaging.

## Graph coverage limitation

Prior Graphify output explicitly skipped 282 Liquid files. JavaScript extraction
does not establish coverage of render/include references, section composition or
JSON template relationships. Verify a Liquid-compatible extraction path before
promising automatic coverage of every theme change. Git records revision history;
the graph is a derived structural snapshot.
