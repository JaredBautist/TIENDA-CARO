const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

async function validateHoverMenu() {
  const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(process.env.CABAK_PREVIEW || 'http://127.0.0.1:9292', { waitUntil: 'domcontentloaded' });
    const menu = page.locator('.cabak-menu-desktop details');
    const summary = menu.locator('summary');
    const isOpen = () => menu.evaluate(element => element.open);
    await summary.hover();
    assert.equal(await isOpen(), true, 'Mouse entry opens Collections');
    await menu.getByRole('link', { name: 'Ver todo', exact: true }).hover();
    assert.equal(await isOpen(), true, 'Submenu traversal keeps Collections open');
    await page.mouse.move(0, 700);
    assert.equal(await isOpen(), false, 'Mouse departure closes Collections');
    await summary.focus();
    await page.keyboard.press('Enter');
    assert.equal(await isOpen(), true, 'Keyboard activation still opens Collections');
    await summary.hover();
    await page.mouse.move(0, 700);
    assert.equal(await isOpen(), true, 'Pointer exit preserves keyboard focus');
    await page.keyboard.press('Escape');
    assert.equal(await isOpen(), false, 'Escape closes Collections');
    await summary.hover();
    await page.mouse.move(0, 700);
    await page.locator('.cabak-menu-desktop a').first().focus();
    assert.equal(await isOpen(), false, 'Focus departure closes the retained menu');

    const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    await mobile.goto(process.env.CABAK_PREVIEW || 'http://127.0.0.1:9292', { waitUntil: 'domcontentloaded' });
    await mobile.locator('.cabak-menu-mobile__disclosure > summary').tap();
    const mobileMenu = mobile.locator('.cabak-menu-mobile .cabak-menu__collections');
    assert.equal(await mobileMenu.evaluate(element => element.open), false);
    await mobileMenu.locator('summary').tap();
    assert.equal(await mobileMenu.evaluate(element => element.open), true, 'Mobile tap opens Collections');
    await mobileMenu.locator('summary').tap();
    assert.equal(await mobileMenu.evaluate(element => element.open), false, 'Mobile tap closes Collections');
    console.log('Mouse hover, traversal, keyboard, Escape and mobile tap: PASS');
  } finally {
    await browser.close();
  }
}

validateHoverMenu().catch(error => { console.error(error); process.exitCode = 1; });
