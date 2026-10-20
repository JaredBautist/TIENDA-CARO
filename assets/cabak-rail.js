/**
 * Scrolls a Shopify product rail one card at a time.
 * Native overflow remains usable without JavaScript. No commerce state is stored.
 */
class CabakRail extends HTMLElement {
  connectedCallback() {
    this.controller?.abort();
    this.controller = new AbortController();
    const { signal } = this.controller;
    this.track = this.querySelector('[data-track]');
    this.previous = this.querySelector('[data-previous]');
    this.next = this.querySelector('[data-next]');
    if (!this.track || !this.previous || !this.next) return;
    this.previous.addEventListener('click', () => this.move(-1), { signal });
    this.next.addEventListener('click', () => this.move(1), { signal });
    this.track.addEventListener('scroll', () => this.updateControls(), { passive: true, signal });
    this.observer = new ResizeObserver(() => this.updateControls());
    this.observer.observe(this.track);
    this.updateControls();
  }

  disconnectedCallback() {
    this.controller?.abort();
    this.observer?.disconnect();
  }

  move(direction) {
    const card = this.track.firstElementChild;
    if (!card) return;
    const gap = Number.parseFloat(getComputedStyle(this.track).columnGap) || 0;
    this.track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }

  updateControls() {
    const end = this.track.scrollWidth - this.track.clientWidth;
    this.previous.disabled = this.track.scrollLeft <= 2;
    this.next.disabled = this.track.scrollLeft >= end - 2;
  }
}

if (!customElements.get('cabak-rail')) customElements.define('cabak-rail', CabakRail);

/** Closes native navigation disclosures on Escape, outside clicks and navigation. */
class CabakNavigation extends HTMLElement {
  connectedCallback() {
    this.controller?.abort();
    this.controller = new AbortController();
    const { signal } = this.controller;
    this.addEventListener('keydown', event => {
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
  }
  close() { this.querySelectorAll('details[open]').forEach(details => { details.open = false; }); }
  disconnectedCallback() { this.controller?.abort(); }
}
if (!customElements.get('cabak-navigation')) customElements.define('cabak-navigation', CabakNavigation);
