async function makeReq(params) {
  const responce = await fetch('https://dummyjson.com/users')
  responce.json().then(data => console.log(data.users))
}

makeReq()