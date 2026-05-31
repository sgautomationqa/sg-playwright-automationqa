const  base = require('@playwright/test');
const Saucedemologin = require('../pages/Saucedemologin');
const Saucedemoproduct = require('../pages/Saucedemoproduct');

exports.test = base.test.extend({
  saucedemologin: async ({ page }, use) => {
    const saucedemologin = new Saucedemologin(page);
    await use(saucedemologin);
  },
  saucedemoproduct: async ({ page }, use) => {
    const saucedemoproduct = new Saucedemoproduct(page);
    await use(saucedemoproduct);
  } 
});