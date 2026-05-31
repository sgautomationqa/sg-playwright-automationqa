const { test } = require('../fixtures/amazonFixture');
const { expect } = require('@playwright/test');

const data = require('../utils/testData');

// Hook to navigate to Amazon before each test
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.amazon.in');
});

test('Search product on Amazon and validate results', async ({ amazonPage,context, page }) => {
  
  // Search product
  await amazonPage.searchProduct(data.product);

  // Validate URL contains search results
  await expect(page).toHaveURL(/s/);

  // Validate search text is displayed
  await expect(page.locator('span.a-color-state')).toContainText(data.product);
 await amazonPage.clickFirstProduct();
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    amazonPage.clickFirstProduct()
  ]);
  // Bring new tab to front
  await newPage.waitForLoadState();

  // Validate product details page is opened
  await expect(newPage).toHaveURL(/dp/);
});