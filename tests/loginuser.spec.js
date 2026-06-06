const { test } = require('../fixtures/baseFixture');

test('Login with email and password', async ({ registeruser, loginuser, user }) => {
    await registeruser.page.goto('http://automationexercise.com');

    await registeruser.clickLoginLink();
    await registeruser.signup(user.name, user.email);
    await registeruser.enteraccinfo(user.password);
    await registeruser.addressinfo();
    await registeruser.clickCreateAccountButton();
    await registeruser.clickContinueButton();

    await registeruser.logout();

    await loginuser.clickLoginLink();
    await loginuser.loginnewuser(user.email, user.password);

    await registeruser.validateLoggedInAsText();
    await registeruser.validateLoggedInUsername(user.name);
});
