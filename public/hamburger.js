const hamburger = document.querySelector('#hamburger')
const close = document.querySelector('#close')
const menu = document.querySelector('.links')

window.addEventListener('load', e => {
    if (window.innerWidth < 769) {
        menu.style.display = 'flex'
    }
})

window.addEventListener('resize', e => {
    menu.style.right = '-200px'
})

hamburger.addEventListener('click', e => {
    if (menu.style.right !== '0px') {
        menu.style.right = '0px'
    }
})

close.addEventListener('click', e => {
    menu.style.right = '-200px'
})