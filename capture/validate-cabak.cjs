const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

async function validate() {
  const out = path.join(__dirname, 'rebuild');
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/chromium' });
  const results = [];
  try {
    const page = await browser.newPage({ reducedMotion: 'reduce' });
    const errors = [];
    const referenceRequests = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('request', request => {
      if (request.url().includes('camilaperezsport.com')) referenceRequests.push(request.url());
    });
    for (const width of [320, 360, 375, 390, 430, 667, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: width === 667 ? 375 : 900 });
      await page.goto(process.env.CABAK_PREVIEW || 'http://127.0.0.1:9393', { waitUntil: 'domcontentloaded' });
      await page.locator('.cabak-banner').waitFor();
      await page.evaluate(() => document.fonts.ready);
      const geometry = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        bannerHeight: document.querySelector('.cabak-banner__slide').getBoundingClientRect().height,
        rails: document.querySelectorAll('.cabak-products').length,
        categories: document.querySelectorAll('.cabak-category-grid__tile').length,
        gridColumns: getComputedStyle(document.querySelector('.cabak-category-grid')).gridTemplateColumns.split(' ').length,
        referenceImages: [...document.images].filter(img => /camilaperezsport/i.test(img.src)).length,
      }));
      assert.equal(geometry.overflow, false, `Document overflow at ${width}`);
      assert.equal(geometry.rails, 3);
      assert.equal(geometry.categories, 8);
      assert.equal(geometry.gridColumns, width >= 1100 ? 4 : 2);
      assert.ok(Math.abs(geometry.bannerHeight - width / (width < 750 ? 1.6 : 3.03)) < 2);
      assert.equal(geometry.referenceImages, 0);
      if (width < 750) {
        const mobileControls = await page.locator('.cabak-products').evaluateAll(sections =>
          sections.every(section => {
            const heading = section.querySelector('h2').getBoundingClientRect();
            const controls = section.querySelector('.cabak-products__controls').getBoundingClientRect();
            const track = section.querySelector('[data-track]').getBoundingClientRect();
            return controls.top >= heading.bottom && controls.bottom <= track.top &&
              [...section.querySelectorAll('button')].every(button => {
                const box = button.getBoundingClientRect();
                return box.width >= 44 && box.height >= 44;
              });
          }));
        assert.ok(mobileControls, `Separated touch controls at ${width}`);
      }

      const rail = page.locator('.cabak-products cabak-rail').first();
      const track = rail.locator('[data-track]');
      await rail.locator('[data-next]').click();
      await page.waitForFunction(el => el.scrollLeft > 0, await track.elementHandle());
      await rail.locator('[data-previous]').click();
      await page.waitForFunction(el => el.scrollLeft < 2, await track.elementHandle());
      await track.focus();
      await page.keyboard.press('ArrowRight');
      await page.waitForFunction(el => el.scrollLeft > 0, await track.elementHandle());
      await track.evaluate(el => { el.scrollLeft = 0; });

      await page.locator('.cabak-banner [data-next]').click();
      await page.waitForFunction(() => document.querySelector('.cabak-banner [data-track]').scrollLeft > 0);
      await page.locator('.cabak-banner [data-previous]').click();
      await page.waitForFunction(() => document.querySelector('.cabak-banner [data-track]').scrollLeft < 2);
      if (width < 750) {
        const menu = page.locator('.cabak-menu-mobile__disclosure');
        await menu.locator(':scope > summary').click();
        assert.equal(await menu.getAttribute('open'), '');
        await page.keyboard.press('Escape');
        assert.equal(await menu.getAttribute('open'), null);
      } else {
        const collectionMenu = page.locator('.cabak-menu-desktop details');
        await collectionMenu.locator('summary').click();
        assert.equal(await collectionMenu.getAttribute('open'), '');
        await page.keyboard.press('Escape');
        assert.equal(await collectionMenu.getAttribute('open'), null);
      }
      await page.getByRole('button', { name: 'Cart', exact: true }).click();
      await page.locator('dialog[open]').waitFor();
      await page.keyboard.press('Escape');
      await page.locator('dialog[open]').waitFor({ state: 'hidden' });
      await page.evaluate(() => {
        scrollTo(0, 0);
        document.querySelector('.page-wrapper')?.scrollTo(0, 0);
      });
      await page.screenshot({ path: path.join(out, `home-${width}.png`), fullPage: true, animations: 'disabled' });
      if (width === 1440 || width === 390) {
        for (const [name, selector] of Object.entries({ campaign: '.cabak-banner', products: '.cabak-products', categories: '.cabak-category-grid', footer: '.cabak-footer' })) {
          await page.locator(selector).first().screenshot({ path: path.join(out, `${name}-${width}.png`), animations: 'disabled' });
        }
      }
      if (width < 750) {
        await page.locator('.cabak-banner__heading').first().evaluate(heading => {
          heading.textContent = 'Una colección diseñada para acompañarte en todos tus movimientos, cada día';
          heading.style.fontSize = '48px';
        });
        const clipped = await page.locator('.cabak-banner__slide').first().evaluate(slide =>
          slide.scrollHeight > slide.clientHeight + 1);
        assert.equal(clipped, false, `Enlarged campaign text at ${width}`);
      }
      results.push({ width, ...geometry, railButtons: 'pass', keyboardScroll: 'pass', bannerControls: 'pass', navigation: 'pass', cart: 'pass' });
      console.log(JSON.stringify(results.at(-1)));
    }
    assert.equal(referenceRequests.length, 0);
    fs.writeFileSync(path.join(out, 'validation.json'), JSON.stringify({ results, errors, referenceRequests }, null, 2));
    assert.deepEqual(errors, [], 'The storefront must not produce browser errors');
  } finally { await browser.close(); }
}
validate().catch(error => { console.error(error); process.exitCode = 1; });
