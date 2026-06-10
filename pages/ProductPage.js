const { expect } = require('@playwright/test');

class ProductPage {
    constructor(page) {
        this.page = page;
        this.productsLink = page.getByRole('link', { name: 'Products' });
        this.productTitle = page.locator('//h2[contains(text(),"All Products")]');
        this.searchProductInput = page.locator('input[id="search_product"]');
        this.searchProductBtn = page.locator('button[id="submit_search"]');
        this.productList = page.locator('//div[@class="productinfo text-center"]/p');
        this.viewProductBtn = page.locator('//div[@class="productinfo text-center"]/following::div[@class="choose"]/ul/li/a');
        this.searchProductTiltle = page.locator('//h2[contains(text(),"Searched Products")]');
        this.productImage = page.locator('//div[@class="product-image-wrapper"]');
        this.overlayaddtocartBtn = page.locator('//div[@class="product-overlay"]/div//a[contains(text(),"Add to cart")]');
        this.cartmodalpopup = page.locator('//div[@id="cartModal"]');
        this.continueShoppingBtn = page.getByRole('button', { name: 'Continue Shopping' });
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
        const forproductList = await this.productList.allTextContents();
        console.log(forproductList);
    }
    async clickViewProduct() {
        const forviewProductbtn = this.viewProductBtn;
        console.log('Number of products: ' + (await forviewProductbtn.count()));
        await forviewProductbtn.nth(0).click();
    }
    async validateProductDetailUrl() {
        await expect(this.page).toHaveURL(/product_details/);
    }
    async searchProduct(productName) {
        await this.searchProductInput.fill(productName);
        await this.searchProductBtn.click();
        await this.page.waitForLoadState('domcontentloaded');
        await this.searchProductTiltle.waitFor({ state: 'visible' });
        const searchResults = await this.productList.allTextContents();
        console.log('Search results for "' + productName + '":', searchResults);
        console.log('Number of search results: ' + (await searchResults.length));
    }
    async clickAddToCart() {
        await this.productImage.first().scrollIntoViewIfNeeded();
        await this.productImage.first().hover();
        await this.overlayaddtocartBtn.first().waitFor({ state: 'visible' });
        await this.overlayaddtocartBtn.first().click();
    }

        async validateCartModalPopup() {
        await expect(this.cartmodalpopup).toBeVisible();
        await this.continueShoppingBtn.click();
        await expect(this.cartmodalpopup).not.toBeVisible();

        }


}

module.exports = ProductPage;
