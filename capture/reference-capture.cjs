// Read-only capture of public storefront presentation; no cart/checkout requests.
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

async function capture() {
  const out = path.join(__dirname, 'reference');
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ headless: true, executablePath: '/usr/bin/chromium' });
  try {
    const page = await browser.newPage({ reducedMotion: 'reduce' });
    for (const width of [390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('https://camilaperezsport.com/', { waitUntil: 'domcontentloaded' });
      await page.evaluate(async () => {
        await document.fonts.ready;
        for (let y = 0; y < document.documentElement.scrollHeight; y += 750) {
          scrollTo(0, y);
          await new Promise(resolve => setTimeout(resolve, 120));
        }
        scrollTo(0, 0);
      });
      await page.screenshot({ path: path.join(out, `home-${width}.png`), fullPage: true, animations: 'disabled' });
      const survey = await page.evaluate(() => ({
        title: document.title,
        sections: [...document.querySelectorAll('.shopify-section')].map(el => {
          const r = el.getBoundingClientRect();
          return { id: el.id, classes: el.className, top: Math.round(r.top + scrollY), height: Math.round(r.height), text: el.innerText.slice(0, 1200) };
        }),
        links: [...document.querySelectorAll('header a, nav a')].map(a => ({ text: a.innerText.trim(), url: a.href })).filter(a => a.text),
        headings: [...document.querySelectorAll('h1,h2,h3')].map(el => {
          const s = getComputedStyle(el);
          return { text: el.innerText, size: s.fontSize, family: s.fontFamily, weight: s.fontWeight };
        }),
        bodyFont: getComputedStyle(document.body).fontFamily
      }));
      fs.writeFileSync(path.join(out, `home-${width}.json`), JSON.stringify(survey, null, 2));
      console.log(width, survey.sections.map(s => `${s.id}: ${s.height}px ${s.text.slice(0, 70)}`).join('\n'));
    }
  } finally { await browser.close(); }
}
capture().catch(error => { console.error(error); process.exitCode = 1; });
