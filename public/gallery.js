const all_images = document.querySelectorAll('.gallery_img')
const allBtn = document.querySelector('#all')
const generalBtn = document.querySelector('#general_btn')
const candlesBtn = document.querySelector('#candles_btn')
const decorationsBtn = document.querySelector('#decorations_btn')
const allButtons = document.querySelectorAll('.filter')

//images
const generalImages = document.querySelectorAll('.general_category')
const decorationsImages = document.querySelectorAll('.decorations_category')
const candlesImages = document.querySelectorAll('.candles_category')

let indexFilter = allButtons[0]

//removes all images from gallery
const clearGallery = () => {
    all_images.forEach(img => {
        img.style.display = 'none'
    })
}
//displays images for a specific category given by the user by pressing the corresponding filter.
const displayCategory = () => {
    clearGallery()
    all_images.forEach(img => {
        if (img.classList.contains(`${indexFilter.id}_category`)) {
            img.style.display = 'block'
        }
    })
}

//clear styling for all filter buttons.
const clearFilters = () => {
    allButtons.forEach(btn => {
        btn.style.backgroundColor = '#fff'
        btn.style.color = '#333'
    })
}
//update the styling for the index filter button.
const updateFilters = () => {
    clearFilters()
    indexFilter.style.backgroundColor = '#333'
    indexFilter.style.color = '#fff'
}

//updates the gallery with the given options.
const updateGallery = () => {
    updateFilters()
    displayCategory()
}

allButtons.forEach(btn => {
    btn.addEventListener('click', e => { 
        indexFilter = allButtons[e.target.classList[1]]
        updateGallery()
    })
})

window.addEventListener('load', e => {
    updateGallery()
})