/**
 * Scrolls a Shopify product rail one card at a time.
 * Native overflow remains usable without JavaScript. No commerce state is stored.
 */
class CabakRail extends HTMLElement {
  connectedCallback() {
    this.controller?.abort();
    this.observer?.disconnect();
    this.controller = new AbortController();
    const { signal } = this.controller;
    this.track = this.querySelector('[data-track]');
    this.previous = this.querySelector('[data-previous]');
    this.next = this.querySelector('[data-next]');
    if (!this.track || !this.previous || !this.next) return;
    this.previous.addEventListener('click', event => this.move(-1, event.detail === 0), { signal });
    this.next.addEventListener('click', event => this.move(1, event.detail === 0), { signal });
    this.track.addEventListener('scroll', () => this.updateControls(), { passive: true, signal });
    this.observer = new ResizeObserver(() => this.updateControls());
    this.observer.observe(this.track);
    this.updateControls();
  }

  disconnectedCallback() {
    this.controller?.abort();
    this.observer?.disconnect();
  }

  move(direction, immediate = false) {
    const card = this.track.firstElementChild;
    if (!card) return;
    const gap = Number.parseFloat(getComputedStyle(this.track).columnGap) || 0;
    this.track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: immediate || matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }

  updateControls() {
    const end = this.track.scrollWidth - this.track.clientWidth;
    this.previous.parentElement.hidden = end <= 2;
    this.previous.disabled = this.track.scrollLeft <= 2;
    this.next.disabled = this.track.scrollLeft >= end - 2;
  }
}

if (!customElements.get('cabak-rail')) customElements.define('cabak-rail', CabakRail);

/** Adds desktop mouse hover while preserving native touch/keyboard disclosures. */
class CabakNavigation extends HTMLElement {
  connectedCallback() {
    this.controller?.abort();
    this.controller = new AbortController();
    const { signal } = this.controller;
    this.addEventListener('keydown', event => {
      this.querySelectorAll('.cabak-menu__submenu').forEach(panel => panel.getAnimations().forEach(animation => animation.cancel()));
      if (event.key !== 'Escape') return;
      const opened = [...this.querySelectorAll('details[open]')].at(-1);
      if (opened) {
        opened.open = false;
        opened.querySelector('summary')?.focus();
        event.stopPropagation();
      }
    }, { signal });
    this.addEventListener('click', event => {
      if (event.target.closest('a')) this.close();
    }, { signal });
    document.addEventListener('click', event => {
      if (!this.contains(event.target)) this.close();
    }, { signal });
    if (this.classList.contains('cabak-menu-desktop')) {
      const hoverPointer = matchMedia('(hover: hover) and (pointer: fine)');
      this.querySelectorAll('.cabak-menu__collections').forEach(details => {
        details.addEventListener('pointerenter', event => {
          if (event.pointerType !== 'mouse' || !hoverPointer.matches || details.open) return;
          details.open = true;
          const panel = details.querySelector('.cabak-menu__submenu');
          if (panel && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
            panel.getAnimations().forEach(animation => animation.cancel());
            panel.animate([{ opacity: 0.65, transform: 'translateY(-6px)' }, { opacity: 1, transform: 'none' }],
              { duration: 160, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' });
          }
        }, { signal });
        details.addEventListener('pointerleave', event => {
          if (event.pointerType === 'mouse' && !details.contains(document.activeElement)) {
            details.open = false;
          }
        }, { signal });
        details.addEventListener('focusout', () => {
          queueMicrotask(() => {
            if (!details.contains(document.activeElement) && !details.matches(':hover')) {
              details.open = false;
            }
          });
        }, { signal });
      });
    }
  }
  close() { this.querySelectorAll('details[open]').forEach(details => { details.open = false; }); }
  disconnectedCallback() { this.controller?.abort(); }
}
if (!customElements.get('cabak-navigation')) customElements.define('cabak-navigation', CabakNavigation);
