# CABAK account entry in the storefront

## Contract

The merchant requested a branded login/registration experience with the existing navigation bar, while retaining the approved email-code authentication contract. Provide `/pages/mi-cuenta` using the existing theme layout and Shopify's documented account component. The account page is the branded entry surface; the hosted authentication service remains controlled by Shopify.

- WHEN a signed-out visitor chooses the header account link, the store SHALL open the CABAK account page once that page exists.
- WHEN a visitor chooses `Continuar con mi correo`, the native Shopify account component SHALL open the real email-code form within the storefront.
- WHEN no account exists, the copy SHALL explain that email verification creates it; no separate password/signup form is added.
- WHEN JavaScript is unavailable, the page SHALL offer a working native hosted-login link.
- WHEN a signed-in customer opens the page, it SHALL provide real account/profile navigation through Shopify routes.
- The page SHALL retain existing header, category navigation, search/cart, logos, fonts and footer, with no copied product imagery.
- At 320, 390, 768 and 1440 px, the page and native form SHALL fit the viewport and work with keyboard/touch.

## Design and boundaries

Use a quiet two-column composition on desktop: a CABAK brand statement and an account entry panel; collapse to one column on mobile. Preserve Montserrat, cream, sand and brown tokens. No decorative animation, invented benefits or product photos.

Files: `sections/cabak-account.liquid` renders the semantic content and native component; `assets/cabak-account.css` scopes styling; `templates/page.cabak-account.json` registers the template; `snippets/header-actions.liquid` routes signed-out visitors to the page with a native-component fallback if the page is missing. No custom auth JavaScript, database, password handling or OTP proxy.

The supported account component exposes a trigger and sheet, not an inline standalone email form. Therefore the page's email CTA opens that native sheet. A later Shopify-managed redirect may leave the theme; this change does not promise a custom navigation bar on Shopify's hosted verification pages.

## ADR: storefront page plus native account component

Chosen because it provides the requested full CABAK navigation without replacing Shopify authentication. Rejected: injecting Liquid into hosted sign-in (unsupported), calling undocumented OTP endpoints (fragile), and legacy password accounts (contradicts the agreed contract).

The connected MCP confirms the Basic plan and does not expose checkout-branding queries/mutations in its schema. It can create the content page. Theme changes are delivered only to the existing development theme; the live theme is not published. The page body includes a native-login fallback for themes without this template.

## Tasks and verification

1. Add the section, stylesheet and template.
2. Connect the signed-out header route with a missing-page fallback.
3. Run Theme Check, upload to the development theme and create the page through MCP after checking for an existing handle.
4. Validate the actual route, header, responsive layout, native email form and fallback; capture desktop/mobile evidence.
5. Record page ID and deployment status. Email delivery and an authenticated session still require an authorized real-email test.

## Removal requested by merchant

The merchant requested removal of the intermediate account page. WHEN the header account control is opened, it SHALL use the original native Shopify account component directly, without a `mi-cuenta` landing page. Preserve hosted branding, Spanish locale and email-code authentication.

Implementation: restore the original header snippet, remove the dedicated section/stylesheet/template and obsolete screenshots, delete only the Shopify content page with handle `mi-cuenta`, and retain native-entry validation. Historical implementation records remain for traceability. Verify absence of custom routing and run the existing responsive native-entry checks.
