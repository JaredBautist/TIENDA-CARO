# Customer account validation

Date: 2026-10-20. Status: Spanish localization and signed-out entry verified; hosted branding and authenticated verification pending.

## Applied and verified

- The merchant authorized locale read/write access through Shopify CLI.
- `shopLocaleEnable(es)` and `shopLocaleUpdate(es, published: true)` succeeded without user errors.
- At 21:20 UTC, after the user's second confirmation, the Admin API returned Spanish as the sole published, primary locale. Both the storefront and hosted login now render in Spanish.
- The existing Horizon `shopify-account` component inherits CABAK cream (`#F2ECE4`) and Montserrat. No replacement form or theme CSS was necessary.

## Signed-out browser checks

Command:

```sh
PLAYWRIGHT_MODULE=/home/balckyshadown/.cache/ms-playwright-go/1.57.0/package node capture/validate-account-entry.cjs
```

At 320, 390, 768 and 1440 px:

| Check | Result |
| --- | --- |
| Storefront returns HTTP 200 | Pass |
| Account entry opens with keyboard | Pass |
| Email field is visible and supports email autofill | Pass |
| No password field | Pass |
| No horizontal page overflow; email field fits viewport | Pass |
| Escape dismisses the native dialog | Pass |
| Spanish document, heading and email label | Pass after the primary-language change |
| No visible Shop/Google access in account entry | Pass |

The latest screenshots show only the email form; an earlier probe showed the Shop button. This is not yet proof that the administrative Shop sign-in setting is disabled. Confirm that setting and the hosted login independently.

A fresh-browser visit to the public `/account/login` after the merchant's branding changes rendered `es-CO`, `Iniciar sesión`, `Correo electrónico` and Spanish marketing-consent text. CABAK's wordmark now loads at 240 px wide; the background is `rgb(242, 236, 228)` (`#F2ECE4`) and focus/privacy-link accents appear brown. At 390 and 1440 px there is no horizontal overflow. The mobile logo was explicitly awaited and measured at x=75, y=40, width=240, height=95. Screenshots: `/tmp/cabak-login-branded-390.png` and `/tmp/cabak-login-branded-1440.png`.

Remaining brand differences: the email field still computes to the platform system sans-serif stack rather than Montserrat; the logo's accessible alternative text is still `Logo de My Store`. The editor screenshot supplied by the user is English, but the public Spanish-browser flow was verified in Spanish.

The complete signed-out entry script passed at all four widths after this change. It does not verify authenticated behavior.

Screenshots were captured under `/tmp/cabak-account-entry/`. The test does not send emails, create customers, enter codes or authenticate. Code delivery, invalid/expired-code handling, session persistence, cart preservation through login and new/existing customer association remain unverified.

## Source checks

- `node --check capture/validate-account-entry.cjs`: pass.
- `git diff --check`: pass.
- Initial localization work required no theme changes. The subsequent storefront page implementation is recorded below.

## Storefront account page implementation

- Created `gid://shopify/Page/162781823219`, handle `mi-cuenta`, template `cabak-account`, through the authenticated Shopify MCP. Page creation returned no user errors.
- Added a dedicated CABAK section, scoped stylesheet and template. Signed-out header account links open the page; signed-in visitors retain Shopify's native account menu. If the content page is unavailable, the header falls back to its previous native component.
- The page uses the shared CABAK header/footer, transparent logos, Montserrat and existing cream/brown colors. The email CTA opens the supported Shopify account sheet; registration uses the same email verification flow. No custom OTP API or password form was introduced.
- Uploaded changes to development theme `189521953011`. The live/main theme was not published or modified. The content page is published; other themes without the template display its simple native-login fallback body.
- Browser checks passed at 320, 390, 768 and 1440 px: account-link navigation, header and both logos visible, registration explanation, Spanish native form, email autofill, no password/social controls, no horizontal overflow and Escape dismissal.
- A new touch-target assertion caught a narrow/misaligned header account link. Reusing the theme's SVG wrapper fixed it; all four widths now pass the 44px target and vertical-centering checks.
- With JavaScript disabled, the fallback link to hosted Shopify login is visible and the unresolved custom element is hidden.
- Theme Check: zero errors and six existing warnings. Static JS syntax and whitespace checks pass.
- Email delivery, valid/expired-code handling, new/existing customer verification, signed-in UI and cart/session preservation still require a real authorized test account.

Preview: `https://zy7ii3-xp.myshopify.com/pages/mi-cuenta?preview_theme_id=189521953011`.
Local: `http://127.0.0.1:9292/pages/mi-cuenta`.

Anonymous remote preview verification redirected to `/password` (the store is protected). The successful UI tests above used the authenticated local Shopify development server. The remote preview therefore requires the merchant's existing preview/store access; public availability is not claimed.

## Completion requirements

### Independent-account verification follow-up

- The merchant explicitly excluded their personal account from testing. No personal email, customer account or mailbox was used, and no verification message was sent.
- Re-ran `capture/validate-account-entry.cjs`: signed-out entry passed at 320, 390, 768 and 1440 px.
- Inspected the rendered native sheet on the local account page: the CABAK header is visible, the native form action is `/account/login` (GET), and no one-time-code field is present before submission.
- A separate fresh Spanish browser visiting the store's `/account/login` reached `https://shopify.com/authentication/86246457587/login`, with `es-CO`, `Iniciar sesión`, no password field and no theme header. No email was submitted. This establishes the hosted route behavior, not successful authentication.
- Shopify documents that the account component redirects to customer authentication. The themed entry page must not be presented as an embedded replacement for every hosted authentication step. Reference: <https://shopify.dev/docs/api/storefront-web-components/components/shopify-account>.
- Production authentication validation remains incomplete until an independent, controlled test mailbox is available to verify code delivery, first registration, subsequent login, logout and session/cart behavior. Creating an Admin API customer record would not establish those results.

1. Completed: verify Spanish is primary through both Admin API and rendered storefront.
2. Confirm email-only administration, including any Shop Pay dependency.
3. Logo, background and mobile/desktop layout verified on hosted login; finish typography and accessible store naming.
4. Completed for localization: signed-out checks pass at all four widths. Recheck hosted branding when saved.
5. Complete an authorized email-code test before claiming authentication has been validated.
