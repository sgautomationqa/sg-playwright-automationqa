// @ts-check
const { test } = require('../fixtures/baseFixture');

test('Validate product page', async ({ productpage }) => {
    await productpage.page.goto('https://automationexercise.com', {
        waitUntil: 'domcontentloaded',
    });
    // await productpage.clickProductsLink();
    // await productpage.validateProductPage();
    // await productpage.validateProductsList();
    // await productpage.clickViewProduct();
    // await productpage.validateProductDetailUrl();
    await productpage.clickProductsLink();
    await productpage.searchProduct('Tops'); 
    await productpage.clickAddToCart();
    await productpage.validateCartModalPopup();

});
