class Saucedemoproduct {
  constructor(page) {
    this.page = page;
    this.productTitle = page.getByText('Products');
    this.lastproduct = page.locator('//div[@class="inventory_list"]/div[6]/div[2]//a');
    this.backtoproducts = page.getByRole('button', { name: 'Back to products' });
    this.addtocart = page.getByRole('button', { name: 'Add to cart' });
    this.removefromcart = page.getByRole('button', { name: 'Remove' });
    this.carticon = page.locator('//a[@class="shopping_cart_link"]/span');
    this.productprice = page.locator('.inventory_item_price');
    this.checkoutbtn = page.getByRole('button', { name: 'Checkout' });
    this.checkoutpagelabel = page.getByText('Checkout: Your Information');
    this.firstnameinput = page.locator('#first-name');
    this.lastnameinput = page.locator('#last-name');
    this.postalcodeinput = page.locator('#postal-code');
    this.continuebtn = page.getByRole('button', { name: 'Continue' });
    this.cancelbtn = page.getByRole('button', { name: 'Cancel' });
  }

  async verifyProductsPage() {
    await this.productTitle.first().waitFor({ state: 'visible' });
  }
  async clickLastProduct() {
    await this.lastproduct.click();
    await this.backtoproducts.waitFor({ state: 'visible' });
  } 
  async clickAddToCart() {
    await this.addtocart.click();
    await this.removefromcart.waitFor({ state: 'visible' });
    let removeBtnText = await this.removefromcart.textContent();
    if (removeBtnText.trim() === 'Remove') {
      console.log('Product added to cart successfully');
    } else {
      console.log('Failed to add product to cart');
    }
    let itemsInCart = await this.carticon.textContent();
  }
  async clickcarticon() {
    await this.carticon.click();
    let cartprice = await this.productprice.textContent();
    console.log('Price of the product in cart: ' + cartprice);
    await this.checkoutbtn.click();
  }
  async checkoutpage() {
    await this.checkoutpagelabel.waitFor({ state: 'visible' });
    await this.firstnameinput.fill('John');
    await this.lastnameinput.fill('Doe');
    await this.postalcodeinput.fill('12345');
    await this.continuebtn.click();
  }
  async backToProducts() {
    await this.cancelbtn.click();
    await this.productTitle.first().waitFor({ state: 'visible' });
    await this.page.selectOption('#product_sort_container', 'lohi');
  }
}
module.exports = Saucedemoproduct; 