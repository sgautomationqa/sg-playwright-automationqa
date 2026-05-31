const base = require('@playwright/test');
const AutoclaimsPage = require('../pages/AutoclaimsPage');

exports.test = base.test.extend({
  autoclaimsPage: async ({ page }, use) => {
    const autoclaimsPage = new AutoclaimsPage(page);
    await use(autoclaimsPage);
  },
});