const photo_carousel = document.querySelector('.photo_carousel')
const photos = document.querySelectorAll('div.photo')
const down_arrow = document.querySelector('.carousel_down_arrow')

let index = 0;

down_arrow.addEventListener('click', e => {
    window.scrollTo(0, 500)
})

const clearHeroCarousel = () => {
    photos.forEach(photo => {
        photo.style.display = 'none'
    })
}

const updateHeroCarousel = () => {
    clearHeroCarousel()
    photos[index].style.display = 'block'
}

window.addEventListener('load', e => {
    updateHeroCarousel()
})

setInterval(() => {
        if (index === photos.length-1) {
            index = 0;
        }
        else if (index >= 0) {
            index++
        }    
    updateHeroCarousel()
}, 5000)