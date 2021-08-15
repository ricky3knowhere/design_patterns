namespace Singleton {
  // Base User Class
  class User {
    private static instance: User;
    name: string;
    username: string;
    password: string;
    age: number;
    isAdmin: boolean;

    constructor() {
      this.name = "name";
      this.username = "username";
      this.password = "password";
      this.age = 23;
      this.isAdmin = true;
    }

    // Create Itself Instantiation
    static getInstance(): User {
      if (!User.instance) {
        User.instance = new User();
      }

      return User.instance;
    }

    getData() {
      return this;
    }
  }

  const user1 = User.getInstance();

  console.log(user1.getData());

  const user2 = User.getInstance();

  console.log(user2.getData());

  console.log(user1 === user2);
}
