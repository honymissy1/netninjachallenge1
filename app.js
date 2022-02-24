const bar = document.querySelector('.bar');
const navTray = document.querySelector('.nav-tray');
const body = document.querySelector('body')
const overlay = document.querySelector('.overlay')
const content = document.querySelector('.content')
const spanOne = document.querySelector('.first')
const spanTwo = document.querySelector('.second')
const spanThree = document.querySelector('.third')
// const body = document.querySelector('body');


bar.onclick = () =>{
 body.classList.toggle('hiden-scroll')
 navTray.classList.toggle('translate');
 overlay.classList.toggle('block')
 content.classList.toggle('scale')
 spanOne.classList.toggle('one')
 spanTwo.classList.toggle('two')
 spanThree.classList.toggle('three')
}


overlay.addEventListener('click', () =>{
    content.classList.toggle('scale');
    navTray.classList.toggle('translate');
    overlay.classList.toggle('block')
    body.classList.toggle('hiden-scroll')
    spanOne.classList.toggle('one')
    spanTwo.classList.toggle('two')
    spanThree.classList.toggle('three')
})

