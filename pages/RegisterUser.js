const { expect } = require('@playwright/test');
class RegisterUser{
    
    constructor(page){
        this.page = page;
        this.HomepageTitle = page.locator("//a[contains(text(),'Home')]");
        this.loginLink = page.getByRole('link', { name: 'Signup / Login' });
        this.NewSignUpText = page.locator("//h2[contains(text(),'New User Signup!')]");
        this.nameInput = page.locator('input[name="name"]');
        this.emailInput = page.locator('input[data-qa="signup-email"]');
        this.signupButton = page.locator('button[data-qa="signup-button"]');
        this.enterAccountInfoText = page.locator("//b[contains(text(),'Enter Account Information')]");
        this.title = page.locator("//input[@value='Mr']");
        this.password = page.locator('input[data-qa="password"]');
        this.days = page.locator("//select[@id='days']");
        this.months = page.locator("//select[@id='months']");
        this.years = page.locator("//select[@id='years']");
        this.newsletterCheckbox = page.locator('input[name="newsletter"]');
        this.offersCheckbox = page.locator('input[name="optin"]');
        this.firstNameInput = page.locator('input[data-qa="first_name"]');
        this.lastNameInput = page.locator('input[data-qa="last_name"]');
        this.companyInput = page.locator('input[data-qa="company"]');
        this.address1Input = page.locator('input[data-qa="address"]');
        this.address2Input = page.locator('input[data-qa="address2"]');
        this.countrySelect = page.locator('select[data-qa="country"]');
        this.stateInput = page.locator('input[data-qa="state"]');
        this.cityInput = page.locator('input[data-qa="city"]');
        this.zipcodeInput = page.locator('input[data-qa="zipcode"]');
        this.mobileNumberInput = page.locator('input[data-qa="mobile_number"]');
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
        this.accountCreatedText = page.getByText('Account Created!');
        this.continueButton = page.locator('a[data-qa="continue-button"]');
        this.loggedInAsText = page.locator("//a[contains(text(),'Logged in as')]");
        this.loggedInUsername = page.locator("//a[contains(text(),'Logged in as')]/b");
        this.deleteaccountLink = page.getByRole('link', { name: 'Delete Account' });
        this.accountDeletedText = page.getByText('Account Deleted!');

    }

    async validateHomepageTitle(){
        await expect(this.HomepageTitle).toBeVisible();
    }

    async clickLoginLink(){
        await this.loginLink.click();
    }
    async validateNewSignUpText(){
        await expect(this.NewSignUpText).toBeVisible();
    }   

    async signup(name, email){
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.signupButton.click();    
    }
    async validateAccountInfoPage(){
        await expect(this.enterAccountInfoText).toBeVisible();  
}
    async enteraccinfo(){
        await this.title.check();
        await this.password.fill('automationexercisepassword');
        await this.days.selectOption('10');
        await this.months.selectOption('March');
        await this.years.selectOption('2000');
        await this.newsletterCheckbox.check();
        await this.offersCheckbox.check();
    }
    async addressinfo(){
        await this.firstNameInput.fill('John');
        await this.lastNameInput.fill('Doe');
        await this.companyInput.fill('Test Company');
        await this.address1Input.fill('123 Main St');
        await this.address2Input.fill('Apt 4B');
        await this.countrySelect.selectOption('United States');
        await this.stateInput.fill('California');
        await this.cityInput.fill('Los Angeles');
        await this.zipcodeInput.fill('90001');
        await this.mobileNumberInput.fill('1234567890');
    }
    async clickCreateAccountButton(){
        await this.createAccountButton.click();
    }
    async validateAccountCreated(){
        await expect(this.accountCreatedText).toBeVisible();
    }
    async clickContinueButton(){
        await this.continueButton.click();
    }
    async validateLoggedInAsText(){
        await expect(this.loggedInAsText).toBeVisible();
    }
    async validateLoggedInUsername(name){
        await expect(this.loggedInUsername).toBeVisible();
        await expect(this.loggedInUsername).toHaveText(name);
    }
    async deleteAccount(){
        await this.deleteaccountLink.click();
    }
    async validateAccountDeleted(){
        await expect(this.accountDeletedText).toBeVisible();
        await this.continueButton.click();
    }
}

module.exports = RegisterUser;