# Graph Report - theme_export__zy7ii3-xp-myshopify-com-horizon__20OCT2026-1240pm  (2026-10-20)

## Corpus Check
- 193 files · ~318,124 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 294 file(s) not represented in the graph (top: .liquid 287, .css 5, (none) 2)

## Summary
- 1455 nodes · 2872 edges · 110 communities (44 shown, 66 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dab717af`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- FacetsFormComponent
- component.js
- QuickOrderListComponent
- CartItemsComponent
- Component
- morph.js
- Slideshow
- standard-events.d.ts
- PaginatedList
- ProductFormComponent
- popover-polyfill.js
- ProductCard
- HeaderMenu
- utilities.js
- standard-actions.d.ts
- Scroller
- LayeredSlideshowComponent
- LocalizationFormComponent
- PredictiveSearchComponent
- QuantitySelectorComponent
- QuickAddComponent
- DragZoomWrapper
- slideshow.js
- global.d.ts
- OverflowList
- DeferredMedia
- onAnimationEnd
- qr-code-generator.js
- GiftCardRecipientForm
- ProductHotspotComponent
- component-cart-items.js
- onAnimationEnd
- StickyAddToCartComponent
- MarqueeComponent
- validate-cabak.cjs
- AnchoredPopoverComponent
- AnnouncementBar
- ShopifyStandardEvent
- Graphify integration design
- DisclosuresSummaryFit
- compilerOptions
- Graphify integration requirements
- CartDrawerComponent
- CartIcon
- Header brand refinement
- MediaGallery
- dialog.js
- ComparisonSliderComponent
- PricePerItemComponent
- AccordionCustom
- ThemePerformance
- view-transitions.js
- ScrollHint
- component.js
- StandardStorefrontEventMap
- VolumePricingInfoComponent
- CartErrorEvent
- CartNoteUpdateEvent
- CartViewEvent
- CollectionUpdateEvent
- CollectionViewEvent
- ProductViewEvent
- SearchUpdateEvent
- package.json
- ViewEventElement
- README.md
- tasks.md
- graphify-update.sh
- graphify-watch.sh
- header-actions.js
- PriceFacetComponent
- CABAK storefront design
- CABAK implementation handoff
- CollectionLinks
- Category page design
- facets.js
- FacetInputsComponent
- SortingFilterComponent
- FacetClearComponent
- FacetStatusComponent
- CABAK storefront requirements
- FacetRemoveComponent
- Collection dropdown
- theme-editor.js
- plan.md
- CabakRail
- fly-to-cart.js
- cabak-storefront/tasks.md
- Transparent brand assets
- QuickAddDialog
- ProductInventory
- CABAK reference-layout validation
- ShowMoreComponent
- reference-layout.md
- ProductPrice
- Mobile storefront refinement
- ProductSkuComponent
- scheduler
- ProductCustomProperty
- CABAK category pages
- Category page tasks
- Category page validation
- collection-hover.md
- header-color-trial.md

## God Nodes (most connected - your core abstractions)
1. `Component` - 127 edges
2. `Slideshow` - 41 edges
3. `QuickOrderListComponent` - 33 edges
4. `ProductCard` - 30 edges
5. `HeaderMenu` - 29 edges
6. `LayeredSlideshowComponent` - 29 edges
7. `morph()` - 27 edges
8. `ProductFormComponent` - 26 edges
9. `onAnimationEnd()` - 26 edges
10. `CartItemsComponent` - 23 edges

## Surprising Connections (you probably didn't know these)
- `CartNote` --inherits--> `Component`  [EXTRACTED]
  assets/cart-note.js → assets/component.js
- `AnchoredPopoverComponent` --inherits--> `Component`  [EXTRACTED]
  assets/anchored-popover.js → assets/component.js
- `AnnouncementBar` --inherits--> `Component`  [EXTRACTED]
  assets/announcement-bar.js → assets/component.js
- `BlogPostsList` --inherits--> `PaginatedList`  [EXTRACTED]
  assets/blog-posts-list.js → assets/paginated-list.js
- `CartDiscount` --inherits--> `Component`  [EXTRACTED]
  assets/cart-discount.js → assets/component.js

## Import Cycles
- None detected.

## Communities (110 total, 66 thin omitted)

### Community 1 - "component.js"
Cohesion: 0.12
Nodes (8): DeclarativeShadowElement, getAncestor(), getClosestComponent(), MissingRefError, parseData(), parseValue(), registerEventListeners(), CollectionComponent

### Community 3 - "CartItemsComponent"
Cohesion: 0.07
Nodes (13): CartDiscount, CartItemsComponent, ProductRecommendations, hydrate(), hydrateSection(), buildSectionRenderingURL(), buildSectionSelector(), containsShadowRoot() (+5 more)

### Community 4 - "Component"
Cohesion: 0.10
Nodes (9): Component, CopyToClipboardComponent, RTEFormatter, SearchPageInputComponent, VideoBackgroundComponent, CollectionComponent, ProductComponent, Refs (+1 more)

### Community 5 - "morph.js"
Cohesion: 0.08
Nodes (24): LocalPickup, attributesEqual(), collectHydrationTargets(), copyAttributes(), getNodeKey(), morph(), MORPH_OPTIONS, morphHydrationByKey() (+16 more)

### Community 7 - "standard-events.d.ts"
Cohesion: 0.05
Nodes (39): CartAjaxLine, CartAjaxResponse, CartDiscountUpdatePayloadDetail, CartDiscountUpdateResult, CartDiscountUpdateResultDetail, CartErrorPayloadDetail, CartLinesUpdateEvent, CartLinesUpdatePayload (+31 more)

### Community 8 - "PaginatedList"
Cohesion: 0.10
Nodes (6): BlogPostsList, FloatingPanelComponent, PaginatedListAspectRatioHelper, PaginatedList, ResultsList, requestIdleCallback

### Community 10 - "popover-polyfill.js"
Cohesion: 0.14
Nodes (30): apply(), checkPopoverValidity(), closeAllOpenPopovers(), closeAllOpenPopoversInList(), focusDelegate(), getPopoverVisibilityState(), getRootNode(), getStackPosition() (+22 more)

### Community 11 - "ProductCard"
Cohesion: 0.09
Nodes (3): ProductCard, ProductCardLink, ProductComponent

### Community 12 - "HeaderMenu"
Cohesion: 0.14
Nodes (4): MegaMenuHoverEvent, findMenuItem(), findSubmenu(), HeaderMenu

### Community 13 - "utilities.js"
Cohesion: 0.14
Nodes (15): getViewParameterValue(), isClickedOutside(), isDesktopBreakpoint(), isMobileBreakpoint(), isPointWithinElement(), isTouchDevice(), mediaQueryLarge, onDocumentLoaded() (+7 more)

### Community 14 - "standard-actions.d.ts"
Cohesion: 0.07
Nodes (27): ActionArgs, ActionConfiguration, ActionFunction, CartCost, CartDiscountCode, CartLine, CartLineInput, CartMutationUserError (+19 more)

### Community 15 - "Scroller"
Cohesion: 0.17
Nodes (4): calculatePaddingStart(), getScrollAxis(), Scroller, throttle()

### Community 17 - "LocalizationFormComponent"
Cohesion: 0.12
Nodes (4): DrawerLocalizationComponent, DropdownLocalizationComponent, LocalizationFormComponent, normalizeString()

### Community 19 - "QuantitySelectorComponent"
Cohesion: 0.17
Nodes (3): CartQuantitySelectorComponent, QuantitySelectorComponent, parseIntOrDefault()

### Community 22 - "slideshow.js"
Cohesion: 0.23
Nodes (8): SlideshowSelectEvent, scrollIntoView(), center(), clamp(), closest(), getVisibleElements(), isRTL(), preventDefault()

### Community 23 - "global.d.ts"
Cohesion: 0.09
Nodes (15): CartDiscountUpdateResultDetail, CartErrorPayloadDetail, CartLinesUpdateResultDetail, LoadCallback, ModelViewer, NavigationActivation, NavigationHistoryEntry, Navigator (+7 more)

### Community 24 - "OverflowList"
Cohesion: 0.10
Nodes (3): JumboText, OverflowList, OverflowMinimumEvent

### Community 25 - "DeferredMedia"
Cohesion: 0.17
Nodes (3): MediaStartedPlayingEvent, DeferredMedia, ProductModel

### Community 26 - "onAnimationEnd"
Cohesion: 0.20
Nodes (9): isLowPowerDevice(), onAnimationEnd(), prefersReducedMotion(), preloadImage(), shouldDisableCrossDocumentViewTransitions(), startViewTransition(), supportsViewTransitions(), getMostVisibleElement() (+1 more)

### Community 27 - "qr-code-generator.js"
Cohesion: 0.12
Nodes (9): getTypeNumber(), getUTF8Length(), onMakeImage(), QRCode(), QRCodeModel(), QRErrorCorrectLevel, QRMaskPattern, QRMode (+1 more)

### Community 30 - "component-cart-items.js"
Cohesion: 0.29
Nodes (6): CartNote, CartSectionRestoredEvent, cartPerformance, fetchConfig(), normalizeVariantId(), resolveVariantId()

### Community 31 - "onAnimationEnd"
Cohesion: 0.05
Nodes (26): DialogComponent, getFocusableElements(), removeTrapFocus(), trapFocus(), trapFocusHandlers, HeaderDrawer, reset(), HeaderComponent (+18 more)

### Community 34 - "validate-cabak.cjs"
Cohesion: 0.09
Nodes (14): { chromium }, fs, path, assert, { chromium }, fs, path, assert (+6 more)

### Community 37 - "ShopifyStandardEvent"
Cohesion: 0.15
Nodes (8): CartDiscountUpdateEvent, CartDiscountUpdatePayload, CartLinesUpdateEventImpl, PageViewEvent, PageViewPayload, ProductSelectEvent, ProductSelectPayload, ShopifyStandardEvent

### Community 38 - "Graphify integration design"
Cohesion: 0.33
Nodes (5): Boundaries, Decision, Graphify integration design, Operational flow, Trade-offs

### Community 40 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, baseUrl, checkJs, noImplicitAny, noUncheckedIndexedAccess, paths, strictNullChecks, target (+3 more)

### Community 41 - "Graphify integration requirements"
Cohesion: 0.40
Nodes (4): Acceptance criteria, Graphify integration requirements, Non-goals, Scope

### Community 44 - "Header brand refinement"
Cohesion: 0.29
Nodes (6): Approved horizontal logo update, Current correction: retain both brand assets, Design and tasks, Header brand refinement, Requirements, Validation

### Community 46 - "dialog.js"
Cohesion: 0.16
Nodes (5): DialogCloseEvent, DialogOpenEvent, ANIMATION_OPTIONS, debounce(), viewTransition

### Community 51 - "view-transitions.js"
Cohesion: 0.53
Nodes (4): isLowPowerDevice(), prefersReducedMotion(), shouldDisableCrossDocumentViewTransitions(), shouldSkipViewTransition()

### Community 53 - "component.js"
Cohesion: 0.23
Nodes (3): QuantitySelectorUpdateEvent, ThemeEvents, ZoomMediaSelectedEvent

### Community 54 - "StandardStorefrontEventMap"
Cohesion: 0.50
Nodes (4): DocumentEventMap, ElementEventMap, StandardStorefrontEventMap, WindowEventMap

### Community 77 - "CABAK storefront design"
Cohesion: 0.20
Nodes (9): ADR-001: Extend Horizon, ADR-002: Provider-managed payments, CABAK storefront design, Data and integration boundaries, Existing baseline, Graph coverage limitation, Proposed information architecture, Proposed repository organization (+1 more)

### Community 78 - "CABAK implementation handoff"
Cohesion: 0.33
Nodes (5): CABAK implementation handoff, Implemented, Merchant setup still required, Reference correction, Verification

### Community 79 - "CollectionLinks"
Cohesion: 0.18
Nodes (3): CollectionLinks, cycleFocus(), getDirectionMultiplier()

### Community 80 - "Category page design"
Cohesion: 0.33
Nodes (5): ADR: Native collections over static pages, Category page design, Existing contract, Presentation and interaction, Structure

### Community 81 - "facets.js"
Cohesion: 0.50
Nodes (6): convertMoneyToMinorUnits(), CURRENCY_DECIMALS, formatCents(), formatMoney(), getCurrencyDivisor(), getCurrencyPrecision()

### Community 86 - "CABAK storefront requirements"
Cohesion: 0.40
Nodes (4): Acceptance criteria, Brief, CABAK storefront requirements, Required owner inputs

### Community 88 - "Collection dropdown"
Cohesion: 0.40
Nodes (4): Collection dropdown, Design, Requirements, Tasks and acceptance checks

### Community 89 - "theme-editor.js"
Cohesion: 0.13
Nodes (9): carouselState, isIOS, layeredSlideshowState, matches(), slideshowState, calculateHeaderGroupHeight(), updateAllHeaderCustomProperties(), updateHeaderHeights() (+1 more)

### Community 94 - "Transparent brand assets"
Cohesion: 0.40
Nodes (4): Design and tasks, Generation prompts, Requirements, Transparent brand assets

### Community 97 - "CABAK reference-layout validation"
Cohesion: 0.40
Nodes (4): CABAK reference-layout validation, Deliberate differences and remaining content, Homepage composition, Reproduce

### Community 101 - "Mobile storefront refinement"
Cohesion: 0.33
Nodes (5): Design, Mobile storefront refinement, Requirements, Tasks and validation, Verification

### Community 105 - "CABAK category pages"
Cohesion: 0.50
Nodes (3): Acceptance criteria, CABAK category pages, Scope limits

## Knowledge Gaps
- **66 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Component` connect `Component` to `FacetsFormComponent`, `component.js`, `QuickOrderListComponent`, `CartItemsComponent`, `morph.js`, `Slideshow`, `PaginatedList`, `ProductFormComponent`, `HeaderMenu`, `utilities.js`, `LayeredSlideshowComponent`, `LocalizationFormComponent`, `PredictiveSearchComponent`, `QuantitySelectorComponent`, `QuickAddComponent`, `DragZoomWrapper`, `slideshow.js`, `OverflowList`, `DeferredMedia`, `onAnimationEnd`, `qr-code-generator.js`, `GiftCardRecipientForm`, `ProductHotspotComponent`, `component-cart-items.js`, `onAnimationEnd`, `StickyAddToCartComponent`, `MarqueeComponent`, `AnchoredPopoverComponent`, `AnnouncementBar`, `DisclosuresSummaryFit`, `CartDrawerComponent`, `CartIcon`, `MediaGallery`, `dialog.js`, `ComparisonSliderComponent`, `PricePerItemComponent`, `component.js`, `VolumePricingInfoComponent`, `header-actions.js`, `PriceFacetComponent`, `CollectionLinks`, `facets.js`, `FacetInputsComponent`, `SortingFilterComponent`, `FacetClearComponent`, `FacetStatusComponent`, `FacetRemoveComponent`, `fly-to-cart.js`, `ProductInventory`, `ShowMoreComponent`, `ProductPrice`, `ProductSkuComponent`, `ProductCustomProperty`?**
  _High betweenness centrality (0.408) - this node is a cross-community bridge._
- **Should `component.js` be split into smaller, more focused modules?**
  _Cohesion score 0.12121212121212122 - nodes in this community are weakly interconnected._
- **Why does `LayeredSlideshowComponent` connect `LayeredSlideshowComponent` to `Component`, `utilities.js`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Should `QuickOrderListComponent` be split into smaller, more focused modules?**
  _Cohesion score 0.11931818181818182 - nodes in this community are weakly interconnected._
- **Why does `ProductCard` connect `ProductCard` to `utilities.js`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **Should `CartItemsComponent` be split into smaller, more focused modules?**
  _Cohesion score 0.07077922077922078 - nodes in this community are weakly interconnected._
- **Should `Component` be split into smaller, more focused modules?**
  _Cohesion score 0.10153846153846154 - nodes in this community are weakly interconnected._