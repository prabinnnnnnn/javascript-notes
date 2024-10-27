// this an global fnc hami ley jasley call garcha testko huncha this 

// METHORD (1) WITHOUT CONSTRUCTION

/* function getUserBirthYear() {
  return new Date().getFullYear() - this.age
}

function createUser(firstName, age) { 
  const user = {
    firstName,
    age,
    getUserBirthYear,
  }

  return user
} */

// const user1 = createUser('Prabin', 18)

// this.age cha age ma user1 ley aruguments pass garyo 18 // 2006

// const user2 = createUser('Rabin', 21) 
// 2006

// METHORD (2) WITHOUT CONSTRUCTION

/* function createUser(firstName, age) { 
  const user = {
    firstName,
    age,
    birthYear: createUser.getMethod.getUserBirthYear
  }

  return user
}

createUser.getMethod = {
  getUserBirthYear() {
    return new Date().getFullYear() - this.age
  }
}


const user1 = createUser('Prabin', 18)  //2006
const user2 = createUser('Rabin', 21)   //2003 */


// CONSTRUCTION FUNCTION 

// new keyword is used to create new object 
// in construction fnc we can't use arrow fnc

// the birthYear is polymorphisim it has face but different work

CreateUser.prototype.birthYear = function () {
  return new Date().getFullYear() - this.age
}

CreateUser.prototype.getFullName = function(){
  return this.firstName + this.lastName
}

function CreateUser(firstName, lastName, age) { 
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}


const user1 = new CreateUser('Prabin', 'Moktan', 18)  //2006
const user2 = new CreateUser('Rabin', 'Rai', 21)   //2003


