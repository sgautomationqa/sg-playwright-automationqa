const {expect} = require('@playwright/test');
class LoginUser{
    constructor(page){
        this.page = page;
        this.emailInput = page.locator('input[data-qa="login-email"]');
        this.passwordInput = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.locator('button[data-qa="login-button"]');
        this.loginlink = page.getByRole('link', { name: 'Signup / Login' });


        
    }
    async loginnewuser(email, password){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    async clickLoginLink(){
        await this.loginlink.click();
    }
}

module.exports = LoginUser;