# CABAK storefront requirements

Status: Approved by the owner for implementation. Reference photos must not be copied.

## Brief

Women's activewear store on the existing Shopify Horizon 4.3.0 theme.
CABAK Activewear is the supplied brand. Camila Perez Sport is a structural
reference for a different business, not a source of brand assets or product copy.
Language: Spanish. Proposed launch market: Colombia; currency: COP.

## Acceptance criteria

- R1: WHEN a customer opens the storefront, the system SHALL present CABAK's supplied identity with a cream/beige background and brown accents.
- R2: WHEN the merchant edits homepage content, the system SHALL expose images, text, collection links and section ordering through the Shopify theme editor.
- R3: WHEN a customer browses products, the system SHALL use Shopify products, collections, prices and inventory as the source of truth.
- R4: WHEN a customer selects an unavailable variant, the system SHALL prevent purchase and communicate availability clearly.
- R5: WHEN adding a valid variant to the cart, the system SHALL preserve Horizon's real cart workflow and show loading, success and failure states.
- R6: WHEN proceeding to payment, the system SHALL use Shopify checkout with configured provider integrations. Wompi/PSE, Addi and Sistecredito SHALL not be represented as active until their availability is verified for this merchant.
- R7: WHEN navigating at 360, 390, 768 and 1440 CSS pixels, the system SHALL avoid horizontal overflow and preserve usable navigation and purchase controls.
- R8: WHEN using a keyboard or reduced-motion preference, the system SHALL retain visible focus, operable dialogs and understandable feedback without unnecessary movement.
- R9: WHEN content is missing, the system SHALL not fabricate inventory, reviews, shipping promises, credit terms or discount claims.
- R10: WHEN preparing a release, the team SHALL validate an unpublished Shopify theme preview and the purchase flow before publication.
- R11: WHEN source files change, structural documentation SHALL be refreshed; Liquid coverage SHALL be explicitly verified rather than inferred from Graphify's JavaScript graph.

## Required owner inputs

- Facebook/Instagram link and authorized product photography.
- Final logo files, preferably SVG or transparent PNG; supplied boards guide identity.
- Product catalogue: names, prices, sizes, colors, stock and size measurements.
- Shipping coverage, costs, lead times, returns policy and business contact information.
- Shopify collaborator access and confirmation of merchant onboarding with payment providers.
- Approval of scope and design before theme implementation.

Never send private payment credentials in chat or commit them to the theme.
