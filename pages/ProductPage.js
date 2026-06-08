const { expect } = require('@playwright/test');

class ProductPage {
    constructor(page) {
        this.page = page;
        this.productsLink = page.getByRole('link', { name: 'Products' });
        this.productTitle = page.locator('//h2[contains(text(),"All Products")]');
    }

    async clickProductsLink() {
        await this.productsLink.click();
    }

    async validateProductPage() {
        await expect(this.productTitle).toHaveText('All Products');
    }
    async validateProductsList() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.productTitle.waitFor({ state: 'visible' });
        const productList = await this.page.locator('//div[@class="productinfo text-center"]/p').allTextContents();
        console.log(productList);
    }
    async clickViewProduct() {
        const viewProductbtn = await this.page.locator('//div[@class="productinfo text-center"]/following::div[@class="choose"]/ul/li/a');
        const count = await viewProductbtn.count();
        console.log('Number of products: ' + count);
        await viewProductbtn.nth(0).click();
    }
}

module.exports = ProductPage;
