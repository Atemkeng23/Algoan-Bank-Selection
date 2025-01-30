import { test, expect, devices } from '@playwright/test';

const browsers = [
  { name: 'chromium', device: devices['Desktop Chrome'] },
  { name: 'firefox', device: devices['Desktop Firefox'] },
  { name: 'webkit', device: devices['Desktop Safari'] }
];

for (const browser of browsers) {
  test.use(browser.device);

  test(`Browser Compatibility on ${browser.name}`, async ({ page }) => {
    await page.goto('https://connect.preprod.algoan.com/v2/init?client_id=f7be049b0df73459d476fb2d&redirect_uri=https://dashboard.preprod.algoan.com');
    await page.waitForLoadState('networkidle'); // Attendre que le réseau soit inactif
    await page.waitForSelector('h1'); // Attendre que le sélecteur h1 soit présent
    await expect(page.getByRole('heading', { name: 'Partagez vos données bancaires' })).toBeVisible({ timeout: 15000 }); // Augmenter le délai d'attente
  });
}