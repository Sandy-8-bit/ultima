const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ reducedMotion: 'reduce' });
  for (const width of [1440, 768, 360]) {
    await page.setViewportSize({ width, height: 950 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    for (const id of ['the-story', 'step-predict', 'step-ticket', 'step-act', 'step-converse']) {
      const section = page.locator(`#${id}`);
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await section.screenshot({ path: `.playwright-artifacts/${id}-${width}.png` });
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    if (overflow) throw new Error(`Overflow at ${width}`);
    console.log(`${width}px: all five sections rendered, no page overflow`);
  }
  await browser.close();
})();
