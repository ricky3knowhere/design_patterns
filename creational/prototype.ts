// Base User Class
class User {
  name: string
  username: string
  password: string
  age: number
  isAdmin: boolean
  
  constructor({ name = '', username  = '', password = '', age = 0,isAdmin = false} = {}) {
    this.name = name
    this.username = username
    this.password = password
    this.age = age
    this.isAdmin = isAdmin
  }

  // Cloning Function
  clone(): this {
    const userClone = Object.assign({}, this)

    return userClone
  }
}

const user1 = new User({name: 'mamat basreng', age: 32})
const user2 = user1.clone()
user2.username = 'Tatang rempag'

const user3 = user1.clone()
user3.age = 120

console.log(user1);
console.log('\n');

console.log(user2);
console.log('\n');

console.log(user3);
