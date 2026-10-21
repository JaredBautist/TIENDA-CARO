# Local validation

Date: 2026-10-21. User authorized pushing the tested changes on 2026-10-21. No production publication performed.

## Implemented
- Campaign copy: readable transform-only 650ms arrival, staggered by 80ms.
- Category tiles and product headings: one-time viewport entrance, 600ms, 28px travel, 90ms stagger capped at 270ms. Native IntersectionObserver and Web Animations API; static server-rendered fallback.
- Pointer-open collection menu: 160ms entrance. Keyboard cancels animation immediately.
- Scoped press feedback and category photo hover on fine pointers, honoring reduced motion.
- Persistent contact labels with paired field containers; names, order and submission unchanged.
- Non-scrollable rail controls hidden. Keyboard-triggered rail scrolling immediate. Mobile control spacing tightened.

## Checks
- `node capture/validate-cabak-motion.cjs`: passed at 320, 390, 430, 768, 1024 and 1440px. Checks one-time entrances, focus cancellation, reduced-motion cancellation, editor lifecycle under reduced motion, visible associated labels, no overflow, and visible no-JS category destinations.
- `node capture/validate-mobile-header.cjs`: passed at 320, 390, 430, 610 and 749px in native and forced drawer states.
- Additional browser checks passed: mouse menu entrance exists, Escape closes, keyboard opening has no animation, and rail controls hide when content fits.
- Contact and category screenshots visually reviewed on phone, plus tablet/desktop home captures. Existing logo, colors, typography and content order preserved.
- Theme Check: zero errors. JavaScript syntax and git whitespace checks passed.
- New motion assets: 1,861 bytes gzip combined. Existing rail module changes are additional small code, with no third-party runtime dependency.

## Performance evidence and limitations
Same local Chromium viewport (390x844), single samples, no network throttling:
- Before: CLS 0.00244, LCP 676ms.
- After: CLS 0.00107, LCP 504ms.
These noisy single samples are sanity checks, not evidence of a speed improvement or a production performance guarantee.

Lighthouse 13.5.0 was run on the local preview. It returned performance 43, accessibility 100, LCP 46.8s, CLS 0.004 and TBT 520ms, with the explicit warning: "The page loaded too slowly to finish within the time limit. Results may be incomplete." These results are inconclusive for release performance. There is no valid paired Lighthouse baseline. Re-run against a stable deployed preview before making performance claims.

Reports and captures are in /tmp/cabak-motion/. No physical-device test, real contact submission, authenticated account flow or purchase was performed.

## Retained baseline limitations
The campaign heading is still a span, and multiple product rails remain placeholders. Those existing semantic/content issues were not silently redesigned in this motion patch. The automated taste inspector's earlier failures were not all resolved; this is a scoped motion implementation, not a whole-site redesign or accessibility certification.

The stronger motion revision passed the same six-width regression suite and no-JavaScript fallback check. Lighthouse and size figures above describe the initial motion version; no new Lighthouse result is claimed for the timing revision.
