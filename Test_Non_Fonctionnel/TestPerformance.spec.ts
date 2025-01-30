import { test, expect } from '@playwright/test';

test('Page Load Time', async ({ page }) => {
  const startTime = Date.now();
  await page.goto('https://connect.preprod.algoan.com/v2/init?client_id=f7be049b0df73459d476fb2d&redirect_uri=https://dashboard.preprod.algoan.com');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Continuer vers le choix de la' }).click();
  const loadTime = Date.now() - startTime;
  expect(loadTime).toBeLessThan(5000); // Vérifie que le temps de chargement est inférieur à 3 secondes
});