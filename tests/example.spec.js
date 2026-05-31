const { test, expect } = require('@playwright/test');

test('Search in Google', async ({ page }) => {
  await page.goto('https://www.google.com');

  await page.fill('textarea[name="q"]', 'Playwright testing');
  await page.press('textarea[name="q"]', 'Enter');

  await expect(page).toHaveTitle(/Playwright/);
});