const base = require('@playwright/test');   
const RegisterUser = require('../pages/RegisterUser');  

exports.test = base.test.extend({
  registeruser: async ({ page }, use) => {
    const registeruser = new RegisterUser(page);
    await use(registeruser);
  }
}); 