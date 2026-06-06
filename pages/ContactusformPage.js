const { expect } = require('@playwright/test');
const path = require('path');
class ContactusformPage{
    constructor(page){
        this.page = page;
        this.contactUsLink = page.getByRole('link', { name: 'Contact us' });
        this.nameInput = page.locator('input[name="name"]');
        this.emailInput = page.locator('input[name="email"]');
        this.subjectInput = page.locator('input[name="subject"]');
        this.messageInput = page.locator('textarea[name="message"]');
        this.submitButton = page.locator('input[data-qa="submit-button"]');
        this.fileInput = page.locator('input[name="upload_file"]');
        this.successMessage = page.locator('//div[@class="status alert alert-success"]');
    }
    async clickContactUsLink(){
        await this.contactUsLink.click();
        await this.page.waitForLoadState('domcontentloaded');
        await this.nameInput.waitFor({ state: 'visible' });
    }
    async fillContactUsForm(){
        await this.nameInput.fill('John Doe');
        await this.emailInput.fill('john.doe@example.com');
        await this.subjectInput.fill('Test Subject');
        await this.messageInput.fill('Test Message');
        
    }
    async uploadFile(fileName){
        const filePath = path.join(__dirname, '../testdata', fileName);
        await this.fileInput.setInputFiles(filePath);
    }
    async clickSubmitButton(){
        await this.submitButton.scrollIntoViewIfNeeded();

        await Promise.all([
            this.page.waitForEvent('dialog').then(async (dialog) => {
                await dialog.accept();
            }),
            this.submitButton.click(),
        ]);

        await this.successMessage.waitFor({ state: 'visible' });
    }
    async validateSuccessMessage(){
        await expect(this.successMessage).toBeVisible();
        await expect(this.successMessage).toHaveText('Success! Your details have been submitted successfully.');
    }
}
module.exports = ContactusformPage;