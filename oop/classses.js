class getUser{

  #age // # is used to make private 

  constructor(fristName, LastName, age) {
    this.fristName = fristName
    this.LastName = LastName
    this.#age = age
  }

  getBirthYear() {
    return new Date().getFullYear() - this.#age
  }

  getFullName() {
    return this.fristName + ' ' + this.LastName
  }

  getYourAge(birthYear) {
    return new Date().getFullYear() - birthYear 
  }
}


const user1 = new getUser('prabin', 'moktan', 18)

user1.getYourAge(2006) // my age 18
user1.getFullName()// 'prabin moktan'
user1.getBirthYear() // 2006

