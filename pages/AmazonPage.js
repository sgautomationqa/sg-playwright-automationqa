class AmazonPage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('#twotabsearchtextbox');
    this.searchBtn = page.locator('#nav-search-submit-button');
    this.results = page.locator('div.s-main-slot');
    this.firstProduct = page.locator('//div[@data-component-type="s-search-result"][1]//div[@data-cy="title-recipe"][1]/a/h2')
  }
  async goToAmazon() {
    await this.page.goto('https://www.amazon.in');
  }

  async searchProduct(product) {
    await this.searchBox.fill(product);
    await this.searchBtn.click();
  }

  async verifyResults() {
    await this.results.waitFor({ state: 'visible' });
  }

  async clickFirstProduct() {
    await this.firstProduct.click();
  }
}

module.exports = AmazonPage;