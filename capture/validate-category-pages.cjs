const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const categories = ['Enterizos', 'Sets deportivos', 'Faldas', 'Shorts', 'Licras largas', 'Tops', 'Bolsos', 'Medias'];

async function validateCategories() {
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/chromium' });
  const report = [];
  const errors = [];
  const output = path.join(__dirname, 'categories');
  fs.mkdirSync(output, { recursive: true });
  try {
    const page = await browser.newPage({ reducedMotion: 'reduce' });
    page.on('pageerror', error => errors.push(error.message));
    const base = process.env.CABAK_PREVIEW || 'http://127.0.0.1:9292';
    for (const category of [...categories, 'Todos los productos']) {
      const handle = category === 'Todos los productos' ? 'all' : category.toLowerCase().replaceAll(' ', '-');
      for (const width of category === 'Enterizos' ? [320, 390, 768, 1440] : [390, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        const response = await page.goto(`${base}/collections/${handle}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
        assert.equal(response.status(), 200, handle);
        await page.locator('.cabak-collection-header').waitFor();
        await page.evaluate(() => document.fonts.ready);
        assert.equal(await page.locator('h1').count(), 1);
        assert.equal((await page.locator('h1').textContent()).trim(), category);
        assert.equal(await page.locator('.cabak-collection-breadcrumb, .cabak-collection-navigation').count(), 0);
        const dropdown = page.locator('.cabak-menu-desktop .cabak-menu__submenu').first();
        assert.deepEqual(await dropdown.locator('a').allTextContents(), [...categories, 'Ver todo']);
        assert.equal(await dropdown.locator('[aria-current="page"]').getAttribute('href'), `/collections/${handle}`);
        assert.equal(await page.locator('.cabak-collection-empty').count(), 1, 'Actual catalog is currently empty');
        assert.equal(await page.locator('.facets-toggle__button').count(), 0, 'Empty catalogs do not show unusable filters');
        assert.equal(await page.locator('.cabak-collection-empty a').getAttribute('href'), handle === 'all' ? '/' : '/collections/all');
        const geometry = await page.evaluate(() => ({
          overflow: document.documentElement.scrollWidth > innerWidth,
          headingFont: getComputedStyle(document.querySelector('h1')).fontFamily,
          background: getComputedStyle(document.body).backgroundColor,
          referenceImages: [...document.images].some(image => /camilaperezsport/i.test(image.src)),
        }));
        assert.equal(geometry.overflow, false);
        assert.equal(geometry.referenceImages, false);
        assert.match(geometry.headingFont, /Work Sans/);
        if (category === 'Enterizos') {
          await page.screenshot({ path: path.join(output, `enterizos-${width}.png`), fullPage: true });
          await page.getByRole('button', { name: 'Cart', exact: true }).click();
          await page.locator('dialog[open]').waitFor();
          await page.keyboard.press('Escape');
          await page.locator('dialog[open]').waitFor({ state: 'hidden' });
        }
        report.push({ handle, width, status: response.status(), ...geometry });
        console.log(`${handle} at ${width}: PASS`);
      }
    }
    assert.deepEqual(errors, []);
    fs.writeFileSync(path.join(output, 'validation.json'), JSON.stringify({ report, errors }, null, 2));
  } finally { await browser.close(); }
}
validateCategories().catch(error => { console.error(error); process.exitCode = 1; });
