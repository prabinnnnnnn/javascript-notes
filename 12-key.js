// key press and key down are similer but keypress is run when down and up

/* window.addEventListener('keypress', (e) => {
  console.log(e.key)
  console.log(e.code)
}) */


/* window.addEventListener('keydown', (e) => {
  console.log(e.key)
  console.log(e.code)
}) */
  

// when you up the key show value
/* window.addEventListener('keyup', (e) => {
  console.log(e.key)
  console.log(e.code)

})*/



/* const container = document.querySelector('.container')
const card = document.querySelector('.card')



let count = 1

window.addEventListener('keydown', (key) => {

  console.log(key.key)
  if (key.key === 'Enter') {
    const newCard = document.createElement('div')
    // const newCard = card.cloneNode()
    newCard.classList.add('card')
    container.append(newCard)
    newCard.innerText = count++
  }
  else {
    return
  }
  


})
card.addEventListener('click', () => {

  // const newCard = document.createElement('div')
  const newCard = card.cloneNode()
  newCard.classList.add('card')
  container.append(newCard)
  newCard.innerText = count++

}) */


