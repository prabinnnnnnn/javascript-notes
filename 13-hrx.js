/* const makeHttpsRequest = () => {
  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  xhr.addEventListener('load',() => {
    console.log(xhr.response)
  })

  xhr.open('GET','https://dummyjson.com/users')
  xhr.send()
}
*/


makeHttpsRequest() 

const makeHttpsRequest = (methord,url,callbackFnc) => {
  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  xhr.addEventListener('load',() => {
    // console.log(xhr.response)
    callbackFnc(xhr.response)
  })

  xhr.open(methord,url)
  xhr.send()
}

makeHttpsRequest('GET','https://dummyjson.com/users',(data)=> console.log(data.users[0]))