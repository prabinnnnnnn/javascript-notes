function createUser(firstName,age) {  // if property and set value name are same you can set property as set value
  const user = {
    firstName,
    age,
    getUserBirthYear() {
      new Date().getFullYear() - this.age
    }
  }

  return user
}

const user1 = createUser('Prabin', 18)
const user2 = createUser('Rabin', 21)
console.log(user1)
console.log(user2)