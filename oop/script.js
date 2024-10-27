//OOP is called object oriented programming 
/* 

#Encapsulation
#Abstraction
#innheritance
#polymorphisim

*/

// Encapsulation bhanya ko xuttai variables or data haru lai eak thau ma rakhanu lai Encapsulation vhanincha
// combining data and the methods that operate on it into one unit
// Example

/* const obj = {
  userName: 'Prabin',
  userAge: 18
}

function getUserBirthYear(age) {
  return new Date().getFullYear - age
} */

// makeing complex and hide the data.
// this key word is used in a scope when a inner fnc want to use outer fnc variabes or data etc.
  
/* 
  const obj = {
  userName: 'Prabin',
  userAge: 18,
  // getUserBirthYear:function() {
  // return new Date().getFullYear() - this.userAge
  // }
  getUserBirthYear() {
  return new Date().getFullYear() - this.userAge
  }
}
*/


//#Abstraction
// programmer hides all but the relevant data about an object in order to reduce complexity and increase efficiency


/* const obj = {
  userName: 'Prabin',
  userAge: 18
}

function getUserBirthYear(age) {
  return new Date().getFullYear - age
} */

