const base = require('@playwright/test');

const RegisterUser = require('../pages/RegisterUser');

const LoginUser = require('../pages/LoginUser');

const ContactusformPage = require('../pages/ContactusformPage');
const generateUser = require('../utils/userFactory');

exports.test = base.test.extend({

    registeruser: async ({ page }, use) => {

        await use(new RegisterUser(page));
    },

    loginuser: async ({ page }, use) => {

        await use(new LoginUser(page));
    },

    user: async ({}, use) => {

        const user = generateUser();

        await use(user);
    },

    contactusformpage: async ({ page }, use) => {
        
        await use(new ContactusformPage(page));
    }

});