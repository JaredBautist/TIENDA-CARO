const assert = require('node:assert/strict');
const { mkdir } = require('node:fs/promises');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

/** Inspect signed-out entry without submitting emails or creating customer sessions. */
async function validateAccountEntry() {
  const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', headless: true });
  const screenshotDirectory = process.env.CABAK_ACCOUNT_CAPTURE || '/tmp/cabak-account-entry';
  const failures = [];
  await mkdir(screenshotDirectory, { recursive: true });
  try {
    for (const width of [320, 390, 768, 1440]) {
      const context = await browser.newContext({ viewport: { width, height: 900 }, locale: 'es-CO' });
      const page = await context.newPage();
      page.setDefaultTimeout(15000);
      try {
        const response = await page.goto(process.env.CABAK_PREVIEW || 'http://127.0.0.1:9292/', {
          waitUntil: 'domcontentloaded',
        });
        assert.equal(response.status(), 200, 'Storefront must be available');
        assert.equal(await page.locator('[data-cabak-account-link]').count(), 0, 'Header must open native account access directly');
        const account = page.locator('shopify-account');
        const trigger = account.getByRole('button').first();
        await trigger.focus();
        await page.keyboard.press('Enter');
        const dialog = page.getByRole('dialog');
        const email = dialog.locator('input[type="email"]');
        await email.waitFor({ state: 'visible' });
        await page.screenshot({ path: `${screenshotDirectory}/${width}.png` });

        const check = (name, condition) => {
          if (!condition) failures.push(`${width}px: ${name}`);
        };
        check('Spanish document language', (await page.locator('html').getAttribute('lang')).startsWith('es'));
        check('Spanish account heading', /inicia|iniciar|ingresa|ingresar/i.test(await dialog.innerText()));
        check('Spanish email label', await dialog.getByLabel(/correo/i).count() > 0);
        check('Email autofill', await email.getAttribute('autocomplete') === 'email');
        check('No password field', await dialog.locator('input[type="password"]').count() === 0);
        check('No horizontal overflow', await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
        const bounds = await email.boundingBox();
        check('Email field fits viewport', bounds && bounds.x >= 0 && bounds.x + bounds.width <= width + 1);
        const visibleSocial = await dialog.getByRole('button', { name: /with shop|con shop|google|facebook/i }).count();
        check('Email-only access', visibleSocial === 0 && await dialog.locator('shop-login:visible').count() === 0);
        await page.keyboard.press('Escape');
        await dialog.waitFor({ state: 'hidden' });
        console.log(`${width}px: signed-out entry inspected; no email submitted`);
      } catch (error) {
        failures.push(`${width}px: ${error.message}`);
      } finally {
        await context.close();
      }
    }
  } finally {
    await browser.close();
  }
  assert.equal(failures.length, 0, failures.join('\n'));
  console.log('Account entry checks passed. Code delivery and authenticated sessions require separate verification.');
}

validateAccountEntry().catch(error => { console.error(error.message); process.exitCode = 1; });
