const { expect } = require('@playwright/test');

const { test } = require('../fixtures/baseFixture');
const generateUser = require('../utils/userFactory');



test('Register a new user and validate registration', async ({ registeruser, user}) => {
    await registeruser.page.goto('http://automationexercise.com');
    await registeruser.validateHomepageTitle();
    await registeruser.clickLoginLink();
    await registeruser.validateNewSignUpText();
    // Fill in the registration form
    await registeruser.signup(user.name, user.email);
    console.log(`Registered user: ${user.name} with email: ${user.email}`);
    await registeruser.validateAccountInfoPage();
    //Enter account, address information and create account
    await registeruser.enteraccinfo(user.password);
    await registeruser.addressinfo();
    await registeruser.clickCreateAccountButton();
    await registeruser.validateAccountCreated();
    await registeruser.clickContinueButton();
    await registeruser.validateLoggedInAsText();
    await registeruser.validateLoggedInUsername(user.name);
    //Delete the account and validate deletion
    // await registeruser.deleteAccount();
    // await registeruser.validateAccountDeleted();
});