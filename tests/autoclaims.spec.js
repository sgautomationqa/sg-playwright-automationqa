const { test } = require('../fixtures/autoclaimsFixture');
const { expect } = require('@playwright/test');



// Hook to navigate to Amazon before each test
test.beforeEach(async ({ page }) => {
  await page.goto('https://qa.autoclaims.com');
});

test('Click on New user', async ({ autoclaimsPage,context, page }) => {
  
  // Click on New user button
  await autoclaimsPage.clickNewUser();

  // Validate Sign Up heading is displayed
  let heading = await autoclaimsPage.signupheading.textContent();
  expect(heading).toBe('Sign Up');
});
  