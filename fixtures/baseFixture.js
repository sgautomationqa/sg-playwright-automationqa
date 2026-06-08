// @ts-check
const base = require('@playwright/test');

const RegisterUser = require('../pages/RegisterUser');
const LoginUser = require('../pages/LoginUser');
const ContactusformPage = require('../pages/ContactusformPage');
const ProductPage = require('../pages/ProductPage');
const generateUser = require('../utils/userFactory');

/**
 * @typedef {Object} CustomFixtures
 * @property {RegisterUser} registeruser
 * @property {LoginUser} loginuser
 * @property {ContactusformPage} contactusformpage
 * @property {ProductPage} productpage
 * @property {{ name: string, email: string, password: string }} user
 */

/** @type {import('@playwright/test').TestType<import('@playwright/test').PlaywrightTestArgs & import('@playwright/test').PlaywrightTestOptions & CustomFixtures, import('@playwright/test').PlaywrightWorkerArgs & import('@playwright/test').PlaywrightWorkerOptions>} */
const test = base.test.extend({

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
    },

    productpage: async ({ page }, use) => {
        await use(new ProductPage(page));
    }

});

exports.test = test;
