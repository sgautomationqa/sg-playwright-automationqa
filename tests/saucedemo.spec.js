const { test } = require('../fixtures/saucedemoFixture');
const { expect } = require('@playwright/test');
const data = require('../utils/testData');


test('Login to SauceDemo and validate products page', async ({ saucedemologin, saucedemoproduct }) => {
    await saucedemologin.page.goto('https://www.saucedemo.com');
  // Login to SauceDemo
  await saucedemologin.login(data.username, data.password);

    // Validate products page is displayed by checking the presence of product title
  const productTitle = saucedemologin.page.locator('.title');
  await expect(productTitle).toHaveText('Products');    

  await saucedemoproduct.clickLastProduct();
  await saucedemoproduct.clickAddToCart();
  await expect(saucedemoproduct.carticon).toHaveText('1');
  await saucedemoproduct.clickcarticon();
  await saucedemoproduct.checkoutpage();
  await saucedemoproduct.backToProducts();
  

}); 