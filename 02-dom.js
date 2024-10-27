// THE INNERHTML IS USED TO USE HTML ELEMENTS FROM JAVASCRIPT
// const text = document.querySelector('.para').innerHTML = '<b>prabin</b>'  // prabin in bold
// const text = document.querySelector('.para').innerText = '<b>prabin</b>'
// const text = document.querySelector('.para').textContent = '<b>prabin</b>'

// console.log(text)

// console.log(document.querySelector('.para').innerText = text)


// WE CAN'T USE HTML ELEMENT IN TEXTCONTENT
// console.log(document.querySelector('.para').textContent = text)

// we can acess the inner of the index like this

// const li = document.querySelector('ul li:nth-of-type(5)').innerHTML = 'THREE.JS'

// remove bullets from js
/* const ul = document.querySelector('ul')
ul.style.listStyleType = 'none'


// we can acess the inner of the index like this
ul.children[4].style.color = 'blue'
const threejs = ul.children[4].innerHTML = 'THREE JS' */


/*  // i create ul
const ul = document.createElement('ul')
// i set a class having Frontend
ul.setAttribute('class', 'Frontend')
// append the ul in body (add)
document.body.appendChild(ul)
ul.style.display = 'none'


function addLanguage(language) {
  const li = document.createElement('li')
  li.innerText = language
  li.style.listStyle = 'square'
  li.style.color = 'darkblue'
  document.querySelector('.Frontend').appendChild(li)
}


addLanguage('HYPETEXT MARKUP LANGUAGE')
addLanguage('CASCADING STYLE SHEETS')
addLanguage('JAVA SCRIPT')
addLanguage('REACT')

let isDisplay = false

const visiable = document.querySelector('button')
visiable.innerText = 'GET LANGUAGE'
visiable.addEventListener('click', () => {
  if (isDisplay == false) {
    isDisplay = true
    ul.style.display = 'block'
  }
  else {
    ul.style.display = 'none'
    isDisplay = false
  }
})
console.log(visiable) 

const lii = document.querySelector('ul > li:nth-child(3)')

console.log(lii.innerHTML) */


/* function getrandom(num) {
  let sum = '#'
  const ramdom = Math.floor(Math.random() * 12345678).toString(16).toLocaleUpperCase()
  return sum += ramdom
}


document.body.style.backgroundColor = getrandom() */






