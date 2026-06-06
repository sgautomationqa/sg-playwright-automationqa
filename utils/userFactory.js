function generateUser() {

  const random = Math.floor(Math.random() * 10000);

  return {
    name: `User${random}`,
    email: `user${random}@gmail.com`,
    password: 'Test@1234'
  };
}

module.exports = generateUser;