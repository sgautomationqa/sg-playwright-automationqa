const base = require('@playwright/test');
const AmazonPage = require('../pages/AmazonPage');

exports.test = base.test.extend({
  amazonPage: async ({ page }, use) => {
    const amazonPage = new AmazonPage(page);
    await use(amazonPage);
  },
});