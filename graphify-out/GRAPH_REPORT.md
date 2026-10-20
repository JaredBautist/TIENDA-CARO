# Graph Report - theme_export__zy7ii3-xp-myshopify-com-horizon__20OCT2026-1240pm  (2026-10-20)

## Corpus Check
- 196 files · ~338,884 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 296 file(s) not represented in the graph (top: .liquid 287, .css 5, (none) 2)

## Summary
- 1477 nodes · 2891 edges · 108 communities (49 shown, 59 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7bdb559a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- FacetsFormComponent
- product-card.js
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
- CartItemsComponent
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
- scrolling.js
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
- paginated-list.js
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
- requestIdleCallback
- cabak-storefront/tasks.md
- Transparent brand assets
- CABAK global typography
- .connectedCallback
- CABAK reference-layout validation
- ShowMoreComponent
- reference-layout.md
- Centered symbol trial
- Mobile storefront refinement
- Homepage catalog alignment and restrained typography
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

## Communities (108 total, 59 thin omitted)

### Community 1 - "product-card.js"
Cohesion: 0.16
Nodes (8): DeclarativeShadowElement, FlyToCart, getViewParameterValue(), isDesktopBreakpoint(), ResizeNotifier, yieldToMainThread(), CollectionComponent, ProductComponent

### Community 3 - "CartItemsComponent"
Cohesion: 0.11
Nodes (13): CartDiscount, MORPH_OPTIONS, ProductRecommendations, hydrate(), hydrateSection(), buildSectionRenderingURL(), buildSectionSelector(), containsShadowRoot() (+5 more)

### Community 4 - "Component"
Cohesion: 0.07
Nodes (17): Component, getAncestor(), getClosestComponent(), MissingRefError, parseData(), parseValue(), registerEventListeners(), CopyToClipboardComponent (+9 more)

### Community 5 - "morph.js"
Cohesion: 0.07
Nodes (24): LocalPickup, attributesEqual(), collectHydrationTargets(), copyAttributes(), getNodeKey(), morph(), morphHydrationByKey(), PRESERVED_ATTRIBUTES (+16 more)

### Community 7 - "standard-events.d.ts"
Cohesion: 0.05
Nodes (39): CartAjaxLine, CartAjaxResponse, CartDiscountUpdatePayloadDetail, CartDiscountUpdateResult, CartDiscountUpdateResultDetail, CartErrorPayloadDetail, CartLinesUpdateEvent, CartLinesUpdatePayload (+31 more)

### Community 8 - "PaginatedList"
Cohesion: 0.16
Nodes (3): BlogPostsList, PaginatedListAspectRatioHelper, PaginatedList

### Community 9 - "ProductFormComponent"
Cohesion: 0.12
Nodes (4): AddToCartComponent, ProductFormComponent, normalizeVariantId(), resolveVariantId()

### Community 10 - "popover-polyfill.js"
Cohesion: 0.14
Nodes (30): apply(), checkPopoverValidity(), closeAllOpenPopovers(), closeAllOpenPopoversInList(), focusDelegate(), getPopoverVisibilityState(), getRootNode(), getStackPosition() (+22 more)

### Community 12 - "HeaderMenu"
Cohesion: 0.15
Nodes (3): findMenuItem(), findSubmenu(), HeaderMenu

### Community 13 - "utilities.js"
Cohesion: 0.13
Nodes (17): calculateHeaderGroupHeight(), getIOSVersion(), isClickedOutside(), isMobileBreakpoint(), isPointWithinElement(), isTouchDevice(), mediaQueryLarge, oncePerEditorSession() (+9 more)

### Community 14 - "standard-actions.d.ts"
Cohesion: 0.07
Nodes (27): ActionArgs, ActionConfiguration, ActionFunction, CartCost, CartDiscountCode, CartLine, CartLineInput, CartMutationUserError (+19 more)

### Community 16 - "LayeredSlideshowComponent"
Cohesion: 0.14
Nodes (3): cycleFocus(), LayeredSlideshowComponent, getDirectionMultiplier()

### Community 17 - "LocalizationFormComponent"
Cohesion: 0.12
Nodes (4): DrawerLocalizationComponent, DropdownLocalizationComponent, LocalizationFormComponent, normalizeString()

### Community 19 - "QuantitySelectorComponent"
Cohesion: 0.14
Nodes (4): CartQuantitySelectorComponent, QuantitySelectorComponent, QuantitySelectorUpdateEvent, parseIntOrDefault()

### Community 22 - "slideshow.js"
Cohesion: 0.24
Nodes (6): SlideshowSelectEvent, center(), clamp(), closest(), preventDefault(), scheduler

### Community 23 - "global.d.ts"
Cohesion: 0.09
Nodes (15): CartDiscountUpdateResultDetail, CartErrorPayloadDetail, CartLinesUpdateResultDetail, LoadCallback, ModelViewer, NavigationActivation, NavigationHistoryEntry, Navigator (+7 more)

### Community 24 - "OverflowList"
Cohesion: 0.10
Nodes (3): JumboText, OverflowList, OverflowMinimumEvent

### Community 25 - "DeferredMedia"
Cohesion: 0.17
Nodes (3): MediaStartedPlayingEvent, DeferredMedia, ProductModel

### Community 26 - "CartItemsComponent"
Cohesion: 0.07
Nodes (10): CartItemsComponent, ResultsList, isLowPowerDevice(), prefersReducedMotion(), preloadImage(), shouldDisableCrossDocumentViewTransitions(), startViewTransition(), supportsViewTransitions() (+2 more)

### Community 27 - "qr-code-generator.js"
Cohesion: 0.13
Nodes (8): getTypeNumber(), getUTF8Length(), onMakeImage(), QRCode(), QRCodeModel(), QRErrorCorrectLevel, QRMaskPattern, QRMode

### Community 30 - "component-cart-items.js"
Cohesion: 0.40
Nodes (4): CartNote, CartSectionRestoredEvent, cartPerformance, fetchConfig()

### Community 31 - "onAnimationEnd"
Cohesion: 0.05
Nodes (18): DialogComponent, getFocusableElements(), removeTrapFocus(), trapFocus(), trapFocusHandlers, HeaderActions, HeaderDrawer, reset() (+10 more)

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
Cohesion: 0.26
Nodes (4): DialogCloseEvent, DialogOpenEvent, ANIMATION_OPTIONS, debounce()

### Community 51 - "view-transitions.js"
Cohesion: 0.53
Nodes (4): isLowPowerDevice(), prefersReducedMotion(), shouldDisableCrossDocumentViewTransitions(), shouldSkipViewTransition()

### Community 52 - "scrolling.js"
Cohesion: 0.18
Nodes (6): calculatePaddingStart(), getScrollAxis(), ScrollHint, scrollIntoView(), isRTL(), throttle()

### Community 53 - "component.js"
Cohesion: 0.14
Nodes (5): MegaMenuHoverEvent, ThemeEvents, ZoomMediaSelectedEvent, ProductPrice, ProductSkuComponent

### Community 54 - "StandardStorefrontEventMap"
Cohesion: 0.50
Nodes (4): DocumentEventMap, ElementEventMap, StandardStorefrontEventMap, WindowEventMap

### Community 75 - "paginated-list.js"
Cohesion: 0.16
Nodes (11): HeaderComponent, getIntersectionRoot(), getScrollContainer(), getScrollEventTarget(), getScrollTop(), originalPushState, restoreSavedScrollTop(), saveScrollPosition() (+3 more)

### Community 77 - "CABAK storefront design"
Cohesion: 0.20
Nodes (9): ADR-001: Extend Horizon, ADR-002: Provider-managed payments, CABAK storefront design, Data and integration boundaries, Existing baseline, Graph coverage limitation, Proposed information architecture, Proposed repository organization (+1 more)

### Community 78 - "CABAK implementation handoff"
Cohesion: 0.33
Nodes (5): CABAK implementation handoff, Implemented, Merchant setup still required, Reference correction, Verification

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
Cohesion: 0.18
Nodes (5): carouselState, isIOS, layeredSlideshowState, matches(), slideshowState

### Community 92 - "requestIdleCallback"
Cohesion: 0.24
Nodes (3): FloatingPanelComponent, requestIdleCallback, viewTransition

### Community 94 - "Transparent brand assets"
Cohesion: 0.40
Nodes (4): Design and tasks, Generation prompts, Requirements, Transparent brand assets

### Community 95 - "CABAK global typography"
Cohesion: 0.20
Nodes (9): Approved Cormorant trial, Approved requirements, CABAK global typography, Cormorant validation, Design and decision, Restrained sans-serif trial, Tasks, Trial rejected (+1 more)

### Community 97 - "CABAK reference-layout validation"
Cohesion: 0.40
Nodes (4): CABAK reference-layout validation, Deliberate differences and remaining content, Homepage composition, Reproduce

### Community 100 - "Centered symbol trial"
Cohesion: 0.33
Nodes (5): Centered symbol trial, Design, Requirements, Tasks, Validation

### Community 101 - "Mobile storefront refinement"
Cohesion: 0.33
Nodes (5): Design, Mobile storefront refinement, Requirements, Tasks and validation, Verification

### Community 102 - "Homepage catalog alignment and restrained typography"
Cohesion: 0.33
Nodes (5): Design, Homepage catalog alignment and restrained typography, Requirements, Tasks, Validation

### Community 105 - "CABAK category pages"
Cohesion: 0.50
Nodes (3): Acceptance criteria, CABAK category pages, Scope limits

## Knowledge Gaps
- **59 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Component` connect `Component` to `FacetsFormComponent`, `product-card.js`, `QuickOrderListComponent`, `CartItemsComponent`, `morph.js`, `Slideshow`, `PaginatedList`, `ProductFormComponent`, `HeaderMenu`, `utilities.js`, `LayeredSlideshowComponent`, `LocalizationFormComponent`, `PredictiveSearchComponent`, `QuantitySelectorComponent`, `QuickAddComponent`, `DragZoomWrapper`, `slideshow.js`, `OverflowList`, `DeferredMedia`, `CartItemsComponent`, `GiftCardRecipientForm`, `ProductHotspotComponent`, `component-cart-items.js`, `onAnimationEnd`, `StickyAddToCartComponent`, `MarqueeComponent`, `AnchoredPopoverComponent`, `AnnouncementBar`, `DisclosuresSummaryFit`, `CartDrawerComponent`, `CartIcon`, `MediaGallery`, `dialog.js`, `ComparisonSliderComponent`, `PricePerItemComponent`, `component.js`, `VolumePricingInfoComponent`, `paginated-list.js`, `PriceFacetComponent`, `CollectionLinks`, `facets.js`, `FacetInputsComponent`, `SortingFilterComponent`, `FacetClearComponent`, `FacetStatusComponent`, `FacetRemoveComponent`, `requestIdleCallback`, `ShowMoreComponent`?**
  _High betweenness centrality (0.402) - this node is a cross-community bridge._
- **Should `QuickOrderListComponent` be split into smaller, more focused modules?**
  _Cohesion score 0.12903225806451613 - nodes in this community are weakly interconnected._
- **Why does `LayeredSlideshowComponent` connect `LayeredSlideshowComponent` to `Component`, `utilities.js`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Should `CartItemsComponent` be split into smaller, more focused modules?**
  _Cohesion score 0.10810810810810811 - nodes in this community are weakly interconnected._
- **Why does `ProductCard` connect `ProductCard` to `product-card.js`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Should `Component` be split into smaller, more focused modules?**
  _Cohesion score 0.06775510204081632 - nodes in this community are weakly interconnected._
- **Should `morph.js` be split into smaller, more focused modules?**
  _Cohesion score 0.07215686274509804 - nodes in this community are weakly interconnected._