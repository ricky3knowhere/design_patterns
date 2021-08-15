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
}

const user1 = new User({name: 'mamat basreng', age: 32})
const user2 = new User({username: 'ucok tabok', password: 'qwarjszkfnsk', isAdmin: true})

console.log(user2);
console.log('\n');

console.log(user1);
