const hero_p = document.querySelector('.hero_welcome')
const hero_img = document.querySelector('#hero_logo')
const hero_btn = document.querySelector('.hero_btn')
const summary = document.querySelector('.summary')    


hero_btn.addEventListener('click', e => {
    summary.scrollIntoView({behavior: 'smooth'})
})

window.addEventListener('DOMContentLoaded', e => {
    
})