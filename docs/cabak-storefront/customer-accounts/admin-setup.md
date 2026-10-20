# Customer account administration

## Applied through the Admin API

Spanish (`es`) was enabled and published on 2026-10-20. Before this change, the only locale was published, primary English (`en`). Both mutations returned no user errors. No translations were imported or overwritten.

Publishing Spanish does not make it the primary language or prove that every market has a Spanish route. The local `/es` probe still returned an English 404 page; it is not a usable preview link.

## Remaining panel settings

Update at 21:20 UTC: step 1 is complete. Spanish is now the sole published primary locale, and both the storefront account component and hosted login were verified in Spanish. The historical `/es` probe below is not needed for the primary-language storefront.

These are configuration operations, not theme Liquid edits. The current tool session has CLI Admin API access but no authenticated browser control of the merchant admin.

1. **Settings → Languages:** use the menu beside the current default English language, choose **Change default**, select **Spanish**, and save. The public Admin API cannot change the primary locale. Spanish was newly enabled in this task; no custom Spanish translations were created by it. If another person has added translations meanwhile, export them before changing the default.
2. **Settings → Customer accounts → Authentication → Manage:** retain email verification, do not connect Google or Facebook. Turn off **Sign in with Shop** if the independent toggle is available. If Shopify requires deactivating Shop Pay, stop and assess the payment impact rather than disabling payments as a styling change.
3. **Settings → Checkout → Configurations → Edit → Sign-in:** upload `assets/cabak-wordmark-transparent.png`, set cream background `#F2ECE4` and brown accent `#735238`. Start with a logo width of 240 px and check the mobile preview before saving. Do not add a hero image. Use Montserrat for body/headings wherever the editor exposes the setting; inspect shared-setting impact on checkout before saving.
4. Review the customer-account header/logo separately if it inherits a different image. The full storefront navigation is already present around the native account component, but cannot be injected into hosted sign-in.

## Verification after saving

- Reload the storefront in a fresh browser session and verify `html[lang="es"]` and Spanish account controls.
- Open account access at 320, 390, 768 and 1440 px; verify the actual email form, focus handling, labels, no password/social options and no overflow.
- Open the hosted login as well: verify CABAK identity, Spanish text and return navigation independently of the storefront component.
- Use an explicitly authorized test email for code delivery and new/existing account verification. Never store a verification code, authenticated session or customer data in screenshots/logs.

## Rollback

No theme source changed. Before switching primary language, Spanish can be unpublished with `shopLocaleUpdate(locale: "es", shopLocale: { published: false })`. After switching primary language, change the default back through the admin first if rollback is requested. Restore branding/authentication settings from the values recorded immediately before those panel changes.

## Platform references

- [Primary-locale API limitation](https://shopify.dev/docs/apps/build/markets/manage-translated-content)
- [Change default language](https://help.shopify.com/en/manual/international/languages/manage-languages)
- [Basic-plan editor branding options](https://help.shopify.com/en/manual/customers/customer-accounts/customize-customer-accounts/customize)
- [Branding API plan requirements](https://shopify.dev/docs/apps/build/checkout/styling/checkout-and-accounts-configuration)
- [Shop sign-in and Shop Pay dependency](https://help.shopify.com/en/manual/online-sales-channels/shop/sign-in-features)
