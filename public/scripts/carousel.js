const carousel = document.querySelector('.carousel')
const inner = document.querySelector('.inner')
const cards = document.querySelectorAll('.service')

const prevBtn = document.querySelector('#prev_btn')
const nextBtn = document.querySelector('#next_btn')
let index = 0;

const clearCarousel = () => {
    cards.forEach(card => {
        card.style.display = 'none'
    })
}

const updateCarousel = () => {
    clearCarousel()
    cards[index].style.display = 'flex'
}

window.addEventListener('load', e => {
    updateCarousel()
})

nextBtn.addEventListener('click', e => {
    if (index === cards.length-1) {
        index = 0;
    }
    else if (index >= 0) {
        index++
    }
    updateCarousel()
})

prevBtn.addEventListener('click', e => {
    if (index == 0) {
        index = cards.length-1
    }
    else if (index <= cards.length-1) {
        index--
    }
    updateCarousel()
})





