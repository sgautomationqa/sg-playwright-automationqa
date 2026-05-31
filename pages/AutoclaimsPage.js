
class AutoclaimsPage {
  constructor(page) {
    this.page = page;
    this.newuserbtn = page.locator('//button[@title="New User?"]');
    this.signupheading = page.getByText('Sign Up');
  }
  async clickNewUser() {
    await this.newuserbtn.click();
  }

  async verifySignUpHeading() {
    await this.signupheading.toBeVisible();
    
   
  }
}
module.exports = AutoclaimsPage;