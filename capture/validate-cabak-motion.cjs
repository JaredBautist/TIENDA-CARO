const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || '/home/balckyshadown/.cache/ms-playwright-go/1.57.0/package');
const origin = 'http://127.0.0.1:9292';
(async () => {
 const browser = await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 try {
  for (const width of [320,390,430,768,1024,1440]) {
   const page = await browser.newPage({viewport:{width,height:900},hasTouch:width<1100});
   await page.addInitScript(() => {
    window.motionCalls=[];
    const original=Element.prototype.animate;
    Element.prototype.animate=function(frames,options){if(this.matches('.cabak-category-grid__tile, .cabak-banner__copy, .cabak-menu__submenu'))window.motionCalls.push({className:this.className,frames,options});return original.call(this,frames,options)};
   });
   await page.goto(origin,{waitUntil:'domcontentloaded'});
   await page.waitForFunction(()=>customElements.get('cabak-rail'));
   const tile=page.locator('.cabak-category-grid__tile').first();
   await tile.scrollIntoViewIfNeeded();
   await page.waitForFunction(()=>window.motionCalls.some(c=>c.className.includes('category-grid__tile')));
   await page.waitForTimeout(950);
   const count=await page.evaluate(()=>window.motionCalls.filter(c=>c.className.includes('category-grid__tile')).length);
   await page.evaluate(()=>scrollTo(0,0));await tile.scrollIntoViewIfNeeded();await page.waitForTimeout(100);
   assert.equal(await page.evaluate(()=>window.motionCalls.filter(c=>c.className.includes('category-grid__tile')).length),count,'entrances must not replay');
   await tile.locator('a').focus();
   assert.equal(await tile.evaluate(el=>el.getAnimations().length),0,'focus cancels motion');
   await page.emulateMedia({reducedMotion:'reduce'});
   assert.equal(await page.locator('.cabak-category-grid__tile').evaluateAll(els=>els.reduce((n,el)=>n+el.getAnimations().length,0)),0);
   const section=page.locator('.shopify-section').filter({has:page.locator('.cabak-category-grid')});
   await section.evaluate(el=>{el.dispatchEvent(new CustomEvent('shopify:section:unload',{bubbles:true}));el.dispatchEvent(new CustomEvent('shopify:section:load',{bubbles:true}))});
   assert.equal(await tile.evaluate(el=>getComputedStyle(el).opacity),'1');
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'no page overflow');
   await page.goto(origin+'/pages/contact',{waitUntil:'domcontentloaded'});
   for(const id of ['name','email','phone','body']) {
    const label=page.locator(`label[for="ContactForm-${id}"]`);assert.ok(await label.isVisible());
    assert.ok(await label.evaluate(el=>el.getBoundingClientRect().height>10));
   }
   await page.locator('#ContactForm-name').fill('Prueba local');
   assert.ok(await page.locator('label[for="ContactForm-name"]').isVisible());
   await page.screenshot({path:`/tmp/cabak-motion/contact-${width}.png`,fullPage:true});
   console.log(width,'PASS: one-time motion, focus, reduced motion, editor lifecycle, labels, overflow');
   await page.close();
  }
  const noScript=await browser.newPage({javaScriptEnabled:false,viewport:{width:390,height:844}});
  await noScript.goto(origin,{waitUntil:'domcontentloaded'});
  assert.equal(await noScript.locator('.cabak-category-grid__tile a').count(),8);
  assert.equal(await noScript.locator('.cabak-category-grid__tile').first().evaluate(el=>getComputedStyle(el).opacity),'1');
  console.log('No-JS: eight category links remain visible');
 } finally {await browser.close()}
})().catch(error=>{console.error(error);process.exit(1)});
