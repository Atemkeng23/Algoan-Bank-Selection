import { setDefaultTimeout, Before, After } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { expect } from '@playwright/test';

setDefaultTimeout(120000); // Augmenter le timeout par défaut à 120 secondes

let browser: Browser;
let bCtx: BrowserContext;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] });
  bCtx = await browser.newContext({ viewport: null, javaScriptEnabled: true });
  page = await bCtx.newPage();
});

After(async function () {
  if (page && !page.isClosed()) await page.close();
  if (bCtx && bCtx.pages().length > 0) await bCtx.close();
  if (browser && browser.contexts().length > 0) await browser.close();
});

export { browser, bCtx, page };