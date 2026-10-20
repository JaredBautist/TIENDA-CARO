# Homepage catalog alignment and restrained typography

## Requirements

- WHEN the homepage category grid renders, it SHALL show Enterizos, Sets deportivos,
  Faldas, Shorts, Licras largas, Tops, Bolsos and Medias, in that order.
- WHEN a category tile is selected, it SHALL open its existing native collection.
- The eight photo slots, colors, logos and responsive grid SHALL remain intact.
- The requested restrained typography trial SHALL use Montserrat Medium for titles
  and preserve Montserrat for body text and controls.

## Design

Preservation mode on the existing Shopify Horizon storefront. DESIGN_VARIANCE: 3,
MOTION_INTENSITY: 2, VISUAL_DENSITY: 4. Preserve the approved beige/brown palette,
light appearance, native CSS/Liquid, interactions and route structure. No new motion.
The supplied instruction to leave photo slots takes precedence over generic asset guidance.

Configure the existing eight blocks with collection handles, exact merchant labels
and explicit links. Reuse existing collection records and the existing font selector;
no new component, framework, font download or data abstraction is needed.

| Before | After | Why |
| --- | --- | --- |
| Generic categories, unlinked tiles | Eight supplied categories linked to collections | Match the real catalog and dropdown |
| Cinzel display titles | Montserrat Medium titles | Sober sportswear presentation after rejected serif trials |

## Tasks

- [x] Correct category block settings and choose the native Montserrat heading font.
- [x] Verify tile labels, destinations, font loading and responsive layout.
- [x] Sync development preview and record validation.

## Validation

Confirmed all eight exact tile labels and collection destinations, with a real
click opening Enterizos. At 320, 390, 768, 1200 and 1440px: no document overflow
or clipped category labels; Montserrat loaded at heading weight 500. All nine
collection route checks passed, including cart checks. Theme Check: zero errors,
six existing warnings. Development preview upload succeeded.

Local Lighthouse (development server): {'performance': 0.59, 'accessibility': 1}. Warnings: ['The page loaded too slowly to finish within the time limit. Results may be incomplete.']. This is a local measurement, not production certification.
