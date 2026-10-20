# Customer accounts tasks

- [x] Inspect theme entry point, rendered locale, store plan and existing API access.
- [x] Check official Shopify support for Google, account component and hosted branding.
- [x] Draft requirements, design and authentication alternatives.
- [x] Agree on passwordless first-time registration and the hosted header limitation; remove Google from scope.
- [x] Obtain locale authorization and enable/publish Spanish without overwriting translations.
- [x] Verify the merchant's primary-language change: Spanish is the sole published primary locale; storefront and hosted login render Spanish.
- [x] Validate signed-out entry at 320, 390, 768 and 1440 px, including keyboard opening, Escape, email labels/autofill and overflow.
- [x] Implement the requested CABAK storefront account page with shared navigation, native email-code access and a no-JavaScript fallback.
- [x] Create the actual `mi-cuenta` content page through MCP and upload its template to the development theme.
- [x] Verify header routing, 44px account target, responsive page and native form at all four widths; preserve signed-in native navigation in Liquid.
- [ ] Inspect actual account mode, language settings, active checkout/accounts configuration and Shop sign-in dependency through authorized admin access.
- [ ] Record previous administrative settings for rollback; identify shared checkout/language effects before applying changes.
- [ ] Apply supported CABAK branding and Spanish locale configuration; adjust theme code only if a verified gap remains.
- [ ] Keep email-code access and remove optional social/Shop access through supported settings without silently changing payment methods.
- [ ] Verify AUTH-01, AUTH-04 through AUTH-07 on desktop/mobile, including actual hosted pages.
- [ ] With authorized test accounts, verify AUTH-02, AUTH-03 and AUTH-08 without logging codes, credentials or customer data.
- [ ] Record results and any external configuration dependencies; run Theme Check if theme source changes.

Spanish was enabled/published through the API and the merchant set it as primary. The merchant also applied the hosted logo and colors. The new storefront account page has now been uploaded to the development theme and verified; see `storefront-page.md` and `validation.md`. Hosted typography remains separate, and signed-out checks do not prove authenticated behavior. No live theme publication or OAuth activation was performed.
