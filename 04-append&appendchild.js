/* const container = document.createElement('div')
container.setAttribute('class', 'container')
document.body.appendChild(container)
 
const card = document.createElement('div')
card.setAttribute('class', 'card')

// you can add class like this
card.classList.add('card')

card.id = 'card'

container.appendChild(card)

// cloneNode() is used to clone 
// container.appendChild(card.cloneNode())

for (let i = 0; i <= 100; i++){
  const newcard = card.cloneNode()
  newcard.innerText = i
  container.appendChild(newcard)

}

// append vs appendchild 

// in append we can append string element variable , and mulity value can be append(add) but return value is undefine 

// in appendChild we can only return element and variable




 */