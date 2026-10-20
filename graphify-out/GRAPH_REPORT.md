# Graph Report - theme_export__zy7ii3-xp-myshopify-com-horizon__20OCT2026-1240pm  (2026-10-20)

## Corpus Check
- 165 files · ~234,065 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 282 file(s) not represented in the graph (top: .liquid 279, .css 3)

## Summary
- 1345 nodes · 2775 edges · 94 communities (32 shown, 62 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6b9d6e47`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- FacetsFormComponent
- ThemeDrawer
- QuickOrderListComponent
- CartItemsComponent
- Component
- VariantPicker
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
- startViewTransition
- qr-code-generator.js
- GiftCardRecipientForm
- yieldToMainThread
- CartItemsComponent
- ProductHotspotComponent
- StickyAddToCartComponent
- MarqueeComponent
- AccordionCustom
- AnchoredPopoverComponent
- AnnouncementBar
- ShopifyStandardEvent
- Graphify integration design
- DisclosuresSummaryFit
- compilerOptions
- Graphify integration requirements
- CartDrawerComponent
- CartIcon
- theme-editor.js
- MediaGallery
- dialog.js
- ComparisonSliderComponent
- PricePerItemComponent
- ShowMoreComponent
- ThemePerformance
- view-transitions.js
- ScrollHint
- ref_shopify_events
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
- theme-drawer.js
- PriceFacetComponent
- HeaderComponent
- requestIdleCallback
- CollectionLinks
- .connectedCallback
- facets.js
- FacetInputsComponent
- SortingFilterComponent
- FacetClearComponent
- FacetStatusComponent
- HeaderActions
- FacetRemoveComponent
- header-menu.js
- ProductPrice
- throttle
- SearchPageInputComponent

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

## Communities (94 total, 62 thin omitted)

### Community 1 - "ThemeDrawer"
Cohesion: 0.06
Nodes (16): DialogComponent, cycleFocus(), getFocusableElements(), removeTrapFocus(), trapFocus(), trapFocusHandlers, HeaderDrawer, reset() (+8 more)

### Community 3 - "CartItemsComponent"
Cohesion: 0.06
Nodes (35): CartDiscount, LocalPickup, attributesEqual(), collectHydrationTargets(), copyAttributes(), getNodeKey(), morph(), MORPH_OPTIONS (+27 more)

### Community 4 - "Component"
Cohesion: 0.06
Nodes (18): Component, DeclarativeShadowElement, getAncestor(), getClosestComponent(), MissingRefError, parseData(), parseValue(), registerEventListeners() (+10 more)

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
Cohesion: 0.10
Nodes (22): calculateHeaderGroupHeight(), getDirectionMultiplier(), getIOSVersion(), getViewParameterValue(), isClickedOutside(), isDesktopBreakpoint(), isMobileBreakpoint(), isPointWithinElement() (+14 more)

### Community 14 - "standard-actions.d.ts"
Cohesion: 0.07
Nodes (27): ActionArgs, ActionConfiguration, ActionFunction, CartCost, CartDiscountCode, CartLine, CartLineInput, CartMutationUserError (+19 more)

### Community 15 - "Scroller"
Cohesion: 0.23
Nodes (3): calculatePaddingStart(), getScrollAxis(), Scroller

### Community 17 - "LocalizationFormComponent"
Cohesion: 0.12
Nodes (4): DrawerLocalizationComponent, DropdownLocalizationComponent, LocalizationFormComponent, normalizeString()

### Community 19 - "QuantitySelectorComponent"
Cohesion: 0.18
Nodes (3): CartQuantitySelectorComponent, QuantitySelectorComponent, parseIntOrDefault()

### Community 22 - "slideshow.js"
Cohesion: 0.21
Nodes (7): SlideshowSelectEvent, center(), clamp(), closest(), getVisibleElements(), preventDefault(), scheduler

### Community 23 - "global.d.ts"
Cohesion: 0.09
Nodes (15): CartDiscountUpdateResultDetail, CartErrorPayloadDetail, CartLinesUpdateResultDetail, LoadCallback, ModelViewer, NavigationActivation, NavigationHistoryEntry, Navigator (+7 more)

### Community 24 - "OverflowList"
Cohesion: 0.10
Nodes (3): JumboText, OverflowList, OverflowMinimumEvent

### Community 25 - "DeferredMedia"
Cohesion: 0.17
Nodes (3): MediaStartedPlayingEvent, DeferredMedia, ProductModel

### Community 26 - "startViewTransition"
Cohesion: 0.12
Nodes (8): ResultsList, isLowPowerDevice(), preloadImage(), shouldDisableCrossDocumentViewTransitions(), startViewTransition(), supportsViewTransitions(), getMostVisibleElement(), ZoomDialog

### Community 27 - "qr-code-generator.js"
Cohesion: 0.13
Nodes (8): getTypeNumber(), getUTF8Length(), onMakeImage(), QRCode(), QRCodeModel(), QRErrorCorrectLevel, QRMaskPattern, QRMode

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

### Community 44 - "theme-editor.js"
Cohesion: 0.18
Nodes (5): carouselState, isIOS, layeredSlideshowState, matches(), slideshowState

### Community 46 - "dialog.js"
Cohesion: 0.20
Nodes (8): DialogCloseEvent, DialogOpenEvent, ANIMATION_OPTIONS, scrollIntoView(), debounce(), isRTL(), onAnimationEnd(), prefersReducedMotion()

### Community 51 - "view-transitions.js"
Cohesion: 0.53
Nodes (4): isLowPowerDevice(), prefersReducedMotion(), shouldDisableCrossDocumentViewTransitions(), shouldSkipViewTransition()

### Community 53 - "ref_shopify_events"
Cohesion: 0.15
Nodes (7): CartNote, CartSectionRestoredEvent, QuantitySelectorUpdateEvent, ThemeEvents, ZoomMediaSelectedEvent, cartPerformance, fetchConfig()

### Community 54 - "StandardStorefrontEventMap"
Cohesion: 0.50
Nodes (4): DocumentEventMap, ElementEventMap, StandardStorefrontEventMap, WindowEventMap

### Community 75 - "theme-drawer.js"
Cohesion: 0.24
Nodes (9): getScrollContainer(), getScrollTop(), originalPushState, restoreSavedScrollTop(), saveScrollPosition(), scrollTo(), SQUEEZE_QUERY, DrawerCloseEvent (+1 more)

### Community 77 - "HeaderComponent"
Cohesion: 0.27
Nodes (3): HeaderComponent, getIntersectionRoot(), getScrollEventTarget()

### Community 78 - "requestIdleCallback"
Cohesion: 0.28
Nodes (3): FloatingPanelComponent, requestIdleCallback, viewTransition

### Community 81 - "facets.js"
Cohesion: 0.50
Nodes (6): convertMoneyToMinorUnits(), CURRENCY_DECIMALS, formatCents(), formatMoney(), getCurrencyDivisor(), getCurrencyPrecision()

## Knowledge Gaps
- **62 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Component` connect `Component` to `FacetsFormComponent`, `ThemeDrawer`, `QuickOrderListComponent`, `CartItemsComponent`, `VariantPicker`, `Slideshow`, `PaginatedList`, `ProductFormComponent`, `HeaderMenu`, `utilities.js`, `LayeredSlideshowComponent`, `LocalizationFormComponent`, `PredictiveSearchComponent`, `QuantitySelectorComponent`, `QuickAddComponent`, `DragZoomWrapper`, `slideshow.js`, `OverflowList`, `DeferredMedia`, `startViewTransition`, `GiftCardRecipientForm`, `yieldToMainThread`, `ProductHotspotComponent`, `StickyAddToCartComponent`, `MarqueeComponent`, `AnchoredPopoverComponent`, `AnnouncementBar`, `DisclosuresSummaryFit`, `CartDrawerComponent`, `CartIcon`, `MediaGallery`, `dialog.js`, `ComparisonSliderComponent`, `PricePerItemComponent`, `ShowMoreComponent`, `ref_shopify_events`, `VolumePricingInfoComponent`, `theme-drawer.js`, `PriceFacetComponent`, `HeaderComponent`, `requestIdleCallback`, `CollectionLinks`, `facets.js`, `FacetInputsComponent`, `SortingFilterComponent`, `FacetClearComponent`, `FacetStatusComponent`, `HeaderActions`, `FacetRemoveComponent`, `header-menu.js`, `ProductPrice`, `SearchPageInputComponent`?**
  _High betweenness centrality (0.503) - this node is a cross-community bridge._
- **Should `ThemeDrawer` be split into smaller, more focused modules?**
  _Cohesion score 0.05803571428571429 - nodes in this community are weakly interconnected._
- **Why does `LayeredSlideshowComponent` connect `LayeredSlideshowComponent` to `Component`, `utilities.js`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Should `QuickOrderListComponent` be split into smaller, more focused modules?**
  _Cohesion score 0.11931818181818182 - nodes in this community are weakly interconnected._
- **Why does `Slideshow` connect `Slideshow` to `Component`, `dialog.js`, `.connectedCallback`, `slideshow.js`, `.resume`, `.#setupSlideshow`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Should `CartItemsComponent` be split into smaller, more focused modules?**
  _Cohesion score 0.05970149253731343 - nodes in this community are weakly interconnected._
- **Should `Component` be split into smaller, more focused modules?**
  _Cohesion score 0.06259426847662142 - nodes in this community are weakly interconnected._