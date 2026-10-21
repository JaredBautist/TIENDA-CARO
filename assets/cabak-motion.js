/** Progressive, one-time CABAK entrances; server-rendered content is always visible. */
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const sections = new Map();
const easing = 'cubic-bezier(0.23, 1, 0.32, 1)';

/** Observe one section, and return a cleanup that cancels all of its owned effects. */
function observeSection(section) {
  const animations = new Map();
  const tiles = [...section.querySelectorAll('.cabak-category-grid__tile, .cabak-products h2')];
  const seen = new WeakSet();
  const controller = new AbortController();
  function play(element, keyframes, duration, delay = 0) {
    if (reducedMotion.matches || element.contains(document.activeElement)) return;
    const animation = element.animate(keyframes, { duration, delay, easing, fill: 'backwards' });
    animations.set(element, animation);
    const release = () => { if (animations.get(element) === animation) animations.delete(element); };
    animation.onfinish = release;
    animation.oncancel = release;
  }
  const observer = new IntersectionObserver(entries => {
    let order = 0;
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (seen.has(entry.target)) continue;
      seen.add(entry.target);
      play(entry.target, [
        { opacity: 0.25, transform: 'translateY(28px)' },
        { opacity: 1, transform: 'none' },
      ], 600, Math.min(order++ * 90, 270));
    }
  }, { threshold: 0.12 });
  tiles.forEach(tile => observer.observe(tile));
  const campaign = section.querySelector('.cabak-banner__slide:first-child .cabak-banner__copy');
  if (campaign) {
    [...campaign.children].forEach((element, index) => {
      play(element, [{ transform: 'translateY(24px)' }, { transform: 'none' }], 650, index * 80);
    });
  }
  section.addEventListener('focusin', event => {
    const tile = event.target.closest('.cabak-category-grid__tile, .cabak-products h2');
    if (tile) { seen.add(tile); observer.unobserve(tile); }
    for (const [element, animation] of animations) {
      if (element.contains(event.target)) animation.cancel();
    }
  }, { signal: controller.signal });
  return () => {
    observer.disconnect();
    controller.abort();
    animations.forEach(animation => animation.cancel());
    animations.clear();
  };
}

/** Initialize only eligible sections, including replacements inserted by the theme editor. */
function initialize(root = document) {
  if (reducedMotion.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return;
  const candidates = root.matches?.('.shopify-section') ? [root] : root.querySelectorAll('.shopify-section');
  for (const section of candidates) {
    if (!sections.has(section) && section.querySelector('.cabak-category-grid, .cabak-banner, .cabak-products')) {
      sections.set(section, observeSection(section));
    }
  }
}
initialize();
document.addEventListener('shopify:section:load', event => initialize(event.target));
document.addEventListener('shopify:section:unload', event => {
  sections.get(event.target)?.();
  sections.delete(event.target);
});
reducedMotion.addEventListener('change', () => {
  // Finish in the readable static state; do not replay entrances on preference changes.
  sections.forEach(cleanup => cleanup());
  document.querySelectorAll('.cabak-menu__submenu').forEach(panel => panel.getAnimations().forEach(animation => animation.cancel()));
});
