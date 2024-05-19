const photo_carousel = document.querySelector('.photo_carousel')
const photos = document.querySelectorAll('div.photo')

let index = 0;

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