let menuToggle = document.querySelector('.menu-toggle')
let navList = document.querySelector('.nav__list')
let coverElem = document.querySelector('.cover')
menuToggle.addEventListener('click',() => {
    menuToggle.classList.add('open')
    navList.classList.add('open')
    coverElem.classList.add('fade')
})
coverElem.addEventListener('click' , () => {
    menuToggle.classList.remove('open')
    navList.classList.remove('open')
    coverElem.classList.remove('fade')
})