const resolvBtn = document.querySelector('.resolve-btn')
const rejectBtn = document.querySelector('.reject-btn')

// promise take two parameter resolve,reject you can name anythings ,first parameter take resolve and second reject

const promis = new Promise((resolve,reject) => {
  resolvBtn.addEventListener('click', () => {
    resolve('promise fillfull')
  })

  rejectBtn.addEventListener('click', () => {
    reject('promise reject')
  })
})

//if the promise is resolve the value or data will get in then() then take an call back fnc 
// if the promise is rejected the value or data will get in catch() it also take a call back fnc
// catch is used to handle reject error 


// finally is run in both conditon in resolve and reject 
promis.then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error)
}).finally(() => {
  console.log('finally ')
})