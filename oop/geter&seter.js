class setUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  
  get fullName() {
    return `${this.firstName } ${this.lastName}`
  }

  // fullname return value will be x
  set fullName(x) {
    const [firstName, lastName] = x.split(' ')
    this.firstName = firstName
    this.lastName = lastName
  }

}


const user1 = new setUser('prabin', 'moktan', 19)


