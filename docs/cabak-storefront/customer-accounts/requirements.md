# CABAK customer accounts requirements

Status: approved on 2026-10-20. User selected email verification codes for both sign-in and registration and explicitly removed Google from scope.

## Scope

Provide Spanish customer sign-in and first-time registration with CABAK branding and email verification codes only. Preserve the approved storefront navigation, logos, palette, Montserrat, collections and cart.

## Acceptance criteria

| ID | Requirement | Verification |
| --- | --- | --- |
| AUTH-01 | WHEN a signed-out customer opens the header account control, the system SHALL expose Shopify's supported authentication flow while retaining the storefront header where the account component supports it. | Desktop and mobile browser checks; verify actual component behavior. |
| AUTH-02 | WHEN the customer enters their email, Shopify SHALL send a one-time verification code and SHALL establish a session only after valid verification. | Authorized test account; invalid, expired and resent code paths. |
| AUTH-03 | WHEN a new customer verifies their email, Shopify SHALL create their account; WHEN an existing customer verifies it, Shopify SHALL access the existing account. | Authorized new and existing test accounts; verify profile/order association. |
| AUTH-04 | WHEN any account entry, verification, error or profile screen opens, store-controlled content SHALL be Spanish. | Inspect rendered locale and complete flow. |
| AUTH-05 | WHEN the hosted login opens, it SHALL show the CABAK logo, cream background, brown accent and Montserrat where Shopify supports those settings. | Checkout/accounts editor and rendered hosted login. |
| AUTH-06 | WHEN viewed at 320, 390, 768 and 1440 CSS pixels, the flow SHALL remain usable without horizontal overflow or clipped controls. | Browser viewport checks and visual inspection. |
| AUTH-07 | WHEN operated by keyboard or assistive technology, controls SHALL have names, visible focus and accessible errors; email/code fields SHALL permit paste and supported autofill. | Keyboard, accessible-name and validation checks. |
| AUTH-08 | WHEN login is cancelled or fails, the flow SHALL remain recoverable without losing the cart; WHEN login succeeds, the session SHALL be recognized by Shopify. | Authorized end-to-end tests, including return navigation and cart preservation. |

## Boundaries and dependencies

- No custom password database, mock login, fake Google button, legacy-account switch or custom identity provider.
- No copied product imagery or redesign of approved storefront sections.
- Full Liquid navigation cannot be inserted into Shopify's hosted sign-in page. The existing storefront account component is the recommended entry point; hosted pages receive supported branding.
- Google and other social providers are excluded. Verification codes and session credentials must never enter theme code, repository or logs.
- Remove the optional Shop sign-in through supported admin settings when available. If tied to active Shop Pay, do not silently disable a payment method; surface that dependency before altering checkout payments.
- The user authorized locale read/write access. Changing the primary locale and configuring Basic-plan hosted branding still require the administrative panel.
- Changing primary language/shared checkout branding can affect more than this screen. Record existing settings and review the exact scope before applying.
