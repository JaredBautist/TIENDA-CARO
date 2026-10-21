// Contract: mobile CABAK branding must not intersect profile/cart controls in either menu mode.
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || '/home/balckyshadown/.cache/ms-playwright-go/1.57.0/package');
(async () => {
  const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage({ hasTouch: true });
    for (const width of [320, 390, 430, 610, 749]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('http://127.0.0.1:9292', { waitUntil: 'domcontentloaded' });
      await page.locator('shopify-account').getByRole('button').first().waitFor();
      for (const mode of ['native', 'drawer']) {
        if (mode === 'drawer') {
          await page.locator('#header-component').evaluate(el => el.setAttribute('data-menu-style', 'drawer'));
          // Shopify may insert section styles after the global stylesheet in preview/editor.
          await page.addStyleTag({ content: `@media(max-width:749px) { #header-component[data-menu-style='drawer'] .header__columns { grid-template-areas: 'leftA leftB center rightA rightB'; } }` });
        }
        await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
        const logo = await page.locator('.cabak-header-brand').boundingBox();
        const account = await page.locator('div.account-button').boundingBox();
        const cart = await page.locator('header-actions .header-actions__action').last().boundingBox();
        for (const [name, rect] of [['profile', account], ['cart', cart]]) {
          assert.ok(rect, `${width}/${mode}: ${name} visible`);
          const overlaps = logo.x < rect.x + rect.width && logo.x + logo.width > rect.x && logo.y < rect.y + rect.height && logo.y + logo.height > rect.y;
          assert.ok(!overlaps, `${width}/${mode}: logo overlaps ${name}`);
          assert.ok(rect.width >= 44 && rect.height >= 44, `${width}/${mode}: ${name} touch target`);
        }
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}/${mode}: overflow`);
        console.log(`${width}/${mode}: PASS`);
      }
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });
