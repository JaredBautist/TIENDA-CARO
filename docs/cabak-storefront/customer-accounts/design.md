# CABAK customer accounts design

Status: native passwordless email contract approved, 2026-10-20. Google removed by the user.

## Verified starting point

- Shopify Admin API reports plan `Basic`, shop name `My Store`, customer accounts `OPTIONAL`. This enum does not establish the new/legacy account version by itself.
- `snippets/header-actions.liquid` already renders `shopify-account`; its CSS maps theme fonts, colors and radii to supported component variables.
- The local storefront renders `lang="en"`, `Shopify.locale = "en"` and English customer-account translations. Spanish hardcoded storefront copy does not localize Shopify authentication.
- The supplied screenshot shows the hosted passwordless login. Exact account/authentication settings still require admin inspection.
- Reading `shopLocales` through existing CLI authorization failed with missing `read_locales` / `read_markets_home` scope. No locale mutation was attempted.

## ADR: use native customer authentication

### Context

Customers need email-code registration, existing order history and checkout sessions. A visually similar local form alone cannot establish those sessions.

### Options

| Option | Consequence | Recommendation |
| --- | --- | --- |
| Native customer accounts and existing header component | Email verification; Shopify owns sessions and account creation. Hosted sign-in has platform-defined customization limits. | Accepted. |
| Legacy Liquid login/register | Greater page layout control, but password-based access does not match the selected email-code contract. | Reject for this scope. |
| Custom identity provider | Additional identity infrastructure; Shopify documents this option for Plus. Current store is Basic. | Reject for this scope. |

### Decision and consequences

Retain native Shopify customer accounts and the existing `shopify-account` component. Use email verification only. Brand the hosted fallback through the checkout/accounts editor. Do not add unsupported CSS injection, password storage or a second customer database.

Full storefront navigation remains on storefront surfaces. Do not promise the same Liquid header inside hosted authentication. Confirm the actual modal/redirect behavior before release.

## Ownership and sequence

1. Theme owns navigation, logo assets and documented component style variables.
2. Shopify owns email verification, customer identity, session, profile and order association.
3. Shopify owns code delivery, verification, expiration and abuse controls.
4. Customer opens account component, enters email and completes code verification.
5. Shopify creates/recognizes the customer and returns to the supported account/storefront destination.

No new application/domain modules or persistence model are required: reuse the platform boundary rather than inventing a local authentication service.

## Visual and content contract

- Preserve approved Montserrat and transparent CABAK symbol/wordmark assets.
- Cream page `#F2ECE4`, light header `#F8F4EE`, brown accent `#735238`, ink `#35271F`, border `#C7B5A4`; verify contrast in the actual rendered controls.
- Restrained layout, no decorative animation or product photography. Design dials: variance 3, motion 2, density 4.
- Target Spanish terminology: `Iniciar sesión`, `Crear cuenta`, `Correo electrónico`, `Continuar`, `Código de verificación`, `Volver a la tienda`. Use native translations where supplied; audit rather than assume exact editable labels.
- Explain first-time registration as `Si aún no tienes cuenta, la crearemos al verificar tu correo`, if the chosen surface supports editable supporting copy.
- Do not preselect marketing consent or change its store-wide behavior as part of visual work.

## Skill application

Emil guidance informs focus, restrained interaction and recovery states. Design Taste informs preserving the existing visual identity. UI UX Pro Max's targeted accessible-authentication result requires paste/autofill and a non-cognitive alternative. Its generic ecommerce palette/typography recommendation did not match CABAK and was rejected in favor of the approved brand.

## Official references

- [Shopify sign-in options](https://help.shopify.com/en/manual/customers/customer-accounts/sign-in-options)
- [Account component](https://help.shopify.com/en/manual/customers/customer-accounts/customize-customer-accounts/account-component)
- [Hosted page branding](https://help.shopify.com/en/manual/customers/customer-accounts/customize-customer-accounts/customize)
- [Hosted sign-in customization limits](https://help.shopify.com/en/manual/customers/customer-accounts/upgrade)
- [Managing Shop sign-in](https://help.shopify.com/en/manual/online-sales-channels/shop/sign-in-features)
