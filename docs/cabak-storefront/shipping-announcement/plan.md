# Free-shipping announcement — local preview

## Approved requirement

The user requests a discreet banner announcing free shipping for purchases greater than COP 300,000, matching CABAK and reviewed locally before any push. This is a presentation change, not a shipping-rate configuration.

## Acceptance criteria

- WHEN a storefront page uses the header group, it SHALL show “Envío gratis en compras mayores a $300.000 COP” above the header.
- WHEN viewed at 320, 390, 768 and 1440 px, the message SHALL remain legible without clipping or covering menu, account or cart controls.
- WHEN JavaScript is unavailable or reduced motion is enabled, the message SHALL remain readable.
- The announcement SHALL use existing Montserrat, brown #735238 and cream #F2ECE4, without a popup, new carousel, automatic motion or new dependencies.
- No push, live-theme publication or shipping-rate mutation SHALL occur in this increment.

## Design decision

Replace the existing generic announcement in the native header group rather than stack another strip. Keep one message in normal document flow. Set 14px text, comfortable line height, and use the available width for a single message; allow wrapping on narrow screens. No CTA is needed because there is no approved shipping-policy destination. No animation: repeated promotional text benefits from immediate readability.

The threshold is strictly greater than COP 300,000, following the user's wording; do not say “desde”. Coverage, exclusions and checkout rates must be confirmed before production activation. This banner does not grant free shipping at checkout.

| Before | After | Why |
| --- | --- | --- |
| Generic brand announcement | Specific free-shipping message | Communicates the new benefit without extra vertical sections |
| Single-message container reserves arrow space | Single message uses available width | Avoids unnecessary wrapping on mobile |
| 12px message | 14px with comfortable leading | Improves readability while keeping a compact strip |

## Tasks and validation

1. Record the current header and reuse its existing announcement block.
2. Update local configuration and scoped single-message styles.
3. Inspect in a real browser at four widths; check no-JS, reduced motion, colors and overlap. Save preview screenshots outside the theme.
4. Leave local preview running and record results. Await separate push authorization.

Skill scope: component-only change; preserve the existing design direction, skip the full-page draw and unrelated redesign. No imagery or decorative motion is needed.

## Requested visual refinement

The user explicitly requested contrasting emojis: prefix the existing message with 🚚 and suffix it with ✨. Preserve all words, colors and shipping semantics. Native emoji appearance varies by device. This user request overrides the design skill's default no-emoji rule. Keep the preview local; no push.

## Validation — 2026-10-22

- Preview: http://127.0.0.1:9292 (development theme only).
- Browser checks passed at 320/390/768/1440px: exact text, 14px type, no clipping or horizontal overflow, no autoplay, banner ends before header controls begin.
- Height: 59.2px at 320px (two balanced lines); 39.6px at the other widths (one line).
- No-JS checks passed on home, collection, Contacto and cart. Responsive checks used reduced motion. Screenshots at all four widths were visually reviewed.
- Shopify Theme Check: 0 errors, 6 existing warnings. `git diff --check` passed.
- Evidence: `/tmp/cabak-shipping/validation.json`, `after-320.png`, `after-390.png`, `after-768.png`, `after-1440.png`, `theme-check.json`.
- The full-page taste inspector ran at 1440/768/390 and reported 8 FAIL / 10 WARN. It is not a clean full-page audit: reports include existing hero labels, placeholders, layout and motion criteria outside this component's scope. Its banner contrast warning assumes the body cream background, missing Shopify's separate brown background layer; screenshots show cream text on brown. The component was checked independently rather than redesign the approved storefront to satisfy unrelated page rules.
- Visual critique: the benefit is immediately readable, the existing brown strip carries the message, and mobile wrapping preserves header access. No new image assets, stock illustrations or animations. The site still needs its real catalog imagery; this change does not address that separate launch task.
- No commit, push, live publication or shipping-rate change. Before production, configure and test the corresponding checkout rate and confirm coverage/exclusions.

Emoji refinement validation: passed at 320/390/768/1440px with exact copy, no overflow or clipping. Two lines at 320/390 (59.2px), one at 768/1440 (39.6px). Reviewed the 390px screenshot; emojis remain inline. Evidence: `/tmp/cabak-shipping/emoji-*.png`. No push.

User refinement: mirror the emoji pair on both sides: “🚚✨ Envío gratis en compras mayores a $300.000 COP ✨🚚”. Local preview only.

Readability refinement requested by the user: increase announcement text from 14px to 16px, preserving wrapping and local-only scope.

## Approved delivery

The user authorized Git push after reviewing the final 16px version with mirrored emojis. Final browser checks passed at 320/390/768/1440px: exact 16px size, no clipping, no horizontal overflow and no header overlap. Height is 64.8px on the two mobile widths and 42.4px on tablet/desktop. Evidence: `/tmp/cabak-shipping/larger-*.png`. This authorization does not configure shipping rates or publish the live theme.
