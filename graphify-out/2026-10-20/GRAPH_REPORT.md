# Graph Report - theme_export__zy7ii3-xp-myshopify-com-horizon__20OCT2026-1240pm  (2026-10-20)

## Corpus Check
- 179 files · ~353,975 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 290 file(s) not represented in the graph (top: .liquid 285, .css 4, (none) 1)

## Summary
- 1401 nodes · 2826 edges · 100 communities (43 shown, 57 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `23e71b19`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- FacetsFormComponent
- ThemeDrawer
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
- startViewTransition
- qr-code-generator.js
- GiftCardRecipientForm
- VariantPicker
- component-cart-items.js
- HeaderDrawer
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
- scroll-container.js
- MediaGallery
- dialog.js
- ComparisonSliderComponent
- PricePerItemComponent
- JumboText
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
- component.js
- PriceFacetComponent
- CABAK storefront design
- CABAK implementation handoff
- CollectionLinks
- .connectedCallback
- facets.js
- FacetInputsComponent
- SortingFilterComponent
- FacetClearComponent
- FacetStatusComponent
- CABAK storefront requirements
- FacetRemoveComponent
- .resume
- theme-editor.js
- plan.md
- CabakRail
- DialogComponent
- cabak-storefront/tasks.md
- theme-drawer.js
- QuickAddDialog
- HeaderActions
- CABAK reference-layout validation
- ProductSkuComponent
- reference-layout.md

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

## Communities (100 total, 57 thin omitted)

### Community 1 - "ThemeDrawer"
Cohesion: 0.17
Nodes (6): DrawerOpenEvent, ThemeDrawer, lockScroll(), pruneDisconnectedScrollLockOwners(), syncScrollLock(), unlockScroll()

### Community 3 - "CartItemsComponent"
Cohesion: 0.06
Nodes (15): CartDiscount, CartItemsComponent, FloatingPanelComponent, ProductRecommendations, hydrate(), hydrateSection(), buildSectionRenderingURL(), buildSectionSelector() (+7 more)

### Community 4 - "Component"
Cohesion: 0.07
Nodes (12): Component, CopyToClipboardComponent, ProductCustomProperty, ProductPrice, QRCodeImage, RTEFormatter, SearchPageInputComponent, VideoBackgroundComponent (+4 more)

### Community 5 - "morph.js"
Cohesion: 0.12
Nodes (22): LocalPickup, attributesEqual(), collectHydrationTargets(), copyAttributes(), getNodeKey(), morph(), morphHydrationByKey(), PRESERVED_ATTRIBUTES (+14 more)

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

### Community 11 - "ProductCard"
Cohesion: 0.08
Nodes (4): ProductCard, ProductCardLink, isDesktopBreakpoint(), ProductComponent

### Community 12 - "HeaderMenu"
Cohesion: 0.13
Nodes (5): MegaMenuHoverEvent, findMenuItem(), findSubmenu(), HeaderMenu, onDocumentLoaded()

### Community 13 - "utilities.js"
Cohesion: 0.10
Nodes (16): FlyToCart, MORPH_OPTIONS, calculateHeaderGroupHeight(), isClickedOutside(), isPointWithinElement(), mediaQueryLarge, reducedMotion, ResizeNotifier (+8 more)

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
Cohesion: 0.17
Nodes (3): CartQuantitySelectorComponent, QuantitySelectorComponent, parseIntOrDefault()

### Community 20 - "QuickAddComponent"
Cohesion: 0.05
Nodes (6): AccordionCustom, ProductHotspotComponent, QuickAddComponent, ShowMoreComponent, isMobileBreakpoint(), isTouchDevice()

### Community 22 - "slideshow.js"
Cohesion: 0.23
Nodes (6): SlideshowSelectEvent, center(), clamp(), closest(), scheduler, viewTransition

### Community 23 - "global.d.ts"
Cohesion: 0.09
Nodes (15): CartDiscountUpdateResultDetail, CartErrorPayloadDetail, CartLinesUpdateResultDetail, LoadCallback, ModelViewer, NavigationActivation, NavigationHistoryEntry, Navigator (+7 more)

### Community 25 - "DeferredMedia"
Cohesion: 0.17
Nodes (3): MediaStartedPlayingEvent, DeferredMedia, ProductModel

### Community 26 - "startViewTransition"
Cohesion: 0.13
Nodes (7): ResultsList, isLowPowerDevice(), shouldDisableCrossDocumentViewTransitions(), startViewTransition(), supportsViewTransitions(), getMostVisibleElement(), ZoomDialog

### Community 27 - "qr-code-generator.js"
Cohesion: 0.13
Nodes (8): getTypeNumber(), getUTF8Length(), onMakeImage(), QRCode(), QRCodeModel(), QRErrorCorrectLevel, QRMaskPattern, QRMode

### Community 29 - "VariantPicker"
Cohesion: 0.16
Nodes (3): SwatchesVariantPickerComponent, getViewParameterValue(), VariantPicker

### Community 30 - "component-cart-items.js"
Cohesion: 0.30
Nodes (5): CartNote, CartSectionRestoredEvent, cartPerformance, fetchConfig(), preloadImage()

### Community 31 - "HeaderDrawer"
Cohesion: 0.22
Nodes (3): HeaderDrawer, reset(), removeWillChangeOnAnimationEnd()

### Community 34 - "validate-cabak.cjs"
Cohesion: 0.15
Nodes (7): { chromium }, fs, path, assert, { chromium }, fs, path

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

### Community 44 - "scroll-container.js"
Cohesion: 0.17
Nodes (11): HeaderComponent, getIntersectionRoot(), getScrollContainer(), getScrollEventTarget(), getScrollTop(), originalPushState, restoreSavedScrollTop(), saveScrollPosition() (+3 more)

### Community 46 - "dialog.js"
Cohesion: 0.20
Nodes (6): DialogCloseEvent, DialogOpenEvent, ANIMATION_OPTIONS, debounce(), onAnimationEnd(), prefersReducedMotion()

### Community 51 - "view-transitions.js"
Cohesion: 0.53
Nodes (4): isLowPowerDevice(), prefersReducedMotion(), shouldDisableCrossDocumentViewTransitions(), shouldSkipViewTransition()

### Community 52 - "scrolling.js"
Cohesion: 0.18
Nodes (6): calculatePaddingStart(), getScrollAxis(), ScrollHint, scrollIntoView(), isRTL(), throttle()

### Community 53 - "component.js"
Cohesion: 0.22
Nodes (3): QuantitySelectorUpdateEvent, ThemeEvents, ZoomMediaSelectedEvent

### Community 54 - "StandardStorefrontEventMap"
Cohesion: 0.50
Nodes (4): DocumentEventMap, ElementEventMap, StandardStorefrontEventMap, WindowEventMap

### Community 75 - "component.js"
Cohesion: 0.14
Nodes (8): DeclarativeShadowElement, getAncestor(), getClosestComponent(), MissingRefError, parseData(), parseValue(), registerEventListeners(), CollectionComponent

### Community 77 - "CABAK storefront design"
Cohesion: 0.20
Nodes (9): ADR-001: Extend Horizon, ADR-002: Provider-managed payments, CABAK storefront design, Data and integration boundaries, Existing baseline, Graph coverage limitation, Proposed information architecture, Proposed repository organization (+1 more)

### Community 78 - "CABAK implementation handoff"
Cohesion: 0.33
Nodes (5): CABAK implementation handoff, Implemented, Merchant setup still required, Reference correction, Verification

### Community 81 - "facets.js"
Cohesion: 0.50
Nodes (6): convertMoneyToMinorUnits(), CURRENCY_DECIMALS, formatCents(), formatMoney(), getCurrencyDivisor(), getCurrencyPrecision()

### Community 86 - "CABAK storefront requirements"
Cohesion: 0.40
Nodes (4): Acceptance criteria, Brief, CABAK storefront requirements, Required owner inputs

### Community 89 - "theme-editor.js"
Cohesion: 0.18
Nodes (5): carouselState, isIOS, layeredSlideshowState, matches(), slideshowState

### Community 94 - "theme-drawer.js"
Cohesion: 0.39
Nodes (5): getFocusableElements(), removeTrapFocus(), trapFocus(), trapFocusHandlers, DrawerCloseEvent

### Community 97 - "CABAK reference-layout validation"
Cohesion: 0.40
Nodes (4): CABAK reference-layout validation, Deliberate differences and remaining content, Homepage composition, Reproduce

## Knowledge Gaps
- **57 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Component` connect `Component` to `FacetsFormComponent`, `ThemeDrawer`, `QuickOrderListComponent`, `CartItemsComponent`, `morph.js`, `Slideshow`, `PaginatedList`, `ProductFormComponent`, `HeaderMenu`, `utilities.js`, `LayeredSlideshowComponent`, `LocalizationFormComponent`, `PredictiveSearchComponent`, `QuantitySelectorComponent`, `QuickAddComponent`, `DragZoomWrapper`, `slideshow.js`, `DeferredMedia`, `startViewTransition`, `GiftCardRecipientForm`, `VariantPicker`, `component-cart-items.js`, `HeaderDrawer`, `StickyAddToCartComponent`, `MarqueeComponent`, `AnchoredPopoverComponent`, `AnnouncementBar`, `DisclosuresSummaryFit`, `CartDrawerComponent`, `CartIcon`, `scroll-container.js`, `MediaGallery`, `dialog.js`, `ComparisonSliderComponent`, `PricePerItemComponent`, `JumboText`, `component.js`, `VolumePricingInfoComponent`, `component.js`, `PriceFacetComponent`, `CollectionLinks`, `facets.js`, `FacetInputsComponent`, `SortingFilterComponent`, `FacetClearComponent`, `FacetStatusComponent`, `FacetRemoveComponent`, `DialogComponent`, `theme-drawer.js`, `HeaderActions`, `ProductSkuComponent`?**
  _High betweenness centrality (0.449) - this node is a cross-community bridge._
- **Should `QuickOrderListComponent` be split into smaller, more focused modules?**
  _Cohesion score 0.12298387096774194 - nodes in this community are weakly interconnected._
- **Why does `LayeredSlideshowComponent` connect `LayeredSlideshowComponent` to `Component`, `utilities.js`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Should `CartItemsComponent` be split into smaller, more focused modules?**
  _Cohesion score 0.06345848757271286 - nodes in this community are weakly interconnected._
- **Why does `ProductCard` connect `ProductCard` to `utilities.js`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **Should `Component` be split into smaller, more focused modules?**
  _Cohesion score 0.07301587301587302 - nodes in this community are weakly interconnected._
- **Should `morph.js` be split into smaller, more focused modules?**
  _Cohesion score 0.12096774193548387 - nodes in this community are weakly interconnected._