const { test } = require('../fixtures/baseFixture');

test('Fill out contact us form', async ({ contactusformpage }) => {
    await contactusformpage.page.goto('https://automationexercise.com', {
        waitUntil: 'domcontentloaded',
    });
    await contactusformpage.clickContactUsLink();
    await contactusformpage.fillContactUsForm();
    await contactusformpage.uploadFile('ContactUsForm.txt');
    await contactusformpage.clickSubmitButton();
    await contactusformpage.validateSuccessMessage();
});