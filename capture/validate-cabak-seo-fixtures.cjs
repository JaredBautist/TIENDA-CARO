/** Exercise Liquid branches absent from the merchant's current catalog, without changing Admin data.
 * Install liquidjs@10.30.0 in a temporary prefix; pass LIQUIDJS_MODULE to its module path.
 * Shopify image/CDN filters are fixture adapters. Live-render tests remain authoritative.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { Liquid } = require(process.env.LIQUIDJS_MODULE || 'liquidjs');
const root = path.resolve(__dirname, '..');
const engine = new Liquid({ root: path.join(root, 'snippets'), extname: '.liquid' });
engine.registerFilter('json', JSON.stringify);
engine.registerFilter('asset_url', filename => `//cdn.shopify.com/assets/${filename}`);
engine.registerFilter('image_url', image => image.url);
engine.registerFilter('image_tag', url => `<img src="${url}" alt="Fixture">`);
engine.registerFilter('inline_asset_content', () => '<svg></svg>');
const load = relative => fs.readFileSync(path.join(root, relative), 'utf8').replace(/{%\s*(schema|doc)\s*%}[\s\S]*?{%\s*end\1\s*%}/g, '');
const campaignTemplate = load('sections/cabak-campaign.liquid');
const metaTemplate = load('snippets/meta-tags.liquid');
const organizationTemplate = load('snippets/cabak-organization.liquid');
const base = { shop: { name: 'My Store', url: 'https://cabak.co' }, request: { page_type: 'index', origin: 'https://preview.example' }, settings: {}, page_title: 'Ropa deportiva para mujer | CABAK Activewear', page_description: '', canonical_url: 'https://cabak.co/', current_page: 1, routes: { all_products_collection_url: '/collections/all' } };
// Shopify objects remain global inside isolated render snippets.
const render = (template, context) => engine.parseAndRender(template, context, { globals: context });
const image = { url: '//cdn.shopify.com/merchant-image.png', width: 800, height: 600 };

(async () => {
  for (const scenario of [
    { label: 'text-only', blocks: [{ settings: { heading: 'Tu forma de moverte' } }], hidden: false },
    { label: 'image-only', blocks: [{ settings: { heading: 'Tu forma de moverte', image, show_text: false } }], hidden: true },
    { label: 'image-with-copy', blocks: [{ settings: { heading: 'Tu forma de moverte', image, show_text: true } }], hidden: false },
    { label: 'multiple-slides', blocks: [{ settings: { heading: 'Primera' } }, { settings: { heading: 'Segunda' } }], hidden: false },
    { label: 'empty', blocks: [], hidden: true },
    { label: 'blank-heading', blocks: [{ settings: { heading: '' } }], hidden: false },
  ]) {
    const html = await render(campaignTemplate, { ...base, section: { id: 'fixture', blocks: scenario.blocks } });
    assert.equal((html.match(/<h1\b/g) || []).length, 1, scenario.label);
    assert.equal(/<h1 class="visually-hidden">/.test(html), scenario.hidden, scenario.label);
    assert.ok(!/<h1[^>]*>\s*<\/h1>/.test(html), 'empty title is never emitted');
    if (scenario.blocks.length) assert.ok(html.includes('href="/collections/all"'));
  }
  const fallback = await render(metaTemplate, base);
  assert.ok(fallback.includes('Descubre ropa deportiva para mujer'));
  assert.ok(fallback.includes('https://cdn.shopify.com/assets/cabak-social-card.png'));
  assert.equal((fallback.match(/CABAK Activewear/g) || []).length > 0, true);
  assert.ok(!fallback.includes('My Store'));
  const custom = await render(metaTemplate, { ...base, shop: { ...base.shop, name: 'CABAK & Co' }, page_title: 'Colección <Nueva>', page_description: 'Texto propio & verificado', page_image: image });
  assert.ok(custom.includes('Texto propio &amp; verificado'), 'Admin description wins');
  assert.ok(custom.includes('Colección &lt;Nueva&gt;'), 'title is escaped');
  assert.ok(custom.includes('CABAK &amp; Co'), 'real Admin name wins and is escaped');
  assert.ok(custom.includes('https://cdn.shopify.com/merchant-image.png'), 'page image wins');
  assert.ok(!custom.includes('cabak-social-card.png'), 'no duplicate fallback image');
  const collection = await render(metaTemplate, { ...base, request: { ...base.request, page_type: 'collection' } });
  assert.ok(!collection.includes('name="description"'), 'draft descriptions are not silently published');
  for (const logo of [undefined, image, { url: 'https://cdn.shopify.com/logo.png' }]) {
    const html = await render(organizationTemplate, { ...base, settings: { logo } });
    const organization = JSON.parse(html.match(/<script[^>]*>([\s\S]*)<\/script>/)[1]);
    assert.equal(organization.url, 'https://cabak.co');
    assert.ok(organization.logo.startsWith('https://'));
    assert.ok(!organization.logo.includes('https:https:'));
  }
  console.log('PASS: six campaign states, Admin overrides, escaping, HTTPS image precedence, empty description boundaries and three logo states.');
})().catch(error => { console.error(error); process.exitCode = 1; });
