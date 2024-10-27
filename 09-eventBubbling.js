/* const parent = document.querySelector('.parent')
const child = document.querySelector('.child')
const grandChild = document.querySelector('.grandChild')

parent.addEventListener('click', (e) => {
  e.stopPropagation()
  console.log('parent')
})

child.addEventListener('click', (e) => {
  e.stopPropagation()
  console.log('child')
})

grandChild.addEventListener('click', (e) => {
  e.stopPropagation()
  console.log('grand child')
})

// bubbling
// if you click grandchild || grandchild => child => parent => body => document => window
// if you click child || child => parent => body => document => window
// if you click parent || parent => body => document => window
// IF YOU USE e.stopPropagation() is stop the bubbling 

// capturing is the revers form of bubbling

// if you click grandchild || window => document => body => parent => child => grandchild
// if you click child || window => document => body => parent => child
// if you click parent || window => document => body =>
// once: true is used to run one time
 */