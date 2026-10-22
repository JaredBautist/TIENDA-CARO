/** Verify the SEO and saved Admin content contracts against a running Shopify development preview. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || '/home/balckyshadown/.cache/ms-playwright-go/1.57.0/package');
const origin = process.env.SEO_PREVIEW_ORIGIN || 'http://127.0.0.1:9292';
const output = process.env.SEO_OUTPUT_DIR || '/tmp/cabak-seo';
const handles = ['enterizos', 'sets-deportivos', 'faldas', 'shorts', 'licras-largas', 'tops', 'bolsos', 'medias'];
const productPath = process.env.SEO_PRODUCT_PATH || '/products/medias-nike';
const routes = ['/', ...handles.map(handle => `/collections/${handle}`), productPath, '/pages/contact', '/search?q=medias'];
const metadata = JSON.parse(fs.readFileSync(path.join(__dirname, '../docs/cabak-storefront/seo-launch/metadata.json'), 'utf8'));

/** Extract rendered SEO data; fail on malformed structured data rather than silently ignoring it. */
async function inspect(page) {
  return page.evaluate(() => ({
    title: document.title.trim(),
    titleCount: document.querySelectorAll('title').length,
    h1: [...document.querySelectorAll('h1')].map(element => element.textContent.trim()),
    mainH1Count: document.querySelectorAll('main h1').length,
    canonical: [...document.querySelectorAll('link[rel="canonical"]')].map(element => element.href),
    description: [...document.querySelectorAll('meta[name="description"]')].map(element => element.content),
    ogImage: document.querySelector('meta[property="og:image"]')?.content,
    ogName: document.querySelector('meta[property="og:site_name"]')?.content,
    jsonld: [...document.querySelectorAll('script[type="application/ld+json"]')].map(element => JSON.parse(element.textContent)),
  }));
}

(async () => {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
  const report = [];
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
    for (const route of routes) {
      const response = await page.goto(origin + route, { waitUntil: 'domcontentloaded' });
      assert.equal(response.status(), 200, route);
      const result = await inspect(page);
      report.push({ route, ...result });
      assert.equal(result.mainH1Count, 1, `${route}: one primary heading in main`);
      assert.equal(result.h1.length, 1, `${route}: no duplicate header H1`);
      assert.equal(result.titleCount, 1);
      assert.ok(!result.title.includes('My Store'), 'placeholder brand must not leak into titles');
      assert.equal(result.canonical.length, 1);
      assert.equal(new URL(result.canonical[0]).hostname, 'cabak.co');
      assert.equal(new URL(result.canonical[0]).pathname, route.split('?')[0]);
      const organizations = result.jsonld.filter(item => item['@type'] === 'Organization');
      assert.equal(organizations.length, 1);
      const organization = organizations[0];
      assert.equal(organization.name, result.ogName);
      assert.equal(organization.name, 'CABAK Activewear');
      assert.equal(organization.url.replace(/\/$/, ''), 'https://cabak.co');
      assert.equal(organization['@id'], 'https://cabak.co/#organization');
      assert.ok(organization.logo.startsWith('https://'));
      assert.deepEqual(organization.sameAs, ['https://www.instagram.com/cabak.co/', 'https://www.facebook.com/profile.php?id=61575323155021']);
      assert.ok(result.ogImage, 'page image or brand fallback must exist');
      assert.ok(!result.ogImage.startsWith('http:'), 'social image must not use HTTP');
      const expected = metadata.find(item => item.path === route && item.path !== '/');
      if (expected) {
        assert.equal(result.title, expected.title, `${route}: saved SEO title, no repeated brand suffix`);
        assert.deepEqual(result.description, [expected.description], `${route}: saved SEO description`);
        if (expected.intro) {
          assert.equal((await page.locator('.cabak-collection-description').innerText()).trim(), expected.intro);
          assert.equal(result.h1[0], expected.page, 'visible category name stays unchanged');
        }
      }
      if (route === '/') {
        assert.equal(result.description.length, 1, 'homepage description fallback');
        assert.ok(result.description[0].includes('ropa deportiva para mujer'));
        assert.equal(result.h1[0], 'Ropa deportiva para tu forma de moverte', 'visible copy is preserved');
        for (const handle of handles) assert.ok(await page.locator(`main a[href="/collections/${handle}"]`).count());
      }
      if (route === productPath) {
        const product = result.jsonld.find(item => item['@type'] === 'Product');
        assert.ok(product, 'native Product JSON-LD remains');
        const baselineFile = path.join(output, 'baseline.json');
        if (fs.existsSync(baselineFile)) {
          const baselineProduct = JSON.parse(fs.readFileSync(baselineFile)).find(item => item.url === productPath)?.jsonld.find(item => item['@type'] === 'Product');
          assert.deepEqual(product, baselineProduct, 'SEO changes must not alter product facts');
        }
      }
    }
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const route of ['/', '/collections/enterizos', productPath, '/pages/contact', '/search?q=medias']) {
        await page.goto(origin + route, { waitUntil: 'domcontentloaded' });
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(400);
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${route} at ${width}: no overflow`);
        if (route === '/') {
          const heading = page.locator('.cabak-banner__heading').first();
          const geometry = await heading.boundingBox();
          const baselineFile = path.join(output, 'baseline.json');
          if (fs.existsSync(baselineFile)) {
            const baseline = JSON.parse(fs.readFileSync(baselineFile)).find(item => item.width === width)?.hero;
            if (baseline) for (const key of ['x', 'y', 'width', 'height']) assert.ok(Math.abs(geometry[key] - baseline[key]) < 1, `${width}: unchanged hero ${key}`);
          }
          const slide = page.locator('.cabak-banner__slide').first();
          await slide.focus();
          assert.equal(await slide.evaluate(element => document.activeElement === element), true);
        }
        await page.screenshot({ path: path.join(output, `after-${route.split('?')[0].replaceAll('/', '_')}-${width}.png`) });
      }
    }
    const noScript = await browser.newPage({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
    await noScript.goto(origin, { waitUntil: 'domcontentloaded' });
    assert.equal(await noScript.locator('main h1').count(), 1);
    assert.equal(await noScript.locator('.cabak-category-grid__tile a').count(), 8);
    fs.writeFileSync(path.join(output, 'after.json'), JSON.stringify(report, null, 2));
    console.log('PASS: rendered SEO on 12 routes, unchanged product data, four responsive widths, no-JS navigation and focus.');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
