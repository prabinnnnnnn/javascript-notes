/* function makeHttps(methord, url,callback) {
  const xhr = new XMLHttpRequest()

  xhr.responseType = 'json'

  xhr.addEventListener('load', () => {
    callback(xhr.response)
  })

  xhr.open(methord, url)
  xhr.send()
}

// this callback hell

makeHttps('GET', 'https://dummyjson.com/users', (userData) => {
  console.log(userData) //console.log(userData.users[2].id) user id 
  makeHttps('GET', `https://dummyjson.com/posts`, (userPost) => {
    console.log(userPost)
    makeHttps('GET', `https://dummyjson.com/products`, (userProduct) => {
      console.log(userProduct)
      makeHttps('GET', `https://dummyjson.com/product/1`, (userProduct1) => {
        console.log(userProduct1)
      })
    })
  })
})
 */


// to prevent callback hell promise was introduced


/* function makeHttps(methord, url) {
  const xhr = new XMLHttpRequest()

  xhr.responseType = 'json'

  const promis = new Promise((resolve, reject) => {
    xhr.addEventListener('load', () => {
     resolve(xhr.response)
    })
    xhr.addEventListener('error', () => {
      reject('the promise is rejected')
    })
  })
  
  xhr.open(methord, url)
  xhr.send()

  return promis
}


makeHttps('GET', 'https://dummyjson.com/users')
  .then(userData => userData)
  .then(userAddress => userAddress.users[0].address)
  .then(userCity => console.log(userCity.city))
  .catch(error => console.log(error))
 */



/* function feachingData (url) {
  return fetch(url)
}

feachingData('https://dummyjson.com/users')
  .then((res) => res.json())
  .then(data => console.log(data.users[0].birthDate))
  .catch(err => console.log(err)) */