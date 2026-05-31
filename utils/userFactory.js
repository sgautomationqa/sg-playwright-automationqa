class UserFactory {

  static createUser() {

    const random = Math.floor(Math.random() * 10000);

    return {
      name: `User${random}`,
      email: `user${random}@gmail.com`,
      
    };
  }
}

module.exports = UserFactory;