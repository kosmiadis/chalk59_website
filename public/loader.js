const loader = document.querySelector('.onload_loader')

window.addEventListener('load', e => {
    document.body.querySelector("*").style.display = 'none'
    loader.style.display = 'none'
})

window.addEventListener('DOMContentLoaded', e => {
    document.body.querySelector("*").style.display = 'initial'
    loader.style.display = 'none'
})