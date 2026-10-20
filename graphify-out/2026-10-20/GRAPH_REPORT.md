# Graph Report - theme_export__zy7ii3-xp-myshopify-com-horizon__20OCT2026-1240pm  (2026-10-20)

## Corpus Check
- 165 files · ~233,996 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1339 nodes · 2715 edges · 75 communities (31 shown, 38 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6b9d6e47`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- facets.js
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
- product-card.js
- onAnimationEnd
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
- events.js
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

## God Nodes (most connected - your core abstractions)
1. `Component` - 127 edges
2. `Slideshow` - 41 edges
3. `QuickOrderListComponent` - 33 edges
4. `ProductCard` - 30 edges
5. `LayeredSlideshowComponent` - 29 edges
6. `HeaderMenu` - 28 edges
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

## Communities (75 total, 38 thin omitted)

### Community 0 - "facets.js"
Cohesion: 0.05
Nodes (13): FacetClearComponent, FacetInputsComponent, FacetRemoveComponent, FacetsFormComponent, FacetStatusComponent, PriceFacetComponent, SortingFilterComponent, convertMoneyToMinorUnits() (+5 more)

### Community 1 - "ThemeDrawer"
Cohesion: 0.06
Nodes (17): DialogComponent, getFocusableElements(), removeTrapFocus(), trapFocus(), trapFocusHandlers, HeaderActions, HeaderDrawer, reset() (+9 more)

### Community 3 - "CartItemsComponent"
Cohesion: 0.06
Nodes (16): CartDiscount, CartItemsComponent, FloatingPanelComponent, MORPH_OPTIONS, ProductRecommendations, hydrate(), hydrateSection(), buildSectionRenderingURL() (+8 more)

### Community 4 - "Component"
Cohesion: 0.06
Nodes (17): Component, getAncestor(), getClosestComponent(), MissingRefError, parseData(), parseValue(), registerEventListeners(), CopyToClipboardComponent (+9 more)

### Community 5 - "morph.js"
Cohesion: 0.07
Nodes (24): LocalPickup, attributesEqual(), collectHydrationTargets(), copyAttributes(), getNodeKey(), morph(), morphHydrationByKey(), PRESERVED_ATTRIBUTES (+16 more)

### Community 7 - "standard-events.d.ts"
Cohesion: 0.05
Nodes (39): CartAjaxLine, CartAjaxResponse, CartDiscountUpdatePayloadDetail, CartDiscountUpdateResult, CartDiscountUpdateResultDetail, CartErrorPayloadDetail, CartLinesUpdateEvent, CartLinesUpdatePayload (+31 more)

### Community 8 - "PaginatedList"
Cohesion: 0.07
Nodes (14): BlogPostsList, HeaderComponent, JumboText, PaginatedListAspectRatioHelper, PaginatedList, getIntersectionRoot(), getScrollContainer(), getScrollEventTarget() (+6 more)

### Community 9 - "ProductFormComponent"
Cohesion: 0.11
Nodes (4): AddToCartComponent, ProductFormComponent, normalizeVariantId(), resolveVariantId()

### Community 10 - "popover-polyfill.js"
Cohesion: 0.14
Nodes (30): apply(), checkPopoverValidity(), closeAllOpenPopovers(), closeAllOpenPopoversInList(), focusDelegate(), getPopoverVisibilityState(), getRootNode(), getStackPosition() (+22 more)

### Community 12 - "HeaderMenu"
Cohesion: 0.15
Nodes (3): findMenuItem(), findSubmenu(), HeaderMenu

### Community 13 - "utilities.js"
Cohesion: 0.13
Nodes (15): calculateHeaderGroupHeight(), changeMetaThemeColor(), isTouchDevice(), oncePerEditorSession(), onDocumentLoaded(), reducedMotion, removeWillChangeOnAnimationEnd(), scrollLockOwners (+7 more)

### Community 14 - "standard-actions.d.ts"
Cohesion: 0.07
Nodes (27): ActionArgs, ActionConfiguration, ActionFunction, CartCost, CartDiscountCode, CartLine, CartLineInput, CartMutationUserError (+19 more)

### Community 15 - "Scroller"
Cohesion: 0.09
Nodes (6): CollectionLinks, cycleFocus(), calculatePaddingStart(), getScrollAxis(), Scroller, throttle()

### Community 17 - "LocalizationFormComponent"
Cohesion: 0.12
Nodes (4): DrawerLocalizationComponent, DropdownLocalizationComponent, LocalizationFormComponent, normalizeString()

### Community 19 - "QuantitySelectorComponent"
Cohesion: 0.18
Nodes (3): CartQuantitySelectorComponent, QuantitySelectorComponent, parseIntOrDefault()

### Community 22 - "slideshow.js"
Cohesion: 0.15
Nodes (12): SlideshowSelectEvent, scrollIntoView(), center(), clamp(), closest(), getDirectionMultiplier(), getVisibleElements(), isRTL() (+4 more)

### Community 23 - "global.d.ts"
Cohesion: 0.09
Nodes (15): CartDiscountUpdateResultDetail, CartErrorPayloadDetail, CartLinesUpdateResultDetail, LoadCallback, ModelViewer, NavigationActivation, NavigationHistoryEntry, Navigator (+7 more)

### Community 25 - "DeferredMedia"
Cohesion: 0.18
Nodes (3): MediaStartedPlayingEvent, DeferredMedia, ProductModel

### Community 26 - "startViewTransition"
Cohesion: 0.13
Nodes (7): ResultsList, isLowPowerDevice(), shouldDisableCrossDocumentViewTransitions(), startViewTransition(), supportsViewTransitions(), getMostVisibleElement(), ZoomDialog

### Community 27 - "qr-code-generator.js"
Cohesion: 0.12
Nodes (8): getTypeNumber(), getUTF8Length(), onMakeImage(), QRCode(), QRCodeModel(), QRErrorCorrectLevel, QRMaskPattern, QRMode

### Community 29 - "product-card.js"
Cohesion: 0.16
Nodes (8): DeclarativeShadowElement, FlyToCart, getViewParameterValue(), isDesktopBreakpoint(), ResizeNotifier, yieldToMainThread(), CollectionComponent, ProductComponent

### Community 30 - "onAnimationEnd"
Cohesion: 0.32
Nodes (5): CartNote, CartSectionRestoredEvent, cartPerformance, fetchConfig(), onAnimationEnd()

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
Nodes (4): carouselState, isIOS, layeredSlideshowState, slideshowState

### Community 46 - "dialog.js"
Cohesion: 0.15
Nodes (7): DialogCloseEvent, DialogOpenEvent, ANIMATION_OPTIONS, debounce(), getIOSVersion(), isMobileBreakpoint(), mediaQueryLarge

### Community 51 - "view-transitions.js"
Cohesion: 0.53
Nodes (4): isLowPowerDevice(), prefersReducedMotion(), shouldDisableCrossDocumentViewTransitions(), shouldSkipViewTransition()

### Community 53 - "events.js"
Cohesion: 0.12
Nodes (7): MegaMenuHoverEvent, QuantitySelectorUpdateEvent, ThemeEvents, ZoomMediaSelectedEvent, ProductPrice, ProductSkuComponent, @shopify/events

### Community 54 - "StandardStorefrontEventMap"
Cohesion: 0.50
Nodes (4): DocumentEventMap, ElementEventMap, StandardStorefrontEventMap, WindowEventMap

## Knowledge Gaps
- **117 isolated node(s):** `trapFocusHandlers`, `Theme`, `NavigationActivation`, `NavigationHistoryEntry`, `Window` (+112 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 386 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **38 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Component` connect `Component` to `facets.js`, `ThemeDrawer`, `QuickOrderListComponent`, `CartItemsComponent`, `morph.js`, `Slideshow`, `PaginatedList`, `ProductFormComponent`, `HeaderMenu`, `utilities.js`, `Scroller`, `LayeredSlideshowComponent`, `LocalizationFormComponent`, `PredictiveSearchComponent`, `QuantitySelectorComponent`, `QuickAddComponent`, `DragZoomWrapper`, `slideshow.js`, `DeferredMedia`, `startViewTransition`, `GiftCardRecipientForm`, `product-card.js`, `onAnimationEnd`, `ProductHotspotComponent`, `StickyAddToCartComponent`, `MarqueeComponent`, `AnchoredPopoverComponent`, `AnnouncementBar`, `DisclosuresSummaryFit`, `CartDrawerComponent`, `CartIcon`, `MediaGallery`, `dialog.js`, `ComparisonSliderComponent`, `PricePerItemComponent`, `ShowMoreComponent`, `events.js`, `VolumePricingInfoComponent`?**
  _High betweenness centrality (0.533) - this node is a cross-community bridge._
- **Why does `LayeredSlideshowComponent` connect `LayeredSlideshowComponent` to `Component`, `dialog.js`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **Why does `GiftCardRecipientForm` connect `GiftCardRecipientForm` to `Component`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **What connects `trapFocusHandlers`, `Theme`, `NavigationActivation` to the rest of the system?**
  _117 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `facets.js` be split into smaller, more focused modules?**
  _Cohesion score 0.052429667519181586 - nodes in this community are weakly interconnected._
- **Should `ThemeDrawer` be split into smaller, more focused modules?**
  _Cohesion score 0.05780885780885781 - nodes in this community are weakly interconnected._
- **Should `QuickOrderListComponent` be split into smaller, more focused modules?**
  _Cohesion score 0.12298387096774194 - nodes in this community are weakly interconnected._