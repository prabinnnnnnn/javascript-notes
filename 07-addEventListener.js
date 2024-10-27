const container = document.querySelector('.container')
const card = document.querySelector('.card')



let count = 1
card.addEventListener('click', () => {

  // const newCard = card.cloneNode()
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  container.append(newCard)
  // newCard.remove(count)
  newCard.innerText = count++
/*   newCard.addEventListener('click', (e) => {
    e.target.remove()
  }) */
})

// event Delegation
/* container.addEventListener('click', (e) => {
  e.target.remove()
}) */




