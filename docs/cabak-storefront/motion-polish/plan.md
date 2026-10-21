# CABAK usability and motion proposal

Status: Approved for local implementation and testing on 2026-10-21. Push and publication require subsequent user authorization.
Baseline: 617710c. Local development preview evaluated on 2026-10-21.

## Scope and identity
Preserve Montserrat, cream/brown palette, logos, existing routes, Spanish content, native commerce and mobile header layout. This is a targeted motion and usability pass, not a redesign. No photos downloaded or generated. No new framework or animation library.

## Findings
Sources: assets/cabak.css, assets/cabak-rail.js, blocks/contact-form.liquid, templates/index.json, browser captures at 390/768/1440px.
- Three product rails currently render twelve placeholder cards. Missing product photography is the main visual limitation; animation cannot replace it.
- Product photos already have a small hover zoom; carousel scrolling already respects reduced motion. Preserve these behaviors.
- Custom collection disclosures open immediately; category tiles have little interaction feedback.
- Contact labels exist for screen readers but are visually hidden. Placeholders disappear during typing.
- The home page had no document-level horizontal overflow at the three measured widths.
- A previously observed touch-desktop header collision requires a fresh targeted regression check before motion is introduced.
- The generic taste inspector reported 10 FAIL and 9 WARN. These are not 19 confirmed product defects: its cream/eyebrow/image-count preferences conflict with approved brand and placeholder constraints. Its 1:1 announcement contrast and missing-title reports require manual DOM verification; screenshots show a brown announcement background and a visible headline. Do not redesign or claim WCAG failures from these automated findings alone.

## Recommended package
| Before | Proposed after | Purpose |
| --- | --- | --- |
| Static campaign copy | One restrained 12px settling movement, 300ms; keep title and CTA readable from first paint | Give the first screen a polished arrival without delaying its message |
| Categories appear without hierarchy | Reveal category groups once on viewport entry, 12px travel, 320ms, 50ms stagger capped at 150ms | Guide scanning through the eight collections |
| Immediate mouse-open collection menu | 160ms opacity/6px entrance anchored below trigger; keyboard opening remains immediate | Connect menu to its trigger |
| Limited control feedback | 120ms press feedback, subtle category-image zoom on fine-pointer hover only | Make clickable elements recognizable |
| Placeholder-only visible form prompts | Persistent Spanish labels above existing fields | Keep field meaning visible while typing |
| Carousel arrows can look unrelated to their section on mobile | Evaluate and tighten control-to-section spacing; hide controls only when no scrolling is possible | Make navigation easier to understand |

Do not animate every placeholder, the logo continuously, or the entire header. Do not add autoplay, parallax, scroll hijacking, particles, video or decorative loops. Keep existing content order. Any removal of placeholder sections needs separate approval.

## Implementation design
- CSS tokens in a scoped CABAK motion stylesheet, with exact properties rather than transition: all.
- Native IntersectionObserver plus Web Animations API for one-time category entrances. Progressive enhancement: server-rendered content remains visible if scripting fails.
- Only transform and opacity animate. No layout dimensions, blur or persistent will-change.
- Cancel entrances when reduced motion changes or keyboard focus reaches animated content. Reduced-motion mode renders the final static state.
- Track observed elements per section; disconnect observers and cancel animations on Shopify section unload; support editor section reload without duplicate listeners.
- Keep native links, disclosure semantics, cart/account behavior and contact submission unchanged.
- Target added CSS and JavaScript budget: at most 5KB gzip combined, zero third-party runtime dependencies. This is an acceptance budget, not a measured result.

## Acceptance criteria
- WHEN motion is enabled, category items SHALL enter at most once per section lifecycle without preventing clicks or keyboard focus.
- WHEN reduced motion is enabled, new travel/scale effects SHALL stop and all content SHALL remain visible.
- WHEN JavaScript fails or is disabled, content and navigation destinations SHALL remain accessible.
- WHEN controls receive keyboard focus, feedback SHALL be immediate and visible.
- WHEN Contact fields contain text, their visible Spanish labels SHALL remain associated with the fields.
- WHEN viewing at 320, 390, 430, 768, 1024 and 1440px, branding and controls SHALL not overlap or introduce document overflow.
- WHEN a rail cannot scroll, navigation controls SHALL not offer unavailable movement.
- New animation SHALL not introduce layout shifts; compare browser traces and Lighthouse before/after under the same conditions. Report measured values without guaranteeing real-device frame rate.

## Ordered tasks
1. Capture baseline interactions, verify header touch-mode behavior, confirm semantic heading and real contrast.
2. Implement motion primitives and reduced-motion lifecycle.
3. Apply category entrances, campaign settling and pointer menu feedback.
4. Add persistent contact labels and refine carousel control grouping.
5. Validate keyboard, rapid interactions, editor reload, script-disabled fallback and reduced motion.
6. Compare mobile/desktop captures and performance; present preview for user review. No push or publication unless requested.

## Deferred improvements
Real merchant product photos; size guide based on actual measurements; shipping/returns information based on approved policies; filters after real products and variants are available. Do not invent commercial information.

## Evidence and limits
Inspector report: /tmp/cabak-motion-audit/report.json. Full mobile capture: /tmp/cabak-audit-390.png. Additional captures: /tmp/cabak-audit-768.png and /tmp/cabak-audit-1440.png. These are local artifacts, not production or physical-phone evidence. No authenticated purchase or contact submission was attempted. No final design score or performance improvement claimed before implementation.

## Local revision requested by user
The initial motion was not noticeable enough. Increase category travel to 28px with 600ms duration and 90ms stagger (270ms cap); animate product section headings once so movement is visible before reaching the bottom categories. Give campaign text a readable, staggered 24px settling entrance over 650ms. Preserve instant controls, reduced motion, progressive enhancement and no-push boundary.
