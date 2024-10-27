class getUser{

  constructor(fristName, LastName, age) {
    this.fristName = fristName
    this.LastName = LastName
    this.age = age
  }

  // static block
  static {
    this.fristName = 'Tango'
    this.lastName = 'Mango'
    this.age = 18
    this.getBirthYear = function () {
      return new Date().getFullYear() - this.age
    }
  }

  // we can't use object value 
  // static is only acess when we call getUser.sonthing it is only acess by getUser

  static getFullName() {
    // firstName and LastName are from the static block "tango mango"
    return this.fristName + ' ' + this.lastName
  }

  getYourAge(birthYear) {
    return new Date().getFullYear() - birthYear 
  }
}



const user2 = getUser.getFullName() //   //  we don't need new keyword 
