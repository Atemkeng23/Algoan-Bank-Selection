import { test, expect, devices } from '@playwright/test';

const browsers = [
  { name: 'chromium', device: devices['Desktop Chrome'] },
  { name: 'firefox', device: devices['Desktop Firefox'] },
  { name: 'webkit', device: devices['Desktop Safari'] }
];

for (const browser of browsers) {
  test.describe(`Browser Compatibility on ${browser.name}`, () => {
    test.use(browser.device);

    test(`should load page correctly on ${browser.name}`, async ({ page }) => {
      await page.goto('https://connect.preprod.algoan.com/v2/init?client_id=f7be049b0df73459d476fb2d&redirect_uri=https://dashboard.preprod.algoan.com');
      await page.waitForLoadState('networkidle'); // Wait for network to be idle
      await page.waitForSelector('h1'); // Wait for the h1 selector to be present
      await expect(page.getByRole('heading', { name: 'Partagez vos données bancaires' })).toBeVisible({ timeout: 15000 }); // Increase the timeout
    });
  });
}