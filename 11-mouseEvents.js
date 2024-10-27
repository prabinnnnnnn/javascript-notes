/* const body = document.querySelector('body')


const container = document.createElement('div')
container.classList.add('container')
body.append(container)

const cursor = document.createElement('div')
cursor.classList.add('cursor')
container.append(cursor)

const cursorChild = document.createElement('div')
cursorChild.classList.add('cursor-child')
container.append(cursorChild)

const cursorChild1 = document.createElement('div')
cursorChild1.classList.add('cursor-child1')
container.append(cursorChild1)

const cursorChild2 = document.createElement('div')
cursorChild2.classList.add('cursor-child2')
container.append(cursorChild2)

const cursorChild3 = document.createElement('div')
cursorChild3.classList.add('cursor-child3')
container.append(cursorChild3)




container.addEventListener('mousemove', (move) => {
    gsap.to(cursor,{
        x: move.x,
        y: move.y,
        duration:0.2,
        ease: "bounce.out"
        
    })
//   cursor.style.left = e.x + 'px'
//   cursor.style.top = e.y + 'px' 
})

container.addEventListener('mousemove', (move) => {
    gsap.to(cursorChild,{
        x: move.x,
        y: move.y,
      duration: 0.3,
      ease: "bounce.out"  
        

    })
})

container.addEventListener('mousemove', (move) => {
    gsap.to(cursorChild1,{
        x: move.x,
        y: move.y,
        duration:0.4,
        ease: "bounce.out"
        
    })
})

container.addEventListener('mousemove', (move) => {
    gsap.to(cursorChild2,{
        x: move.x,
        y: move.y,
        duration:0.5,
        ease: "bounce.out"
        
    })
})

container.addEventListener('mousemove', (move) => {
    gsap.to(cursorChild3,{
        x: move.x,
        y: move.y,
        duration:0.6,
        ease: "bounce.out"
        
    })
}) */

//mouseenter 
// mouseleave
//mousemove
//pointermove is used in mobile and laptop both to move
// pointerenter
// pointerleave 
// touchstart is used when click from mobile
// touchend is used when click leave from
// touchmove is used in drag up or down
// wheel is used when the mouse wheel is used or in laptop 2finger scroll
// drag is used when you give html element dragable = 'true' 
