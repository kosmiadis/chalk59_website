const hamburger = document.querySelector('#hamburger')
const close = document.querySelector('#close')
const menu = document.querySelector('.links')

window.addEventListener('load', e => {
    if (window.innerWidth < 769) {
        menu.style.display = 'flex'
    }
})

window.addEventListener('resize', e => {
    if (window.innerWidth > 769) {
        menu.style.display = 'flex'
        menu.style.right = '0'
    }
    else {
        menu.style.right = '-200px'
        setTimeout(() => {
            menu.style.display = 'none'
        }, 200) 
    }
})

hamburger.addEventListener('click', e => {
    menu.style.display = 'flex'

    setTimeout(() => {
        menu.style.right = '0px'
    }, 100)
})

close.addEventListener('click', e => {
    menu.style.right = '-200px'
    setTimeout(() => {
        menu.style.display = 'none'
    }, 200)
})