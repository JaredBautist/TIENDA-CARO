# Contact channels

## Approved scope
Add the supplied Instagram, Facebook, WhatsApp and complete email address to the existing footer and contact page. Preserve CABAK colors, typography, navigation and contact form.

## Acceptance criteria
- WHEN viewing the footer, visitors SHALL find three labeled social icon links and the complete linked email address.
- WHEN viewing Contacto, visitors SHALL find all four channels above the existing form.
- WHEN activating a channel, its link SHALL use the supplied profile, wa.me/573148224047, or mailto:cabak.activewear@gmail.com.
- Icons SHALL use #735238; links SHALL have visible keyboard focus and minimum 44px touch targets.
- At 320px through desktop widths, contact content SHALL remain readable without horizontal overflow.

## Design
Preservation mode; variance 3, motion 1, density 3. Existing Liquid/CSS theme, Montserrat and cream palette. Shared stateless Liquid snippet prevents differing contact destinations. Local Tabler outline SVG assets provide consistent icon sizing without JavaScript or a runtime dependency. Footer uses compact icons and a separate email row; contact page uses labeled links in two columns, collapsing to one below 768px. No external embeds or new photography.

## Tasks
1. Add shared contact links and licensed icons.
2. Integrate footer and contact template without changing form behavior.
3. Check Liquid, destinations, keyboard targets and mobile/desktop layout.

## Validation results
- Theme Check: zero errors; existing warnings remain in two unrelated files.
- Browser checks on home and /pages/contact at 320, 390 and 1440px: no horizontal overflow; all four links render with the supplied destinations, #735238, and minimum 44px height.
- Mobile screenshot inspected: icons align, full email remains visible, form retained. Contact heading and submit button use Spanish.
- No messages sent and no forms submitted. Changes available in local development preview; production publication not performed.
