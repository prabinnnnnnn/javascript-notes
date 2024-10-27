// we can set atributes
/* const paragraph = document.querySelector('p')
paragraph.setAttribute('class', 'Frontend-dev')
// and get atributes
console.log(paragraph.getAttribute('class'))



const p = document.querySelector('.Frontend-dev') */

/* p.style.fontWeight = '700'
p.style.fontSize = '60px'
p.style.color = 'teal'
p.style.fontFamily = 'kajiro'; */

// we can css style
/* p.style.cssText = `
    font-weight: 600;
    font-size: 60px;
    font-family: 'kajiro';
    color: pink;
` */

// we can add style by adding style in css but my css has declear in css file

// p.classList.add('Frontend-dev')


// p.classList.remove('Frontend-dev')
// if there is no class it will add if there is it will remove it we have to classfify it is class or id
// p.classList.toggle('.Frontend-dev')

/*   <style>
    .Frontend-dev{
      font-weight: 600;
      font-size: 60px;
      font-family: 'kajiro';
      color: teal;
    }
  </style> */


/* p.addEventListener('mouseenter', () => {
    p.classList.remove('Frontend-dev')
})

p.addEventListener('mouseleave', () => {
    p.classList.add('Frontend-dev')
}) */

/* const buton = document.querySelector('button')

let isChange = false

buton.addEventListener('click', () => {
  if (isChange === false) {
    p.style.cssText = `
    font-weight: 600;
    font-size: 60px;
    font-family: 'kajiro';
    color: teal;
    `
    buton.innerText = 'isChange'
    isChange = true
  }
  else {
    p.style.cssText = `
    font-weight: 600;
    font-size: 60px;
    font-family: 'kajiro';
    color: pink;
    `
    buton.innerText = 'Change'
    isChange = false
  }

}) */