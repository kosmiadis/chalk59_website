const hamburger = document.querySelector('#hamburger')
const close = document.querySelector('#close')
const menu = document.querySelector('.links')

window.addEventListener('load', e => {
    if (window.innerWidth < 769) {
        menu.style.display = 'none'
    }
})

window.addEventListener('resize', e => {
    if (window.innerWidth > 769) {
        menu.style.display = 'flex'
    }
    else {
        menu.style.display = 'none'
    }
})

hamburger.addEventListener('click', e => {
    if (menu.style.display === 'none') {
        menu.style.display = 'flex'
    }
})

close.addEventListener('click', e => {
    menu.style.display = 'none'
})